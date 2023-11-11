import {Request, Response, NextFunction, RequestHandler, ErrorRequestHandler} from 'express';

export const logRequestMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    console.log(req.url);
    next();
};

//Express trae esta opcion para tipar todo, al asignarla al metod ErrorRequestHandler
export const logErrorRequestMiddleware: ErrorRequestHandler = async ( 
error, req, res, next) => {
    console.error(error);
    res.sendStatus(500);
};