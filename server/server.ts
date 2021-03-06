import * as express from "express";
import { routes } from "./routes";

const app = express();
const port = 8000;
export const list = [
    {id: 1, name: "Testi1"},
    {id: 2, name: "Testi2"},
    {id: 3, name: "Testi3"},
    {id: 4, name: "Testi4"},
    {id: 5, name: "Testi5"},
    {id: 6, name: "Testi6"},
    {id: 7, name: "Testi7"},
    {id: 8, name: "Testi8"}
]

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "OPTIONS, GET, POST, PUT, DELETE");
    if ("OPTIONS" == req.method) {
        res.sendStatus(200);
    } else {
        console.log(`IP: ${req.ip}\nMETHOD: ${req.method}\nURL: ${req.url}\n----------------------`);
        next();
    }
});

app.use(express.json());
app.use("/", routes);

app.listen(port, "127.0.0.1", () => {
    console.log("Listening on port " + port);
});

