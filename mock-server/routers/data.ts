import { getAllScenario } from "../handlers/makeDataHandler";
import { Router } from "../types";

export const dataRoutes: Router[] = [
    {
        path: '/data/scenarios', 
        method: 'get', 
        middleware: [], 
        handler: getAllScenario
    }
]