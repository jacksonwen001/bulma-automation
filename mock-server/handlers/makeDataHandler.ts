import { scenarios } from "../data/makeData";
import { Handler } from "../types";

export const getAllScenario: Handler = (req, res) => {
    let result;
    let { page, limit, id } = req.query

    if (page && limit) {
        result = scenarios.filter((_, index) => index < Number(limit) * Number(page) && index >= Number(limit) * (Number(page) - 1))
        result = {
            total: scenarios.length,
            data: result
        }
    } else if (id) {
        result = scenarios.find(scenario => scenario.id == Number(id))
    } else {
        result = {
            code: 50000, 
            message: 'error!'
        };
        return res.status(500).json(result)
    }
    return res.status(200).json(result)
}