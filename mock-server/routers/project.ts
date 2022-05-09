import { getCollectionProjects, getProjects } from "../handlers/projectHandler";
import { Router } from "../types";

export const projectRoutes: Router[]= [
    {
        path: '/project/:id', 
        method: 'get', 
        middleware: [], 
        handler: getProjects
    }, 
    {
        path: '/project/collections', 
        method: 'get', 
        middleware: [], 
        handler: getCollectionProjects 
    }, 

]