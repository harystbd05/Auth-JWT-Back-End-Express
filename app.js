import express from "express";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import router from "./routes/router.js";

const app = express();

app.use(morgan("tiny"));
app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

app.use("/", router);

app.listen(8080, () => {
  console.log(`Connected to server on port 8080`);
});
