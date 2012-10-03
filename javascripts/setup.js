var speeds = ["LOW", "MED", "HI"];
var musics = ["FEVER", "CHILD", "OFF"];

function Setup() {
  this.level = $( "#level_slider" ).slider( "value" );
  this.speed = speeds[ $( "#speed_slider" ).slider( "value" ) ];
  this.music = musics[ $( "#music_slider" ).slider( "value" ) ];
};

function start(){
  var settings = new Setup();

  window.location.href = "./dr_mojo.html?" + jQuery.param(settings);
};

$(function(){
  $( "#level_slider" ).slider({
    value:0,
    min: 0,
    max: 20,
    step: 1,
    slide: function( event, ui ) {
      $( "#level_amount" ).html( ui.value );
    }
  });
  
  $( "#speed_slider" ).slider({
    min: 0,
    max: speeds.length - 1,
    step: 1,
    slide: function( event, ui ) {
      $( "#speed_amount" ).html( speeds[ui.value] );
    }
  });

  $( "#music_slider" ).slider({
    min: 0,
    max: musics.length - 1,
    step: 1,
    slide: function( event, ui ) {
      $( "#music_amount" ).html( musics[ui.value] );
    }
  });

  $("#play").bind('click', function(){
    start();
    return false;
  });
});

window.addEventListener('keydown', function(e) {
  var code = (e.keyCode ? e.keyCode : e.which);

  switch (code) {
  case 13:
    start();
    break;
  case 38:
    console.log('up');
    break;
  case 40:
    console.log('down');
    break;
  }
});