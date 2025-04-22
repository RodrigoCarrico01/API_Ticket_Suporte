import { routes } from "../routes/index.js"

export function routeHanlder(request,response){
  const route = routes.find((route) => {
    return route.method === request.method && route.path === request.path
  })

  if(route){
    return route.controller(request, response)
  }

  return response.writeHead(404).end()
}