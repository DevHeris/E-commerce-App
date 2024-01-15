const express = require("express");

const app = express();

// Route handler
app.get("/", (req, res) => {
  res.send(`
  <div>
      <form method="POST">
            <input name="email" type="email" placeholder="email">
            <input name="password" type="password" placeholder="password">
            <input name="passwordConfirmation" type="password" placeholder="password confirmation">
            <button>Sign Up</button>
      </form>
    </div>
  `);
});

app.post("/", (req, res) => {
  // Get access to email, password and passwordConfirmation from the request body
  req.on("data", (data) => {
    const parsed = data.toString("utf8").split("&");
    const formData = {};
    for (const pair of parsed) {
      const [key, value] = pair.split("=");
      formData[key] = value;
    }
    console.log(formData);
  });
  res.send("Account Created");
});

app.listen(3000, () => {
  console.log("listening");
});
