const request= require('request')
const forecast=(one,two,callback)=>{
    //const three= one,two
const url='http://api.weatherstack.com/current?access_key=efc1501a5dc4866728cdc5c68f9bb7f6&query='+one+','+two+'&units=m'
request({url:url, json:true },(error,response)=>{
    if(error){
       callback('the connection with foreacst did not establish',undefined)
        // console.log('the app did not connect to the weather page')
    }else if(response.body.error){
        callback('the place entered dnot exist',undefined)
        //console.log('location doesnot exist')
    }
    else
    {
        const currently=response.body.current

callback('undefined',  { 
    temeperature: currently.temperature,
    feelslike:currently.feelslike,
    place:response.body.location.country,
    region:response.body.location.region
     } )
        //console.log('temperature currently is '+currently.temperature+' it feels like '+currently.feelslike)
    }
})
}

module.exports=forecast