/**
 * 用户的 token 
 * 1. 有效的
 * 2. 失效的
 * 3. 无效的 
 */
export const tokens = [
    {   
        id: 1, 
        username: 'admin', 
        accessToken: 'admin123', 
        refreshToken: 'admin321', 
    }, 
    {
        id: 2, 
        username: 'tester', 
        accessToken: 'tester123', 
        refreshToken: 'tester321', 
    }, 
    {
        id: 3, 
        username: 'anoymounsUser', 
        accessToken: 'anoymounsUserToken', 
        refreshToken: 'anoymounsRefreshToken',
    }, 
    {
        id: 4, 
        username: 'expiredUser', 
        accessToken: 'expiredUserToken', 
        refreshToken: 'expiredUserRefreshToken',
    }
]

/**
 * token 的两种状态
 *  1. 有效的
 *  2. 失效的， 包括无效的 token 
 */
export const tokenStatus = [
    {
        code: 20000, 
        message: 'token is valid'
    },
    {
        code: 40001, 
        message: 'token is invalid'
    }, 
]

/**
 * 通过 refresh token 来更新 token 
 */
export const refreshedToken = [
    {   
        id: 1, 
        username: 'admin', 
        accessToken: 'admin543', 
        refreshToken: 'admin543', 
    }, 
    {
        id: 2, 
        username: 'tester', 
        accessToken: 'tester543', 
        refreshToken: 'tester543', 
    }, 
]