import express, {NextFunction, Request, Response} from "express";

const app = express();

app.use(express.json());


const middleware = 
({ name }: { name: string }) =>
(req: Request, res: Response, next: NextFunction) => {
   // @ts-ignore
   req.name = name;
 
   next();
};

app.use(middleware({ name: "OladepoDavo" }));

app.get('/api/books/:bookId/:authorId', (req: Request, res: Response, next: NextFunction) => {
   // @ts-ignore
   console.log(req.name);
   next();
  }
);



// Request Chaining  

// app.route("/").get((req: Request, res: Response) => {
//    return res.send("You make a GET request"); 
// })
// .post((req: Request, res: Response) => {
//    return res.send("You make a POST request");
// })
// .put((req: Request, res: Response) => {
//     return res.send("You make a PUT request");
// })
// .delete((req: Request, res: Response) => {
//    return res.send("You make a DELETE request");
// })

app.all('/api/all', (req: Request, res: Response) => {
    return res.sendStatus(200);
})

app.listen(3000, () => {
    console.log("Application listening at http://localhost:3000");
})