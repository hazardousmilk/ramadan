$( document ).ready(function() {
  $("#title").text(params.title);
  // click event on day element
  $(".day").on( "click", function( event ) {
    //get the element
    var element = $(event.target);
    //get today date
    var date = new Date();
    var today_day = date.getDate();
    var today_month =  date.getMonth();

    // get day number with text number
    var day_request = Number(element.text());
    // month request, the month of your advent calendar
    // 0 => january, 11 => december
    var month_request = params.month;

    // test if your not too early
    var show_day = false;
    if(today_month != month_request){
        show_day = true;
    } else {
      if(day_request <= today_day ){
        show_day = true;
      }
    }

    // show modal
    if(show_day){
      // load data from md file with day number
      $.get(params.data_folder+day_request+".md", function( data ) {
        // create converter md to html
        var converter = new showdown.Converter();
        // convert md data into html
        var html = converter.makeHtml(data);
        // put the html in div element
        $(".day-content").html(html)
        // open modal
        $("#day-modal").modal({
            size: 'large',
            fadeDuration: 200,
            fadeDelay: 0.30,
        });
      },'text');
    } else {
      // if too early
      $("#no-day-modal").modal({
          fadeDuration: 200
      });
    }
  });

});
