$(function(){

$('#arrowgame1').on('click', function(){
  $('#accueil').css('display','none');
  $('#rules').css('display', 'flex');
})
$('#arrowgame2').on('click', function(){
  $('#rules').css('display','none');
  $('#carouselanais').css('display', 'flex');
})
$('#arrowgame3').on('click', function(){
  $('#carouselanais').css('display','none');
  $('#game').css('display', 'flex');
})
$('#btngame').on('click', function(){
  $('#accueil').css('display','none');
  $('#game').css('display', 'flex');
})
$('#logo1').on('click', function(){  
  $('#rules').css('display','none');
  $('#accueil').css('display', 'flex');
})
$('#logo2').on('click', function(){  
  $('#carouselanais').css('display','none');
  $('#accueil').css('display', 'flex');
})
$('#logo3').on('click', function(){  
  $('#game').css('display','none');
  $('#accueil').css('display', 'flex');
})



  $('#btngametwo').on('click', function(){
    var numberimg = Math.floor(Math.random() * 4 + 1)
    $('#gameimg').css('z-index',2);
    $('#btngametwo').css('z-index',-10);
    $('#choicepokemon').html('<img src="./assets/img/'+numberimg+'.png" alt="">');
  });

   function changepokemon(){
    var numberimg = Math.floor(Math.random() * 4 + 1)
    $('#choicepokemon').html('<img src="./assets/img/'+numberimg+'.png" alt="">');
  };

  function messagelooser(){

  }

  //$('.imgGame').on('click', function(){
  //});



 // Fonctin du jeu
  let wins = 0;
  let loses = 0;
  let ties = 0;



    $("#scissors").on('click', function(){
        var result = compare('scissors', computerChoice());
        $("#decision").html(result);
        if(result !="Le Pokémon s'est libéré. Apprends à viser, Tocard :("){
        changepokemon()}
      });
      
      $('#rock').on('click', function(){
        var result = compare('rock', computerChoice());
        $("#decision").html(result);
        if(result !="Le Pokémon s'est libéré. Apprends à viser, Tocard :("){
          changepokemon()}     
      });
      
      $('#paper').on('click', function(){
        var result = compare('paper', computerChoice());
        $("#decision").html(result);
        if(result !="Le Pokémon s'est libéré. Apprends à viser, Tocard :("){
          changepokemon()}
      });
      
     

      var compare = function(me, opponent) {
       
        let scoreWin = $('#wins');
        let scoreLose = $('#loses');
        let scoreTie = $('#ties');
               
        if(me === 'rock') {
        
            if(opponent === 'rock') {
              ties+=1;
              scoreTie.html('Pokémons Liberés : ' +ties);
              son1.play() 
              return "Le Pokémon s'est libéré. Apprends à viser, Tocard :(";
            } else if (opponent === 'paper') {
              loses+=1;
              scoreLose.html( 'Pokémons Echappés : ' + loses);
              son3.play()
              return "Le Pokémon s'est echappé. Gogole :(";
            } else if (opponent === 'scissors') {
              wins+=1;
              scoreWin.html( 'Pokémons Capturés : ' + wins);
              son2.play()
              return "C'est bien, t'as enfin réussi a le capturer. Gros Naze :)";
              }
          
        } else if (me === 'paper') {
          
            if(opponent === 'paper') {
              ties+=1;
              scoreTie.html('Pokémons Liberés : ' + ties);
              son1.play() 
              return "Le Pokémon s'est libéré. Apprends à viser, Tocard :(";
            } else if (opponent === 'rock') {
              loses+=1; 
              scoreLose.html( 'Pokémons Echappés : ' + loses);
              son3.play()
              return "Le Pokémon s'est echappé. Gogole :(";
            } else if (opponent === 'scissors') {
              wins+=1;
              scoreWin.html( 'Pokémons Capturés : ' + wins);
              son2.play()
              return "C'est bien, t'as enfin réussi a le capturer. Gros Naze :)";
          }
        } else if (me === 'scissors') {
          
            if(opponent === 'scissors') {
              ties+=1;
              scoreTie.html('Pokémons Liberés : ' + ties);
              son1.play() 
              return "Le Pokémon s'est libéré. Apprends à viser, Tocard :(";
            } else if (opponent === 'paper') {
              loses+=1;
              scoreLose.html( 'Pokémons Echappés : ' + loses);
              son3.play()
              return "Le Pokémon s'est echappé. Gogole :(";
            } else if (opponent === 'rock') {
              wins+=1;
              scoreWin.html( 'Pokémons Capturés : ' + wins);
              son2.play()
              return "C'est bien, t'as enfin réussi a le capturer. Gros Naze :)";
          }
        } else {
          return "Retourne travailler ton lancer"
        }
      
  };        
      var computerChoice = function() {
              var random = Math.random();
              if (random < 0.333) {
                return  'rock';
              } else if(random < 0.67777) {
                return 'paper';
              } else {
                return 'scissors';
              } 
      };
      $(function() {
  
        var slideCount =  $(".slider ul li").length;
        var slideWidth =  $(".slider ul li").width();
        var slideHeight =  $(".slider ul li").height();
        var slideUlWidth =  slideCount * slideWidth;
        
        $(".slider").css({"max-width":slideWidth, "height": slideHeight});
        $(".slider ul").css({"width":slideUlWidth, "margin-left": - slideWidth });
        $(".slider ul li:last-child").prependTo($(".slider ul"));
        
        function moveLeft() {
          $(".slider ul").stop().animate({
            left: + slideWidth
          },700, function() {
            $(".slider ul li:last-child").prependTo($(".slider ul"));
            $(".slider ul").css("left","");
          });
        }
        
        function moveRight() {
          $(".slider ul").stop().animate({
            left: - slideWidth
          },700, function() {
            $(".slider ul li:first-child").appendTo($(".slider ul"));
            $(".slider ul").css("left","");
          });
        }
        
        
        $(".next").on("click",function(){
          moveRight();
        });
        
        $(".prev").on("click",function(){
          moveLeft();
        });
        
        
      });
})

