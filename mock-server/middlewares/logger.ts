import { RequestHandler as Middleware } from 'express';

export const logger: Middleware = (req, res, next) => {
    console.log(req.path);
    res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    console.log(res.getHeaders());  
    next() 
}