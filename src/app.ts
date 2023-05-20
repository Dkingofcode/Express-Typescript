import express, {Request, Response} from "express";

const app = express();

app.use(express.json());


app.route("/").get((req: Request, res: Response) => {
   return res.send("You make a GET request"); 
})
.post((req: Request, res: Response) => {
   return res.send("You make a POST request");
})
.put((req: Request, res: Response) => {
    return res.send("You make a PUT request");
})


app.all('/api/all', (req: Request, res: Response) => {
    return res.sendStatus(200);
})

app.listen(3000, () => {
    console.log("Application listening at http://localhost:3000")
})