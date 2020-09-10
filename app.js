const request= require('request')
const application=require('./utils/0ne')
const forecast=require('./utils/two')
// const url='http://api.weatherstack.com/current?access_key=efc1501a5dc4866728cdc5c68f9bb7f6&query=14.4673,78.8242&units=f'
// request({url:url, json:true },(error,response)=>{
//     if(error){
//         console.log('the app did not connect to the weather page')
//     }else if(response.body.error){
//         console.log('location doesnot exist')
//     }
//     else
//     {
//         const currently=response.body.current
// console.log('temperature currently is '+currently.temperature+' it feels like '+currently.feelslike)
//     }
// })
// const url2='https://api.mapbox.com/geocoding/v5/mapbox.places/kadapa.json?access_token=pk.eyJ1IjoiYXllc2hhLWtoYW5hbSIsImEiOiJja2R2cmgxMHoyazlxMnF0YThxdTFpeHEyIn0.qSA9Z5-aaaG7B5hJ9T2omw&limit=1'
// request({url:url2, json:true },(error,response)=>{
//     //const wrong=response.body.features
//     if(error){
//         console.log('not connected to geotagging')
//     }
//     else if(response.body.features.length==0){
//      console.log('the place enterd donot exist')
//      }
//     else{
//     const location=response.body.features[0].center
// console.log('geo forward location for los angeles is '+' longitude'+location[0]+' latitude '+location[1])
//     }
// })

// const application =(place,callback) => {
//     const url2='https://api.mapbox.com/geocoding/v5/mapbox.places/'+place+'.json?access_token=pk.eyJ1IjoiYXllc2hhLWtoYW5hbSIsImEiOiJja2R2cmgxMHoyazlxMnF0YThxdTFpeHEyIn0.qSA9Z5-aaaG7B5hJ9T2omw&limit=1'
//     request({url:url2, json:true },(error,response)=>{
//         if(error){
//                    callback('connection faied to weather app','undefined')
//                }
//                else if(response.body.features.length==0){
//                    callback('location cannot be found','undefined')
//                }
//                else{
//                 const location=response.body.features[0].center
//                 callback('undefined',{
//                     latitude: location[1],
//                     longitude:location[0],
//                     location:response.body.features[0].place_name
//                 })
//                }


//     })


// }
// const recieved=application('andaman',(error,data)=>
// {
// console.log('error', error)
// console.log('data', data)

// })
//console.log(process.argv[2]) 
const geoplace=process.argv[2]
application(geoplace,(error,data)=>
 {
 if(error=='undefined'){
     const latitude=data.latitude
     const longitude=data.longitude
     //return data1
     forecast(latitude, longitude, (error2, forecastdata) => {
        if(error2=='undefined'){
        //console.log('Error', error)
        console.log(data.location)
        console.log('temperature is '+forecastdata.temeperature+' degrees feels like '+forecastdata.feelslike+' degrees')
        
    }
        else{console.log('Error', error2)}
      })
     
     
    }else
    {console.log('error', error)}
    

 })







//console.log

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

// forecast(14.48, 78.71, (error, data) => {
//     console.log('Error', error)
//     console.log('Data', data)
//   })