let users = [
    {
        "id":1, 
        "name": "admin", 
        "avatar": "http://pic.616pic.com/ys_b_img/00/44/76/IUJ3YQSjx1.jpg",  
        "organization": "",
        "email": "", 
        "introduction": "",  
        "registerDate": "2022-04-22", 
        "lastLogin": "2022-04-22 19:00:00", 
        "role": "admin",
        
    }, 
    {
        "id":2, 
        "name": "user", 
        "avatar": "http://pic.616pic.com/ys_b_img/00/44/76/IUJ3YQSjx1.jpg",  
        "organization": "",
        "email": "", 
        "introduction": "",  
        "registerDate": "2022-04-22", 
        "lastLogin": "2022-04-22 19:00:00", 
        "role": "user", 
    }, 
    {
        "id":3, 
        "name": "jackson", 
        "avatar": "http://pic.616pic.com/ys_b_img/00/44/76/IUJ3YQSjx1.jpg",  
        "organization": "",
        "email": "", 
        "introduction": "",  
        "registerDate": "2022-04-22", 
        "lastLogin": "2022-04-22 19:00:00", 
        "role": "admin",
    }, 
    {
        "id":4, 
        "name": "john", 
        "avatar": "http://pic.616pic.com/ys_b_img/00/44/76/IUJ3YQSjx1.jpg",  
        "organization": "",
        "email": "", 
        "introduction": "",  
        "registerDate": "2022-04-22", 
        "lastLogin": "2022-04-22 19:00:00", 
        "role": "tester",
    }, 
]

let tokens = [
    {
        username:'jackson', 
        accessToken: 'admin', 
        refreshToken: 'admin', 
    },
    {
        username:'admin', 
        accessToken: 'admin', 
        refreshToken: 'admin', 
    },
    {
        username: 'user', 
        accessToken: 'user', 
        refreshToken: 'user', 
    }, 
    {
        username: 'john', 
        accessToken: 'user', 
        refreshToken: 'user', 
    }, 
    {
        username: 'tester', 
        accessToken: 'tester', 
        refreshToken: 'teser', 
    }
]

let roles = [
    {
        id: '1', 
        name: 'admin', 
        permissions:  [
            "dashboard:index:view", 
            "sys:view", 
            "sys:user:view", 
            "sys:user:edit", 
            "sys:user:del", 
            "sys:user:add", 
            "sys:role:view", 
            "sys:role:add", 
            "sys:role:edit", 
            "sys:role:del", 
            'testcase:index:view', 
            "sys:project:view", 
            'automation:index:view',
            'automation:web:view', 
            'automation:api:view', 
            'data:index:view', 
            'data:index.edit',
            'automation:selenoid:view'
        ], 
    },
    {
        id: '2', 
        name: 'user', 
        permissions:  [
            "sys:index:view", 
            "sys:user:view", 
            "sys:user:edit", 
            "sys:user:del", 
            "sys:user:add", 
            "sys:role:view", 
            "sys:role:add", 
            "sys:role:edit", 
            "sys:role:del", 
        ], 
    }, 
    {
        id: '3', 
        name: 'tester', 
        permissions:  [
            "dashboard:index:view", 
        ], 
    }
   
]

module.exports = {
    users, 
    tokens, 
    roles, 
}