import { Router } from "../types";
import { userRoutes } from "./user";
import { authRoutes } from "./auth";
import { dataRoutes } from './data'
import { projectRoutes } from "./project";


export const routers: Router[] = [
    ...userRoutes, 
    ...authRoutes, 
    ...dataRoutes,
    ...projectRoutes
] 
