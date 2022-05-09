import { projects, collectionProjects } from "../data/projectData";
import { Handler } from "../types";

export const getProjects: Handler = (req, res) => {
    let result; 
    let { page, limit } = req.query
    let { id } = req.params

    if(page && limit) {
        result = projects.filter((_, index) => index < Number(limit) * Number(page) && index >= Number(limit) * (Number(page) - 1))
        result = {
            total: projects.length,
            data: result
        }
    }else if(id) {
        result = projects.find(user => user.id == Number(id))
    }else{
        return res.status(500).json({
            code: 50000, 
            message: 'Internal Error!'
        });
    }
    return res.status(200).json(result); 
}

export const getCollectionProjects: Handler = (req, res) => {
    return res.status(200).json(collectionProjects) 
}