//console.log('connected')
const request=require('request')
 const application =(place,callback) => {
     const url2='https://api.mapbox.com/geocoding/v5/mapbox.places/'+place+'.json?access_token=pk.eyJ1IjoiYXllc2hhLWtoYW5hbSIsImEiOiJja2R2cmgxMHoyazlxMnF0YThxdTFpeHEyIn0.qSA9Z5-aaaG7B5hJ9T2omw&limit=1'
     request({url:url2, json:true },(error,response)=>{
         if(error){
                    callback('connection faied to weather app','undefined')
               }
               else if(response.body.features.length==0){
                   callback('location cannot be found','undefined')
               }
               else{
                const location=response.body.features[0].center
                callback('undefined',{
                    latitude: location[1],
                    longitude:location[0],
                    location:response.body.features[0].place_name
                })
               }


    })


}
//const application=console.log('working')
module.exports=application