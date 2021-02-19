import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import { localsMiddleware } from "./middlewares.js";
import userRouter from "./routers/userRouter.js";
import videoRouter from "./routers/videoRouter.js";
import globalRouter from "./routers/globalRouter.js";
import routes from "./routes.js";



const app = express();
/*const handleListening = (req, res) => console.log(`listening on http://localhost:${PORT}`);
const handleHome = (req, res) => res.send("Hello from home");
const handleProfile = (req, res) => res.send("You are on my profile");*/

app.set('view engine', "pug"); // app의 view engine을 바꾸는 작업
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true }));
app.use(helmet());
app.use(morgan("dev"));

/*app.get("/", handleHome);
app.get("/profile", handleProfile);*/
app.use(localsMiddleware); // 위치 중요
app.use("/", globalRouter);
app.use(routes.users, userRouter);
app.use(routes.videos, videoRouter);

export default app;