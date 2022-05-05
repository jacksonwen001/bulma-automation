const jsonServer = require('json-server')
const server = jsonServer.create()
const middlewares = jsonServer.defaults()
const cors = require("./cors")
const init = require("./apis")
const walk = require("./walk")
const path = require('path')
const mockDir = path.join(process.cwd(), "mock", "apis")
const port = 3004

function startServer() {
    walk(mockDir, (error, result) => {
        if(error){
            console.error(error); 
        }else{
            let apis = init(result)
            server.use(cors);
            server.use(jsonServer.bodyParser);
            server.use(middlewares);
            server.use(apis.middleware);
            server.use(apis.db);
            server.listen(port, function () {
                console.log('JSON Server is running on ' + port);
            });
            
        }
    })
}

startServer()