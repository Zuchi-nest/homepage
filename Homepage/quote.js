function randomQuote() {
    $.ajax({
        url:"http://api.forismatic.com/api/1.0/?",
        dataType: "jsonp",
        data:"method=getQuote&format=jsonp&lang=en&jsonp=?",
        success: function( response ) {
          $("#quote").html(response.quoteText + "<br/>&dash; " + response.quoteAuthor + " &dash;");
        }
      }
    );
    }
    $(document).ready(function() {
    randomQuote();
    setInterval(randomQuote, 15000);
    // $("button").click(function(){
    //   randomQuote();
    //  });
    });