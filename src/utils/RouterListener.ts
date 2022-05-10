import mitt from 'mitt'
import type { Handler } from 'mitt'

import type { RouteLocationNormalized } from 'vue-router'

const emitter = mitt()

const key = Symbol('ROUTE_CHANGE')
let latestRoute: RouteLocationNormalized

export function setRouteEmitter(to: RouteLocationNormalized) {
    emitter.emit(key, to)
    latestRoute = to
}

export function listenerRouteChange(
    handler: (route: RouteLocationNormalized) => void,
    imediate = true
) {
    console.log("====> 监听到路由变化！")
    console.log(handler)
    emitter.on(key, handler as Handler);
    if (imediate && latestRoute) {
        handler(latestRoute)
    }
}

export function removeRouteListener() {
    emitter.off(key)
}


