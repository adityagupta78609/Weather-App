const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fd63e55df8mshb68a73286c0d745p1cfadajsn97d6b7b936c6',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
// city ="Delhi";

const cities = ["Bhopal",										
	"Shillong"	,									
	"Gandhinagar",										
	"Jaipur"	,									
	"Meghalaya",										
	"Jammu"] ;

const data = document.getElementsByClassName("data");
console.log(data);


// Mumbai
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Mumbai', options)
	.then(response => response.json())
	.then((response) => {
        document.getElementById("temp1").innerText = " " + response.temp;
        document.getElementById("min_temp1").innerText = " " + response.min_temp;
        document.getElementById("max_temp1").innerText = " " + response.max_temp;
        document.getElementById("wind_speed1").innerText = " " + response.wind_speed;
        document.getElementById("wind_degrees1").innerText = " " + response.wind_degrees;
        // console.log(response);

    })
	.catch(err => console.error(err));

//Delhi
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Delhi', options)
	.then(response => response.json())
	.then((response) => {
        document.getElementById("temp2").innerText = " " + response.temp;
        document.getElementById("min_temp2").innerText = " " + response.min_temp;
        document.getElementById("max_temp2").innerText = " " + response.max_temp;
        document.getElementById("wind_speed2").innerText = " " + response.wind_speed;
        document.getElementById("wind_degrees2").innerText = " " + response.wind_degrees;
        // console.log(response);

    })
	.catch(err => console.error(err));

	//Kolkata
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Kolkata', options)
.then(response => response.json())
.then((response) => {
	document.getElementById("temp3").innerText = " " + response.temp;
	document.getElementById("min_temp3").innerText = " " + response.min_temp;
	document.getElementById("max_temp3").innerText = " " + response.max_temp;
	document.getElementById("wind_speed3").innerText = " " + response.wind_speed;
	document.getElementById("wind_degrees3").innerText = " " + response.wind_degrees;
	// console.log(response);

})
.catch(err => console.error(err));
	

//Patna
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Patna', options)
.then(response => response.json())
.then((response) => {
	document.getElementById("temp4").innerText = " " + response.temp;
	document.getElementById("min_temp4").innerText = " " + response.min_temp;
	document.getElementById("max_temp4").innerText = " " + response.max_temp;
	document.getElementById("wind_speed4").innerText = " " + response.wind_speed;
	document.getElementById("wind_degrees4").innerText = " " + response.wind_degrees;
	// console.log(response);

})
.catch(err => console.error(err));


//chennai
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=chennai', options)
.then(response => response.json())
.then((response) => {
	document.getElementById("temps").innerText = " " + response.temp;
	document.getElementById("min_temps").innerText = " " + response.min_temp;
	document.getElementById("max_temps").innerText = " " + response.max_temp;
	document.getElementById("wind_speeds").innerText = " " + response.wind_speed;
	document.getElementById("wind_degreess").innerText = " " + response.wind_degrees;
	document.getElementById("Cloud").innerText = " " + response.cloud_pct;
	document.getElementById("feels").innerText = " " + response.feels_like;
	document.getElementById("humidity").innerText = " " + response.humidity;
	document.getElementById("sunrise").innerText = " " + response.sunrise;
	document.getElementById("sunset").innerText = " " + response.sunset;
	// console.log(response);


	/*
	"cloud_pct": 40,
  "temp": 13,
  "feels_like": 13,
  "humidity": 88,
  "min_temp": 13,
  "max_temp": 13,
  "wind_speed": 0,
  "wind_degrees": 0,
  "sunrise": 1671500346,
  "sunset": 1671537478
}
	*/
})
.catch(err => console.error(err));


const getWeather = (city) =>{

    // cityName.innerHtml = city; 
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then((response) => {
        
		document.getElementById("searched").innerText = " " + city;
        document.getElementById("temps").innerText = " " + response.temp;
	document.getElementById("min_temps").innerText = " " + response.min_temp;
	document.getElementById("max_temps").innerText = " " + response.max_temp;
	document.getElementById("wind_speeds").innerText = " " + response.wind_speed;
	document.getElementById("wind_degreess").innerText = " " + response.wind_degrees;
	document.getElementById("Cloud").innerText = " " + response.cloud_pct;
	document.getElementById("feels").innerText = " " + response.feels_like;
	document.getElementById("humidity").innerText = " " + response.humidity;
	document.getElementById("sunrise").innerText = " " + response.sunrise;
	document.getElementById("sunset").innerText = " " + response.sunset;

        // console.log(response)
    

    
    })
	.catch(err => console.error(err));
}


const setdata = (city) =>{
	let d =-1;
	for(let i=0 ;i<cities.length ; i++){

		if(cities[i] === city)
		d=i;
	}

	d = d*10;

	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then((response) => {
        
		// document.getElementById("searched").innerText = " " + city;
		data[d].innerText = " " + response.cloud_pct;
		data[d+1].innerText = " " + response.feels_like;
		data[d+2].innerText = " " + response.humidity;
		data[d+3].innerText = " " + response.max_temp;
		data[d+4].innerText = " " + response.min_temp;
		data[d+5].innerText = " " + response.sunrise;
		data[d+6].innerText = " " + response.sunset;
        data[d+7].innerText = " " + response.temp;
		data[d+8].innerText = " " + response.wind_degrees;
		data[d+9].innerText = " " + response.wind_speed;

        // console.log(response)
    

    
    })
	.catch(err => console.error(err));
}






submit.addEventListener("click",(e) => 
{
    e.preventDefault();
    // reload hone se rokta hai
getWeather(city.value);
})


for(let i=0 ;i<cities.length ; i++){

	setdata(cities[i]);

}


