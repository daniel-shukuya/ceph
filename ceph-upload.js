const AWS = require('aws-sdk');
const fs = require('fs');
const path = require('path');

//process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

//configuring the AWS environment
AWS.config.update({
    accessKeyId: "NSALGPIFNXYKP1BL7PT3",
    secretAccessKey: "GGDYIOWM3onCZdByn05t7Vb5P2d3KU8Uuda9JHbj",
    endpoint: "s3-ceph.apps.k8s.cablevision-labs.com.ar",
    sslEnabled: false
});

var s3 = new AWS.S3();
var filePath = "./pepe.txt";

// *** upload ***
// var uploadParams = { Bucket: "flow-sustentable-bucket", Key: '', Body: '' };
// var file = "./pepe.txt";

// var fileStream = fs.createReadStream(file);
// fileStream.on('error', function (err) {
//     console.log('File Error', err);
// });
// uploadParams.Body = fileStream;
// uploadParams.Key = path.basename(file);

// console.log(path.basename(file));

// s3.upload(uploadParams, function (err, data) {
//     if (err) {
//         console.log("Error", err);
//     } if (data) {
//         console.log("Upload Success", data.Location);
//     }
// });

// *** list buckets ***
// s3.listBuckets(function (err, data) {
//     if (err) {
//         console.log("Error", err);
//     } else {
//         console.log("Success", data.Buckets);
//     }
// });

// *** list content bucket ***
// var bucketParams = {
//     Bucket: 'flow-sustentable-bucket'
// };
// s3.listObjects(bucketParams, function (err, data) {
//     if (err) {
//         console.log("Error", err);
//     } else {
//         console.log("Success", data);
//     }
// });

// *** create bucket ***
var bucketParams = {
    Bucket: "test-b"
};

s3.createBucket(bucketParams, function (err, data) {
    if (err) {
        console.log("Error", err);
    } else {
        console.log("Success", data.Location);
    }
});