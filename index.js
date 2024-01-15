const express = require("express");

const app = express();

// Route handler
app.get("/", (req, res) => {
  res.send(`
  <div>
      <form>
            <input type="email" placeholder="email">
            <input type="password" placeholder="password">
            <input type="password" placeholder="password confirmation">
            <button>Sign UP</button>
      </form>
    </div>
  `);
});

app.listen(3000, () => {
  console.log("listening");
});
