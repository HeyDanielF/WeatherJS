
class Weather {
    constructor(city,state){
        this.apiKey = 'APIKEYINHERE';
        this.city = city;
        this.state = state;
    }
    //Fetch Weather from API
    async getWeather (){
        const response = await fetch(`http://api.wunderground.com/api/${this.apiKey}/conditions/q/${this.state}/${this.city}.json`); 

        const responeData = await response.json();
        return responeData.current_observation;
    }

    changeLocation(city,state){
        this.city = city;
        this.state = state;
    }

}
