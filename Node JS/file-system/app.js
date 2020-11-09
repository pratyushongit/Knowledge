const fs = require('fs');

const addNote = function({title,body}){
   const notes = readNote();
   notes.push({
       title,body
   });
   fs.writeFileSync('./notes.json',JSON.stringify(notes));
}

const readNote = function(){
   try{
     const parsedData = JSON.parse(fs.readFileSync('./notes.json').toString());
    return parsedData;
   }
   catch(err){
    return [];
   }
    
}

module.exports = {
    addNote
}