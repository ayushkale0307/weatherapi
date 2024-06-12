$(document).ready(function(){
    function updateWeather() {
        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=66a3953c53e94c57bddaf79e61e1dffc&units=metric",
          }).done(function(data) {
              console.log(data)
              $(".london").html(data.main.temp)
          });
        
        $.ajax({
            url: "https://api.openweathermap.org/data/2.5/weather?q=Paris&APPID=66a3953c53e94c57bddaf79e61e1dffc&units=metric",
          }).done(function(data) {
              console.log(data)
              $(".paris").html(data.main.temp)
          });
    }
    
    // Update weather every 30 minutes (30 * 60 * 1000 milliseconds)
    setInterval(updateWeather, 30 * 60 * 1000);
    
    // Call updateWeather once immediately when the page loads
    updateWeather();
});

