const AWS = require('aws-sdk')
const uuid = require('uuid')
const {
    accessKeyId,
    secretAccessKey,
    region,
} = require('./config')

const s3 = new AWS.S3({
    accessKeyId,
    secretAccessKey,
    region
})


module.exports = app => {
        app.get('/upload', (req, res) => {
            const imageType = req.query.type.split('/').reverse()[0]
            const key = `${uuid()}.${imageType}`
            s3.getSignedUrl('putObject', {
                 Bucket: 'courses.influence.com', 
                 ContentType: `${req.query.type}`,
                 Key: key,
            }, (err, url) => res.send({ url, key }))
    })
}