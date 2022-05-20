/**
 * mock 数据所需要的类型 
 */
 import { Request, Response, NextFunction } from 'express';

/**
 * 方法枚举
 */
type Method =
    | 'get'
    | 'head'
    | 'post'
    | 'put'
    | 'delete'
    | 'connect'
    | 'options'
    | 'trace'
    | 'patch';

/**
 * 中间件， 用于处理请求和返回值 
 */
export type Middleware = (req: Request, res: Response, next: NextFunction) => any;
/**
 * 处理函数 
 */
export type Handler = (req: Request, res: Response) => any;

/**
 * 路由类型定义 
 * path: 路径， 一定要有
 * method: 请求的方法
 * middleware: 注入中间件
 * handler： 逻辑处理 
 */
export type Router = {
    path: string;
    method: Method;
    middleware: Middleware[];
    handler: Handler;
};

