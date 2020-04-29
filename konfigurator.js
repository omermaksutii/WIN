document.onscroll = function (){
 var posRechts = 56 ;
// var posRechts = 0 ;
 var pos = window.pageYOffset ; 
 if (pos > posRechts){ 
  document.getElementById('linksDiv').style.top = pos + 'px' ; 
 }
 else{ 
  document.getElementById('linksDiv').style.top = posRechts + 'px' ; 
 }
}