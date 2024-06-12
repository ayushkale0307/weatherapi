$(document).ready(function(){
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=66a3953c53e94c57bddaf79e61e1dffc&units=metric",
        
      }).done(function(data) {
          console.log(data)
          $(".london").html(data.main.temp)
          
      });
})
$(document).ready(function(){
    $.ajax({
        url: "https://api.openweathermap.org/data/2.5/weather?q=Paris&APPID=66a3953c53e94c57bddaf79e61e1dffc&units=metric",
      }).done(function(data)  {
          console.log(data)
          $(".paris").html(data.main.temp)
      });
})
