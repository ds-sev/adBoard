const express = require('express')
const app = express()
const cors = require('cors')
const { createProxyMiddleware } = require('http-proxy-middleware')

app.use(cors())

app.get('/',createProxyMiddleware({target:'http://80.90.184.170:5000', changeOrigin:true}))
app.listen(3000, (localhost) => {
  console.log('proxy started')
})
