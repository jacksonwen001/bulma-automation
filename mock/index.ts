import express from 'express'
import { routers } from './routers';
import cors from  'cors'

const app = express()
app.use(express.json())
app.use(cors({origin: true}));

routers.forEach((route) => {
    const { method, path, middleware, handler } = route;
    app[method](path, ...middleware, handler);
});

app.listen(3001, () =>
    console.log(`🚀 Server ready at: http://localhost:3001`)
)