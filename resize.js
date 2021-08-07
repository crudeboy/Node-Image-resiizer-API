const sharp = require('sharp')

module.exports = function resize(path, format, width, height)
{
    // path = './pic1.jpeg'
    ///we need too first oad the image
    const fs = require('fs')
    let transform = sharp()

    const readStream = fs.createReadStream(path)
 
    if(format){
        transform = transform.toFormat(format)
    }

    if(width || height){
        transform = transform.resize(width, height)
    }

    return readStream.pipe(transform)
}



