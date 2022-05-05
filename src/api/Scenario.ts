import { Request } from "@/utils/Request";

let api = new Request().getInstance()

/**
 * 获取造数据的场景
 * @param params 
 * @returns 
 */
export async function getScenarios(params: {page?:number, limit?:number, id?:string}){
    return api({
        url: "/data/scenarios", 
        method: "get", 
        params
    })
}