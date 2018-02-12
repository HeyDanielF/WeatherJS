//init storage
const storage = new Storage();
const weatherLocation = storage.getLocationData();
//init weather

const weather = new Weather(weatherLocation.city,weatherLocation.state);
//Init ui
const ui = new UI();

//Get weather on DOM Load
document.addEventListener('DOMContentLoaded',getWeather);

//change location event
document.getElementById('w-change-btn').addEventListener('click',(e) => {

    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;
    
    weather.changeLocation(city,state);

    //set location in LS
    storage.setLocation(city,state);

    //get and display weather

    getWeather();

    //close modal
    $("#locModal").modal('hide');

});;


function getWeather(){
    weather.getWeather()
            .then(results => {
            
            ui.paint(results);


        })
             .catch(err => console.log(err));
}