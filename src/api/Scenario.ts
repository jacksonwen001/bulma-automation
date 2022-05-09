import { instance as api } from "@/utils/RequestUtil";

/**
 * 获取造数据的场景
 * @param params 
 * @returns 
 */
export function getScenarios(params: {page?:number, limit?:number, id?:string}){
    return api({
        url: "/data/scenarios", 
        method: "get", 
        params
    })
}