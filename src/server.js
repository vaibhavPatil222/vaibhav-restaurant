const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

// Example API endpoint for login
app.post("/api/login", (req, res) => {
  const { username, password } = req.body;

  // Add your authentication logic here (e.g., check credentials against a database)
  // For simplicity, this example always returns success.
  const isAuthenticated = true;

  if (isAuthenticated) {
    res.json({ success: true, message: "Login successful" });
  } else {
    res.status(401).json({ success: false, message: "Invalid credentials" });
  }
});

// Example API endpoint for feedback submission
app.post("/api/feedback", (req, res) => {
  const { name, email, message } = req.body;

  // Add your logic to store feedback (e.g., save it to a database)
  // For simplicity, this example always returns success.
  const isFeedbackSubmitted = true;

  if (isFeedbackSubmitted) {
    res.json({ success: true, message: "Feedback submitted successfully" });
  } else {
    res
      .status(500)
      .json({ success: false, message: "Failed to submit feedback" });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
