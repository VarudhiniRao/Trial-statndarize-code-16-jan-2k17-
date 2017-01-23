$(document).ready(function(){



function playerToggle(){
      var ticplayer1 = $(".player1").hasClass("active_player");
      var ticplayer2 = $(".player2").hasClass("active_player");
      var id = this.id;

      if(ticplayer1){

       $(".player1").removeClass("active_player");
       $(".player2").addClass("active_player");
       $("#"+id).text("*");
        $("#"+id).addClass("active_div");



      }
      if(ticplayer2){
        $(".player1").addClass("active_player");
        $(".player2").removeClass("active_player");
        $("#"+id).text("#");
        $("#"+id).addClass("active_div2");

      }

}

    $(".header1").one("click",playerToggle);
    $(".header2").one("click",playerToggle);
    $(".header3").one("click",playerToggle);
    $(".header4").one("click",playerToggle);

});
