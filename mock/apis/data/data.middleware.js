const { serve } = require('esbuild');
const express = require('express'); 
const { json } = require('stream/consumers');
const router = express.Router(); 
const url = require('url'); 

module.exports = (server) => {
    router.get('/data/scenarios', (req, res, next) => {
        let result; 
        let { page, limit, id } = req.query
        let scenarios = server.db.getState().scenarios; 
        let failed = server.db.getState().failed; 

        if(page && limit) {
            result = scenarios.filter((_, index) => index < limit * page && index >= limit * (page - 1))
            result = {
                total: scenarios.length,
                data: result
            }
        }else if(id) {
            result = scenarios.find(scenario => scenario.id == id)
        }else{
            result = failed;
        }
        return res.json(result)
    })

    
    return router;
}