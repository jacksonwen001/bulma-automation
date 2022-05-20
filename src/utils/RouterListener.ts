import mitt from 'mitt'
import type { Handler } from 'mitt'

import type { RouteLocationNormalized } from 'vue-router'

const emitter = mitt()

const key = Symbol('ROUTE_CHANGE')
let latestRoute: RouteLocationNormalized

/**
 * trigger
 * @param to 
 */
export function setRouteEmitter(to: RouteLocationNormalized) {
    emitter.emit(key, to)
    latestRoute = to
}

// Listener
export function listenerRouteChange(
    handler: (route: RouteLocationNormalized) => void,
    imediate = true
) {
    emitter.on(key, handler as Handler);
    if (imediate && latestRoute) {
        handler(latestRoute)
    }
}

//移出事件
export function removeRouteListener() {
    emitter.off(key)
}


