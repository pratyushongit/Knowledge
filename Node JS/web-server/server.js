const express = require('express');
const path = require('path');
// const forecast = require('./frontend/static/api')

const app = express();

app.use('/static', express.static(path.resolve('frontend','static')));

app.get('',(req,res)=>{
    res.sendFile(path.resolve('frontend','index.html'));
});

app.get('/about',(req,res)=>{
    res.sendFile(path.resolve('frontend','about.html'));
});

app.get('/help',(req,res)=>{
    res.sendFile(path.resolve('frontend','help.html'));
});

app.get('/help/*',(req,res)=>{
    res.send('Help article not found');
});

app.get('/weather',async (req,res)=>{
   if(!req.query.address){
        return res.send({
            error : 'Please provide a search term'
        });
    }
    res.send({
        error : 'Please provide a search term'
    });
});

app.get('/*',(req,res)=>{
    res.sendFile(path.resolve('frontend','error.html'));
});

app.listen(process.env.PORT || 3000, ()=>{
    console.log('Server Connected!');
})