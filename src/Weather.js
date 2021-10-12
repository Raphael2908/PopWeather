const key = process.env.VUE_APP_WEATHER_API_KEY;


export async function getResponse(location) {
    let address = `https://api.weatherapi.com/v1/current.json?key=${key}&q=${location}&aqi=no`
    const response = await fetch(address, {
        method: "GET",
    })
    return response.json()
}