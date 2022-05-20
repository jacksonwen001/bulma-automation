import { Router } from "../types";
import { authRoutes } from "./auth";


export const routers: Router[] = [
    ...authRoutes, 
] 
