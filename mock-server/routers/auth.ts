import { getPermissions, isTokenValid, login, logout } from "../handlers/authHandler";
import { logger } from "../middlewares/logger";
import { Router } from "../types";

export const authRoutes: Router[] = [
    {
        path: '/login', 
        method: 'post', 
        middleware: [logger], 
        handler: login
    }, 
    {
        path: '/logout', 
        method: 'post', 
        middleware: [logger], 
        handler: logout
    }, 
    {
        path: '/isTokenValid', 
        method: 'post', 
        middleware: [], 
        handler: isTokenValid
    },
    {
        path: '/user/permissions', 
        method: 'post', 
        middleware: [logger], 
        handler: getPermissions, 
    }
]