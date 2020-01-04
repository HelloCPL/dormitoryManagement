var merge = require('webpack-merge')
var prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    API_BASE_URL: '"http://localhost:8080/api/"',
})

// 页面引用，如：const baseURL = process.env.API_BASE_URL