function playSound(){
  applause.play();
}

function playSound2(){
  applause2.play();
}
function playSound3(){
  applause3.play();
}
function playSound4(){
  applause4.play();
}
function playSound5(){
  applause5.play();
}
function playSound6(){
  applause6.play();
}
function playSound8(){
  applause8.play();
}
function playSound9(){
  son1.play();
}
function playSound10(){
  son2.play();
}
function playSound11(){
  son3.play();
}
$('#btngametwo').on('click', function(){
  var numberimg = Math.floor(Math.random() * 4 + 1)
  $('#gameimg').css('z-index',2);
  $('#btngametwo').css('z-index',-10);
  $('#choicepokemon').html('<img src="./assets/img/'+numberimg+'.png" alt="">');
});

// var scissorssound=document.getElementById('scissors');
// var papersound=document.getElementById('paper');
// var rocksound=document.getElementById('rock');

// scissorssound.addEventListener('click',function sound(){
//   console.log(result);
//   if (result=="Le Pokémon s'est libéré. Apprends à viser, Tocard! "){
//     son1.play() 
//     console.log(result);
//   } else if (result=="C'est bien, t'as enfin réussi a le capturer. Gros Naze :)"){
//     // son2.play()
//     console.log(result);
//   } else {
//     son3.play()
//     console.log(result);
//   }
// })
// papersound.addEventListener('click',function sound(){
//   if (result=="Le Pokémon s'est libéré. Apprends à viser, Tocard! "){
//     // son1.play() 
//   } else if (result=="C'est bien, t'as enfin réussi a le capturer. Gros Naze :)"){
//     son2.play()
//   } else {
//     // son3.play()
//   }
// })
// rocksound.addEventListener('click',function sound(){
//   if (result=="Le Pokémon s'est libéré. Apprends à viser, Tocard! "){
//     // son1.play() 
//   } else if (result=="C'est bien, t'as enfin réussi a le capturer. Gros Naze :)"){
//     // son2.play()
//   } else {
//     // son3.play()
//   }
// })