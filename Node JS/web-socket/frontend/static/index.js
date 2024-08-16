const socket = io('http://localhost:3000');

const ctx = document.querySelector('#myCanvas').getContext('2d');

var myChart = new Chart(ctx, {
    type : 'line',
    options : {
      responsve : true,
      title : {
        display : true,
        text : 'Weather Forecast',
        fontSize : 25
      },
      scales: {
        xAxes: [{
          scaleLabel: {
            display: true,
            labelString: 'Time'
          }
        }]
      }
    },
    data : {
      datasets : [
        {
          type : 'line',
          label : 'Pressure',
          backgroundColor : '#000',
          borderColor: "#10BAFC",
          fill : false
        }
      ]
    }
});


socket.on('dataUpdate',(data)=>{
    console.log(data);
    myChart.data.labels.push('X');
    myChart.data.datasets[0].data.push(data);
    myChart.update();
});

// Angular

// import * as io from 'socket.io-client';

// const socket = io('http://localhost:3000');

// function listen(event):Observable<any> {
//     return  new Observable((subscriber)=>{
//         socket.on(event,(data)=>{
//             subscriber.next(data);
//         })
//     });
// }

// listen('dataUpdate').subscribe((res)=>{
//     myChart.data.datasets[0].data.push(data);
//     myChart.update();
// });