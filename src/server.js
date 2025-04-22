import http from "node:http"

import { jsonHandler } from "./middlewares/jsonHandler.js"
import { routeHanlder } from "./middlewares/routeHandler.js"

async function listener(request, response){
   await jsonHandler(request, response)
   routeHanlder(request, response)
 }

http.createServer(listener).listen(3333)