const e = require('express');
let https = require('https');

let req = https.request('',(response)=>{
    let data = '';
    response.on('data',(val)=>{
        data += val.toString();
    })
    response.on('end',()=>{
        console.log(JSON.parse(data));
    })
})

req.on('error',(e)=>{
    console.log(e);
});

req.end();