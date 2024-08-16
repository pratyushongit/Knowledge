const express = require('express');
const cors = require('cors');
require('./db/mongoose');
const Task = require('./model/Task');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.post('/task', async (req, res) => {
    const task = new Task(req.body);
    try{
        let data =  await task.save();
        res.status(201).send(data);
    }
    catch(err){
        res.status(500).send(err);
    }
});

app.get('/tasks',async (req,res)=>{
    try {
        let result = await Task.find({});
        if(!result){
            return res.status(404).send();
        }
        res.status(200).send(result);
    } catch (error) {
        res.status(404).send();
    }
});

app.get('/task/:id',async (req,res)=>{
    try {
        let result = await Task.findById(req.params.id);
        if(!result){
            return res.status(404).send();
        }
        res.status(200).send(result);
    } catch (error) {
        res.status(404).send();
    }
});

app.patch('/task/:id', async (req,res)=>{
    try {
        let result = await Task.findByIdAndUpdate(req.params.id,req.body,{new : true});
        if(!result){
            return res.status(404).send();
        }
        res.status(200).send(result);
    } catch (error) {
        return res.status(404).send();
    }
});

app.delete('/task/:id', async (req,res)=>{
    try {
        let result = await Task.findByIdAndDelete(req.params.id);
        if(!result){
            return res.status(404).send();
        }
        res.status(200).send(result);
    } catch (error) {
        return res.status(404).send();
    }
});

app.listen(port,()=>{
    console.log('Server Connected on '+ port);
});