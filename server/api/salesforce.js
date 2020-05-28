const router = require("express").Router();
let jsforce = require("jsforce");
let connection = new jsforce.Connection({
  loginUrl: "https://na174.salesforce.com",
});
const { username, password } = require("../../secrets");

router.get("/", async (req, res, next) => {
  try {
    await connection.login(username, password, async (err, ret) => {
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

router.get("/:email/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    await connection.login(username, password, async (err, ret) => {
      if (err) console.log(err);
      await connection
        .sobject("Case")
        .findOne(
          { Id: id },
          [
            "Subject",
            "Id",
            "SuppliedCompany",
            "SuppliedName",
            "SuppliedEmail",
            "IsClosed",
            "IsDeleted",
          ],
          (err, ret) => {
            if (err) res.json(err);
            else {
              let name = ret.SuppliedName;
              let email = ret.SuppliedEmail;
              let company = ret.SuppliedCompany;
              let subject = ret.Subject;
              let caseId = ret.Id;
              let IsClosed = ret.IsClosed;
              let IsDeleted = ret.IsDeleted;
              let obj = {
                caseId,
                subject,
                name,
                email,
                company,
                IsClosed,
                IsDeleted,
              };
              res.json(obj);
            }
          }
        );
    });
  } catch (err) {
    console.log(err);
  }
});

router.get("/:email", async (req, res, next) => {
  try {
    const email = req.params.email;
    await connection.login(username, password, async (err, ret) => {
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
              let subject = current.Subject;
              let caseId = current.Id;
              let IsClosed = current.IsClosed;
              let IsDeleted = current.IsDeleted;
              let obj = {
                caseId,
                name,
                company,
                subject,
                email,
                IsClosed,
                IsDeleted,
              };
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
    await connection.login(username, password, async (err, ret) => {
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
            let subject = ret.Subject;
            let IsClosed = ret.IsClosed;
            let IsDeleted = ret.IsDeleted;
            let obj = {
              caseId,
              name,
              company,
              subject,
              email,
              IsClosed,
              IsDeleted,
            };
            res.json(obj);
          }
        }
      );
    });
  } catch (error) {
    next(error);
  }
});

//CREATE ROUTER.GET FOR GETTING SINGLE CASE BASED ON CASEID

router.post("/caseForm", async (req, res, next) => {
  try {
    let { name, email, company, subject } = req.body;
    await connection.login(username, password, async (err, ret) => {
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
    next(err);
  }
});

router.delete("/:email/:id", async (req, res, next) => {
  try {
    let id = req.params.id;
    await connection.login(username, password, async (err, ret) => {
      if (err) console.log(err);
      await connection.sobject("Case").delete(id, (err, ret) => {
        if (err) console.log(err);
        else console.log("this is ret: ", ret);
      });
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
