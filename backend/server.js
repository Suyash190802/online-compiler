import express from "express";
import cors from "cors";

const app = express();

const PORT = 5000;

// Middleware

app.use(cors());
app.use(express.json());

// Test Route

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Online Compiler Backend is running!"
  });
});

// Execute Code

app.post("/api/execute", (req, res) => {

  const { language, code, input } = req.body;

  console.log("--------------------------------");
  console.log("New execution request");
  console.log("Language:", language);
  console.log("Code:", code);
  console.log("Input:", input);
  console.log("--------------------------------");


  // Validate request

  if (!language) {
    return res.status(400).json({
      success: false,
      error: "Language is required"
    });
  }


  if (!code || !code.trim()) {
    return res.status(400).json({
      success: false,
      error: "Code is required"
    });
  }


  // Temporary response
  // Real execution will be added later

  return res.json({
    success: true,
    status: "success",
    output: "Backend received your code!"
  });
});



// 404 Handler


app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: "Route not found"
  });
});



// Start Server

app.listen(PORT, () => {
  console.log("--------------------------------");
  console.log(`🚀 Backend running on port ${PORT}`);
  console.log(`🌐 http://localhost:${PORT}`);
  console.log("--------------------------------");
});