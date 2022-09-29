let loc=document.getElementById("locator");
let tempicon=document.getElementById("temp-icon");
let tempvalue=document.getElementById("temp-value");
let climate=document.getElementById("climet");
let iconfile;
const searchinput=document.getElementById("search-input");
const searchbutton=document.getElementById("search-button");


window.addEventListener("load",()=>{
    let long;
    let lat;
    

    if(navigator.geolocation)
    {
        navigator.geolocation.getCurrentPosition((position)=>
        {
            long=position.coords.longitude;
            lat=position.coords.latitude;
            const api=``
            fetch(api).then((Response)=>
            {
                return Response.json();
            })
            .then( data=>
                {
                    const {name}=data;
                    const {feels_like}=data.main;
                    const {id,main}=data.weather[0];
                    loc.textContent=name;
                    climate.textContent=main;
                    tempvalue.textContent=Math.round(feels_like-273);
                }) 
        }
        )
    }

})
