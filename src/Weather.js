
const address = `http://api.weatherapi.com/v1/current.json?key=8d352cf8afdb424783094702210910&q=London&aqi=no`;
const http = new XMLHttpRequest();

http.open("GET", address);
http.send()

let response = String;
http.onreadystatechange = () =>{
    response = http.responseText
    console.log(http.responseText);
}

export { response }
