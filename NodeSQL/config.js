module.exports = {
    api:{
        port: process.env.API_PORT || 3000,
    },
    post: {
        port: process.env.POST_PORT || 3002,
    }
    ,
    jwt: {
        secret:process.env.JWT_SECRET || "secret"
    },
    mysql: {
        host: process.env.MYSQL_HOST || 'sql10.freemysqlhosting.net',
        user: process.env.MYSQL_USER || 'sql10503940',
        password: process.env.MYSQL_PASS || 'KmdZ6VqAef',
        database: process.env.MYSQL_DB || 'sql10503940',
    },
    mysqlService: {
        host: process.env.MYSQL_SRV_HOST || 'localhost',
        port: process.env.MYSQL_SRV_PORT || 3001,
    },
}