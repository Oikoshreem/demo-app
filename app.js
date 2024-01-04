const express = require('express')

const app = express()
app.get('/', (req, res)=>{
    res.status(200).send('<h1>Home Page</h1>')
    // console.log(req.url)
})
app.get('/about', (req, res)=>{
    res.status(200).send('<h1>about Page</h1>')
    // console.log(req.url)
})

app.all('*', (req, res)=>{
    res.status(404).send("<h2>Could not find that page: Error 404</h2>")
})
app.listen(5000,()=>{
    console.log("Server is running on port 5000")
})

// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen