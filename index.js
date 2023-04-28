const http=require("http")
const dotenv = require('dotenv').config()

const app=http.createServer((req,res)=>{
    res.write("Node.js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications. Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.")
    res.end();
})
const port=process.env.PORT
app.listen(port,()=>{
    console.log(`serever is running in the port: ${port}}`)
})