const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = 3001;

app.use(cors());

app.get("/api", async (req, res) => {
	const { length = 12, type = "newest", category = 25, page = 1 } = req.query;

	try {
		const response = await axios.get(
			"https://bucket-assignment-vercel.vercel.app/api",
			{
				params: {
					length,
					type,
					category,
					page,
				},
			}
		);
		res.json(response.data);
	} catch (error) {
		console.error("Error fetching data:", error);
		res.status(500).json({ error: "Error fetching data" });
	}
});

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
