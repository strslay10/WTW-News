$(document).ready(function() {
  $("button").click(function(){
    var url = "api.openweathermap.org/data/2.5/forecast?id=524901&APPID=85061efb84e75df25ef0bb66d4fb65ed";
    $.getJSON(url, function(response) {
      $("#posts").text(response);
    })
  })
})