import express, {NextFunction, Request, Response} from "express";

const app = express();

app.use(express.json());


function handleGetBookOne(req: Request, res: Response, next: NextFunction) {
 console.log(req.params);
 
 next()
}

function handleGetBookTwo(req: Request, res: Response, next: NextFunction) {
   console.log('second handler');
   return res.send(req.params); 
}


app.get('/api/books/:bookId/:authorId', [handleGetBookOne, handleGetBookTwo])
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
    console.log("Application listening at http://localhost:3000")
})