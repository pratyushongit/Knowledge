const axios = require('axios');

const forecast = async ()=>{
    try{
       let data = await axios.get('https://jsonplaceholder.typicode.com/todos/1');
      console.log(data.data);
    }
    catch(error){
       console.log(error);
    }
}

forecast();