const express = require("express");
const router = express.Router();
const data = [];
const jsonParser = require("body-parser").json();
/* GET home page. */
router.get("/:slug", (req, res, next) => {
  console.log(req.params.slug);
  if (req.params.slug.includes("data"))
    res.send(data[req.params.slug.replace("_data", "")]);
  else res.sendFile(__dirname.replace("routes", "\\public\\index.html"));
});
router.post("/", jsonParser, (req, res) => {
  if (!req.body || !req.body.questions || !req.body.questions.length > 0) {
    res.send("ERROR");
  }
  const body =
    typeof req.body.questions === "string"
      ? { questions: JSON.parse(req.body.questions) }
      : req.body;
  data.push(body);
  const url = `${data.indexOf(body)}`;
  res.send(`/${url}_quest`);
});

module.exports = router;
