/*const express = require('express');
const router = express.Router();
//const userService = require('./user-service');
const request = require('request-json');

router.get('/test', authenticate);

var client = request.createClient('https://yuuvis.io/api');
client.setBasicAuth('admin', 'AeH7bOI2eu65');


function authenticate(req,res,next)
{
    
       client.headers['X-ID-TENANT-NAME'] = 'nyc026';
       client.get('/admin/schema/native', function(err, res, body) {
        return console.log(body.rows[0].title);
      });
}
*/
const request = require('request-json');


var client = request.createClient('https://yuuvis.io');
client.setBasicAuth('admin', 'AeH7bOI2eu65');

client.headers['X-ID-TENANT-NAME'] = 'nyc026';
client.headers['Accept']  = 'application/json'
client.headers['Accept-Language'] =  'en-US,en;q=0.9,ru;q=0.8'
       client.get('/rest-ws/service/user', function(err, res, body) {
        return console.log(body);
       })
        //module.exports = router;