var sliderAnzahl = 0 ;
var sliderAktuell = 0 ;
var sliderAlt = 0 ;
var sliderTimerSpeed = 0 ;
var sliderTimerID = 0 ;
var sliderSollenPfeileSichtber = 0 ;

function SliderAktivieren (){
 sliderTimerID = setInterval (SliderLoopStarten, sliderTimerSpeed) ;
}

function SliderLoopStarten (){
 sliderAlt = sliderAktuell ;
 sliderAktuell = sliderAktuell + 1 ;
 if (sliderAktuell == sliderAnzahl){
  sliderAktuell = 0 ;
 }
 document.getElementById('slide'+sliderAktuell).click() ;
 SliderPfeilePrufen () ;
}

function SliderPositionSetzen (sliderNeuePosition){
 clearInterval (sliderTimerID) ;
 sliderAktuell = sliderNeuePosition ;
 SliderPfeilePrufen () ;
 sliderTimerID = setInterval (SliderLoopStarten, sliderTimerSpeed) ;
}

function SliderPfeileUnterfunktion (sliderNeuePosition){
 sliderAktuell = sliderNeuePosition ;
 SliderPfeilePrufen () ;
}

function SliderPfeilGedruckt (sliderPfeil){
 clearInterval (sliderTimerID) ;
 if (sliderPfeil == 0){ // links
  if (sliderAktuell > 0){
   sliderAktuell-- ;
  }
 }
 else if (sliderPfeil == 1){ // rechts
  if (sliderAktuell < (sliderAnzahl - 1)){
   sliderAktuell = sliderAktuell + 1 ;
  }
 }

 document.getElementById('slide'+sliderAktuell).click() ;
 SliderPfeilePrufen () ;
}

function SliderPfeilePrufen (){
 if (sliderSollenPfeileSichtber){
  if (sliderAktuell == 0){
   document.getElementById('pfeilLinks').style.display = 'none' ;
  }
  else{
   document.getElementById('pfeilLinks').style.display = 'block' ;
  }
  if (sliderAktuell == (sliderAnzahl - 1)){ // letztes Bild
   document.getElementById('pfeilRechts').style.display = 'none' ;
  }
  else{
   document.getElementById('pfeilRechts').style.display = 'block' ;
  }
 }
}

// document.getElementById('sliderAktuell').innerHTML = sliderPfeil+' '+sliderAktuell+' '+sliderAnzahl ;