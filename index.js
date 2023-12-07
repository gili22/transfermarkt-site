const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const port = 3000;

// Allow requests from your frontend origin
app.use(cors({ origin: "http://127.0.0.1:3000" }));

app.get("/api/data", async (req, res) => {
  try {
    // Make a request to the third-party API
    const apiResponse = await axios.get(
      "https://transfermarkt-api.vercel.app/players/28003/profile"
    );
    console.log(apiResponse);

    // Send the data from the third-party API to the frontend
    res.json(apiResponse.data);
  } catch (error) {
    console.error(
      "Error fetching data from the third-party API:",
      error.message
    );
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(port, () => {
  console.log(`Backend server is running on http://localhost:${port}`);
});
