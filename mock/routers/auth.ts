import { getPermissions, isTokenValid, login, logout } from "../handlers/authHandler";
import { Router } from "../types";

export const authRoutes: Router[] = [
    {
        path: '/login', 
        method: 'post', 
        middleware: [], 
        handler: login
    }, 
    {
        path: '/logout', 
        method: 'get', 
        middleware: [], 
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
        middleware: [], 
        handler: getPermissions, 
    }
]