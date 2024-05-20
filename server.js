import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import cors from "cors";
// Helper variables to handle __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// Use CORS to allow requests from your Vue.js app
app.use(cors());
// Parse JSON bodies
app.use(express.json());
// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

// Route to serve the resume PDF
app.get("/download-resume", (req, res) => {
  res.sendFile(path.join(__dirname, "src","assets", "resume.pdf"));
});


  
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
