import express from "express";
const app = express();
import dbConnect from "./db/db-connect.js";

import articles from "./routes/articles.js";

import notFoundRoute from "./middleware/notFound.js";

app.use(express.json());
app.get("/", (req, res) => {
  res.send("welceom");
});

app.use("/api/articles", articles);
app.use(notFoundRoute);

const port = process.env.PORT || 5000;

const server = async () => {
  try {
    await dbConnect(
      "mongodb+srv://rafayfarrukh:rafay123@cluster0.kpr56.mongodb.net/Blogsium?retryWrites=true&w=majority"
    );
    // will create separate file for keys and port later
    app.listen(port, () => {
      console.log(`server is listening on port ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};
server();
