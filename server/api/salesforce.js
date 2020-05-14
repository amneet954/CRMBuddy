const router = require("express").Router();
let jsforce = require("jsforce");
let connection = new jsforce.Connection({
  loginUrl: "https://na174.salesforce.com",
});
const { username, password } = require("../../secrets");

router.get("/", (req, res, next) => {
  try {
    connection.login(username, password, async (err, ret) => {
      if (err) console.log(err);
      let shortUrl = ret.url.slice(0, ret.url.indexOf("/id"));
      let begin = shortUrl.lastIndexOf("/") + 1;
      let end = shortUrl.indexOf(".salesforce");
      shortUrl = shortUrl.slice(begin, end).toUpperCase();
      let obj = {
        salesforceInstance: shortUrl,
      };
      res.json(obj);
    });
  } catch (error) {
    next(error);
  }
});

router.get("/:email", async (req, res, next) => {
  try {
    const email = req.params.email;
    connection.login(username, password, async (err, ret) => {
      if (err) console.log(err);
      await connection.sobject("Case").find(
        {
          SuppliedEmail: email,
        },
        (err, ret) => {
          if (err) res.json(err);
          else {
            let arr = [];
            for (let i = 0; i < ret.length; i++) {
              let current = ret[i];
              let name = current.SuppliedName;
              let email = current.SuppliedEmail;
              let company = current.SuppliedCompany;
              let caseId = current.Id;
              let IsClosed = current.IsClosed;
              let IsDeleted = current.IsDeleted;
              let obj = { caseId, name, company, email, IsClosed, IsDeleted };
              arr.push(obj);
            }
            res.json(arr);
          }
        }
      );
    });
  } catch (error) {
    next(error);
  }
});

router.get("/:email/:company", async (req, res, next) => {
  try {
    const email = req.params.email;
    const company = req.params.company;
    connection.login(username, password, async (err, ret) => {
      if (err) console.log(err);
      await connection.sobject("Case").findOne(
        {
          SuppliedCompany: company,
          SuppliedEmail: email,
        },
        (err, ret) => {
          if (err) res.json(err);
          else {
            let name = ret.SuppliedName;
            let email = ret.SuppliedEmail;
            let company = ret.SuppliedCompany;
            let caseId = ret.Id;
            let IsClosed = ret.IsClosed;
            let IsDeleted = ret.IsDeleted;
            let obj = { caseId, name, company, email, IsClosed, IsDeleted };
            res.json(obj);
          }
        }
      );
    });
  } catch (error) {
    next(error);
  }
});

router.post("/caseForm", async (req, res, next) => {
  try {
    let { name, email, company, subject } = req.body;
    connection.login(username, password, async (err, ret) => {
      if (err) console.log(err);
      connection.sobject("Case").create(
        {
          SuppliedName: name,
          SuppliedEmail: email,
          Subject: subject,
          SuppliedCompany: company,
          Origin: "Web",
        },
        (err, ret) => {
          if (err) res.json(err);
          else res.json(ret.success);
        }
      );
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
