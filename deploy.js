var client = require("firebase-tools");

client
  .deploy({
    project: "devops-gocd",
    token: process.env.FIREBASE_TOKEN,
    force: true,
    cwd: "./dist",
  })
  .then(function() {
    console.log("Files have been deployed!");
  })
  .catch(function(err) {
    // handle error
  });