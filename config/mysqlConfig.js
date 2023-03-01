const mysqlConfig = {
    "hostname" : process.env.MYSQL_HOSTNAME,
    "database" : process.env.MYSQL_DATABASE,
    "user" : process.env.MYSQL_USER,
    "password" : process.env.MYSQL_PASSWORD,
}
module.exports = mysqlConfig;