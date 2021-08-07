const resize = require('./resize')

const express = require("express")

const server = express()

server.listen(8000, ()=> {
    console.log("Server activated")
})

server.get('/', (req, res) => {//creating a get route
    //Query the url to get the neccessary parameters
    const widthString = req.query.width
    const heigthString = req.query.heigth
    const format = req.query.format

    //converted the params strings to integers
    let width, height;

    if(widthString){
        width = parseInt(widthString)
    }

    if(heigthString){
        heigth = parseInt(heigthString)
    }

    //set the response type for the response
    res.type(`image/${format || 'jpeg'}`)

    //resize the image
    resize('pic1.jpeg', format, width, height).pipe(res)  
})

