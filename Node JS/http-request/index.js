const https = require('https');

let request = https.request(url,(res)=>{
    let data = '';
    res.on('data',(chunk)=>{
        data += chunk.toString();
    });
    res.on('end',()=>{
        console.log(JSON.parse(data));
    });
});

request.on('error',(e)=>{
    console.log(e);
})

request.end();

