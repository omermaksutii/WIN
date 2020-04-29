var bilderSlayd = new Array ;
var bildAktuell = 0 ;
var bildAlt = 0 ;
var derTimer ;

function slaydTauschen (welcherSlayd){
 clearTimeout (derTimer) ;
 var anzahlBilder = bilderSlayd.length ;
 bildAktuell = welcherSlayd ;
 fade (document.getElementById('slaydBox')) ;
 markierungPrufen () ;
 bildAlt = bildAktuell ;
 var nxtBild = parseInt (bildAktuell) ;
 nxtBild++ ;
 if (nxtBild == anzahlBilder){
  nxtBild = 0 ;
 }
 derTimer = setTimeout ("slaydTauschen("+nxtBild+")", 4000) ;
}

function markierungPrufen (){
 document.getElementById('bildSlaydNaviMinis'+bildAlt).style.backgroundColor = 'transparent' ;
 document.getElementById('bildSlaydNaviMinis'+bildAlt).style.border = '1px solid #282828' ;
 document.getElementById('bildSlaydNaviMinis'+bildAktuell).style.border = '1px solid #fff' ;
 document.getElementById('bildSlaydNaviMinis'+bildAktuell).style.backgroundColor = '#282828' ;
}

function fade (element){
 var op = 1 ;
 var timer = setInterval (function (){
  if (op <= 0.1){
   clearInterval (timer) ;
   document.getElementById('slaydBox').src = bilderSlayd[bildAktuell] ;
   unfade (document.getElementById('slaydBox')) ;
  }
  element.style.opacity = op ;
  element.style.filter = 'alpha(opacity=' + op * 100 + ")" ;
  op -= op * 0.1 ;
 }, 5) ;
}

function unfade(element) {
 var op = 0.1 ;
 var timer = setInterval (function (){
  if (op >= 1){
   clearInterval (timer) ;
  }
  element.style.opacity = op ;
  element.style.filter = 'alpha(opacity=' + op * 100 + ")" ;
  op += op * 0.1 ;
 }, 5) ;
}

function sliceWechseln (slice){
 if (slice == 0){
  document.getElementById('slice1').style.display = 'block' ;
  document.getElementById('slice2').style.display = 'none' ;
 }
 else if (slice == 1){
  document.getElementById('slice1').style.display = 'none' ;
  document.getElementById('slice2').style.display = 'block' ;
 }
}