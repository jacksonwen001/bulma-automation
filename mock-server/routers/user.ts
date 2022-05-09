import { addUser, delUser, getUsers, searchUser } from "../handlers/userHandler";
import { logger } from "../middlewares/logger";
import { Router } from "../types";

export const userRoutes: Router[] = [
    {
        path: '/users', 
        method: 'get', 
        middleware: [logger], 
        handler: getUsers
    }, 
    {
        path: '/users', 
        method: 'post', 
        middleware: [logger], 
        handler: searchUser
    }, 
    {
        path: '/users', 
        method: 'delete', 
        middleware: [logger], 
        handler: delUser
    },
    {
        path: '/user', 
        method: 'post', 
        middleware: [logger], 
        handler: addUser
    }
] 