import {Express, Request, Response,  NextFunction} from 'express';
function routes(app: Express){
   app.get("/api/books/:bookId/authorId", (req: Request, res: Response, next: NextFunction) => {
    // @ts-ignore
    console.log(req.name);
    // @ts-ignore
    res.send(req.name);
   }); 
}

export default routes;