// console.log(produktArt) ;

/*
 // nur wegen SKRZYDLO_DOK DO OKNA2000 tomputer, kann nach Okna2000 gelöscht werden
 if ((document.getElementById('ID_SKRZYDLO_DOK_'+iFunktionId)) && (document.getElementById('infoID'+iFunktionId).innerHTML)){
  document.getElementById('ID_SKRZYDLO_DOK_'+iFunktionId).value = document.getElementById('infoID'+iFunktionId).innerHTML ;
 }
 // bis hier
*/

var istOberLicht = 0 ;
var istUnterLicht = 0 ;
var oberLichtAnzahlGriffe = 0 ;
var unterLichtAnzahlGriffe = 0 ;
var oberLichtAnzahlFlugelReal = 0 ;
var unterLichtAnzahlFlugelReal = 0 ;
var maxBreiteWegenLicht = 0 ;
var minBreiteWegenLicht = 0 ;

var rabat_prozente = 0 ;

var rolloKastenHohe = 0 ;
var rollo_aufpreis_value = 0 ;
var rolloMarkierungArray = new Array ;
var rolloID_Global = 0 ;

var hersteller_id = 0 ;
var produkt_aufpreis_value = 0 ;

var preisTabelle = new Array ;
var farbenAussenArray = new Array ;
var farbenInnenArray = new Array ;
var reihenfolgeAufbau = new Array ;
var verbreiterungArray = new Array ;

var preisTabelleOberLicht = new Array ;
var preisTabelleUnterLicht = new Array ;

var preistabelle_170_ohne = new Array ;
var preistabelle_210_ohne = new Array ;
var preistabelle_240_ohne = new Array ;
var preistabelle_170_mit = new Array ;
var preistabelle_210_mit = new Array ;
var preistabelle_240_mit = new Array ;
var preistabelle_215_drutex_ohne = new Array ;
var preistabelle_215_drutex_mit = new Array ;

var preistabelle_170_drutex_ohne = new Array ;
var preistabelle_170_drutex_mit = new Array ;

var preistabelle_225_drutex_ohne = new Array ;
var preistabelle_225_drutex_mit = new Array ;

var aufpreis_170_ohne = 0 ;
var aufpreis_210_ohne = 0 ;
var aufpreis_215_drutex_ohne = 0 ;
var aufpreis_240_ohne = 0 ;
var aufpreis_170_mit = 0 ;
var aufpreis_210_mit = 0 ;
var aufpreis_215_drutex_mit = 0 ;
var aufpreis_240_mit = 0 ;

var aufpreis_225_drutex_ohne = 0 ;
var aufpreis_225_drutex_mit = 0 ;

var aufpreis_170_drutex_ohne = 0 ;
var aufpreis_170_drutex_mit = 0 ;

var preisAusPreistabelle = 0 ;
var farbeAufpreis = 0 ;
var iBreite = 0 ;
var iHohe = 0 ;
var iUmfang = 0 ;
var iM2 = 0 ;
var produkt_anzahl_flugel = 0 ;
var produkt_anzahl_flugel_echt = 0 ;
var produkt_anzahl_griffe = 0 ;
var farbeAussenAufpreis = 0 ;
var farbeInnenAufpreis = 0 ;
var farbeAussenID = 0 ;
var farbeInnenID = 0 ;
var verglasungID = 0 ;
var verglasungAufpreis = 0 ;
var glasartAufpreis = 0 ;
var dichtungInnenAufpreis = 0 ;
var dichtungAussenAufpreis = 0 ;
var sicherheitsglasAussenAufpreis = 0 ;
var sicherheitsglasInnenAufpreis = 0 ;
var griffAufpreis = 0 ;
var beschlagAufpreis = 0 ;
var lochAufpreis = 0 ;
var anschlussprofilAufpreis = 0 ;
var lufterAufpreis = 0 ;
var falzAufpreis = 0 ;
var entwaesserungAufpreis = 0 ;
var turgriffAussenAufpreis = 0 ;
var rollladenAufpreis = 0 ;
var kastenOhneAufpreis = 0 ;
var kastenMitAufpreis = 0 ;
var gurtwicklerAufpreis = 0 ;
var antriebAufpreis = 0 ;
var panzerfarbeAufpreis = 0 ;
var putzschieneAufpreis = 0 ;
var fernbedienungAufpreis = 0 ;
var steuereinheitAufpreis = 0 ;
var sprossenAufpreis = 0 ;
var sprossenTypAufpreis = 0 ;
var sprossenBreiteInnenliegendeAufpreis = 0 ;
var sprossenBreiteAufgeklebteAufpreis = 0 ;
var sprossenBreiteWinnerAufpreis = 0 ;
var schwelleAufpreis = 0 ;
var futterPVCAufpreis = 0 ;
var futterPVCFarbeAufpreis = 0 ;
var futterAluArtenAufpreis = 0 ;
var futterAluOhneFlugelUberdeckendAufpreis = 0 ;
var futterAluAussenFlugelUberdeckendAufpreis = 0 ;
var futterAluAussenInnenFlugelUberdeckendAufpreis = 0 ;

var schallsicherAufpreis = 0 ;

var istDebugger = 0 ;

var materialID = 0 ;

var umrechnungsFaktor = 0 ;
var MWSteuer = 0 ;
var gewinnProzent = 0 ;

var rollladenDabei = 0 ;

var dichtungInnenImgAlt = 0 ;
var dichtungAussenImgAlt = 0 ;
var farbeAussenImgAlt = 0 ;
var farbeInnenImgAlt = 0 ;
var verglasungImgAlt = 0 ;
var glasartImgAlt = 0 ;
var sicherheitsglasAussenImgAlt = 0 ;
var sicherheitsglasInnenImgAlt = 0 ;
var griffImgAlt = 0 ;
var beschlagImgAlt = 0 ;
var lochImgAlt = 0 ;
var anschlussprofilImgAlt = 0 ;
var lufterImgAlt = 0 ;
var falzImgAlt = 0 ;
var entwaesserungImgAlt = 0 ;
// var verbreiterungLinksImgAlt = 0 ;
// var verbreiterungRechtsImgAlt = 0 ;
// var verbreiterungObenImgAlt = 0 ;
// var verbreiterungUntenImgAlt = 0 ;
var turgriffAussenImgAlt = 0 ;
var rollladenImgAlt = 0 ;
var kastenOhneImgAlt = 0 ;
var kastenMitImgAlt = 0 ;
var gurtwicklerImgAlt = 0 ;
var antriebImgAlt = 0 ;
var panzerfarbeImgAlt = 0 ;
var putzschieneImgAlt = 0 ;
var fernbedienungImgAlt = 0 ;
var steuereinheitImgAlt = 0 ;
var sprossenImgAlt = 0 ;
var sprossenTypImgAlt = 0 ;
var sprossenBreiteInnenliegendeImgAlt = 0 ;
var sprossenBreiteAufgeklebteImgAlt = 0 ;
var sprossenBreiteWinnerImgAlt = 0 ;
var schwelleImgAlt = 0 ;
var futterPVCImgAlt = 0 ;
var futterAluArtenImgAlt = 0 ;
var futterAluOhneFlugelUberdeckendImgAlt = 0 ;
var futterAluAussenFlugelUberdeckendImgAlt = 0 ;
var futterAluAussenInnenFlugelUberdeckendImgAlt = 0 ;

var schallsicherImgAlt = 0 ;

var aendern_txt = '' ;
var zu_txt = '' ;
var max_breite_txt = '' ;
var min_breite_txt = '' ;
var max_hohe_txt = '' ;
var min_hohe_txt = '' ;
var breite_und_hohe_eingeben = '' ;
var maximale_hohe_wurde_gesetzt_txt = '' ;
var maximale_breite_wurde_gesetzt_txt = '' ;
var minimale_hohe_wurde_gesetzt_txt = '' ;
var minimale_breite_wurde_gesetzt_txt = '' ;
var falsche_breite_eingegeben_txt = '' ;
var falsche_hohe_eingegeben_txt = '' ;
var falsche_laenge_eingegeben_txt = '' ;
var minimale_laenge_wurde_gesetzt_txt = '' ;
var maximale_laenge_wurde_gesetzt_txt = '' ;
var ok_txt = '' ;
var httpAusgabe = '' ;

var minimale_hohe_wurde_gesetzt_oberlicht_txt = '' ;
var falsche_hohe_eingegeben_unterlicht_txt = '' ;
var minimale_hohe_wurde_gesetzt_unterlicht_txt = '' ;
var falsche_hohe_eingegeben_oberlicht_txt = '' ;
var maximale_hohe_wurde_gesetzt_oberlicht_txt = '' ;
var falsche_hohe_eingegeben_unterlicht_txt = '' ;
var maximale_hohe_wurde_gesetzt_unterlicht_txt = '' ;

var rolladenInfoObenKeine_txt = '' ;
var rolladenInfoOben_txt = '' ;

var minimaleBreiteBetragt = '' ;
var minimaleHoheBetragt = '' ;
var maximaleBreiteBetragt = '' ;
var maximaleHoheBetragt = '' ;

var fehlende_angabe_txt = '' ;
var bei_der_Lieferadresse_txt ='' ;
var bitte_txt = '' ;
var angeben_txt = '' ;
var name_txt = '' ;
var vorname_txt = '' ;
var email_txt = '' ;
var telefon_txt = '' ;
var strasse_txt = '' ;
var plz_txt = '' ;
var ort_txt = '' ;
var fehlende_agb_txt = '' ;
var bitte_zahlungsart_auswahlen_txt = '' ;
var Vorgangsnr_txt = '' ;
var Position_txt = '' ;
var Mass_txt = '' ;
var Maengeln_txt = '' ;
var nachrichtfeld_ist_leer = '' ;

var test_bestellung_txt = '' ;
var test_bestellung_wird_nicht_realisiert_txt = '' ;
var kontakt_thomas = '' ;

var produktTyp = '' ;
var produktSystem = '' ;
var produktArt = '' ;
var produktMaterial = '' ;
var produktBezeichnung = '' ;
var weiterKnopfKaufenID = '' ;
var weiterKnopfKaufenText = '' ;
var keineText = '' ;
var linksText = '' ;
var rechtsText = '' ;
var obenText = '' ;
var untenText = '' ;
var rollladenResetenInhalt = '' ;
var rollladenResetenUberschrift = '' ;

var produktSystemFurSonderAufpreis = '' ;
var produktArtFurSonderAufpreis = '' ;

var rollladenNameKeine = '' ;
var rollladenNameOhne = '' ;
var rollladenNameMit = '' ;
var kastenNameOhne170 = '' ;
var kastenNameOhne210 = '' ;
var kastenNameOhne240 = '' ;
var kastenNameMit170 = '' ;
var kastenNameMit210 = '' ;
var kastenNameMit240 = '' ;

var kastenNameOhne215drutex = '' ;
var kastenNameMit215drutex = '' ;
var kastenNameOhne170drutex = '' ;
var kastenNameMit170drutex = '' ;
var kastenNameOhne225drutex = '' ;
var kastenNameMit225drutex = '' ;

var verbreiterungLinksAnzahl = 0 ;
var verbreiterungRechtsAnzahl = 0 ;
var verbreiterungObenAnzahl = 0 ;
var verbreiterungUntenAnzahl = 0 ;

var divBreite = 0 ;
var breiteMasseTD = 0 ;

var anzahlHauptMenuEintrage = 0 ;

window.addEventListener ('resize', fensterGrosseGeendert) ;

function VerglasungSchallSicherGrafikenTauschen (auswahlVerglasung){
// console.log (produktBezeichnung) ;
 var dB = '' ;
 var dieEndung = '' ;
 if ((produktSystem == 'Iglo 5 Classic') || (produktSystem == 'Iglo 5') || (produktSystem == 'Softline 68') || (produktSystem == 'Softline 78') || (produktSystem == 'Softline 88') || (produktSystem == 'Duoline 68') || (produktSystem == 'Duoline 78') || (produktSystem == 'Duoline 88') || (produktSystem == 'MB 45') || (produktSystem == 'MB 70') || (produktSystem == 'MB 70 HI') || (produktSystem == 'Streamline 76') || (produktSystem == 'Ideal 4000') || (produktSystem == 'Ideal 5000')){
  var auswahlIstEins = 1 ;
 }
 
 if (auswahlIstEins){
  dieEndung = '_drutex' ;
 }
 else{
  dieEndung = '_ekookna' ;
 }

 if ((auswahlVerglasung == 0) || (auswahlVerglasung == 6)){ // 1te auswahl, 2fach
  if (document.getElementById('imgProduktHaupt_102_0')){
   if (auswahlIstEins){
    dB = '31' ;
   }
   else{
    dB = '35' ;
   }
   document.getElementById('imgProduktHaupt_102_0').src = 'bilder/produkte/Schallsicher/4x4_alu'+dieEndung+'.jpg' ;
   document.getElementById('divSchallSchutzAnzeige_0').innerHTML = 'Schallschutz <font class=schallsicher_blau>'+dB+'</font> dB' ;
  }
  if (document.getElementById('imgProduktHaupt_102_1')){
   if (auswahlIstEins){
    dB = '39' ;
   }
   else{
    dB = '41' ;
   }
   document.getElementById('imgProduktHaupt_102_1').src = 'bilder/produkte/Schallsicher/4x6_alu'+dieEndung+'.jpg' ;
   document.getElementById('divSchallSchutzAnzeige_1').innerHTML = 'Schallschutz <font class=schallsicher_blau>'+dB+'</font> dB' ;
  }
  if (document.getElementById('imgProduktHaupt_102_2')){
   if (auswahlIstEins){
    dB = '41' ;
   }
   else{
    dB = '39' ;
   }
   document.getElementById('imgProduktHaupt_102_2').src = 'bilder/produkte/Schallsicher/4x8_alu'+dieEndung+'.jpg' ;
   document.getElementById('divSchallSchutzAnzeige_2').innerHTML = 'Schallschutz <font class=schallsicher_blau>'+dB+'</font> dB' ;
  }
  if (document.getElementById('imgProduktHaupt_102_3')){
   if (auswahlIstEins){
    dB = '39' ;
   }
   else{
    dB = '41' ;
   }
   document.getElementById('imgProduktHaupt_102_3').src = 'bilder/produkte/Schallsicher/6x4_alu'+dieEndung+'.jpg' ;
   document.getElementById('divSchallSchutzAnzeige_3').innerHTML = 'Schallschutz <font class=schallsicher_blau>'+dB+'</font> dB' ;
  }
  if (document.getElementById('imgProduktHaupt_102_4')){
   if (auswahlIstEins){
    dB = '40' ;
   }
   else{
    dB = '40' ;
   }
   document.getElementById('imgProduktHaupt_102_4').src = 'bilder/produkte/Schallsicher/6x6_alu'+dieEndung+'.jpg' ;
   document.getElementById('divSchallSchutzAnzeige_4').innerHTML = 'Schallschutz <font class=schallsicher_blau>'+dB+'</font> dB' ;
  }
  if (document.getElementById('imgProduktHaupt_102_5')){
   if (auswahlIstEins){
    dB = '41' ;
   }
   else{
    dB = '43' ;
   }
   document.getElementById('imgProduktHaupt_102_5').src = 'bilder/produkte/Schallsicher/6x8_alu'+dieEndung+'.jpg' ;
   document.getElementById('divSchallSchutzAnzeige_5').innerHTML = 'Schallschutz <font class=schallsicher_blau>'+dB+'</font> dB' ;
  }
  if (document.getElementById('imgProduktHaupt_102_6')){
   if (auswahlIstEins){
    dB = '41' ;
   }
   else{
    dB = '40' ;
   }
   document.getElementById('imgProduktHaupt_102_6').src = 'bilder/produkte/Schallsicher/8x4_alu'+dieEndung+'.jpg' ;
   document.getElementById('divSchallSchutzAnzeige_6').innerHTML = 'Schallschutz <font class=schallsicher_blau>'+dB+'</font> dB' ;
  }
  if (document.getElementById('imgProduktHaupt_102_7')){
   if (auswahlIstEins){
    dB = '41' ;
   }
   else{
    dB = '43' ;
   }
   document.getElementById('imgProduktHaupt_102_7').src = 'bilder/produkte/Schallsicher/8x6_alu'+dieEndung+'.jpg' ;
   document.getElementById('divSchallSchutzAnzeige_7').innerHTML = 'Schallschutz <font class=schallsicher_blau>'+dB+'</font> dB' ;
  }
  if (document.getElementById('imgProduktHaupt_102_8')){
   if (auswahlIstEins){
    dB = '41' ;
   }
   else{
    dB = '40' ;
   }
   document.getElementById('imgProduktHaupt_102_8').src = 'bilder/produkte/Schallsicher/8x8_alu'+dieEndung+'.jpg' ;
   document.getElementById('divSchallSchutzAnzeige_8').innerHTML = 'Schallschutz <font class=schallsicher_blau>'+dB+'</font> dB' ;
  }
 }
 else if ((auswahlVerglasung == 1) || (auswahlVerglasung == 7)){ // 2te auswahl, 2fach warm
  if (document.getElementById('imgProduktHaupt_102_0')){
   if (auswahlIstEins){
    dB = '31' ;
   }
   else{
    dB = '35' ;
   }
   document.getElementById('imgProduktHaupt_102_0').src = 'bilder/produkte/Schallsicher/4x4_plastik'+dieEndung+'.jpg' ;
   document.getElementById('divSchallSchutzAnzeige_0').innerHTML = 'Schallschutz <font class=schallsicher_blau>'+dB+'</font> dB' ;
  }
  if (document.getElementById('imgProduktHaupt_102_1')){
   if (auswahlIstEins){
    dB = '39' ;
   }
   else{
    dB = '41' ;
   }
   document.getElementById('imgProduktHaupt_102_1').src = 'bilder/produkte/Schallsicher/4x6_plastik'+dieEndung+'.jpg' ;
   document.getElementById('divSchallSchutzAnzeige_1').innerHTML = 'Schallschutz <font class=schallsicher_blau>'+dB+'</font> dB' ;
  }
  if (document.getElementById('imgProduktHaupt_102_2')){
   if (auswahlIstEins){
    dB = '41' ;
   }
   else{
    dB = '39' ;
   }
   document.getElementById('imgProduktHaupt_102_2').src = 'bilder/produkte/Schallsicher/4x8_plastik'+dieEndung+'.jpg' ;
   document.getElementById('divSchallSchutzAnzeige_2').innerHTML = 'Schallschutz <font class=schallsicher_blau>'+dB+'</font> dB' ;
  }
  if (document.getElementById('imgProduktHaupt_102_3')){
   if (auswahlIstEins){
    dB = '39' ;
   }
   else{
    dB = '41' ;
   }
   document.getElementById('imgProduktHaupt_102_3').src = 'bilder/produkte/Schallsicher/6x4_plastik'+dieEndung+'.jpg' ;
   document.getElementById('divSchallSchutzAnzeige_3').innerHTML = 'Schallschutz <font class=schallsicher_blau>'+dB+'</font> dB' ;
  }
  if (document.getElementById('imgProduktHaupt_102_4')){
   if (auswahlIstEins){
    dB = '40' ;
   }
   else{
    dB = '40' ;
   }
   document.getElementById('imgProduktHaupt_102_4').src = 'bilder/produkte/Schallsicher/6x6_plastik'+dieEndung+'.jpg' ;
   document.getElementById('divSchallSchutzAnzeige_4').innerHTML = 'Schallschutz <font class=schallsicher_blau>'+dB+'</font> dB' ;
  }
  if (document.getElementById('imgProduktHaupt_102_5')){
   if (auswahlIstEins){
    dB = '41' ;
   }
   else{
    dB = '43' ;
   }
   document.getElementById('imgProduktHaupt_102_5').src = 'bilder/produkte/Schallsicher/6x8_plastik'+dieEndung+'.jpg' ;
   document.getElementById('divSchallSchutzAnzeige_5').innerHTML = 'Schallschutz <font class=schallsicher_blau>'+dB+'</font> dB' ;
  }
  if (document.getElementById('imgProduktHaupt_102_6')){
   if (auswahlIstEins){
    dB = '41' ;
   }
   else{
    dB = '40' ;
   }
   document.getElementById('imgProduktHaupt_102_6').src = 'bilder/produkte/Schallsicher/8x4_plastik'+dieEndung+'.jpg' ;
   document.getElementById('divSchallSchutzAnzeige_6').innerHTML = 'Schallschutz <font class=schallsicher_blau>'+dB+'</font> dB' ;
  }
  if (document.getElementById('imgProduktHaupt_102_7')){
   if (auswahlIstEins){
    dB = '41' ;
   }
   else{
    dB = '43' ;
   }
   document.getElementById('imgProduktHaupt_102_7').src = 'bilder/produkte/Schallsicher/8x6_plastik'+dieEndung+'.jpg' ;
   document.getElementById('divSchallSchutzAnzeige_7').innerHTML = 'Schallschutz <font class=schallsicher_blau>'+dB+'</font> dB' ;
  }
  if (document.getElementById('imgProduktHaupt_102_8')){
   if (auswahlIstEins){
    dB = '41' ;
   }
   else{
    dB = '40' ;
   }
   document.getElementById('imgProduktHaupt_102_8').src = 'bilder/produkte/Schallsicher/8x8_plastik'+dieEndung+'.jpg' ;
   document.getElementById('divSchallSchutzAnzeige_8').innerHTML = 'Schallschutz <font class=schallsicher_blau>'+dB+'</font> dB' ;
  }
 }
 else if ((auswahlVerglasung == 2) || (auswahlVerglasung == 8)){ // 3te auswahl, 3fach
  if (document.getElementById('imgProduktHaupt_102_0')){
   if (auswahlIstEins){
    dB = '34' ;
   }
   else{
    dB = '37' ;
   }
   document.getElementById('imgProduktHaupt_102_0').src = 'bilder/produkte/Schallsicher/4x4x4_alu'+dieEndung+'.jpg' ;
   document.getElementById('divSchallSchutzAnzeige_0').innerHTML = 'Schallschutz <font class=schallsicher_blau>'+dB+'</font> dB' ;
  }
  if (document.getElementById('imgProduktHaupt_102_1')){
   if (auswahlIstEins){
    dB = '39' ;
   }
   else{
    dB = '41' ;
   }
   document.getElementById('imgProduktHaupt_102_1').src = 'bilder/produkte/Schallsicher/4x4x6_alu'+dieEndung+'.jpg' ;
   document.getElementById('divSchallSchutzAnzeige_1').innerHTML = 'Schallschutz <font class=schallsicher_blau>'+dB+'</font> dB' ;
  }
  if (document.getElementById('imgProduktHaupt_102_2')){
   if (auswahlIstEins){
    dB = '41' ;
   }
   else{
    dB = '39' ;
   }
   document.getElementById('imgProduktHaupt_102_2').src = 'bilder/produkte/Schallsicher/4x4x8_alu'+dieEndung+'.jpg' ;
   document.getElementById('divSchallSchutzAnzeige_2').innerHTML = 'Schallschutz <font class=schallsicher_blau>'+dB+'</font> dB' ;
  }
  if (document.getElementById('imgProduktHaupt_102_3')){
   if (auswahlIstEins){
    dB = '39' ;
   }
   else{
    dB = '41' ;
   }
   document.getElementById('imgProduktHaupt_102_3').src = 'bilder/produkte/Schallsicher/6x4x4_alu'+dieEndung+'.jpg' ;
   document.getElementById('divSchallSchutzAnzeige_3').innerHTML = 'Schallschutz <font class=schallsicher_blau>'+dB+'</font> dB' ;
  }
  if (document.getElementById('imgProduktHaupt_102_4')){
   if (auswahlIstEins){
    dB = '40' ;
   }
   else{
    dB = '40' ;
   }
   document.getElementById('imgProduktHaupt_102_4').src = 'bilder/produkte/Schallsicher/6x4x6_alu'+dieEndung+'.jpg' ;
   document.getElementById('divSchallSchutzAnzeige_4').innerHTML = 'Schallschutz <font class=schallsicher_blau>'+dB+'</font> dB' ;
  }
  if (document.getElementById('imgProduktHaupt_102_5')){
   if (auswahlIstEins){
    dB = '41' ;
   }
   else{
    dB = '43' ;
   }
   document.getElementById('imgProduktHaupt_102_5').src = 'bilder/produkte/Schallsicher/6x4x8_alu'+dieEndung+'.jpg' ;
   document.getElementById('divSchallSchutzAnzeige_5').innerHTML = 'Schallschutz <font class=schallsicher_blau>'+dB+'</font> dB' ;
  }
  if (document.getElementById('imgProduktHaupt_102_6')){
   if (auswahlIstEins){
    dB = '41' ;
   }
   else{
    dB = '40' ;
   }
   document.getElementById('imgProduktHaupt_102_6').src = 'bilder/produkte/Schallsicher/8x4x4_alu'+dieEndung+'.jpg' ;
   document.getElementById('divSchallSchutzAnzeige_6').innerHTML = 'Schallschutz <font class=schallsicher_blau>'+dB+'</font> dB' ;
  }
  if (document.getElementById('imgProduktHaupt_102_7')){
   if (auswahlIstEins){
    dB = '41' ;
   }
   else{
    dB = '43' ;
   }
   document.getElementById('imgProduktHaupt_102_7').src = 'bilder/produkte/Schallsicher/8x4x6_alu'+dieEndung+'.jpg' ;
   document.getElementById('divSchallSchutzAnzeige_7').innerHTML = 'Schallschutz <font class=schallsicher_blau>'+dB+'</font> dB' ;
  }
  if (document.getElementById('imgProduktHaupt_102_8')){
   if (auswahlIstEins){
    dB = '41' ;
   }
   else{
    dB = '40' ;
   }
   document.getElementById('imgProduktHaupt_102_8').src = 'bilder/produkte/Schallsicher/8x4x8_alu'+dieEndung+'.jpg' ;
   document.getElementById('divSchallSchutzAnzeige_8').innerHTML = 'Schallschutz <font class=schallsicher_blau>'+dB+'</font> dB' ;
  }
 }
 else if ((auswahlVerglasung == 3) || (auswahlVerglasung == 9)){ // 4te auswahl, 3fach warm
  if (document.getElementById('imgProduktHaupt_102_0')){
   if (auswahlIstEins){
    dB = '34' ;
   }
   else{
    dB = '37' ;
   }
   document.getElementById('imgProduktHaupt_102_0').src = 'bilder/produkte/Schallsicher/4x4x4_plastik'+dieEndung+'.jpg' ;
   document.getElementById('divSchallSchutzAnzeige_0').innerHTML = 'Schallschutz <font class=schallsicher_blau>'+dB+'</font> dB' ;
  }
  if (document.getElementById('imgProduktHaupt_102_1')){
   if (auswahlIstEins){
    dB = '39' ;
   }
   else{
    dB = '41' ;
   }
   document.getElementById('imgProduktHaupt_102_1').src = 'bilder/produkte/Schallsicher/4x4x6_plastik'+dieEndung+'.jpg' ;
   document.getElementById('divSchallSchutzAnzeige_1').innerHTML = 'Schallschutz <font class=schallsicher_blau>'+dB+'</font> dB' ;
  }
  if (document.getElementById('imgProduktHaupt_102_2')){
   if (auswahlIstEins){
    dB = '41' ;
   }
   else{
    dB = '39' ;
   }
   document.getElementById('imgProduktHaupt_102_2').src = 'bilder/produkte/Schallsicher/4x4x8_plastik'+dieEndung+'.jpg' ;
   document.getElementById('divSchallSchutzAnzeige_2').innerHTML = 'Schallschutz <font class=schallsicher_blau>'+dB+'</font> dB' ;
  }
  if (document.getElementById('imgProduktHaupt_102_3')){
   if (auswahlIstEins){
    dB = '39' ;
   }
   else{
    dB = '41' ;
   }
   document.getElementById('imgProduktHaupt_102_3').src = 'bilder/produkte/Schallsicher/6x4x4_plastik'+dieEndung+'.jpg' ;
   document.getElementById('divSchallSchutzAnzeige_3').innerHTML = 'Schallschutz <font class=schallsicher_blau>'+dB+'</font> dB' ;
  }
  if (document.getElementById('imgProduktHaupt_102_4')){
   if (auswahlIstEins){
    dB = '40' ;
   }
   else{
    dB = '40' ;
   }
   document.getElementById('imgProduktHaupt_102_4').src = 'bilder/produkte/Schallsicher/6x4x6_plastik'+dieEndung+'.jpg' ;
   document.getElementById('divSchallSchutzAnzeige_4').innerHTML = 'Schallschutz <font class=schallsicher_blau>'+dB+'</font> dB' ;
  }
  if (document.getElementById('imgProduktHaupt_102_5')){
   if (auswahlIstEins){
    dB = '41' ;
   }
   else{
    dB = '43' ;
   }
   document.getElementById('imgProduktHaupt_102_5').src = 'bilder/produkte/Schallsicher/6x4x8_plastik'+dieEndung+'.jpg' ;
   document.getElementById('divSchallSchutzAnzeige_5').innerHTML = 'Schallschutz <font class=schallsicher_blau>'+dB+'</font> dB' ;
  }
  if (document.getElementById('imgProduktHaupt_102_6')){
   if (auswahlIstEins){
    dB = '41' ;
   }
   else{
    dB = '40' ;
   }
   document.getElementById('imgProduktHaupt_102_6').src = 'bilder/produkte/Schallsicher/8x4x4_plastik'+dieEndung+'.jpg' ;
   document.getElementById('divSchallSchutzAnzeige_6').innerHTML = 'Schallschutz <font class=schallsicher_blau>'+dB+'</font> dB' ;
  }
  if (document.getElementById('imgProduktHaupt_102_7')){
   if (auswahlIstEins){
    dB = '41' ;
   }
   else{
    dB = '43' ;
   }
   document.getElementById('imgProduktHaupt_102_7').src = 'bilder/produkte/Schallsicher/8x4x6_plastik'+dieEndung+'.jpg' ;
   document.getElementById('divSchallSchutzAnzeige_7').innerHTML = 'Schallschutz <font class=schallsicher_blau>'+dB+'</font> dB' ;
  }
  if (document.getElementById('imgProduktHaupt_102_8')){
   if (auswahlIstEins){
    dB = '41' ;
   }
   else{
    dB = '40' ;
   }
   document.getElementById('imgProduktHaupt_102_8').src = 'bilder/produkte/Schallsicher/8x4x8_plastik'+dieEndung+'.jpg' ;
   document.getElementById('divSchallSchutzAnzeige_8').innerHTML = 'Schallschutz <font class=schallsicher_blau>'+dB+'</font> dB' ;
  }
 }
}

function VerglasungSchallSicherGrafikenTauschenALT (auswahlVerglasung){
// console.log (produktBezeichnung) ;
 var dB = '' ;
 var dieEndung = '' ;
 if (hersteller_id == 1){ // drutex
  dieEndung = '_drutex' ;
 }
 else if ((hersteller_id == 2) || (hersteller_id == 3)){ // aluplast, salamander
  dieEndung = '_ekookna' ;
 }

 if ((auswahlVerglasung == 0) || (auswahlVerglasung == 6)){ // 1te auswahl, 2fach
  if (document.getElementById('imgProduktHaupt_102_0')){
   if (hersteller_id == 1){ // drutex
    dB = '31' ;
   }
   else if ((hersteller_id == 2) || (hersteller_id == 3)){ // aluplast, salamander
    dB = '35' ;
   }
   document.getElementById('imgProduktHaupt_102_0').src = 'bilder/produkte/Schallsicher/4x4_alu'+dieEndung+'.jpg' ;
   document.getElementById('divSchallSchutzAnzeige_0').innerHTML = 'Schallschutz <font class=schallsicher_blau>'+dB+'</font> dB' ;
  }
  if (document.getElementById('imgProduktHaupt_102_1')){
   if (hersteller_id == 1){ // drutex
    dB = '39' ;
   }
   else if ((hersteller_id == 2) || (hersteller_id == 3)){ // aluplast, salamander
    dB = '41' ;
   }
   document.getElementById('imgProduktHaupt_102_1').src = 'bilder/produkte/Schallsicher/4x6_alu'+dieEndung+'.jpg' ;
   document.getElementById('divSchallSchutzAnzeige_1').innerHTML = 'Schallschutz <font class=schallsicher_blau>'+dB+'</font> dB' ;
  }
  if (document.getElementById('imgProduktHaupt_102_2')){
   if (hersteller_id == 1){ // drutex
    dB = '41' ;
   }
   else if ((hersteller_id == 2) || (hersteller_id == 3)){ // aluplast, salamander
    dB = '39' ;
   }
   document.getElementById('imgProduktHaupt_102_2').src = 'bilder/produkte/Schallsicher/4x8_alu'+dieEndung+'.jpg' ;
   document.getElementById('divSchallSchutzAnzeige_2').innerHTML = 'Schallschutz <font class=schallsicher_blau>'+dB+'</font> dB' ;
  }
  if (document.getElementById('imgProduktHaupt_102_3')){
   if (hersteller_id == 1){ // drutex
    dB = '39' ;
   }
   else if ((hersteller_id == 2) || (hersteller_id == 3)){ // aluplast, salamander
    dB = '41' ;
   }
   document.getElementById('imgProduktHaupt_102_3').src = 'bilder/produkte/Schallsicher/6x4_alu'+dieEndung+'.jpg' ;
   document.getElementById('divSchallSchutzAnzeige_3').innerHTML = 'Schallschutz <font class=schallsicher_blau>'+dB+'</font> dB' ;
  }
  if (document.getElementById('imgProduktHaupt_102_4')){
   if (hersteller_id == 1){ // drutex
    dB = '40' ;
   }
   else if ((hersteller_id == 2) || (hersteller_id == 3)){ // aluplast, salamander
    dB = '40' ;
   }
   document.getElementById('imgProduktHaupt_102_4').src = 'bilder/produkte/Schallsicher/6x6_alu'+dieEndung+'.jpg' ;
   document.getElementById('divSchallSchutzAnzeige_4').innerHTML = 'Schallschutz <font class=schallsicher_blau>'+dB+'</font> dB' ;
  }
  if (document.getElementById('imgProduktHaupt_102_5')){
   if (hersteller_id == 1){ // drutex
    dB = '41' ;
   }
   else if ((hersteller_id == 2) || (hersteller_id == 3)){ // aluplast, salamander
    dB = '43' ;
   }
   document.getElementById('imgProduktHaupt_102_5').src = 'bilder/produkte/Schallsicher/6x8_alu'+dieEndung+'.jpg' ;
   document.getElementById('divSchallSchutzAnzeige_5').innerHTML = 'Schallschutz <font class=schallsicher_blau>'+dB+'</font> dB' ;
  }
  if (document.getElementById('imgProduktHaupt_102_6')){
   if (hersteller_id == 1){ // drutex
    dB = '41' ;
   }
   else if ((hersteller_id == 2) || (hersteller_id == 3)){ // aluplast, salamander
    dB = '40' ;
   }
   document.getElementById('imgProduktHaupt_102_6').src = 'bilder/produkte/Schallsicher/8x4_alu'+dieEndung+'.jpg' ;
   document.getElementById('divSchallSchutzAnzeige_6').innerHTML = 'Schallschutz <font class=schallsicher_blau>'+dB+'</font> dB' ;
  }
  if (document.getElementById('imgProduktHaupt_102_7')){
   if (hersteller_id == 1){ // drutex
    dB = '41' ;
   }
   else if ((hersteller_id == 2) || (hersteller_id == 3)){ // aluplast, salamander
    dB = '43' ;
   }
   document.getElementById('imgProduktHaupt_102_7').src = 'bilder/produkte/Schallsicher/8x6_alu'+dieEndung+'.jpg' ;
   document.getElementById('divSchallSchutzAnzeige_7').innerHTML = 'Schallschutz <font class=schallsicher_blau>'+dB+'</font> dB' ;
  }
  if (document.getElementById('imgProduktHaupt_102_8')){
   if (hersteller_id == 1){ // drutex
    dB = '41' ;
   }
   else if ((hersteller_id == 2) || (hersteller_id == 3)){ // aluplast, salamander
    dB = '40' ;
   }
   document.getElementById('imgProduktHaupt_102_8').src = 'bilder/produkte/Schallsicher/8x8_alu'+dieEndung+'.jpg' ;
   document.getElementById('divSchallSchutzAnzeige_8').innerHTML = 'Schallschutz <font class=schallsicher_blau>'+dB+'</font> dB' ;
  }
 }
 else if ((auswahlVerglasung == 1) || (auswahlVerglasung == 7)){ // 2te auswahl, 2fach warm
  if (document.getElementById('imgProduktHaupt_102_0')){
   if (hersteller_id == 1){ // drutex
    dB = '31' ;
   }
   else if ((hersteller_id == 2) || (hersteller_id == 3)){ // aluplast, salamander
    dB = '35' ;
   }
   document.getElementById('imgProduktHaupt_102_0').src = 'bilder/produkte/Schallsicher/4x4_plastik'+dieEndung+'.jpg' ;
   document.getElementById('divSchallSchutzAnzeige_0').innerHTML = 'Schallschutz <font class=schallsicher_blau>'+dB+'</font> dB' ;
  }
  if (document.getElementById('imgProduktHaupt_102_1')){
   if (hersteller_id == 1){ // drutex
    dB = '39' ;
   }
   else if ((hersteller_id == 2) || (hersteller_id == 3)){ // aluplast, salamander
    dB = '41' ;
   }
   document.getElementById('imgProduktHaupt_102_1').src = 'bilder/produkte/Schallsicher/4x6_plastik'+dieEndung+'.jpg' ;
   document.getElementById('divSchallSchutzAnzeige_1').innerHTML = 'Schallschutz <font class=schallsicher_blau>'+dB+'</font> dB' ;
  }
  if (document.getElementById('imgProduktHaupt_102_2')){
   if (hersteller_id == 1){ // drutex
    dB = '41' ;
   }
   else if ((hersteller_id == 2) || (hersteller_id == 3)){ // aluplast, salamander
    dB = '39' ;
   }
   document.getElementById('imgProduktHaupt_102_2').src = 'bilder/produkte/Schallsicher/4x8_plastik'+dieEndung+'.jpg' ;
   document.getElementById('divSchallSchutzAnzeige_2').innerHTML = 'Schallschutz <font class=schallsicher_blau>'+dB+'</font> dB' ;
  }
  if (document.getElementById('imgProduktHaupt_102_3')){
   if (hersteller_id == 1){ // drutex
    dB = '39' ;
   }
   else if ((hersteller_id == 2) || (hersteller_id == 3)){ // aluplast, salamander
    dB = '41' ;
   }
   document.getElementById('imgProduktHaupt_102_3').src = 'bilder/produkte/Schallsicher/6x4_plastik'+dieEndung+'.jpg' ;
   document.getElementById('divSchallSchutzAnzeige_3').innerHTML = 'Schallschutz <font class=schallsicher_blau>'+dB+'</font> dB' ;
  }
  if (document.getElementById('imgProduktHaupt_102_4')){
   if (hersteller_id == 1){ // drutex
    dB = '40' ;
   }
   else if ((hersteller_id == 2) || (hersteller_id == 3)){ // aluplast, salamander
    dB = '40' ;
   }
   document.getElementById('imgProduktHaupt_102_4').src = 'bilder/produkte/Schallsicher/6x6_plastik'+dieEndung+'.jpg' ;
   document.getElementById('divSchallSchutzAnzeige_4').innerHTML = 'Schallschutz <font class=schallsicher_blau>'+dB+'</font> dB' ;
  }
  if (document.getElementById('imgProduktHaupt_102_5')){
   if (hersteller_id == 1){ // drutex
    dB = '41' ;
   }
   else if ((hersteller_id == 2) || (hersteller_id == 3)){ // aluplast, salamander
    dB = '43' ;
   }
   document.getElementById('imgProduktHaupt_102_5').src = 'bilder/produkte/Schallsicher/6x8_plastik'+dieEndung+'.jpg' ;
   document.getElementById('divSchallSchutzAnzeige_5').innerHTML = 'Schallschutz <font class=schallsicher_blau>'+dB+'</font> dB' ;
  }
  if (document.getElementById('imgProduktHaupt_102_6')){
   if (hersteller_id == 1){ // drutex
    dB = '41' ;
   }
   else if ((hersteller_id == 2) || (hersteller_id == 3)){ // aluplast, salamander
    dB = '40' ;
   }
   document.getElementById('imgProduktHaupt_102_6').src = 'bilder/produkte/Schallsicher/8x4_plastik'+dieEndung+'.jpg' ;
   document.getElementById('divSchallSchutzAnzeige_6').innerHTML = 'Schallschutz <font class=schallsicher_blau>'+dB+'</font> dB' ;
  }
  if (document.getElementById('imgProduktHaupt_102_7')){
   if (hersteller_id == 1){ // drutex
    dB = '41' ;
   }
   else if ((hersteller_id == 2) || (hersteller_id == 3)){ // aluplast, salamander
    dB = '43' ;
   }
   document.getElementById('imgProduktHaupt_102_7').src = 'bilder/produkte/Schallsicher/8x6_plastik'+dieEndung+'.jpg' ;
   document.getElementById('divSchallSchutzAnzeige_7').innerHTML = 'Schallschutz <font class=schallsicher_blau>'+dB+'</font> dB' ;
  }
  if (document.getElementById('imgProduktHaupt_102_8')){
   if (hersteller_id == 1){ // drutex
    dB = '41' ;
   }
   else if ((hersteller_id == 2) || (hersteller_id == 3)){ // aluplast, salamander
    dB = '40' ;
   }
   document.getElementById('imgProduktHaupt_102_8').src = 'bilder/produkte/Schallsicher/8x8_plastik'+dieEndung+'.jpg' ;
   document.getElementById('divSchallSchutzAnzeige_8').innerHTML = 'Schallschutz <font class=schallsicher_blau>'+dB+'</font> dB' ;
  }
 }
 else if ((auswahlVerglasung == 2) || (auswahlVerglasung == 8)){ // 3te auswahl, 3fach
  if (document.getElementById('imgProduktHaupt_102_0')){
   if (hersteller_id == 1){ // drutex
    dB = '34' ;
   }
   else if ((hersteller_id == 2) || (hersteller_id == 3)){ // aluplast, salamander
    dB = '37' ;
   }
   document.getElementById('imgProduktHaupt_102_0').src = 'bilder/produkte/Schallsicher/4x4x4_alu'+dieEndung+'.jpg' ;
   document.getElementById('divSchallSchutzAnzeige_0').innerHTML = 'Schallschutz <font class=schallsicher_blau>'+dB+'</font> dB' ;
  }
  if (document.getElementById('imgProduktHaupt_102_1')){
   if (hersteller_id == 1){ // drutex
    dB = '39' ;
   }
   else if ((hersteller_id == 2) || (hersteller_id == 3)){ // aluplast, salamander
    dB = '41' ;
   }
   document.getElementById('imgProduktHaupt_102_1').src = 'bilder/produkte/Schallsicher/4x4x6_alu'+dieEndung+'.jpg' ;
   document.getElementById('divSchallSchutzAnzeige_1').innerHTML = 'Schallschutz <font class=schallsicher_blau>'+dB+'</font> dB' ;
  }
  if (document.getElementById('imgProduktHaupt_102_2')){
   if (hersteller_id == 1){ // drutex
    dB = '41' ;
   }
   else if ((hersteller_id == 2) || (hersteller_id == 3)){ // aluplast, salamander
    dB = '39' ;
   }
   document.getElementById('imgProduktHaupt_102_2').src = 'bilder/produkte/Schallsicher/4x4x8_alu'+dieEndung+'.jpg' ;
   document.getElementById('divSchallSchutzAnzeige_2').innerHTML = 'Schallschutz <font class=schallsicher_blau>'+dB+'</font> dB' ;
  }
  if (document.getElementById('imgProduktHaupt_102_3')){
   if (hersteller_id == 1){ // drutex
    dB = '39' ;
   }
   else if ((hersteller_id == 2) || (hersteller_id == 3)){ // aluplast, salamander
    dB = '41' ;
   }
   document.getElementById('imgProduktHaupt_102_3').src = 'bilder/produkte/Schallsicher/6x4x4_alu'+dieEndung+'.jpg' ;
   document.getElementById('divSchallSchutzAnzeige_3').innerHTML = 'Schallschutz <font class=schallsicher_blau>'+dB+'</font> dB' ;
  }
  if (document.getElementById('imgProduktHaupt_102_4')){
   if (hersteller_id == 1){ // drutex
    dB = '40' ;
   }
   else if ((hersteller_id == 2) || (hersteller_id == 3)){ // aluplast, salamander
    dB = '40' ;
   }
   document.getElementById('imgProduktHaupt_102_4').src = 'bilder/produkte/Schallsicher/6x4x6_alu'+dieEndung+'.jpg' ;
   document.getElementById('divSchallSchutzAnzeige_4').innerHTML = 'Schallschutz <font class=schallsicher_blau>'+dB+'</font> dB' ;
  }
  if (document.getElementById('imgProduktHaupt_102_5')){
   if (hersteller_id == 1){ // drutex
    dB = '41' ;
   }
   else if ((hersteller_id == 2) || (hersteller_id == 3)){ // aluplast, salamander
    dB = '43' ;
   }
   document.getElementById('imgProduktHaupt_102_5').src = 'bilder/produkte/Schallsicher/6x4x8_alu'+dieEndung+'.jpg' ;
   document.getElementById('divSchallSchutzAnzeige_5').innerHTML = 'Schallschutz <font class=schallsicher_blau>'+dB+'</font> dB' ;
  }
  if (document.getElementById('imgProduktHaupt_102_6')){
   if (hersteller_id == 1){ // drutex
    dB = '41' ;
   }
   else if ((hersteller_id == 2) || (hersteller_id == 3)){ // aluplast, salamander
    dB = '40' ;
   }
   document.getElementById('imgProduktHaupt_102_6').src = 'bilder/produkte/Schallsicher/8x4x4_alu'+dieEndung+'.jpg' ;
   document.getElementById('divSchallSchutzAnzeige_6').innerHTML = 'Schallschutz <font class=schallsicher_blau>'+dB+'</font> dB' ;
  }
  if (document.getElementById('imgProduktHaupt_102_7')){
   if (hersteller_id == 1){ // drutex
    dB = '41' ;
   }
   else if ((hersteller_id == 2) || (hersteller_id == 3)){ // aluplast, salamander
    dB = '43' ;
   }
   document.getElementById('imgProduktHaupt_102_7').src = 'bilder/produkte/Schallsicher/8x4x6_alu'+dieEndung+'.jpg' ;
   document.getElementById('divSchallSchutzAnzeige_7').innerHTML = 'Schallschutz <font class=schallsicher_blau>'+dB+'</font> dB' ;
  }
  if (document.getElementById('imgProduktHaupt_102_8')){
   if (hersteller_id == 1){ // drutex
    dB = '41' ;
   }
   else if ((hersteller_id == 2) || (hersteller_id == 3)){ // aluplast, salamander
    dB = '40' ;
   }
   document.getElementById('imgProduktHaupt_102_8').src = 'bilder/produkte/Schallsicher/8x4x8_alu'+dieEndung+'.jpg' ;
   document.getElementById('divSchallSchutzAnzeige_8').innerHTML = 'Schallschutz <font class=schallsicher_blau>'+dB+'</font> dB' ;
  }
 }
 else if ((auswahlVerglasung == 3) || (auswahlVerglasung == 9)){ // 4te auswahl, 3fach warm
  if (document.getElementById('imgProduktHaupt_102_0')){
   if (hersteller_id == 1){ // drutex
    dB = '34' ;
   }
   else if ((hersteller_id == 2) || (hersteller_id == 3)){ // aluplast, salamander
    dB = '37' ;
   }
   document.getElementById('imgProduktHaupt_102_0').src = 'bilder/produkte/Schallsicher/4x4x4_plastik'+dieEndung+'.jpg' ;
   document.getElementById('divSchallSchutzAnzeige_0').innerHTML = 'Schallschutz <font class=schallsicher_blau>'+dB+'</font> dB' ;
  }
  if (document.getElementById('imgProduktHaupt_102_1')){
   if (hersteller_id == 1){ // drutex
    dB = '39' ;
   }
   else if ((hersteller_id == 2) || (hersteller_id == 3)){ // aluplast, salamander
    dB = '41' ;
   }
   document.getElementById('imgProduktHaupt_102_1').src = 'bilder/produkte/Schallsicher/4x4x6_plastik'+dieEndung+'.jpg' ;
   document.getElementById('divSchallSchutzAnzeige_1').innerHTML = 'Schallschutz <font class=schallsicher_blau>'+dB+'</font> dB' ;
  }
  if (document.getElementById('imgProduktHaupt_102_2')){
   if (hersteller_id == 1){ // drutex
    dB = '41' ;
   }
   else if ((hersteller_id == 2) || (hersteller_id == 3)){ // aluplast, salamander
    dB = '39' ;
   }
   document.getElementById('imgProduktHaupt_102_2').src = 'bilder/produkte/Schallsicher/4x4x8_plastik'+dieEndung+'.jpg' ;
   document.getElementById('divSchallSchutzAnzeige_2').innerHTML = 'Schallschutz <font class=schallsicher_blau>'+dB+'</font> dB' ;
  }
  if (document.getElementById('imgProduktHaupt_102_3')){
   if (hersteller_id == 1){ // drutex
    dB = '39' ;
   }
   else if ((hersteller_id == 2) || (hersteller_id == 3)){ // aluplast, salamander
    dB = '41' ;
   }
   document.getElementById('imgProduktHaupt_102_3').src = 'bilder/produkte/Schallsicher/6x4x4_plastik'+dieEndung+'.jpg' ;
   document.getElementById('divSchallSchutzAnzeige_3').innerHTML = 'Schallschutz <font class=schallsicher_blau>'+dB+'</font> dB' ;
  }
  if (document.getElementById('imgProduktHaupt_102_4')){
   if (hersteller_id == 1){ // drutex
    dB = '40' ;
   }
   else if ((hersteller_id == 2) || (hersteller_id == 3)){ // aluplast, salamander
    dB = '40' ;
   }
   document.getElementById('imgProduktHaupt_102_4').src = 'bilder/produkte/Schallsicher/6x4x6_plastik'+dieEndung+'.jpg' ;
   document.getElementById('divSchallSchutzAnzeige_4').innerHTML = 'Schallschutz <font class=schallsicher_blau>'+dB+'</font> dB' ;
  }
  if (document.getElementById('imgProduktHaupt_102_5')){
   if (hersteller_id == 1){ // drutex
    dB = '41' ;
   }
   else if ((hersteller_id == 2) || (hersteller_id == 3)){ // aluplast, salamander
    dB = '43' ;
   }
   document.getElementById('imgProduktHaupt_102_5').src = 'bilder/produkte/Schallsicher/6x4x8_plastik'+dieEndung+'.jpg' ;
   document.getElementById('divSchallSchutzAnzeige_5').innerHTML = 'Schallschutz <font class=schallsicher_blau>'+dB+'</font> dB' ;
  }
  if (document.getElementById('imgProduktHaupt_102_6')){
   if (hersteller_id == 1){ // drutex
    dB = '41' ;
   }
   else if ((hersteller_id == 2) || (hersteller_id == 3)){ // aluplast, salamander
    dB = '40' ;
   }
   document.getElementById('imgProduktHaupt_102_6').src = 'bilder/produkte/Schallsicher/8x4x4_plastik'+dieEndung+'.jpg' ;
   document.getElementById('divSchallSchutzAnzeige_6').innerHTML = 'Schallschutz <font class=schallsicher_blau>'+dB+'</font> dB' ;
  }
  if (document.getElementById('imgProduktHaupt_102_7')){
   if (hersteller_id == 1){ // drutex
    dB = '41' ;
   }
   else if ((hersteller_id == 2) || (hersteller_id == 3)){ // aluplast, salamander
    dB = '43' ;
   }
   document.getElementById('imgProduktHaupt_102_7').src = 'bilder/produkte/Schallsicher/8x4x6_plastik'+dieEndung+'.jpg' ;
   document.getElementById('divSchallSchutzAnzeige_7').innerHTML = 'Schallschutz <font class=schallsicher_blau>'+dB+'</font> dB' ;
  }
  if (document.getElementById('imgProduktHaupt_102_8')){
   if (hersteller_id == 1){ // drutex
    dB = '41' ;
   }
   else if ((hersteller_id == 2) || (hersteller_id == 3)){ // aluplast, salamander
    dB = '40' ;
   }
   document.getElementById('imgProduktHaupt_102_8').src = 'bilder/produkte/Schallsicher/8x4x8_plastik'+dieEndung+'.jpg' ;
   document.getElementById('divSchallSchutzAnzeige_8').innerHTML = 'Schallschutz <font class=schallsicher_blau>'+dB+'</font> dB' ;
  }
 }
}


function menuGrosseAuswahlSchalten (menuID, AusAn){
 if (AusAn){
  document.getElementById('ersteLeisteMenuGrosseAuswahl').style.display = 'block' ;
  document.getElementById('ersteLeisteMenuGrosseAuswahl_'+menuID).style.display = 'block' ;
 }
 else{
  document.getElementById('ersteLeisteMenuGrosseAuswahl').style.display = 'none' ;
  document.getElementById('ersteLeisteMenuGrosseAuswahl_'+menuID).style.display = 'none' ;
 }
// console.log('klick') ;
}




function elementUberprufenUndAuslesen (elementID){
 var ausgelesen = parseInt (0) ;
 if (document.getElementById(elementID)){
  if (document.getElementById(elementID).value > 0){
   var ausgelesen =  parseInt (document.getElementById(elementID).value) ;
  }
 }
 return ausgelesen ;
}

function grafikAnpassen (produktArtUbergeben='', breiteFensterUbergeben=parseInt(0), hoheFensterUbergeben=parseInt(0), hoheOberLichtUbergeben=parseInt(0), hoheUnterLichtUbergeben=parseInt(0), hoheKastenUbergeben=parseInt(0), sprossenSollUbergeben=parseInt(0), sprossenTypUbergeben=parseInt(0)){
 if (produktArtUbergeben == ''){
  produktArtAusgelesen = produktArt ;
 }
 else{
  produktArtAusgelesen = produktArtUbergeben ;
 }
 if ((produktArtAusgelesen == "Fenster") || (produktArtAusgelesen == "Balkon") || (produktArtAusgelesen == "Terrassen PSK") || (produktArtAusgelesen == "Terrassen HST")){
  var oberLichtHohe =  parseInt (0) ;
  var unterLichtHohe = parseInt (0) ;
  if (istOberLicht){
   oberLichtHohe =  parseInt (elementUberprufenUndAuslesen ('id_input_hohe_oberlicht')) ;
  }
  else if (hoheOberLichtUbergeben){
   oberLichtHohe = hoheOberLichtUbergeben ;
  }
  if (istUnterLicht){
   unterLichtHohe = parseInt (elementUberprufenUndAuslesen ('id_input_hohe_unterlicht')) ;
  }
  else if (hoheUnterLichtUbergeben){
   unterLichtHohe = hoheUnterLichtUbergeben ;
  }
  if (!breiteFensterUbergeben){
   var fensterBreite = parseInt (document.getElementById('id_input_breite').value) ;
  }
  else{
   var fensterBreite = breiteFensterUbergeben ;
  }
  if (!hoheFensterUbergeben){
   var fensterHohe = parseInt (document.getElementById('id_input_hohe').value) ;
  }
  else{
   var fensterHohe = hoheFensterUbergeben ;
  }
  if (produktArtUbergeben){
   if (hoheKastenUbergeben){
    if (document.getElementById ('infoBild_tr_kasten')){
     document.getElementById('infoBild_td_kasten_bild').innerHTML = 'Kasten' ;
     document.getElementById('infoBild_tr_kasten').style.visibility = 'visible' ;
     document.getElementById('infoBild_td_kasten_hohe').innerHTML = hoheKastenUbergeben ;
     document.getElementById('infoBild_td_zusamen_hohe').innerHTML = hoheFensterUbergeben + hoheOberLichtUbergeben + hoheUnterLichtUbergeben + hoheKastenUbergeben ;
    }    
   }
   else{
    if (document.getElementById ('infoBild_tr_kasten')){
   //  document.getElementById('infoBild_tr_kasten').style.visibility = 'hidden' ;
     document.getElementById('infoBild_tr_kasten').style.display = 'none' ;
    }
   }
   if (breiteFensterUbergeben){
    if (document.getElementById('infoBild_td_produkt_breite')){
     document.getElementById('infoBild_td_produkt_breite').innerHTML = breiteFensterUbergeben ;
    }
   }
   if (hoheFensterUbergeben){
    if (document.getElementById('infoBild_td_mit_unterlicht_zusamen_hohe')){
     document.getElementById('infoBild_td_mit_unterlicht_zusamen_hohe').innerHTML = hoheFensterUbergeben ;
    }
   }
   if (hoheOberLichtUbergeben){
    if (document.getElementById('infoBild_td_produkt_oberlicht_hohe')){
     document.getElementById('infoBild_td_produkt_oberlicht_hohe').innerHTML = hoheOberLichtUbergeben ;
    }
   }
   if (hoheUnterLichtUbergeben){
    if (document.getElementById('infoBild_td_produkt_unterlicht_hohe')){
     document.getElementById('infoBild_td_produkt_unterlicht_hohe').innerHTML = hoheUnterLichtUbergeben ;
    }
   }
   if (document.getElementById('infoBild_td_produkt_hohe')){
    document.getElementById('infoBild_td_produkt_hohe').innerHTML = hoheFensterUbergeben + hoheOberLichtUbergeben + hoheUnterLichtUbergeben ;
   }
  }
  var alleHohenZusammen = oberLichtHohe + unterLichtHohe + fensterHohe ;
  var maxGesammteGrafikHoheGrenze = parseInt (250) ;
  var fensterHoheInProzentZuGesammtHohe = Auf2NachkommeStellenVerkurzen (parseInt ((fensterHohe * 100) / alleHohenZusammen)) ;
  var oberLichtHoheInProzentZuGesammtHohe = Auf2NachkommeStellenVerkurzen (parseInt ((oberLichtHohe * 100) / alleHohenZusammen)) ;
  var unterLichtHoheInProzentZuGesammtHohe = Auf2NachkommeStellenVerkurzen (parseInt ((unterLichtHohe * 100) / alleHohenZusammen)) ;
  if (istOberLicht || istUnterLicht){
   fensterBreiteInPixel = parseInt (divBreite) - (4 * parseInt (breiteMasseTD)) ;
  }
  else{
   fensterBreiteInPixel = parseInt (divBreite) - (3 * parseInt (breiteMasseTD)) ;
  }
  var fensterHoheUmgerechnet = Auf2NachkommeStellenVerkurzen (parseInt ((fensterHohe * fensterBreiteInPixel) / fensterBreite)) ;
  var oberLichtHoheUmgerechnet = Auf2NachkommeStellenVerkurzen (parseInt ((oberLichtHohe * fensterBreiteInPixel) / fensterBreite)) ;
  var unterLichtHoheUmgerechnet = Auf2NachkommeStellenVerkurzen (parseInt ((unterLichtHohe * fensterBreiteInPixel) / fensterBreite)) ;
  // Höhe verändern
  if (document.getElementById('infoBild_td_produkt_bild')){
   var grenzeFensterHohe = Auf2NachkommeStellenVerkurzen ((fensterHoheInProzentZuGesammtHohe * maxGesammteGrafikHoheGrenze) / 100) ;
   if (parseInt (fensterHoheUmgerechnet) > parseInt (grenzeFensterHohe)){
    var prozentAusgerechnet = Auf2NachkommeStellenVerkurzen ((grenzeFensterHohe * 100) / fensterHoheUmgerechnet) ;
    var neueBreite = Auf2NachkommeStellenVerkurzen ((fensterBreite * grenzeFensterHohe) / fensterHohe) ;
    document.getElementById('infoBild_td_produkt_bild').style.height = grenzeFensterHohe+'px' ;
    document.getElementById('infoBild_td_produkt_bild').style.width = neueBreite+'px' ;
   }
   else{
    document.getElementById('infoBild_td_produkt_bild').style.height = fensterHoheUmgerechnet+'px' ;
    var neueBreite = Auf2NachkommeStellenVerkurzen ((fensterHoheUmgerechnet * fensterHohe) / fensterHoheUmgerechnet) ;
    document.getElementById('infoBild_td_produkt_bild').style.width = neueBreite+'px' ;
   }
  }
  if (document.getElementById('infoBild_td_produkt_oberlicht_bild')){
   var grenzeOberlichtHohe = Auf2NachkommeStellenVerkurzen (parseInt ((oberLichtHoheInProzentZuGesammtHohe * maxGesammteGrafikHoheGrenze) / 100)) ;
   if (parseInt (oberLichtHoheUmgerechnet) > parseInt (grenzeOberlichtHohe)){
    var prozentAusgerechnet = Auf2NachkommeStellenVerkurzen ((grenzeOberlichtHohe * 100) / oberLichtHoheUmgerechnet) ;
    var neueBreite = Auf2NachkommeStellenVerkurzen ((fensterBreite * grenzeOberlichtHohe) / oberLichtHohe) ;
    document.getElementById('infoBild_td_produkt_oberlicht_bild').style.height = grenzeOberlichtHohe+'px' ;
    document.getElementById('infoBild_td_produkt_oberlicht_bild').style.width = neueBreite+'px' ;
   }
   else{
    document.getElementById('infoBild_td_produkt_oberlicht_bild').style.height = oberLichtHoheUmgerechnet+'px' ;
    var neueBreite = Auf2NachkommeStellenVerkurzen ((oberLichtHoheUmgerechnet * oberLichtHohe) / oberLichtHoheUmgerechnet) ;
    document.getElementById('infoBild_td_produkt_bild').style.width = neueBreite+'px' ;
   }
  }
  if (document.getElementById('infoBild_td_produkt_unterlicht_bild')){
   var grenzeUnterlichtHohe = Auf2NachkommeStellenVerkurzen (parseInt ((unterLichtHoheInProzentZuGesammtHohe * maxGesammteGrafikHoheGrenze) / 100)) ;
   if (parseInt (unterLichtHoheUmgerechnet) > parseInt (grenzeUnterlichtHohe)){
    var prozentAusgerechnet = Auf2NachkommeStellenVerkurzen ((grenzeUnterlichtHohe * 100) / unterLichtHoheUmgerechnet) ;
    var neueBreite = Auf2NachkommeStellenVerkurzen ((fensterBreite * grenzeUnterlichtHohe) / unterLichtHohe) ;
    document.getElementById('infoBild_td_produkt_unterlicht_bild').style.height = grenzeUnterlichtHohe+'px' ;
    document.getElementById('infoBild_td_produkt_unterlicht_bild').style.width = neueBreite+'px' ;
   }
   else{
    document.getElementById('infoBild_td_produkt_unterlicht_bild').style.height = unterLichtHoheUmgerechnet+'px' ;
    var neueBreite = Auf2NachkommeStellenVerkurzen ((unterLichtHoheUmgerechnet * unterLichtHohe) / unterLichtHoheUmgerechnet) ;
    document.getElementById('infoBild_td_produkt_unterlicht_bild').style.width = neueBreite+'px' ;
   }
  }
  //sprossen
  sprossenGrafikAusschalten () ;
  if ((sprossenSollUbergeben) || (document.getElementById('infoID70'))){
   if ((sprossenSollUbergeben) || (parseInt (document.getElementById('infoID70').innerHTML) > 0)){ // sprossen ja
    if (document.getElementById('infoBild_td_produkt_bild')){
     if (!sprossenSollUbergeben){
      var treffer = parseInt (document.getElementById('infoID72').innerHTML) ;
     }
     else{
      var treffer = sprossenTypUbergeben ;
     }
     var buchstabenArray = new Array ;
     buchstabenArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'] ;
     if (document.getElementById('sprosse_' + buchstabenArray[treffer] + '_orgHauptFensterFlugelInFlugelScheibe_1')){
      document.getElementById('sprosse_' + buchstabenArray[treffer] + '_orgHauptFensterFlugelInFlugelScheibe_1').style.display = 'block' ;
     }
     if (document.getElementById('sprosse_' + buchstabenArray[treffer] + '_orgHauptFensterFlugelInFlugelScheibe_2')){
      document.getElementById('sprosse_' + buchstabenArray[treffer] + '_orgHauptFensterFlugelInFlugelScheibe_2').style.display = 'block' ;
     }
     if (document.getElementById('sprosse_' + buchstabenArray[treffer] + '_orgHauptFensterFlugelInFlugelScheibe_3')){
      document.getElementById('sprosse_' + buchstabenArray[treffer] + '_orgHauptFensterFlugelInFlugelScheibe_3').style.display = 'block' ;
     }
    }
   }
  }
 }
 else{
//  console.log ('falsche ProduktArt') ;
 }
}

function sprossenGrafikAusschalten (){
 var x = 0 ;
 var buchstabenArray = new Array ;
 buchstabenArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'] ;
 for (x = 0; x < 8; x++){
  if (document.getElementById('sprosse_'+buchstabenArray[x]+'_orgHauptFensterFlugelInFlugelScheibe_1')){
   document.getElementById('sprosse_'+buchstabenArray[x]+'_orgHauptFensterFlugelInFlugelScheibe_1').style.display = 'none' ;
  }
  if (document.getElementById('sprosse_'+buchstabenArray[x]+'_orgHauptFensterFlugelInFlugelScheibe_2')){
   document.getElementById('sprosse_'+buchstabenArray[x]+'_orgHauptFensterFlugelInFlugelScheibe_2').style.display = 'none' ;
  }
  if (document.getElementById('sprosse_'+buchstabenArray[x]+'_orgHauptFensterFlugelInFlugelScheibe_3')){
   document.getElementById('sprosse_'+buchstabenArray[x]+'_orgHauptFensterFlugelInFlugelScheibe_3').style.display = 'none' ;
  }
 }
}


function kontaktSenden ($captcher){
 if ((document.getElementById('kontaktNachricht').value == '') || (document.getElementById('kontaktKontaktdaten').value == '') || (document.getElementById('kontaktCaptcher').value == '')){
  var ok_knopf = "<div class=\"lightBoxButtonAussen\"><div onclick=\"LightBoxSchalten('', 2, '', '', this);\" class=\"left wasAlsNachstesEinzeln hand\">"+ok_txt+"</div><div class=\"clear_left\"></div></div>" ;
  var inhaltLightBox = nachrichtfeld_ist_leer ;
  LightBoxSchalten ('', 1, fehlende_angabe_txt, '<div class=\"informationBoxText\">'+inhaltLightBox+'</div>'+ok_knopf) ;
 }
 else{
  document.kontaktNachrichtForm.action = httpAusgabe+'nachrichtSenden.php' ;
  document.kontaktNachrichtForm.submit() ;
 }
}

function fensterGrosseGeendert (){
// menuKlappen ('Aus') ;
}

function menuKlappen (AnAus){
 if(AnAus == "An"){
  document.getElementById('leiste_oben_menu_smartphone_neu').style.display = 'block' ;
  document.getElementById('leiste_oben_neu_menu_button_img').src = 'bilder/menu_schmall_x.png' ;
 }
 else if (AnAus == 'Aus'){
  document.getElementById('leiste_oben_menu_smartphone_neu').style.display = 'none' ;
  document.getElementById('leiste_oben_neu_menu_button_img').src = 'bilder/menu_schmall.png' ;
 }
 else if (AnAus == 'Auto'){
  if (document.getElementById('leiste_oben_menu_smartphone_neu').style.display == 'block'){
   document.getElementById('leiste_oben_menu_smartphone_neu').style.display = 'none' ;
   document.getElementById('leiste_oben_neu_menu_button_img').src = 'bilder/menu_schmall.png' ;
  }
  else{
   document.getElementById('leiste_oben_menu_smartphone_neu').style.display = 'block' ;
   document.getElementById('leiste_oben_neu_menu_button_img').src = 'bilder/menu_schmall_x.png' ;
  }
 }
}

function zurReklamationZuruckZurDateneingabe (){
 document.reklamationBilderForm.action = httpAusgabe+'reklamation.php' ;
 document.reklamationBilderForm.submit() ;
}

function zurReklamationSenden (s_idUBERGEBEN){
 document.reklamationBilderForm.action = httpAusgabe+'reklamation_senden.php' ;
 document.reklamationBilderForm.submit() ;
}

function zurReklamationMitBilderSenden (sollSenden){
 if (sollSenden){
  document.reklamationBilderForm.submit() ;
 }
}

function zurReklamationOhneBilderSenden (s_idUBERGEBEN){
 if (reklamationEingabeDatenUberprufen ()){
  document.adressDatenForm.action = httpAusgabe+'reklamation_senden.php' ;
  document.adressDatenForm.submit() ;
 }
}

function zurReklamationBilder (s_idUBERGEBEN){
 if (reklamationEingabeDatenUberprufen ()){
  document.adressDatenForm.action = httpAusgabe+'reklamation_bilder.php' ;
  document.adressDatenForm.submit() ;
 }
}

function borderInputAndern (inputID, wieAndern){
 if (wieAndern == 0){
  document.getElementById(inputID).style.border = 'thin solid #ff0000' ;
 }
 else if (wieAndern == 1){
  document.getElementById(inputID).style.border = 'thin solid #bbbbbb' ;
 }
}

function reklamationEingabeDatenUberprufen (){
 var fertig = 1 ;

 borderInputAndern ('Name', 1) ;
 borderInputAndern ('Strasse', 1) ;
 borderInputAndern ('PLZ', 1) ;
 borderInputAndern ('Ort', 1) ;
 borderInputAndern ('Name2', 1) ;
 borderInputAndern ('Strasse2', 1) ;
 borderInputAndern ('PLZ2', 1) ;
 borderInputAndern ('Ort2', 1) ;
 borderInputAndern ('eMail', 1) ;
 borderInputAndern ('Telefon', 1) ;
 borderInputAndern ('Vorgangsnr', 1) ;
 borderInputAndern ('Position', 1) ;
 borderInputAndern ('Mass', 1) ;
 borderInputAndern ('Maengeln', 1) ;

 var ok_knopf = "<div class=\"lightBoxButtonAussen\"><div onclick=\"LightBoxSchalten('', 2, '', '', this);\" class=\"left wasAlsNachstesEinzeln hand\">"+ok_txt+"</div><div class=\"clear_left\"></div></div>" ;
 if (document.getElementById('Name').value == ''){
  borderInputAndern ('Name', 0) ;
  var inhaltLightBox = bitte_txt+' '+name_txt+' '+angeben_txt ;
  LightBoxSchalten ('', 1, fehlende_angabe_txt, '<div class=\"informationBoxText\">'+inhaltLightBox+'</div>'+ok_knopf) ;
  fertig = 0 ;
 }
 else if (document.getElementById('Strasse').value == ''){
  borderInputAndern ('Strasse', 0) ;
  var inhaltLightBox = bitte_txt+' '+strasse_txt+' '+angeben_txt ;
  LightBoxSchalten ('', 1, fehlende_angabe_txt, '<div class=\"informationBoxText\">'+inhaltLightBox+'</div>'+ok_knopf) ;
  fertig = 0 ;
 }
 else if (document.getElementById('PLZ').value == ''){
  borderInputAndern ('PLZ', 0) ;
  var inhaltLightBox = bitte_txt+' '+plz_txt+' '+angeben_txt ;
  LightBoxSchalten ('', 1, fehlende_angabe_txt, '<div class=\"informationBoxText\">'+inhaltLightBox+'</div>'+ok_knopf) ;
  fertig = 0 ;
 }
 else if (document.getElementById('Ort').value == ''){
  borderInputAndern ('Ort', 0) ;
  var inhaltLightBox = bitte_txt+' '+ort_txt+' '+angeben_txt ;
  LightBoxSchalten ('', 1, fehlende_angabe_txt, '<div class=\"informationBoxText\">'+inhaltLightBox+'</div>'+ok_knopf) ;
  fertig = 0 ;
 }
 else if ((!document.adressDatenForm.adressdatenCheckbox2.checked) && (document.getElementById('Name2').value == '')){
  borderInputAndern ('Name2', 0) ;
  var inhaltLightBox = bitte_txt+' '+name_txt+' '+angeben_txt ;
  LightBoxSchalten ('', 1, fehlende_angabe_txt+' '+bei_der_Lieferadresse_txt, '<div class=\"informationBoxText\">'+inhaltLightBox+'</div>'+ok_knopf) ;
  fertig = 0 ;
 }
 else if ((!document.adressDatenForm.adressdatenCheckbox2.checked) && (document.getElementById('Strasse2').value == '')){
  borderInputAndern ('Strasse2', 0) ;
  var inhaltLightBox = bitte_txt+' '+strasse_txt+' '+angeben_txt ;
  LightBoxSchalten ('', 1, fehlende_angabe_txt+' '+bei_der_Lieferadresse_txt, '<div class=\"informationBoxText\">'+inhaltLightBox+'</div>'+ok_knopf) ;
  fertig = 0 ;
 }
 else if ((!document.adressDatenForm.adressdatenCheckbox2.checked) && (document.getElementById('PLZ2').value == '')){
  borderInputAndern ('PLZ2', 0) ;
  var inhaltLightBox = bitte_txt+' '+plz_txt+' '+angeben_txt ;
  LightBoxSchalten ('', 1, fehlende_angabe_txt+' '+bei_der_Lieferadresse_txt, '<div class=\"informationBoxText\">'+inhaltLightBox+'</div>'+ok_knopf) ;
  fertig = 0 ;
 }
 else if ((!document.adressDatenForm.adressdatenCheckbox2.checked) && (document.getElementById('Ort2').value == '')){
  borderInputAndern ('Ort2', 0) ;
  var inhaltLightBox = bitte_txt+' '+ort_txt+' '+angeben_txt ;
  LightBoxSchalten ('', 1, fehlende_angabe_txt+' '+bei_der_Lieferadresse_txt, '<div class=\"informationBoxText\">'+inhaltLightBox+'</div>'+ok_knopf) ;
  fertig = 0 ;
 }
 else if (document.getElementById('eMail').value == ''){
  borderInputAndern ('eMail', 0) ;
  var inhaltLightBox = bitte_txt+' '+email_txt+' '+angeben_txt ;
  LightBoxSchalten ('', 1, fehlende_angabe_txt, '<div class=\"informationBoxText\">'+inhaltLightBox+'</div>'+ok_knopf) ;
  fertig = 0 ;
 }
 else if (document.getElementById('Telefon').value == ''){
  borderInputAndern ('Telefon', 0) ;
  var inhaltLightBox = bitte_txt+' '+telefon_txt+' '+angeben_txt ;
  LightBoxSchalten ('', 1, fehlende_angabe_txt, '<div class=\"informationBoxText\">'+inhaltLightBox+'</div>'+ok_knopf) ;
  fertig = 0 ;
 }
 else if (document.getElementById('Vorgangsnr').value == ''){
  borderInputAndern ('Vorgangsnr', 0) ;
  var inhaltLightBox = bitte_txt+' '+Vorgangsnr_txt+' '+angeben_txt ;
  LightBoxSchalten ('', 1, fehlende_angabe_txt, '<div class=\"informationBoxText\">'+inhaltLightBox+'</div>'+ok_knopf) ;
  fertig = 0 ;
 }
 else if (document.getElementById('Position').value == ''){
  borderInputAndern ('Position', 0) ;
  var inhaltLightBox = bitte_txt+' '+Position_txt+' '+angeben_txt ;
  LightBoxSchalten ('', 1, fehlende_angabe_txt, '<div class=\"informationBoxText\">'+inhaltLightBox+'</div>'+ok_knopf) ;
  fertig = 0 ;
 }
 else if (document.getElementById('Mass').value == ''){
  borderInputAndern ('Mass', 0) ;
  var inhaltLightBox = bitte_txt+' '+Mass_txt+' '+angeben_txt ;
  LightBoxSchalten ('', 1, fehlende_angabe_txt, '<div class=\"informationBoxText\">'+inhaltLightBox+'</div>'+ok_knopf) ;
  fertig = 0 ;
 }
 else if (document.getElementById('Maengeln').value == ''){
  borderInputAndern ('Maengeln', 0) ;
  var inhaltLightBox = bitte_txt+' '+Maengeln_txt+' '+angeben_txt ;
  LightBoxSchalten ('', 1, fehlende_angabe_txt, '<div class=\"informationBoxText\">'+inhaltLightBox+'</div>'+ok_knopf) ;
  fertig = 0 ;
 }
 if (fertig){
  return 1 ;
 }
 else{
  return 0 ;
 }
}






function wysliFormularzDaneKontaktowe (){
 $fertig = 1 ;
 var ok_knopf = "<div class=\"lightBoxButtonAussen\"><div onclick=\"LightBoxSchalten('', 2, '', '', this);\" class=\"left wasAlsNachstesEinzeln hand\">"+ok_txt+"</div><div class=\"clear_left\"></div></div>" ;
 if (document.getElementById('Name').value == ''){
  var inhaltLightBox = bitte_txt+' '+name_txt+' '+angeben_txt ;
  LightBoxSchalten ('', 1, fehlende_angabe_txt, '<div class=\"informationBoxText\">'+inhaltLightBox+'</div>'+ok_knopf) ;
  $fertig = 0 ;
 }
 else if (document.getElementById('eMail').value == ''){
  var inhaltLightBox = bitte_txt+' '+email_txt+' '+angeben_txt ;
  LightBoxSchalten ('', 1, fehlende_angabe_txt, '<div class=\"informationBoxText\">'+inhaltLightBox+'</div>'+ok_knopf) ;
  $fertig = 0 ;
 }
 else if (document.getElementById('Telefon').value == ''){
  var inhaltLightBox = bitte_txt+' '+telefon_txt+' '+angeben_txt ;
  LightBoxSchalten ('', 1, fehlende_angabe_txt, '<div class=\"informationBoxText\">'+inhaltLightBox+'</div>'+ok_knopf) ;
  $fertig = 0 ;
 }

 else if (document.getElementById('PLZ').value == ''){
  var inhaltLightBox = bitte_txt+' '+plz_txt+' '+angeben_txt ;
  LightBoxSchalten ('', 1, fehlende_angabe_txt, '<div class=\"informationBoxText\">'+inhaltLightBox+'</div>'+ok_knopf) ;
  $fertig = 0 ;
 }
 else if (document.getElementById('Ort').value == ''){
  var inhaltLightBox = bitte_txt+' '+ort_txt+' '+angeben_txt ;
  LightBoxSchalten ('', 1, fehlende_angabe_txt, '<div class=\"informationBoxText\">'+inhaltLightBox+'</div>'+ok_knopf) ;
  $fertig = 0 ;
 }
 else if (!document.adressDatenForm.adressdatenCheckbox.checked){
  var inhaltLightBox = fehlende_agb_txt ;
  LightBoxSchalten ('', 1, fehlende_angabe_txt, '<div class=\"informationBoxText\">'+inhaltLightBox+'</div>'+ok_knopf) ;
  $fertig = 0 ;
 }
 if ($fertig){
//  var inhaltLightBox = test_bestellung_wird_nicht_realisiert_txt+' '+kontakt_thomas ;
//  LightBoxSchalten ('', 1, test_bestellung_txt, '<div class=\"informationBoxText\">'+inhaltLightBox+'</div>'+ok_knopf) ;

  document.adressDatenForm.action = httpAusgabe+'montagekosten_mail.php' ;
  document.adressDatenForm.submit() ;
 }
}













function zurInformacjaKosztMontage (s_idUBERGEBEN){
 document.warenkorbVersandartForm.action = httpAusgabe+'montagekosten.php' ;
 document.warenkorbVersandartForm.submit() ;
}

function informacjaOkosztachMontazuStart (sid_ubergeben, shopMwSt, neuerShopMwSt, inhalt1, inhalt2, inhalt3, inhalt4, inhalt5, inhalt6, inhalt7, inhalt8, inhalt9){
 var ausgeleseneGesamtsumme = document.getElementById('warenkorbGesamtsumme').innerHTML ;
 var ausgeleseneMwSt = document.getElementById('warenkorbMwSt').innerHTML ;
 var neuerMwSt = Auf2NachkommeStellenVerkurzen (((parseFloat(ausgeleseneGesamtsumme) - parseFloat(ausgeleseneMwSt)) / 100) * parseFloat(neuerShopMwSt)) ;
 var neueGesamtsumme = Auf2NachkommeStellenVerkurzen ((parseFloat(ausgeleseneGesamtsumme) - parseFloat(ausgeleseneMwSt)) + parseFloat(neuerMwSt)) ;
 LightBoxSchalten ('', 1, inhalt1, inhalt2+'<div class=\'informacjaOkosztachMontazuAbstandDiv\'></div>'+inhalt3+'<div>'+inhalt4+' '+neueGesamtsumme+' '+inhalt6+'</div><div>'+inhalt5+' '+neuerMwSt+' '+inhalt6+'</div><div class=\'informacjaOkosztachMontazuAbstandDiv\'></div>'+inhalt7+'<div class=\'informacjaOkosztachMontazuAbstandDiv\'></div><div class=\"warenkorbInformacjaKosztMontazuKontaktButton\"><div onclick=\"zurInformacjaKosztMontage(\''+sid_ubergeben+'\');\" class=\"warenkorbInformacjaKosztMontazuKontaktButtonInner hand\">'+inhalt8+'</div></div><div class=\'informacjaOkosztachMontazuAbstandDiv\'></div><div class=\"warenkorbInformacjaKosztMontazuKontaktButton\"><div class=\"warenkorbInformacjaKosztMontazuKontaktButtonInner hand\" onclick=\"LightBoxSchalten(\'\', 2, \'\', \'\', this);\">'+inhalt9+'</div></div>') ;
}

function techDataDivMitAuswahlAnzeigen (div_id, AnAus){
 if(AnAus == "An"){
  document.getElementById('div_'+div_id).style.display = 'block' ;   
  document.getElementById('PlusAndern'+div_id).src = 'bilder/techDataMinus.png' ;
 }
 else if (AnAus == 'Aus'){
  document.getElementById('div_'+div_id).style.display = 'none' ;
  document.getElementById('PlusAndern'+div_id).src = 'bilder/techDataPlus.png' ;
 }
 else if (AnAus == 'Auto'){
  if (document.getElementById('div_'+div_id).style.display == 'block'){
   document.getElementById('div_'+div_id).style.display = 'none' ;
   document.getElementById('PlusAndern'+div_id).src = 'bilder/techDataPlus.png' ;
  }
  else{
   document.getElementById('div_'+div_id).style.display = 'block' ;   
   document.getElementById('PlusAndern'+div_id).src = 'bilder/techDataMinus.png' ;
  }
 }
}

function rolloZusatzNameFeldHolen (zusammenGesetzterId){
 return document.getElementById('rolloZusatzName_ID_'+zusammenGesetzterId).value ;
}

function rolloZusatzIDFeldHolen (zusammenGesetzterId){
 return parseInt (document.getElementById('rolloZusatz_ID_'+zusammenGesetzterId).value) ;
}

function rolloAufpreisFeldHolen (zusammenGesetzterId){
 return parseInt (document.getElementById('rolloZusatzAufpreis_ID_'+zusammenGesetzterId).value) ;
}

function rolloAufpreis2FeldHolen (zusammenGesetzterId){
 return parseInt (document.getElementById('rolloZusatzAufpreis_ID_2_'+zusammenGesetzterId).value) ;
}

function rolloAufpreis3FeldHolen (zusammenGesetzterId){
 return parseInt (document.getElementById('rolloZusatzAufpreis_ID_3_'+zusammenGesetzterId).value) ;
}

function rolloAufpreis4FeldHolen (zusammenGesetzterId){
 return parseInt (document.getElementById('rolloZusatzAufpreis_ID_4_'+zusammenGesetzterId).value) ;
}

function rolloGruppenIDFeldHolen (zusammenGesetzterId){
 return parseInt (document.getElementById('rolloZusatzGruppeID_ID_'+zusammenGesetzterId).value) ;
}

function rolloBerechnungsArtFeldHolen (zusammenGesetzterId){
 return parseInt (document.getElementById('rolloZusatzBerechnungsart_ID_'+zusammenGesetzterId).value) ;
}

function rolloBerechnungsArt2FeldHolen (zusammenGesetzterId){
 return parseInt (document.getElementById('rolloZusatzBerechnungsart_ID_2_'+zusammenGesetzterId).value) ;
}

function rolloBerechnungsArt3FeldHolen (zusammenGesetzterId){
 return parseInt (document.getElementById('rolloZusatzBerechnungsart_ID_3_'+zusammenGesetzterId).value) ;
}

function rolloBerechnungsArt4FeldHolen (zusammenGesetzterId){
 return parseInt (document.getElementById('rolloZusatzBerechnungsart_ID_4_'+zusammenGesetzterId).value) ;
}

function rolloLableFeldHolen (zusammenGesetzterId){
 return document.getElementById('rolloZusatzLable_ID_'+zusammenGesetzterId).value ;
}

function rolloZusatzNameFeldSetzen (zusammenGesetzterId, rolloZusatzNameVar){
 document.getElementById('rolloZusatzName_ID_'+zusammenGesetzterId).value = rolloZusatzNameVar ;
}

function rolloZusatzIDFeldSetzen (zusammenGesetzterId, rolloZusatzIDVar){
 document.getElementById('rolloZusatz_ID_'+zusammenGesetzterId).value = rolloZusatzIDVar ;
}

function rolloAufpreisFeldSetzen (zusammenGesetzterId, rolloZusatzAufpreisVar){
 document.getElementById('rolloZusatzAufpreis_ID_'+zusammenGesetzterId).value = rolloZusatzAufpreisVar ;
}

function rolloAufpreis2FeldSetzen (zusammenGesetzterId, rolloZusatzAufpreisVar){
 document.getElementById('rolloZusatzAufpreis_ID_2_'+zusammenGesetzterId).value = rolloZusatzAufpreisVar ;
}

function rolloAufpreis3FeldSetzen (zusammenGesetzterId, rolloZusatzAufpreisVar){
 document.getElementById('rolloZusatzAufpreis_ID_3_'+zusammenGesetzterId).value = rolloZusatzAufpreisVar ;
}

function rolloAufpreis4FeldSetzen (zusammenGesetzterId, rolloZusatzAufpreisVar){
 document.getElementById('rolloZusatzAufpreis_ID_4_'+zusammenGesetzterId).value = rolloZusatzAufpreisVar ;
}

function rolloGruppenIDFeldSetzen (zusammenGesetzterId, rolloGruppenIDVar){
 document.getElementById('rolloZusatzGruppeID_ID_'+zusammenGesetzterId).value = rolloGruppenIDVar ;
}

function rolloBerechnungsArtFeldSetzen (zusammenGesetzterId, rolloBerechnungsArtVar){
 document.getElementById('rolloZusatzBerechnungsart_ID_'+zusammenGesetzterId).value = rolloBerechnungsArtVar ;
}

function rolloBerechnungsArt2FeldSetzen (zusammenGesetzterId, rolloBerechnungsArtVar){
 document.getElementById('rolloZusatzBerechnungsart_ID_2_'+zusammenGesetzterId).value = rolloBerechnungsArtVar ;
}

function rolloBerechnungsArt3FeldSetzen (zusammenGesetzterId, rolloBerechnungsArtVar){
 document.getElementById('rolloZusatzBerechnungsart_ID_3_'+zusammenGesetzterId).value = rolloBerechnungsArtVar ;
}

function rolloBerechnungsArt4FeldSetzen (zusammenGesetzterId, rolloBerechnungsArtVar){
 document.getElementById('rolloZusatzBerechnungsart_ID_4_'+zusammenGesetzterId).value = rolloBerechnungsArtVar ;
}

function rolloLableFeldSetzen (zusammenGesetzterId, rolloLableVar){
 document.getElementById('rolloZusatzLable_ID_'+zusammenGesetzterId).value = rolloLableVar ;
}

function rolloZusatzGeclickt (rolloZusatzAufpreis, rolloZusatzBerechnungsArt, rolloZusatzAufpreis2, rolloZusatzBerechnungsArt2, rolloZusatzAufpreis3, rolloZusatzBerechnungsArt3, rolloZusatzAufpreis4, rolloZusatzBerechnungsArt4, rolloGruppeVar, rolloZusatzIdVar, rolloIdVar, rolloZusatzDefineNameVar, rolloY, rolloErsatzFarbe, rolloWasErsetzen){
 // parseInt
 var zusammenGesetzterId = rolloIdVar+''+rolloGruppeVar ;
 rolloZusatzIDFeldSetzen (zusammenGesetzterId, rolloZusatzIdVar) ;
 rolloZusatzNameFeldSetzen (zusammenGesetzterId, rolloZusatzDefineNameVar) ;
 rolloAufpreisFeldSetzen (zusammenGesetzterId, rolloZusatzAufpreis) ;
 rolloBerechnungsArtFeldSetzen (zusammenGesetzterId, rolloZusatzBerechnungsArt) ;

 rolloAufpreis2FeldSetzen (zusammenGesetzterId, rolloZusatzAufpreis2) ;
 rolloBerechnungsArt2FeldSetzen (zusammenGesetzterId, rolloZusatzBerechnungsArt2) ;
 rolloAufpreis3FeldSetzen (zusammenGesetzterId, rolloZusatzAufpreis3) ;
 rolloBerechnungsArt3FeldSetzen (zusammenGesetzterId, rolloZusatzBerechnungsArt3) ;
 rolloAufpreis4FeldSetzen (zusammenGesetzterId, rolloZusatzAufpreis4) ;
 rolloBerechnungsArt4FeldSetzen (zusammenGesetzterId, rolloZusatzBerechnungsArt4) ;

 rolloLableAusgeben (rolloGruppeVar, rolloZusatzDefineNameVar) ;
 document.getElementById('markierung_'+rolloGruppeVar+'_'+rolloY).style.display = 'block' ; // markierung setzen
 var x = 0 ;
 for (x = 0; x < rolloMarkierungArray.length; x++){
  if (rolloMarkierungArray[x][0] == rolloGruppeVar){
   if (document.getElementById('markierung_'+rolloGruppeVar+'_'+rolloMarkierungArray[x][1])){
    if (rolloMarkierungArray[x][1] != rolloY){ // nicht sich selbst löschen
     document.getElementById('markierung_'+rolloGruppeVar+'_'+rolloMarkierungArray[x][1]).style.display = 'none' ;
    }
    rolloMarkierungArray[x][1] = rolloY ;
   }
  }
 }
 if ((rolloErsatzFarbe != '') && (rolloWasErsetzen != '')){
  if (parseInt (rolloWasErsetzen) == 1){ // kasten
   document.getElementById('rolloKasten').style.backgroundColor = '#'+rolloErsatzFarbe ;
  }
  else if (parseInt (rolloWasErsetzen) == 2){ // schienen
   document.getElementById('rolloSchieneLinks').style.backgroundColor = '#'+rolloErsatzFarbe ;
   document.getElementById('rolloSchieneRechts').style.backgroundColor = '#'+rolloErsatzFarbe ;
  }
  else if (parseInt (rolloWasErsetzen) == 3){ // panzer
   document.getElementById('rolloPanzerInner').style.backgroundColor = '#'+rolloErsatzFarbe ;
  }
 }
 rolloEndPreisAusgeben (rolloPreisBerechnen ()) ;
}

function rolloLableAusgeben (rolloGruppeVar, charText){
 document.getElementById('rolloSpezifikationName'+rolloGruppeVar).innerHTML = charText ;
}

function rolloPositonSetzen (rolloIDVar, ZusatzGruppeIdVar, ZusatzIdVar, ZusatzNameVar, ZusatzPreisVar, ZusatzBerechnungsArtVar, ZusatzPreis2Var, ZusatzBerechnungsArt2Var, ZusatzPreis3Var, ZusatzBerechnungsArt3Var, ZusatzPreis4Var, ZusatzBerechnungsArt4Var, ZusatzLableVar){
 var zusammenGesetzterId = rolloIDVar+''+ZusatzGruppeIdVar ;
 rolloGruppenIDFeldSetzen (zusammenGesetzterId, ZusatzGruppeIdVar) ;
 rolloZusatzIDFeldSetzen (zusammenGesetzterId, ZusatzIdVar) ;
 rolloZusatzNameFeldSetzen (zusammenGesetzterId, ZusatzNameVar) ;
 rolloAufpreisFeldSetzen (zusammenGesetzterId, ZusatzPreisVar) ;
 rolloBerechnungsArtFeldSetzen (zusammenGesetzterId, ZusatzBerechnungsArtVar) ;
 rolloAufpreis2FeldSetzen (zusammenGesetzterId, ZusatzPreis2Var) ;
 rolloBerechnungsArt2FeldSetzen (zusammenGesetzterId, ZusatzBerechnungsArt2Var) ;
 rolloAufpreis3FeldSetzen (zusammenGesetzterId, ZusatzPreis3Var) ;
 rolloBerechnungsArt3FeldSetzen (zusammenGesetzterId, ZusatzBerechnungsArt3Var) ;
 rolloAufpreis4FeldSetzen (zusammenGesetzterId, ZusatzPreis4Var) ;
 rolloBerechnungsArt4FeldSetzen (zusammenGesetzterId, ZusatzBerechnungsArt4Var) ;
 rolloLableFeldSetzen (zusammenGesetzterId, ZusatzLableVar) ;
 rolloLableAusgeben (ZusatzGruppeIdVar, ZusatzNameVar) ;
}

function rolloEingegebeneBreitePrufen (iZahl, MinBreite, MaxBreite){
 var ok_knopf = "<div class=\"lightBoxButtonAussen\"><div onclick=\"LightBoxSchalten('', 2, '', '', this);\" class=\"left wasAlsNachstesEinzeln hand\">"+ok_txt+"</div><div class=\"clear_left\"></div></div>" ;

// Breite aus der Preistabelle
// var MinBreite = preisTabelle[0][1] ;
// var MaxBreite = preisTabelle[0][preisTabelle[1].length-1] ;

 if ((iZahl >= MinBreite) && (iZahl <= MaxBreite)){
  return 1 ;
 }
 else if (iZahl < MinBreite){
  LightBoxSchalten ('', 1, falsche_breite_eingegeben_txt, '<div class=\"informationBoxText\">'+min_breite_txt+' '+MinBreite+'mm<br />'+minimale_breite_wurde_gesetzt_txt+'</div>'+ok_knopf) ;
  document.getElementById('id_input_breite').value = MinBreite ;
 }
 else if (iZahl > MaxBreite){
  LightBoxSchalten ('', 1, falsche_breite_eingegeben_txt, '<div class=\"informationBoxText\">'+max_breite_txt+' '+MaxBreite+'mm<br />'+maximale_breite_wurde_gesetzt_txt+'</div>'+ok_knopf) ;
  document.getElementById('id_input_breite').value = MaxBreite ;
 }
 return 0 ;
}

function rolloEingegebeneHohePrufen (iZahl, MinHohe, MaxHohe){
 var ok_knopf = "<div class=\"lightBoxButtonAussen\"><div onclick=\"LightBoxSchalten('', 2, '', '', this);\" class=\"left wasAlsNachstesEinzeln hand\">"+ok_txt+"</div><div class=\"clear_left\"></div></div>" ;

// Hohe aus der Preistabelle
// var MinHohe = preisTabelle[1][0] ;
// var MaxHohe = preisTabelle[preisTabelle.length-1][0] ;

 if ((iZahl >= MinHohe) && (iZahl <= MaxHohe)){
  return 1 ;
 }
 else if (iZahl < MinHohe){
  LightBoxSchalten ('', 1, falsche_hohe_eingegeben_txt, '<div class=\"informationBoxText\">'+min_hohe_txt+' '+MinHohe+'mm<br />'+minimale_hohe_wurde_gesetzt_txt+'</div>'+ok_knopf) ;
  document.getElementById('id_input_hohe').value = MinHohe ;
 }
 else if (iZahl > MaxHohe){
  LightBoxSchalten ('', 1, falsche_hohe_eingegeben_txt, '<div class=\"informationBoxText\">'+max_hohe_txt+' '+MaxHohe+'mm<br />'+maximale_hohe_wurde_gesetzt_txt+'</div>'+ok_knopf) ;
  document.getElementById('id_input_hohe').value = MaxHohe ;
 }
 return 0 ;
}

function rolloHoheGeandert (minHohe, maxHohe){
 rolloEingegebeneHohePrufen (rolloHoheHolen (), minHohe, maxHohe) ;
 rolloGrafikMassenAusgeben () ;
 rolloLableAusgeben ('9999999', rolloBreiteHolen()+' x '+rolloHoheHolen()) ;
 rolloEndPreisAusgeben (rolloPreisBerechnen ()) ;
}

function rolloBreiteGeandert (minBreite, maxBreite){
 rolloEingegebeneBreitePrufen (rolloBreiteHolen (), minBreite, maxBreite) ;
 rolloGrafikMassenAusgeben () ;
 rolloLableAusgeben ('9999999', rolloBreiteHolen()+' x '+rolloHoheHolen()) ;
 rolloEndPreisAusgeben (rolloPreisBerechnen ()) ;
}

function rolloGrafikMassenAusgeben (){
 var rolloHohe = rolloHoheHolen () ;
 var rolloBodyHohe = rolloHohe - rolloKastenHohe ;
 rolloGrafikBreiteAusgeben (rolloBreiteHolen ()) ;
 rolloGrafikKastenHoheAusgeben (rolloKastenHohe) ;
 rolloGrafikBodyHoheAusgeben (rolloBodyHohe) ;
 rolloGrafikGesammtHoheAusgeben (rolloHohe) ;
}

function rolloGrafikGesammtHoheAusgeben (iZahl){
 document.getElementById('rolloAnzeigeGesammtHohe').innerHTML = iZahl ;
}

function rolloGrafikBodyHoheAusgeben (iZahl){
 document.getElementById('rolloAnzeigeBodyHohe').innerHTML = iZahl ;
}

function rolloGrafikBreiteAusgeben (iZahl){
 document.getElementById('rolloAnzeigeBreite').innerHTML = iZahl ;
}

function rolloGrafikKastenHoheAusgeben (iZahl){
 document.getElementById('rolloAnzeigeKastenHohe').innerHTML = iZahl ;
}

function rolloPreisAusPreisTabelleEinlesen (rolloBreiteVar, rolloHoheVar){
 var rolloPreisEingelesen = 0 ;
 var iHoheTreffer = 0 ;
 var iBreiteTreffer = 0 ;
 var x = 0 ;
 if ((rolloBreiteVar > 0) && (rolloHoheVar > 0)){
  for (x = (preisTabelle.length-1); x >= 0; x--){ // hohe
   if (rolloHoheVar <= preisTabelle[x][0]){
    iHoheTreffer = x ;
   }
  }

  for (x = (preisTabelle[1].length-1); x >= 0; x--){ // breite
   if (rolloBreiteVar <= preisTabelle[0][x]){
    iBreiteTreffer = x ;
   }
  }
  rolloPreisEingelesen = preisTabelle[iHoheTreffer][iBreiteTreffer] ;
 }
 return rolloPreisEingelesen ;
}


function rolloBreiteHolen (){
 return document.getElementById('id_input_breite').value ;
}

function rolloHoheHolen (){
 return document.getElementById('id_input_hohe').value ;
}

function rolloPreisBerechnen (){
 var GesamtZuruck = 0 ;
 var GesamtSummePL = 0 ;
 var GesamtSummeDE = 0 ;
 var GewinnAlsZahl = 0 ;
 var MwStSumme = 0 ;
 var ZwischenSumme_0 = 0 ;
 var ZwischenSumme_1 = 0 ;
 var ZwischenSumme_2 = 0 ;
 
 var rolloBreiteMM = rolloBreiteHolen () ;
 var rolloHoheMM = rolloHoheHolen () ;
 var rolloPreisAusPreistabelleVar = rolloPreisAusPreisTabelleEinlesen (rolloBreiteMM, rolloHoheMM) ;
 var rolloQMM = rolloBreiteMM * rolloHoheMM ;
 var rolloQM = rolloQMM / 1000000 ;

 var AufpreisAusgerechnet = 0 ;
 var Aufpreis2Ausgerechnet = 0 ;
 var Aufpreis3Ausgerechnet = 0 ;
 var Aufpreis4Ausgerechnet = 0 ;
 var aufpreisTemp = 0 ;
 var berechnungsArtTemp = 0 ;
 var aufpreis2Temp = 0 ;
 var berechnungsArt2Temp = 0 ;
 var aufpreis3Temp = 0 ;
 var berechnungsArt3Temp = 0 ;
 var aufpreis4Temp = 0 ;
 var berechnungsArt4Temp = 0 ;
 var x = 0 ;
 var zusammenGesetzterId = 0 ;

 for (x = 0; x < reihenfolgeAufbau.length; x++){



  AufpreisAusgerechnet = 0 ;
  Aufpreis2Ausgerechnet = 0 ;
  Aufpreis3Ausgerechnet = 0 ;
  Aufpreis4Ausgerechnet = 0 ;
  if (reihenfolgeAufbau[x] != '9999999'){ // keine breite und hohe
   zusammenGesetzterId = rolloID_Global+''+reihenfolgeAufbau[x] ;

   aufpreisTemp = rolloAufpreisFeldHolen (zusammenGesetzterId) ;
   berechnungsArtTemp = rolloBerechnungsArtFeldHolen (zusammenGesetzterId) ;

   aufpreis2Temp = rolloAufpreis2FeldHolen (zusammenGesetzterId) ;
   berechnungsArt2Temp = rolloBerechnungsArt2FeldHolen (zusammenGesetzterId) ;
   aufpreis3Temp = rolloAufpreis3FeldHolen (zusammenGesetzterId) ;
   berechnungsArt3Temp = rolloBerechnungsArt3FeldHolen (zusammenGesetzterId) ;
   aufpreis4Temp = rolloAufpreis4FeldHolen (zusammenGesetzterId) ;
   berechnungsArt4Temp = rolloBerechnungsArt4FeldHolen (zusammenGesetzterId) ;




   // 1-ter Aufpreis
   if (berechnungsArtTemp == 1){ // m2
    AufpreisAusgerechnet = aufpreisTemp * rolloQM ;
   }
   else if (berechnungsArtTemp == 2){ // %
    AufpreisAusgerechnet = (rolloPreisAusPreistabelleVar / 100) * aufpreisTemp ;
   }
   else if (berechnungsArtTemp == 3){ // stückpreis
    AufpreisAusgerechnet = aufpreisTemp ;
   }
   else if (berechnungsArtTemp == 4){ // pro breite
    AufpreisAusgerechnet = (rolloBreiteMM / 1000) * aufpreisTemp ;
   }
   // 2-ter Aufpreis
   if (berechnungsArt2Temp == 1){ // m2
    Aufpreis2Ausgerechnet = aufpreis2Temp * rolloQM ;
   }
   else if (berechnungsArt2Temp == 2){ // %
    Aufpreis2Ausgerechnet = (rolloPreisAusPreistabelleVar / 100) * aufpreis2Temp ;
   }
   else if (berechnungsArt2Temp == 3){ // stückpreis
    Aufpreis2Ausgerechnet = aufpreis2Temp ;
   }
   else if (berechnungsArt2Temp == 4){ // pro breite
    Aufpreis2Ausgerechnet = (rolloBreiteMM / 1000) * aufpreis2Temp ;
   }

   // 3-ter Aufpreis
   if (berechnungsArt3Temp == 1){ // m2
    Aufpreis3Ausgerechnet = aufpreis3Temp * rolloQM ;
   }
   else if (berechnungsArt3Temp == 2){ // %
    Aufpreis3Ausgerechnet = (rolloPreisAusPreistabelleVar / 100) * aufpreis3Temp ;
   }
   else if (berechnungsArt3Temp == 3){ // stückpreis
    Aufpreis3Ausgerechnet = aufpreis3Temp ;
   }
   else if (berechnungsArt3Temp == 4){ // pro breite
    Aufpreis3Ausgerechnet = (rolloBreiteMM / 1000) * aufpreis3Temp ;
   }

   // 4-ter Aufpreis
   if (berechnungsArt4Temp == 1){ // m2
    Aufpreis4Ausgerechnet = aufpreis4Temp * rolloQM ;
   }
   else if (berechnungsArt4Temp == 2){ // %
    Aufpreis4Ausgerechnet = (rolloPreisAusPreistabelleVar / 100) * aufpreis4Temp ;
   }
   else if (berechnungsArt4Temp == 3){ // stückpreis
    Aufpreis4Ausgerechnet = aufpreis4Temp ;
   }
   else if (berechnungsArt4Temp == 4){ // pro breite
    Aufpreis4Ausgerechnet = (rolloBreiteMM / 1000) * aufpreis4Temp ;
   }
   ZwischenSumme_0 = ZwischenSumme_0 + AufpreisAusgerechnet + Aufpreis2Ausgerechnet + Aufpreis3Ausgerechnet + Aufpreis4Ausgerechnet ;
  }
 }
 ZwischenSumme_1 = rolloPreisAusPreistabelleVar + ZwischenSumme_0 + rollo_aufpreis_value  ;
 GewinnAlsZahl = (rolloPreisAusPreistabelleVar / 100) * gewinnProzent ;
 ZwischenSumme_2 = ZwischenSumme_1 + GewinnAlsZahl ;
 MwStSumme = (ZwischenSumme_2 / 100) * MWSteuer ;
 GesamtSummePL = ZwischenSumme_2 + MwStSumme ;
 GesamtSummeDE = GesamtSummePL / umrechnungsFaktor ;
 if (rabat_prozente > 0){
  GesamtSummeDE = GesamtSummeDE - ((GesamtSummeDE / 100) * rabat_prozente) ;
 }



 GesamtZuruck = Auf2NachkommeStellenVerkurzen (GesamtSummeDE) ;
 return GesamtZuruck ;
}

function rolloEndPreisAusgeben (endPreis){
 document.getElementById('infoGesamtsumme').innerHTML = Auf2NachkommeStellenVerkurzen (endPreis) ;
}

function rolloInitialisieren (){
 Create2DArray ('rolloMarkierungArray', reihenfolgeAufbau.length, 2) ;
 var x = 0 ;
 for (x = 0; x < reihenfolgeAufbau.length; x++){
  rolloMarkierungArray[x][0] = reihenfolgeAufbau[x] ;
  if (reihenfolgeAufbau[x] != '9999999'){ // breite hohe nicht setzen
   if (document.getElementById('markierung_'+reihenfolgeAufbau[x]+'_0')){
    document.getElementById('markierung_'+reihenfolgeAufbau[x]+'_0').style.display = 'block' ; // markierung auf das erste element setzen
    rolloMarkierungArray[x][1] = 0 ;
   }
  }
 }

 // letzten weiter knopf in kaufen knopf ändern
 document.getElementById(weiterKnopfKaufenID).innerHTML = weiterKnopfKaufenText ;
 //  document.getElementById(weiterKnopfKaufenID+'FurJava').onclick = new Function ("inDenWarenkorbRollo()") ;
 document.getElementById(weiterKnopfKaufenID).onclick = new Function ("inDenWarenkorbRollo()") ;

 rolloGrafikMassenAusgeben () ;
 rolloEndPreisAusgeben (rolloPreisBerechnen ()) ;
}

function inDenWarenkorbRollo (){
 document.getElementById('rolloUForm_id').value = rolloID_Global ;
 document.getElementById('rolloUForm_preis').value = rolloPreisBerechnen () ;
 document.getElementById('rolloUForm_breite').value = rolloBreiteHolen () ;
 document.getElementById('rolloUForm_hohe').value = rolloHoheHolen () ;
 document.getElementById('rolloUForm_kasten_hohe').value = rolloKastenHohe ;

 var tempZusammen = '' ;
 var x = 0 ;
 for (x = 0; x < reihenfolgeAufbau.length; x++){
  if (reihenfolgeAufbau[x] != '9999999'){ // keine breite und hohe
   zusammenGesetzterId = rolloID_Global+''+reihenfolgeAufbau[x] ;
   tempZusammen = tempZusammen+'<div>'+rolloLableFeldHolen (zusammenGesetzterId)+': '+rolloZusatzNameFeldHolen (zusammenGesetzterId)+'</div>' ;
  }
 }
 document.getElementById('rolloUForm_zusammen').value = tempZusammen ;
 document.rolloUbergabeForm_name.action = httpAusgabe+'indenkorb_rollo.php' ;
 document.rolloUbergabeForm_name.submit() ;
}

function CookieWertSetzen (Bezeichner, Wert, Verfall) {
  var jetzt = new Date() ;
  var Auszeit = new Date(jetzt.getTime() + Verfall) ;
  document.cookie = Bezeichner + "=" + Wert + "; expires=" + Auszeit.toGMTString() + ";" ;
}

function CookieBannerSchalten ($zustand, $s_id){
 if (!$zustand){
  var Verfallszeit = 7*24*60*60*1000 ; // 7d
  document.getElementById('cookieBanner').style.display = 'none' ;
  CookieWertSetzen ('tomputer_okna2000_s_id', $s_id, Verfallszeit) ;
 }
}

function ProduktAusDemWarenkorbEntfernen ($warenkorb_id){
 LightBoxSchalten ('', 2, '', '', this) ;
 window.location = httpAusgabe+'warenkorb.php?aktion=4&w_id='+$warenkorb_id ;
}

function ZubehoerLaengeAufGultigkeitPrufen ($min_L, $max_L){
 var ok_knopf = "<div class=\"lightBoxButtonAussen\"><div onclick=\"LightBoxSchalten('', 2, '', '', this);\" class=\"left wasAlsNachstesEinzeln hand\">"+ok_txt+"</div><div class=\"clear_left\"></div></div>" ;
 var laengeAusgelesen = 0 ;
 laengeAusgelesen = parseInt(document.getElementById('zubehoer_laenge').value) ;
 if (laengeAusgelesen < $min_L){
  LightBoxSchalten ('', 1, falsche_laenge_eingegeben_txt, '<div class=\"informationBoxText\">'+minimale_laenge_wurde_gesetzt_txt+'</div>'+ok_knopf) ;
  return 1 ;
 }
 else if (laengeAusgelesen > $max_L){
  LightBoxSchalten ('', 1, falsche_laenge_eingegeben_txt, '<div class=\"informationBoxText\">'+maximale_laenge_wurde_gesetzt_txt+'</div>'+ok_knopf) ;
  return 2 ;
 }
 else{
  return 0 ;
 } 
}

function ZubehoerLaengePreisAktualisieren ($preis_pro_mm, $min_L, $max_L){
 var neuerPreis = 0 ;
 var laengeAusgelesen = 0 ;
 laengeAusgelesen = parseInt(document.getElementById('zubehoer_laenge').value) ;
 neuerPreis = Auf2NachkommeStellenVerkurzen (laengeAusgelesen * $preis_pro_mm) ;
 if (ZubehoerLaengeAufGultigkeitPrufen ($min_L, $max_L) == 1){
  document.getElementById('zubehoer_laenge').value = $min_L ;
  neuerPreis = Auf2NachkommeStellenVerkurzen ($min_L * $preis_pro_mm) ;
 }
 else if (ZubehoerLaengeAufGultigkeitPrufen ($min_L, $max_L) == 2){
  document.getElementById('zubehoer_laenge').value = $max_L ;
  neuerPreis = Auf2NachkommeStellenVerkurzen ($max_L * $preis_pro_mm) ;
 }
 document.getElementById('zubehoer_preis').value = neuerPreis ;
}

function inDenWarenkorbZubehoer ($zubehoerOptionen, $preis_pro_mm, $min_L, $max_L){
 if ($zubehoerOptionen == 1){ // mit länge
  var kannInDenKorb = 1 ;
  var neuerPreis = 0 ;
  var laengeAusgelesen = 0 ;
  laengeAusgelesen = parseInt(document.getElementById('zubehoer_laenge').value) ;
  neuerPreis = Auf2NachkommeStellenVerkurzen (laengeAusgelesen * $preis_pro_mm) ;
  if (ZubehoerLaengeAufGultigkeitPrufen ($min_L, $max_L) == 1){
   document.getElementById('zubehoer_laenge').value = $min_L ;
   neuerPreis = Auf2NachkommeStellenVerkurzen ($min_L * $preis_pro_mm) ;
   kannInDenKorb = 0 ;
  }
  else if (ZubehoerLaengeAufGultigkeitPrufen ($min_L, $max_L) == 2){
   document.getElementById('zubehoer_laenge').value = $max_L ;
   neuerPreis = Auf2NachkommeStellenVerkurzen ($max_L * $preis_pro_mm) ;
   var kannInDenKorb = 0 ;
  }
  document.getElementById('zubehoer_preis').value = neuerPreis ;
  if (kannInDenKorb == 1){
   document.zubehoerDetailsForm.action = httpAusgabe+'indenkorb_zubehoer.php' ;
   document.zubehoerDetailsForm.submit() ;
  }
 }
 else if ($zubehoerOptionen == 0){ // ohne optionen
  document.zubehoerDetailsForm.action = httpAusgabe+'indenkorb_zubehoer.php' ;
  document.zubehoerDetailsForm.submit() ;
 }
}

function DivProdukteRekrusivSchalten (div_id){
 if (document.getElementById('ProdukteRekrusiv'+div_id).style.display == ''){
  document.getElementById('ProdukteRekrusiv'+div_id).style.display = 'none' ;
  document.getElementById('ProdukteRekrusivImg'+div_id).src = 'bilder/plus_klein.png' ;
 }
 else if (document.getElementById('ProdukteRekrusiv'+div_id).style.display == 'block'){
  document.getElementById('ProdukteRekrusiv'+div_id).style.display = 'none' ;
  document.getElementById('ProdukteRekrusivImg'+div_id).src = 'bilder/plus_klein.png' ;
 }
 else{
  document.getElementById('ProdukteRekrusiv'+div_id).style.display = 'block' ;  
  document.getElementById('ProdukteRekrusivImg'+div_id).src = 'bilder/minus_klein.png' ;
 }
}

function mouseOverImgTausch ($bild, $divID){
  document.getElementById($divID).src = $bild ;
}

function RechnungsAdressePrufen ($itemId){
 if (document.adressDatenForm.adressdatenCheckbox2.checked){
  document.adressDatenForm.Anrede2.disabled = true ;
  document.adressDatenForm.Firma2.value = '' ;
  document.adressDatenForm.Firma2.disabled = true ;
  document.adressDatenForm.Name2.value = '' ;
  document.adressDatenForm.Name2.disabled = true ;
  document.adressDatenForm.Vorname2.value = '' ;
  document.adressDatenForm.Vorname2.disabled = true ;
  document.adressDatenForm.Strasse2.value = '' ;
  document.adressDatenForm.Strasse2.disabled = true ;
  document.adressDatenForm.PLZ2.value = '' ;
  document.adressDatenForm.PLZ2.disabled = true ;
  document.adressDatenForm.Ort2.value = '' ;
  document.adressDatenForm.Ort2.disabled = true ;
  document.adressDatenForm.Land2.disabled = true ;
 }
 else{
  document.adressDatenForm.Anrede2.disabled = false ;
  document.adressDatenForm.Firma2.disabled = false ;
  document.adressDatenForm.Name2.disabled = false ;
  document.adressDatenForm.Vorname2.disabled = false ;
  document.adressDatenForm.Strasse2.disabled = false ;
  document.adressDatenForm.PLZ2.disabled = false ;
  document.adressDatenForm.Ort2.disabled = false ;
  document.adressDatenForm.Land2.disabled = false ;
 }
}

function AufPayPalGehen (){
 document.paypalForm.submit() ;
}

function zurAbgeschlossen (s_idUBERGEBEN){
 $fertig = 1 ;
 var ok_knopf = "<div class=\"lightBoxButtonAussen\"><div onclick=\"LightBoxSchalten('', 2, '', '', this);\" class=\"left wasAlsNachstesEinzeln hand\">"+ok_txt+"</div><div class=\"clear_left\"></div></div>" ;

 if ((!document.zahlungsartForm.paypalCheckbox.checked) && (!document.zahlungsartForm.uberweisungCheckbox.checked)){
  var inhaltLightBox = fehlende_agb_txt ;
  LightBoxSchalten ('', 1, fehlende_angabe_txt, '<div class=\"informationBoxText\">'+bitte_zahlungsart_auswahlen_txt+'</div>'+ok_knopf) ;
  $fertig = 0 ;
 }
 if ($fertig){
  document.zahlungsartForm.action = httpAusgabe+'abgeschlossen.php' ;
  document.zahlungsartForm.submit() ;
 }
}

function zurAdressDatenNurZurTestzwecken (s_idUBERGEBEN){
 $fertig = 1 ;
 var ok_knopf = "<div class=\"lightBoxButtonAussen\"><div onclick=\"LightBoxSchalten('', 2, '', '', this);\" class=\"left wasAlsNachstesEinzeln hand\">"+ok_txt+"</div><div class=\"clear_left\"></div></div>" ;
 if (document.getElementById('Name').value == ''){
  var inhaltLightBox = bitte_txt+' '+name_txt+' '+angeben_txt ;
  LightBoxSchalten ('', 1, fehlende_angabe_txt, '<div class=\"informationBoxText\">'+inhaltLightBox+'</div>'+ok_knopf) ;
  $fertig = 0 ;
 }
 else if (document.getElementById('eMail').value == ''){
  var inhaltLightBox = bitte_txt+' '+email_txt+' '+angeben_txt ;
  LightBoxSchalten ('', 1, fehlende_angabe_txt, '<div class=\"informationBoxText\">'+inhaltLightBox+'</div>'+ok_knopf) ;
  $fertig = 0 ;
 }
 else if (document.getElementById('Telefon').value == ''){
  var inhaltLightBox = bitte_txt+' '+telefon_txt+' '+angeben_txt ;
  LightBoxSchalten ('', 1, fehlende_angabe_txt, '<div class=\"informationBoxText\">'+inhaltLightBox+'</div>'+ok_knopf) ;
  $fertig = 0 ;
 }
 else if (document.getElementById('Strasse').value == ''){
  var inhaltLightBox = bitte_txt+' '+strasse_txt+' '+angeben_txt ;
  LightBoxSchalten ('', 1, fehlende_angabe_txt, '<div class=\"informationBoxText\">'+inhaltLightBox+'</div>'+ok_knopf) ;
  $fertig = 0 ;
 }
 else if (document.getElementById('PLZ').value == ''){
  var inhaltLightBox = bitte_txt+' '+plz_txt+' '+angeben_txt ;
  LightBoxSchalten ('', 1, fehlende_angabe_txt, '<div class=\"informationBoxText\">'+inhaltLightBox+'</div>'+ok_knopf) ;
  $fertig = 0 ;
 }
 else if (document.getElementById('Ort').value == ''){
  var inhaltLightBox = bitte_txt+' '+ort_txt+' '+angeben_txt ;
  LightBoxSchalten ('', 1, fehlende_angabe_txt, '<div class=\"informationBoxText\">'+inhaltLightBox+'</div>'+ok_knopf) ;
  $fertig = 0 ;
 }

 else if ((!document.adressDatenForm.adressdatenCheckbox2.checked) && (document.getElementById('Name2').value == '')){
  var inhaltLightBox = bitte_txt+' '+name_txt+' '+angeben_txt ;
  LightBoxSchalten ('', 1, fehlende_angabe_txt+' '+bei_der_Lieferadresse_txt, '<div class=\"informationBoxText\">'+inhaltLightBox+'</div>'+ok_knopf) ;
  $fertig = 0 ;
 }
 else if ((!document.adressDatenForm.adressdatenCheckbox2.checked) && (document.getElementById('Strasse2').value == '')){
  var inhaltLightBox = bitte_txt+' '+strasse_txt+' '+angeben_txt ;
  LightBoxSchalten ('', 1, fehlende_angabe_txt+' '+bei_der_Lieferadresse_txt, '<div class=\"informationBoxText\">'+inhaltLightBox+'</div>'+ok_knopf) ;
  $fertig = 0 ;
 }
 else if ((!document.adressDatenForm.adressdatenCheckbox2.checked) && (document.getElementById('PLZ2').value == '')){
  var inhaltLightBox = bitte_txt+' '+plz_txt+' '+angeben_txt ;
  LightBoxSchalten ('', 1, fehlende_angabe_txt+' '+bei_der_Lieferadresse_txt, '<div class=\"informationBoxText\">'+inhaltLightBox+'</div>'+ok_knopf) ;
  $fertig = 0 ;
 }
 else if ((!document.adressDatenForm.adressdatenCheckbox2.checked) && (document.getElementById('Ort2').value == '')){
  var inhaltLightBox = bitte_txt+' '+ort_txt+' '+angeben_txt ;
  LightBoxSchalten ('', 1, fehlende_angabe_txt+' '+bei_der_Lieferadresse_txt, '<div class=\"informationBoxText\">'+inhaltLightBox+'</div>'+ok_knopf) ;
  $fertig = 0 ;
 }

 else if (!document.adressDatenForm.adressdatenCheckbox.checked){
  var inhaltLightBox = fehlende_agb_txt ;
  LightBoxSchalten ('', 1, fehlende_angabe_txt, '<div class=\"informationBoxText\">'+inhaltLightBox+'</div>'+ok_knopf) ;
  $fertig = 0 ;
 }
 if ($fertig){
//  nur Info ausgeben (wegen TEST-Shop)
//  var inhaltLightBox = test_bestellung_wird_nicht_realisiert_txt+' '+kontakt_thomas ;
//  LightBoxSchalten ('', 1, test_bestellung_txt, '<div class=\"informationBoxText\">'+inhaltLightBox+'</div>'+ok_knopf) ;

  document.adressDatenForm.action = httpAusgabe+'zahlungsart_nur_uberweisung.php' ;
  document.adressDatenForm.submit() ;
 }
}

function zurAdressDaten (s_idUBERGEBEN){
 $fertig = 1 ;
 var ok_knopf = "<div class=\"lightBoxButtonAussen\"><div onclick=\"LightBoxSchalten('', 2, '', '', this);\" class=\"left wasAlsNachstesEinzeln hand\">"+ok_txt+"</div><div class=\"clear_left\"></div></div>" ;
 if (document.getElementById('Name').value == ''){
  var inhaltLightBox = bitte_txt+' '+name_txt+' '+angeben_txt ;
  LightBoxSchalten ('', 1, fehlende_angabe_txt, '<div class=\"informationBoxText\">'+inhaltLightBox+'</div>'+ok_knopf) ;
  $fertig = 0 ;
 }
 else if (document.getElementById('eMail').value == ''){
  var inhaltLightBox = bitte_txt+' '+email_txt+' '+angeben_txt ;
  LightBoxSchalten ('', 1, fehlende_angabe_txt, '<div class=\"informationBoxText\">'+inhaltLightBox+'</div>'+ok_knopf) ;
  $fertig = 0 ;
 }
 else if (document.getElementById('Telefon').value == ''){
  var inhaltLightBox = bitte_txt+' '+telefon_txt+' '+angeben_txt ;
  LightBoxSchalten ('', 1, fehlende_angabe_txt, '<div class=\"informationBoxText\">'+inhaltLightBox+'</div>'+ok_knopf) ;
  $fertig = 0 ;
 }
 else if (document.getElementById('Strasse').value == ''){
  var inhaltLightBox = bitte_txt+' '+strasse_txt+' '+angeben_txt ;
  LightBoxSchalten ('', 1, fehlende_angabe_txt, '<div class=\"informationBoxText\">'+inhaltLightBox+'</div>'+ok_knopf) ;
  $fertig = 0 ;
 }
 else if (document.getElementById('PLZ').value == ''){
  var inhaltLightBox = bitte_txt+' '+plz_txt+' '+angeben_txt ;
  LightBoxSchalten ('', 1, fehlende_angabe_txt, '<div class=\"informationBoxText\">'+inhaltLightBox+'</div>'+ok_knopf) ;
  $fertig = 0 ;
 }
 else if (document.getElementById('Ort').value == ''){
  var inhaltLightBox = bitte_txt+' '+ort_txt+' '+angeben_txt ;
  LightBoxSchalten ('', 1, fehlende_angabe_txt, '<div class=\"informationBoxText\">'+inhaltLightBox+'</div>'+ok_knopf) ;
  $fertig = 0 ;
 }

 else if ((!document.adressDatenForm.adressdatenCheckbox2.checked) && (document.getElementById('Name2').value == '')){
  var inhaltLightBox = bitte_txt+' '+name_txt+' '+angeben_txt ;
  LightBoxSchalten ('', 1, fehlende_angabe_txt+' '+bei_der_Lieferadresse_txt, '<div class=\"informationBoxText\">'+inhaltLightBox+'</div>'+ok_knopf) ;
  $fertig = 0 ;
 }
 else if ((!document.adressDatenForm.adressdatenCheckbox2.checked) && (document.getElementById('Strasse2').value == '')){
  var inhaltLightBox = bitte_txt+' '+strasse_txt+' '+angeben_txt ;
  LightBoxSchalten ('', 1, fehlende_angabe_txt+' '+bei_der_Lieferadresse_txt, '<div class=\"informationBoxText\">'+inhaltLightBox+'</div>'+ok_knopf) ;
  $fertig = 0 ;
 }
 else if ((!document.adressDatenForm.adressdatenCheckbox2.checked) && (document.getElementById('PLZ2').value == '')){
  var inhaltLightBox = bitte_txt+' '+plz_txt+' '+angeben_txt ;
  LightBoxSchalten ('', 1, fehlende_angabe_txt+' '+bei_der_Lieferadresse_txt, '<div class=\"informationBoxText\">'+inhaltLightBox+'</div>'+ok_knopf) ;
  $fertig = 0 ;
 }
 else if ((!document.adressDatenForm.adressdatenCheckbox2.checked) && (document.getElementById('Ort2').value == '')){
  var inhaltLightBox = bitte_txt+' '+ort_txt+' '+angeben_txt ;
  LightBoxSchalten ('', 1, fehlende_angabe_txt+' '+bei_der_Lieferadresse_txt, '<div class=\"informationBoxText\">'+inhaltLightBox+'</div>'+ok_knopf) ;
  $fertig = 0 ;
 }

 else if (!document.adressDatenForm.adressdatenCheckbox.checked){
  var inhaltLightBox = fehlende_agb_txt ;
  LightBoxSchalten ('', 1, fehlende_angabe_txt, '<div class=\"informationBoxText\">'+inhaltLightBox+'</div>'+ok_knopf) ;
  $fertig = 0 ;
 }
 if ($fertig){
  var mitPayPalPLUS = 1 ;
  if (mitPayPalPLUS){
   document.adressDatenForm.action = httpAusgabe+'zahlungsart_a.php' ;
  }
  else{
   document.adressDatenForm.action = httpAusgabe+'zahlungsart.php' ;
  }
  document.adressDatenForm.submit() ;
 }
}

function zurKasse (s_idUBERGEBEN){
 document.warenkorbVersandartForm.action = httpAusgabe+'adressdaten.php' ;
 document.warenkorbVersandartForm.submit() ;
}

function versandArtPreisAndern ($orgGesamtsumme, $versandkosten, $shopMwSt){
 var aktualisierteGesamtsumme = Auf2NachkommeStellenVerkurzen ($orgGesamtsumme+$versandkosten) ;
 document.getElementById('warenkorbGesamtsumme').innerHTML = aktualisierteGesamtsumme  ;
 var mwstAusgerechnet = Auf2NachkommeStellenVerkurzen (((aktualisierteGesamtsumme / (100+parseFloat($shopMwSt))) * parseFloat($shopMwSt))) ;
 document.getElementById('warenkorbMwSt').innerHTML = mwstAusgerechnet ;

 // Przez polski Sklep (23%, 8%)
// document.getElementById('warenkorbMWST_ProzentAnzeige').innerHTML = $shopMwSt ;
}

function inDenWarenkorb (){
 // Sprossen
 var AusgewahlteSprossen = parseInt(document.getElementById('infoID70').innerHTML) ;
 if (AusgewahlteSprossen == 1){ // innenliegende
  document.getElementById('inputPostHiddenID76').value = '' ; // aufgeklebte
  document.getElementById('inputPostHiddenID78').value = '' ; // winner
 }
 else if (AusgewahlteSprossen == 2){ // aufgeklebte
  document.getElementById('inputPostHiddenID74').value = '' ; // innenliegende
  document.getElementById('inputPostHiddenID78').value = '' ; // winner
 }
 else if (AusgewahlteSprossen == 3){ // winner
  document.getElementById('inputPostHiddenID74').value = '' ; // innenliegende
  document.getElementById('inputPostHiddenID76').value = '' ; // aufgeklebte
 }
 else if (AusgewahlteSprossen == 0){ // keine
  document.getElementById('inputPostHiddenID70').value = '' ; // sprossen
  document.getElementById('inputPostHiddenID72').value = '' ; // typ
  document.getElementById('inputPostHiddenID74').value = '' ; // innenliegende
  document.getElementById('inputPostHiddenID76').value = '' ; // aufgeklebte
  document.getElementById('inputPostHiddenID78').value = '' ; // winner
 }

 // Rollladen
 var AusgewahlteRollladen = parseInt(document.getElementById('infoID50').innerHTML) ;
 if ((AusgewahlteRollladen == 1) || (AusgewahlteRollladen == 2)){ // ohne Moskito oder mit
  if (parseInt(document.getElementById('infoID68').innerHTML) == 0){ // steuereinheit
   document.getElementById('inputPostHiddenID68').value = '' ; // steruereiheit
  }
  if (parseInt(document.getElementById('infoID66').innerHTML) == 0){ // fernbedienung
   document.getElementById('inputPostHiddenID66').value = '' ; // fernbedienung
  }
  if (parseInt(document.getElementById('infoID64').innerHTML) == 0){ // putzschiene
   document.getElementById('inputPostHiddenID64').value = '' ; // putzschiene
  }
  if (AusgewahlteRollladen == 1){ // ohne Moskito
   document.getElementById('inputPostHiddenID54').value = '' ; // Kasten mit Moskito
  }
  else if (AusgewahlteRollladen == 2){ // mit Moskito
   document.getElementById('inputPostHiddenID52').value = '' ; // Kasten ohne Moskito
  }
 }
 else{
  document.getElementById('inputPostHiddenID50').value = '' ; // Rollladen
  document.getElementById('inputPostHiddenID52').value = '' ; // Kasten ohne Moskito
  document.getElementById('inputPostHiddenID54').value = '' ; // Kasten mit Moskito
  document.getElementById('inputPostHiddenID58').value = '' ; // Antrieb
  document.getElementById('inputPostHiddenID60').value = '' ; // Panzerfarbe
  document.getElementById('inputPostHiddenID64').value = '' ; // Putzschiene
  document.getElementById('inputPostHiddenID66').value = '' ; // Fernbedienung
  document.getElementById('inputPostHiddenID68').value = '' ; // Steuereinheit
 }

 // Sicherheitsglas Aussen
 if (parseInt(document.getElementById('infoID25').innerHTML) == 0){
  document.getElementById('inputPostHiddenID25').value = '' ;
 }

 // Sicherheitsglas Innen
 if (parseInt(document.getElementById('infoID29').innerHTML) == 0){
  document.getElementById('inputPostHiddenID29').value = '' ;
 }

 // Anschlussprofil
 if (parseInt(document.getElementById('infoID39').innerHTML) == 0){
  document.getElementById('inputPostHiddenID39').value = '' ;
 }

 // Loch
 if (parseInt(document.getElementById('infoID33').innerHTML) == 0){
  document.getElementById('inputPostHiddenID33').value = '' ;
 }

 // Rahmenverbreiterungen ( wird nicht die id der verbreiterung überprüft sodern der aufpreis
 if ((parseInt(document.getElementById('infoVerbreiterungLinksAufpreis').innerHTML) == 0) && (parseInt(document.getElementById('infoVerbreiterungRechtsAufpreis').innerHTML) == 0) && (parseInt(document.getElementById('infoVerbreiterungObenAufpreis').innerHTML) == 0) && (parseInt(document.getElementById('infoVerbreiterungUntenAufpreis').innerHTML) == 0)){
  document.getElementById('inputPostHiddenID10001').value = '' ;
  document.getElementById('inputPostHiddenID44').value = '' ;
  document.getElementById('inputPostHiddenID45').value = '' ;
  document.getElementById('inputPostHiddenID46').value = '' ;
  document.getElementById('inputPostHiddenID47').value = '' ;
 }
 else{
  document.getElementById('inputPostHiddenID44').value = '' ;
  document.getElementById('inputPostHiddenID45').value = '' ;
  document.getElementById('inputPostHiddenID46').value = '' ;
  document.getElementById('inputPostHiddenID47').value = '' ;
 }

 // Schwelle
 if (parseInt(document.getElementById('infoID80').innerHTML) == 0){
  document.getElementById('inputPostHiddenID80').value = '' ;
 }

/*
 // Schallsicher
 if (parseInt(document.getElementById('infoID102').innerHTML) == 0){
//  document.getElementById('inputPostHiddenID102').value = '' ;
 }
*/

 // Lüfter
 if (parseInt(document.getElementById('infoID41').innerHTML) == 0){
  document.getElementById('inputPostHiddenID41').value = '' ;
 }


 // Alu Türen
 var AusgewahlteFutter = parseInt(document.getElementById('infoID86').innerHTML) ;
 if (produktSystemFurSonderAufpreis == 'MB_86SI'){
  if (AusgewahlteFutter == 2){ // Nur glass
   document.getElementById('inputPostHiddenID88').value = '' ; // FutterAluOhneFlugelUberdeckend
   document.getElementById('inputPostHiddenID90').value = '' ; // FutterAluAussenFlugelUberdeckend
   document.getElementById('inputPostHiddenID92').value = '' ; // FutterAluAussenInnenFlugelUberdeckend
  }
  else if (AusgewahlteFutter == 3){ // aussen FlügelUberdeckend
   document.getElementById('inputPostHiddenID88').value = '' ; // FutterAluOhneFlugelUberdeckend
   document.getElementById('inputPostHiddenID92').value = '' ; // FutterAluAussenInnenFlugelUberdeckend
  }
  else if (AusgewahlteFutter == 4){ // aussen und innen FlügelUberdeckend
   document.getElementById('inputPostHiddenID88').value = '' ; // FutterAluOhneFlugelUberdeckend
   document.getElementById('inputPostHiddenID90').value = '' ; // FutterAluAussenFlugelUberdeckend
  }
 }
 else{
  if (AusgewahlteFutter == 1){ // ohne FlügelUberdeckend
   document.getElementById('inputPostHiddenID90').value = '' ; // FutterAluAussenFlugelUberdeckend
   document.getElementById('inputPostHiddenID92').value = '' ; // FutterAluAussenInnenFlugelUberdeckend
  }
  else if (AusgewahlteFutter == 2){ // aussen FlügelUberdeckend
   document.getElementById('inputPostHiddenID88').value = '' ; // FutterAluOhneFlugelUberdeckend
   document.getElementById('inputPostHiddenID92').value = '' ; // FutterAluAussenInnenFlugelUberdeckend
  }
  else if (AusgewahlteFutter == 3){ // aussen und innen FlügelUberdeckend
   document.getElementById('inputPostHiddenID88').value = '' ; // FutterAluOhneFlugelUberdeckend
   document.getElementById('inputPostHiddenID90').value = '' ; // FutterAluAussenFlugelUberdeckend
  }
  else if (AusgewahlteFutter == 0){ // Nur glass
   document.getElementById('inputPostHiddenID88').value = '' ; // FutterAluOhneFlugelUberdeckend
   document.getElementById('inputPostHiddenID90').value = '' ; // FutterAluAussenFlugelUberdeckend
   document.getElementById('inputPostHiddenID92').value = '' ; // FutterAluAussenInnenFlugelUberdeckend
  }
 }


 











 //preis
 document.getElementById('inputPostHiddenID10006').value = document.getElementById('infoGesamtsumme').innerHTML ;

 //Material
 document.getElementById('inputPostHiddenID10009').value = document.getElementById('infoMaterial').innerHTML ;

 //System
 document.getElementById('inputPostHiddenID10010').value = document.getElementById('infoSystem').innerHTML ;

 //Art
 document.getElementById('inputPostHiddenID10011').value = document.getElementById('infoArt').innerHTML ;

 //Typ
 document.getElementById('inputPostHiddenID10012').value = document.getElementById('infoTyp').innerHTML ;

 //Bezeichnung
 document.getElementById('inputPostHiddenID10013').value = document.getElementById('infoBezeichnung').innerHTML ;

 //Kasten für Warenkorb
 AusgewahlterKasten = parseInt(document.getElementById('infoID50').innerHTML) ;
 if ((AusgewahlterKasten == 1) || (AusgewahlterKasten == 2)){ // 0=keine, 1=ohne, 2=mit
  var kastenHohe = 0 ;
  if (AusgewahlterKasten == 1){
   kastenHohe = document.getElementById('zusatz_1_52').innerHTML ;
  }
  else if (AusgewahlterKasten == 2){
   kastenHohe = document.getElementById('zusatz_1_54').innerHTML ;
  }
  document.getElementById('inputPostHiddenID10015').value = kastenHohe ;
 }

 //Breite, Hohe für Warenkorb
 document.getElementById('inputPostHiddenID10016').value = document.getElementById('id_input_breite').value ;
 document.getElementById('inputPostHiddenID10017').value = document.getElementById('id_input_hohe').value ;

 if (istOberLicht){
  document.getElementById('inputPostHiddenID10018').value = parseInt(document.getElementById('div_standard_98').innerHTML) ;
 }

 if (istUnterLicht){
  document.getElementById('inputPostHiddenID10019').value = parseInt(document.getElementById('div_standard_100').innerHTML) ;
 }

 // action bestimmen
 document.produktInfoAusgabenBereichFormName.action = httpAusgabe+'indenkorb.php' ;

 // ob button geklickt wurde

 document.getElementById('inputPostHiddenID10007').value = '1' ;
 document.produktInfoAusgabenBereichFormName.submit() ;
}

function GesamtsummeAusrechnen (){
 var GesamtSummePL = 0 ;
 var GesamtSummeDE = 0 ;
 var GesamtZuruck = 0 ;
 var GesamtZuruckMitLicht = 0 ;
 var MwStSumme = 0 ;
 var FarbenAufpreisAlsZahl = 0 ;
 var VerglasungAufpreisAlsZahl = 0 ;
 var GlasartAufpreisAlsZahl = 0 ;
 var EinProzentVomPreisAusPreistabelle = 0 ;
 var ZwischenSumme_1 = 0 ;
 var ZwischenSumme_2 = 0 ;
 var GewinnAlsZahl = 0 ;

 var PreisAusInfoPreisTabelle = parseInt(document.getElementById('infoPreisTabelle').innerHTML) ;
 var PreisAusInfoFarbeAufpreis = parseInt(document.getElementById('infoFarbeAufpreis').innerHTML) ;
 var PreisAusInfoVerglasungAufpreis = parseInt(document.getElementById('infoVerglasungAufpreis').innerHTML) ;
 var PreisAusInfoGlasartAufpreis = parseInt(document.getElementById('infoGlasartAufpreis').innerHTML) ;
 var PreisAusInfoSicherheitsglasAussenAufpreis = parseInt(document.getElementById('infoSicherheitsglasAussenAufpreis').innerHTML) ;
 var PreisAusInfoSicherheitsglasInnenAufpreis = parseInt(document.getElementById('infoSicherheitsglasInnenAufpreis').innerHTML) ;
 var PreisAusInfoBeschlagAufpreis = parseInt(document.getElementById('infoBeschlagAufpreis').innerHTML) ;

 var AnzahlFlugelAusInfoAnzahlFlugel = parseInt(document.getElementById('infoAnzahlFlugel').innerHTML) ;
 var AnzahlFlugelEchtAusInfoAnzahlFlugelEcht = parseInt(document.getElementById('infoAnzahlFlugelEcht').innerHTML) ;
 var AnzahlGriffeAusInfoAnzahlGriffe = parseInt(document.getElementById('infoAnzahlGriffe').innerHTML) ;
 var PreisAusInfoGriffAufpreis = parseInt(document.getElementById('infoGriffAufpreis').innerHTML) ;
 var PreisAusInfoAnschlussprofilAufpreis = parseInt(document.getElementById('infoAnschlussprofilAufpreis').innerHTML) ;
 var BreiteAusInfoBreite = parseInt(document.getElementById('infoBreite').innerHTML) ;
 var HoheAusInfoHohe = parseInt(document.getElementById('infoHohe').innerHTML) ;
 var PreisAusInfoLufterAufpreis = parseInt(document.getElementById('infoLufterAufpreis').innerHTML) ;
 var PreisAusInfoLochAufpreis = parseInt(document.getElementById('infoLochAufpreis').innerHTML) ;

 var PreisAusVerbreiterungLinksAufpreis = parseInt(document.getElementById('infoVerbreiterungLinksAufpreis').innerHTML) ;
 var PreisAusVerbreiterungRechtsAufpreis = parseInt(document.getElementById('infoVerbreiterungRechtsAufpreis').innerHTML) ;
 var PreisAusVerbreiterungObenAufpreis = parseInt(document.getElementById('infoVerbreiterungObenAufpreis').innerHTML) ;
 var PreisAusVerbreiterungUntenAufpreis = parseInt(document.getElementById('infoVerbreiterungUntenAufpreis').innerHTML) ;

 var PreisAusInfoTurgriffAussenAufpreis = parseInt(document.getElementById('infoTurgriffAussenAufpreis').innerHTML) ;

 var PreisAusInfoDichtungInnenAufpreis = document.getElementById('infoDichtungInnenAufpreis').innerHTML ;
 var PreisAusInfoDichtungAussenAufpreis = document.getElementById('infoDichtungAussenAufpreis').innerHTML ;
 var AufpreisDichtungAussen = (PreisAusInfoPreisTabelle / 100) * PreisAusInfoDichtungAussenAufpreis ;
 var AufpreisDichtungInnen = (PreisAusInfoPreisTabelle / 100) * PreisAusInfoDichtungInnenAufpreis ;
 var PreisAusInfoSchwelleAufpreis = document.getElementById('infoSchwelleAufpreis').innerHTML ;

 var PreisAusInfoSchallsicherAufpreis = document.getElementById('infoSchallsicherAufpreis').innerHTML ;

 // Rollladen
 var PreisAusGurtwicklerAufpreis = 0 ;
 var PreisAusAntriebAufpreis = 0 ;
 var AntriebAufpreis = 0 ;
 var PreisAusKastenOhneMoskitoAufpreis = 0 ;
 var PreisAusKastenMitMoskitoAufpreis = 0 ;
 var AusgewahlterKasten = 0 ;
 var KastenAufpreis = 0 ;
 var PreisAusPanzerfarbeAufpreis = 0 ;
 var PreisAusPanzerschienenAufpreis = 0 ;
 var PreisAusPutzschieneAufpreis = 0 ;
 var PreisAusFernbedienungAufpreis = 0 ;
 var PreisAusSteuereinheitAufpreis = 0 ;
 var KastenHohe = 0 ;
 var HoheZusammenMitKasten = 0 ;
 var QuadratMeterIncusiveKasten = 0 ;
 var AufpreisPanzerFarbe = 0 ;
 var AufpreisPanzerschienen = 0 ;
 var AufpreisPutzschiene = 0 ;

 AusgewahlterKasten = parseInt(document.getElementById('infoID50').innerHTML) ;
 if ((AusgewahlterKasten == 1) || (AusgewahlterKasten == 2)){ // 0=keine, 1=ohne, 2=mit
  PreisAusGurtwicklerAufpreis = parseInt(document.getElementById('infoGurtwicklerAufpreis').innerHTML) ;
  PreisAusAntriebAufpreis = parseInt(document.getElementById('infoAntriebAufpreis').innerHTML) ;
  if (PreisAusAntriebAufpreis > 0){
   AntriebAufpreis = PreisAusAntriebAufpreis + ((BreiteAusInfoBreite/1000)*5) ; // wegen Welle im Kasten 5zl/lfm
  }
  PreisAusKastenOhneMoskitoAufpreis = parseInt(document.getElementById('infoKastenOhneAufpreis').innerHTML) ;
  PreisAusKastenMitMoskitoAufpreis = parseInt(document.getElementById('infoKastenMitAufpreis').innerHTML) ;
  if (AusgewahlterKasten == 1){ // rolladen ohne
   KastenAufpreis = PreisAusKastenOhneMoskitoAufpreis ;
   KastenHohe = parseInt(document.getElementById('zusatz_1_52').innerHTML) ;
  }
  if (AusgewahlterKasten == 2){ // rolladen mit moskito
   KastenAufpreis = PreisAusKastenMitMoskitoAufpreis ;
   KastenHohe = parseInt(document.getElementById('zusatz_1_54').innerHTML) ;
  }
  PreisAusPanzerfarbeAufpreis = parseInt(document.getElementById('infoPanzerfarbeAufpreis').innerHTML) ;
  PreisAusPanzerschienenAufpreis = parseInt(document.getElementById('infoPanzerschienenAufpreis').innerHTML) ;
  AufpreisPanzerschienen = (KastenAufpreis/100) * PreisAusPanzerschienenAufpreis ;
  PreisAusPutzschieneAufpreis = parseInt(document.getElementById('infoPutzschieneAufpreis').innerHTML) ;
  AufpreisPutzschiene = (BreiteAusInfoBreite/1000) * PreisAusPutzschieneAufpreis ;  
  HoheZusammenMitKasten = HoheAusInfoHohe + KastenHohe ;
  QuadratMeterIncusiveKasten = (BreiteAusInfoBreite/1000) * (HoheZusammenMitKasten/1000) ;
  AufpreisPanzerFarbe = QuadratMeterIncusiveKasten * PreisAusPanzerfarbeAufpreis ;

  PreisAusFernbedienungAufpreis = parseInt(document.getElementById('infoFernbedienungAufpreis').innerHTML) ;
  PreisAusSteuereinheitAufpreis = parseInt(document.getElementById('infoSteuereinheitAufpreis').innerHTML) ;
 }

 var QuadratMeterAusInfoM2 = document.getElementById('infoM2').innerHTML ;
 var AufpreisMontageVerbreiterungZusammen = 0 ;

 var AufpreisMontageVerbreiterungLinks = 0 ;
 var AufpreisMontageVerbreiterungRechts = 0 ;
 var AufpreisMontageVerbreiterungOben = 0 ;
 var AufpreisMontageVerbreiterungUnten = 0 ;

 if (PreisAusVerbreiterungLinksAufpreis > 0){
  AufpreisMontageVerbreiterungLinks = 10 ;
 }
 if (PreisAusVerbreiterungRechtsAufpreis > 0){
  AufpreisMontageVerbreiterungRechts = 10 ;
 }
 if (PreisAusVerbreiterungObenAufpreis > 0){
  AufpreisMontageVerbreiterungOben = 10 ;
 }
 if (PreisAusVerbreiterungUntenAufpreis > 0){
  AufpreisMontageVerbreiterungUnten = 10 ;
 }

 AufpreisMontageVerbreiterungZusammen = AufpreisMontageVerbreiterungLinks + AufpreisMontageVerbreiterungRechts + AufpreisMontageVerbreiterungOben + AufpreisMontageVerbreiterungUnten ;

 if (PreisAusInfoPreisTabelle > 0){
  EinProzentVomPreisAusPreistabelle = PreisAusInfoPreisTabelle / 100 ;
  if (PreisAusInfoFarbeAufpreis > 0){
   FarbenAufpreisAlsZahl = PreisAusInfoFarbeAufpreis * EinProzentVomPreisAusPreistabelle ;
  }
  else{
   FarbenAufpreisAlsZahl = 0 ;
  }

  if ((PreisAusInfoVerglasungAufpreis > 0) && (QuadratMeterAusInfoM2 > 0)){
   VerglasungAufpreisAlsZahl = PreisAusInfoVerglasungAufpreis * QuadratMeterAusInfoM2 ;
  }
  else{
   VerglasungAufpreisAlsZahl = 0 ;
  }

  if ((PreisAusInfoGlasartAufpreis > 0) && (QuadratMeterAusInfoM2 > 0)){
   GlasartAufpreisAlsZahl = PreisAusInfoGlasartAufpreis * QuadratMeterAusInfoM2 ;
  }
  else{
   GlasartAufpreisAlsZahl = 0 ;
  }

  if ((PreisAusInfoSicherheitsglasAussenAufpreis > 0) && (QuadratMeterAusInfoM2 > 0)){
   SicherheitsglasAussenAufpreisAlsZahl = PreisAusInfoSicherheitsglasAussenAufpreis * QuadratMeterAusInfoM2 ;
  }
  else{
   SicherheitsglasAussenAufpreisAlsZahl = 0 ;
  }

  if ((PreisAusInfoSicherheitsglasInnenAufpreis > 0) && (QuadratMeterAusInfoM2 > 0)){
   SicherheitsglasInnenAufpreisAlsZahl = PreisAusInfoSicherheitsglasInnenAufpreis * QuadratMeterAusInfoM2 ;
  }
  else{
   SicherheitsglasInnenAufpreisAlsZahl = 0 ;
  }

  // Sprossen
  // AnzahlFlugelAusInfoAnzahlFlugel
  // Farbe ID innen Weiss = 41
  // Farbe ID aussen Weiss = 84
  var AufpreisSprossen = 0 ;
  var AnzahlFelderInsgesamt = 0 ;
  var PreisTreffer = 0 ;
  var AusgewahlteSprossen = parseInt(document.getElementById('infoID70').innerHTML) ;

  if ((AusgewahlteSprossen == 1) || (AusgewahlteSprossen == 2) || (AusgewahlteSprossen == 3)){ // 1=innenliegende, 2=aufgeklebte, 3=winner
   var VerglasungIDAusgelesen = document.getElementById('infoID19').innerHTML ;
   var AnzahlFelderProFlugel = parseInt(document.getElementById('infoSprossenTypAufpreis').innerHTML) ;
   var PreisZusammenInnenliegende = document.getElementById('infoSprossenBreiteInnenliegendeAufpreis').innerHTML ;
   var PreisZusammenAufgeklebte = document.getElementById('infoSprossenBreiteAufgeklebteAufpreis').innerHTML ;
   var PreisZusammenWinner = document.getElementById('infoSprossenBreiteWinnerAufpreis').innerHTML ;

   var FarbenWeissWeissAusgelesen = parseInt(document.getElementById('FarbenWeissWeissDiv').innerHTML) ;
   var FarbenGleichAusgelesen = parseInt(document.getElementById('FarbenGleichDiv').innerHTML) ;

   var AnzahlScheiben = 0 ;
   var PreisGesplitet = 0 ;

   if (hersteller_id == 1){ // Drutex
    if ((VerglasungIDAusgelesen == 0) || (VerglasungIDAusgelesen == 1)){ // 2 fach verglasung und 2 fach mit warmer kante, drutex
     AnzahlScheiben = 2 ;
    }
    else if ((VerglasungIDAusgelesen == 2) || (VerglasungIDAusgelesen == 3)){ // 3 fach verglasung und 3 fach mit warmer kante, drutex
     AnzahlScheiben = 3 ;
    }
   }
   else if ((hersteller_id == 2) || (hersteller_id == 3)){ // aluplast, salamander
    if ((VerglasungIDAusgelesen == 4) || (VerglasungIDAusgelesen == 5)){ // 2 fach verglasung und 2 fach mit warmer kante, aluplast und salamander
     AnzahlScheiben = 2 ;
    }
    else if ((VerglasungIDAusgelesen == 6) || (VerglasungIDAusgelesen == 7)){ // 3 fach verglasung und 3 fach mit warmer kante, aluplast und salamander
     AnzahlScheiben = 3 ;
    }
   }

   if (AusgewahlteSprossen == 1){ // innenliegende
    PreisGesplitet = PreisZusammenInnenliegende.split (";") ;
   }
   else if (AusgewahlteSprossen == 2){ // aufgeklebte
    PreisGesplitet= PreisZusammenAufgeklebte.split (";") ;
   }
   else if (AusgewahlteSprossen == 3){ // winner
    PreisGesplitet = PreisZusammenWinner.split (";") ;
   }
   if ((materialID == 1) || (materialID == 5)){ // PVC, PVCALU
    if (FarbenWeissWeissAusgelesen){ // fenster: weiss-weiss
     if (AnzahlScheiben == 2){
      PreisTreffer = parseInt(PreisGesplitet[0]) ;
     }
     else if (AnzahlScheiben == 3){
      PreisTreffer = parseInt(PreisGesplitet[2]) ;
     }
    }
    else if ((FarbenGleichAusgelesen) && (!FarbenWeissWeissAusgelesen)){ // fenster gleiche Farbe aber nicht weiss-weiss
     if (AnzahlScheiben == 2){
      PreisTreffer = parseInt(PreisGesplitet[1]) ;
     }
     else if (AnzahlScheiben == 3){
      PreisTreffer = parseInt(PreisGesplitet[3]) ;
     }
    }
    else{ // fenster bunt
     if (AnzahlScheiben == 2){
      PreisTreffer = parseInt(PreisGesplitet[1]) ;
     }
     else if (AnzahlScheiben == 3){
      PreisTreffer = parseInt(PreisGesplitet[3]) ;
     }
    }
   }
   else if (materialID == 2){ // HOLZ
    if (FarbenGleichAusgelesen){ // fenster gleiche Farbe
     if (AnzahlScheiben == 2){
      PreisTreffer = parseInt(PreisGesplitet[0]) ;
     }
     else if (AnzahlScheiben == 3){
      PreisTreffer = parseInt(PreisGesplitet[2]) ;
     }
    }
    else{ // fenster bunt
     if (AnzahlScheiben == 2){
      PreisTreffer = parseInt(PreisGesplitet[1]) ;
     }
     else if (AnzahlScheiben == 3){
      PreisTreffer = parseInt(PreisGesplitet[3]) ;
     }
    }
   }
   var AnzahlFelderInsgesamt = AnzahlFelderProFlugel * AnzahlFlugelAusInfoAnzahlFlugel ;
   AufpreisSprossen = AnzahlFelderInsgesamt * PreisTreffer ;
  }

  var SchwelleAufpreis = PreisAusInfoSchwelleAufpreis * (BreiteAusInfoBreite/1000) ;

  var SchallsicherAufpreis = PreisAusInfoSchallsicherAufpreis * QuadratMeterAusInfoM2 ;



  // futterPVC türen PVC
  var FutterPVCID = parseInt(document.getElementById('infoID82').innerHTML) ;
  var FutterPVCAufpreis = 0 ;
  if (FutterPVCID >= 0){ // futterPVC ausgewählt (vor ekookna war hier: (FutterPVCID > 0))
   var PreisAusInfoFutterPVCAufpreis = parseInt(document.getElementById('infoFutterPVCAufpreis').innerHTML) ;
   var PreisAusInfoFutterPVCFarbeAufpreis = parseInt(document.getElementById('infoFutterPVCFarbeAufpreis').innerHTML) ;
   FutterPVCAufpreis = (AnzahlFlugelEchtAusInfoAnzahlFlugelEcht * PreisAusInfoFutterPVCAufpreis) + (AnzahlFlugelEchtAusInfoAnzahlFlugelEcht * PreisAusInfoFutterPVCFarbeAufpreis) ;
  }

  // futterAlu türen
  // AnzahlFlugelAusInfoAnzahlFlugel
  var Futter_ALU_Art_ID = parseInt(document.getElementById('infoID86').innerHTML) ;
  var FutterAluAufpreisAusgewahlt = 0 ;
  var FutterAluAufpreis = 0 ;

  if (produktSystemFurSonderAufpreis == 'MB_86SI'){
   if (Futter_ALU_Art_ID > 2){ // futterAlu ausgewählt
    if (Futter_ALU_Art_ID == 3){ // aussen flugel uberdeckend
     FutterAluAufpreisAusgewahlt = parseInt(document.getElementById('infoFutterAluAussenFlugelUberdeckendAufpreis').innerHTML) ;
    }
    else if (Futter_ALU_Art_ID == 4){ // innen flugel uberdeckend
     FutterAluAufpreisAusgewahlt = parseInt(document.getElementById('infoFutterAluAussenInnenFlugelUberdeckendAufpreis').innerHTML) ;
    }
    var ProzentFarbeAufpreis = parseInt(document.getElementById('infoFutterPVCFarbeAufpreis').innerHTML) ;
    var FarbeAufpreisBerechnet = (FutterAluAufpreisAusgewahlt / 100) * ProzentFarbeAufpreis ;
    FutterAluAufpreis = (FutterAluAufpreisAusgewahlt + FarbeAufpreisBerechnet) * AnzahlFlugelEchtAusInfoAnzahlFlugelEcht ;
   }
  }
  else{
   if (Futter_ALU_Art_ID > 0){ // futterAlu ausgewählt
    if (Futter_ALU_Art_ID == 1){ // ohne flugel uberdeckend
     FutterAluAufpreisAusgewahlt = parseInt(document.getElementById('infoFutterAluOhneFlugelUberdeckendAufpreis').innerHTML) ;
    }
    else if (Futter_ALU_Art_ID == 2){ // aussen flugel uberdeckend
     FutterAluAufpreisAusgewahlt = parseInt(document.getElementById('infoFutterAluAussenFlugelUberdeckendAufpreis').innerHTML) ;
    }
    else if (Futter_ALU_Art_ID == 3){ // innen flugel uberdeckend
     FutterAluAufpreisAusgewahlt = parseInt(document.getElementById('infoFutterAluAussenInnenFlugelUberdeckendAufpreis').innerHTML) ;
    }
    var ProzentFarbeAufpreis = parseInt(document.getElementById('infoFutterPVCFarbeAufpreis').innerHTML) ;
    var FarbeAufpreisBerechnet = (FutterAluAufpreisAusgewahlt / 100) * ProzentFarbeAufpreis ;
    FutterAluAufpreis = (FutterAluAufpreisAusgewahlt + FarbeAufpreisBerechnet) * AnzahlFlugelEchtAusInfoAnzahlFlugelEcht ;
   }
  }

  // PSK aufpreis für bessere schiene
  var PSK_aufpreis = 0 ;
  if (produktArtFurSonderAufpreis == 'TERRASSE_PSK'){
   if (hersteller_id == 1){ // Drutex
    PSK_aufpreis = 680 ;
   }
   else if ((hersteller_id == 2) || (hersteller_id == 3)){ // aluplast, salamander
    PSK_aufpreis = 1000 ;
   }
  }

  // Alu Türen aufpreis für besseren Beschlag
  var ALU_beschlag_aufpreis = 0 ;
  if ((produktArtFurSonderAufpreis == 'TUR') && (produktSystemFurSonderAufpreis == 'MB_45' || produktSystemFurSonderAufpreis == 'MB_70' || produktSystemFurSonderAufpreis == 'MB_70HI' || produktSystemFurSonderAufpreis == 'MB_86SI')){
//   ALU_beschlag_aufpreis = 550 ;
  }

  // pvc-alu aluminium schalle aufpreis
  var pvcAluSchalenAufpreis = 0 ;
  var aufpreisEinheit = 16 ;
  if (materialID == 5){ // pvcalu
   var umfangFensterMM = (2 * BreiteAusInfoBreite) + (2 * HoheAusInfoHohe) ;
   var rahmenAufpreisPvcAlu = (umfangFensterMM / 1000) * aufpreisEinheit ;
   var umfangFlugelMM = (2 * (BreiteAusInfoBreite / AnzahlFlugelAusInfoAnzahlFlugel)) + (2 * HoheAusInfoHohe) ;
   var flugelAufpreisPvcAlu = ((umfangFlugelMM / 1000) * aufpreisEinheit) * AnzahlFlugelEchtAusInfoAnzahlFlugelEcht ;
   var slupkiAufpreisPvcAlu = (AnzahlFlugelAusInfoAnzahlFlugel - 1) * ((HoheAusInfoHohe / 1000) * aufpreisEinheit) ;
   pvcAluSchalenAufpreis = rahmenAufpreisPvcAlu + flugelAufpreisPvcAlu + slupkiAufpreisPvcAlu ;
  }






  var OberLichtPreisZusammen = 0 ;
  var UnterLichtPreisZusammen = 0 ;
  var GesamtZuruck_oberLicht = 0 ;
  var GesamtZuruck_unterLicht = 0 ;

  if (istOberLicht || istUnterLicht){
   if (istOberLicht){
    var OberLichtHohe = parseInt(document.getElementById('div_standard_98').innerHTML) ;
    var OberLichtM2 = (BreiteAusInfoBreite * OberLichtHohe) / 1000000 ;
    var preisOberLichtAusPreistabelle = preisInPreistabelleFinden (preisTabelleOberLicht, BreiteAusInfoBreite, OberLichtHohe) ;
    var EinProzentVomPreisAusPreistabelleOberLicht = 0 ;
    var FarbenAufpreisOberLichtAlsZahl = 0 ;
    var VerglasungAufpreisOberLichtAlsZahl = 0 ;
    var GlasartAufpreisOberLichtAlsZahl = 0 ;
    var SicherheitsglasAussenOberLichtAufpreisAlsZahl = 0 ;
    var SicherheitsglasInnenOberLichtAufpreisAlsZahl = 0 ;
    var VerbreiterungLinksOberLichtAufpreis = 0 ;
    var VerbreiterungRechtsOberLichtAufpreis = 0 ;
    var PanzerFarbeOberLichtAufpreis = 0 ;
    var GiffeOberLichtAufpreis = 0 ;
    var BeschlagOberLichtAufpreis = 0 ;
    var SchallsicherOberLichtAufpreis = 0 ;

    if (preisOberLichtAusPreistabelle > 0){
     EinProzentVomPreisAusPreistabelleOberLicht = preisOberLichtAusPreistabelle / 100 ;
     if (PreisAusInfoFarbeAufpreis > 0){
      FarbenAufpreisOberLichtAlsZahl = PreisAusInfoFarbeAufpreis * EinProzentVomPreisAusPreistabelleOberLicht ;
     }
     if ((PreisAusInfoVerglasungAufpreis > 0) && (OberLichtM2 > 0)){
      VerglasungAufpreisOberLichtAlsZahl = PreisAusInfoVerglasungAufpreis * OberLichtM2 ;
     }
     if ((PreisAusInfoGlasartAufpreis > 0) && (OberLichtM2 > 0)){
      GlasartAufpreisOberLichtAlsZahl = PreisAusInfoGlasartAufpreis * OberLichtM2 ;
     }
     if ((PreisAusInfoSicherheitsglasAussenAufpreis > 0) && (OberLichtM2 > 0)){
      SicherheitsglasAussenOberLichtAufpreisAlsZahl = PreisAusInfoSicherheitsglasAussenAufpreis * OberLichtM2 ;
     }
     if ((PreisAusInfoSicherheitsglasInnenAufpreis > 0) && (OberLichtM2 > 0)){
      SicherheitsglasInnenOberLichtAufpreisAlsZahl = PreisAusInfoSicherheitsglasInnenAufpreis * OberLichtM2 ;
     }
     if (PreisAusVerbreiterungLinksAufpreis > 0){
      VerbreiterungLinksOberLichtAufpreis = (PreisAusVerbreiterungLinksAufpreis * (OberLichtHohe / 1000)) ;
     }
     if (PreisAusVerbreiterungRechtsAufpreis > 0){
      VerbreiterungRechtsOberLichtAufpreis = (PreisAusVerbreiterungRechtsAufpreis * (OberLichtHohe / 1000)) ;
     }
     if ((AusgewahlterKasten == 1) || (AusgewahlterKasten == 2)){ // 0=keine, 1=ohne, 2=mit
      PanzerFarbeOberLichtAufpreis = OberLichtM2 * PreisAusPanzerfarbeAufpreis ;
     }
     if (oberLichtAnzahlGriffe > 0){
      GiffeOberLichtAufpreis = (oberLichtAnzahlGriffe * PreisAusInfoGriffAufpreis) ;
     }
     if (oberLichtAnzahlFlugelReal > 0){
      BeschlagOberLichtAufpreis = PreisAusInfoBeschlagAufpreis * oberLichtAnzahlFlugelReal ;
     }
     SchallsicherOberLichtAufpreis = PreisAusInfoSchallsicherAufpreis * OberLichtM2 ;
    }

    OberLichtPreisZusammen = preisOberLichtAusPreistabelle + FarbenAufpreisOberLichtAlsZahl + VerglasungAufpreisOberLichtAlsZahl + GlasartAufpreisOberLichtAlsZahl + SicherheitsglasAussenOberLichtAufpreisAlsZahl + SicherheitsglasInnenOberLichtAufpreisAlsZahl + VerbreiterungLinksOberLichtAufpreis + VerbreiterungRechtsOberLichtAufpreis + PanzerFarbeOberLichtAufpreis + GiffeOberLichtAufpreis + BeschlagOberLichtAufpreis + SchallsicherOberLichtAufpreis ;

    var GewinnAlsZahl_oberLicht = (OberLichtPreisZusammen / 100) * gewinnProzent ;
    var ZwischenSumme_2_oberLicht = OberLichtPreisZusammen + GewinnAlsZahl_oberLicht ;
    var MwStSumme_oberLicht = (ZwischenSumme_2_oberLicht / 100) * MWSteuer ;
    var GesamtSummePL_oberLicht = ZwischenSumme_2_oberLicht + MwStSumme_oberLicht ;
    var GesamtSummeDE_oberLicht = GesamtSummePL_oberLicht / umrechnungsFaktor ;
    if (rabat_prozente > 0){
     GesamtSummeDE_oberLicht = GesamtSummeDE_oberLicht - ((GesamtSummeDE_oberLicht / 100) * rabat_prozente) ;
    }
    GesamtZuruck_oberLicht = Auf2NachkommeStellenVerkurzen (GesamtSummeDE_oberLicht) ;

    document.getElementById('debuggerLichtPreisOberLicht').innerHTML = OberLichtPreisZusammen ;
    document.getElementById('debuggerLichtOberLichtM2').innerHTML = OberLichtM2 ;
    document.getElementById('debuggerLichtOberLichtHohe').innerHTML = OberLichtHohe ;
    document.getElementById('debuggerLichtOberLichtPreisAusPreistabelle').innerHTML = preisOberLichtAusPreistabelle ;
    document.getElementById('debuggerLichtOberLichtVerbreiterungLinksAufpreis').innerHTML = VerbreiterungLinksOberLichtAufpreis ;
    document.getElementById('debuggerLichtOberLichtVerbreiterungRechtsAufpreis').innerHTML = VerbreiterungRechtsOberLichtAufpreis ;
    document.getElementById('debuggerLichtOberLichtGriffeAufpreis').innerHTML = GiffeOberLichtAufpreis ;
    document.getElementById('debuggerLichtGesamtZuruckOberLicht').innerHTML = GesamtZuruck_oberLicht ;

   }
   if (istUnterLicht){
    var UnterLichtHohe = parseInt(document.getElementById('div_standard_100').innerHTML) ;
    var UnterLichtM2 = (BreiteAusInfoBreite * UnterLichtHohe) / 1000000 ;
    var preisUnterLichtAusPreistabelle = preisInPreistabelleFinden (preisTabelleUnterLicht, BreiteAusInfoBreite, UnterLichtHohe) ;
    var EinProzentVomPreisAusPreistabelleUnterLicht = 0 ;
    var FarbenAufpreisUnterLichtAlsZahl = 0 ;
    var VerglasungAufpreisUnterLichtAlsZahl = 0 ;
    var GlasartAufpreisUnterLichtAlsZahl = 0 ;
    var SicherheitsglasAussenUnterLichtAufpreisAlsZahl = 0 ;
    var SicherheitsglasInnenUnterLichtAufpreisAlsZahl = 0 ;
    var VerbreiterungLinksUnterLichtAufpreis = 0 ;
    var VerbreiterungRechtsUnterLichtAufpreis = 0 ;
    var PanzerFarbeUnterLichtAufpreis = 0 ;
    var GiffeUnterLichtAufpreis = 0 ;
    var BeschlagUnterLichtAufpreis = 0 ;
    var SchallsicherUnterLichtAufpreis = 0 ;

    if (preisUnterLichtAusPreistabelle > 0){
     EinProzentVomPreisAusPreistabelleUnterLicht = preisUnterLichtAusPreistabelle / 100 ;
     if (PreisAusInfoFarbeAufpreis > 0){
      FarbenAufpreisUnterLichtAlsZahl = PreisAusInfoFarbeAufpreis * EinProzentVomPreisAusPreistabelleUnterLicht ;
     }
     if ((PreisAusInfoVerglasungAufpreis > 0) && (UnterLichtM2 > 0)){
      VerglasungAufpreisUnterLichtAlsZahl = PreisAusInfoVerglasungAufpreis * UnterLichtM2 ;
     }
     if ((PreisAusInfoGlasartAufpreis > 0) && (UnterLichtM2 > 0)){
      GlasartAufpreisUnterLichtAlsZahl = PreisAusInfoGlasartAufpreis * UnterLichtM2 ;
     }
     if ((PreisAusInfoSicherheitsglasAussenAufpreis > 0) && (UnterLichtM2 > 0)){
      SicherheitsglasAussenUnterLichtAufpreisAlsZahl = PreisAusInfoSicherheitsglasAussenAufpreis * UnterLichtM2 ;
     }
     if ((PreisAusInfoSicherheitsglasInnenAufpreis > 0) && (UnterLichtM2 > 0)){
      SicherheitsglasInnenUnterLichtAufpreisAlsZahl = PreisAusInfoSicherheitsglasInnenAufpreis * UnterLichtM2 ;
     }
     if (PreisAusVerbreiterungLinksAufpreis > 0){
      VerbreiterungLinksUnterLichtAufpreis = (PreisAusVerbreiterungLinksAufpreis * (UnterLichtHohe / 1000)) ;
     }
     if (PreisAusVerbreiterungRechtsAufpreis > 0){
      VerbreiterungRechtsUnterLichtAufpreis = (PreisAusVerbreiterungRechtsAufpreis * (UnterLichtHohe / 1000)) ;
     }
     if ((AusgewahlterKasten == 1) || (AusgewahlterKasten == 2)){ // 0=keine, 1=ohne, 2=mit
      PanzerFarbeUnterLichtAufpreis = UnterLichtM2 * PreisAusPanzerfarbeAufpreis ;
     }
     if (unterLichtAnzahlGriffe > 0){
      GiffeUnterLichtAufpreis = (unterLichtAnzahlGriffe * PreisAusInfoGriffAufpreis) ;
     }
     if (unterLichtAnzahlFlugelReal > 0){
      BeschlagUnterLichtAufpreis = PreisAusInfoBeschlagAufpreis * unterLichtAnzahlFlugelReal ;
     }
     SchallsicherUnterLichtAufpreis = PreisAusInfoSchallsicherAufpreis * UnterLichtM2 ;
    }

    UnterLichtPreisZusammen = preisUnterLichtAusPreistabelle + FarbenAufpreisUnterLichtAlsZahl + VerglasungAufpreisUnterLichtAlsZahl + GlasartAufpreisUnterLichtAlsZahl + SicherheitsglasAussenUnterLichtAufpreisAlsZahl + SicherheitsglasInnenUnterLichtAufpreisAlsZahl + VerbreiterungLinksUnterLichtAufpreis + VerbreiterungRechtsUnterLichtAufpreis + PanzerFarbeUnterLichtAufpreis + GiffeUnterLichtAufpreis + BeschlagUnterLichtAufpreis + SchallsicherUnterLichtAufpreis ;

    var GewinnAlsZahl_unterLicht = (UnterLichtPreisZusammen / 100) * gewinnProzent ;
    var ZwischenSumme_2_unterLicht = UnterLichtPreisZusammen + GewinnAlsZahl_unterLicht ;
    var MwStSumme_unterLicht = (ZwischenSumme_2_unterLicht / 100) * MWSteuer ;
    var GesamtSummePL_unterLicht = ZwischenSumme_2_unterLicht + MwStSumme_unterLicht ;
    var GesamtSummeDE_unterLicht = GesamtSummePL_unterLicht / umrechnungsFaktor ;
    if (rabat_prozente > 0){
     GesamtSummeDE_unterLicht = GesamtSummeDE_unterLicht - ((GesamtSummeDE_unterLicht / 100) * rabat_prozente) ;
    }
    GesamtZuruck_unterLicht = Auf2NachkommeStellenVerkurzen (GesamtSummeDE_unterLicht) ;

    document.getElementById('debuggerLichtPreisUnterLicht').innerHTML = UnterLichtPreisZusammen ;
    document.getElementById('debuggerLichtUnterLichtM2').innerHTML = UnterLichtM2 ;
    document.getElementById('debuggerLichtUnterLichtHohe').innerHTML = UnterLichtHohe ;
    document.getElementById('debuggerLichtUnterLichtPreisAusPreistabelle').innerHTML = preisUnterLichtAusPreistabelle ;
    document.getElementById('debuggerLichtUnterLichtVerbreiterungLinksAufpreis').innerHTML = VerbreiterungLinksUnterLichtAufpreis ;
    document.getElementById('debuggerLichtUnterLichtVerbreiterungRechtsAufpreis').innerHTML = VerbreiterungRechtsUnterLichtAufpreis ;
    document.getElementById('debuggerLichtUnterLichtGriffeAufpreis').innerHTML = GiffeUnterLichtAufpreis ;
    document.getElementById('debuggerLichtGesamtZuruckUnterLicht').innerHTML = GesamtZuruck_unterLicht ;

   }
   document.getElementById('debuggerLichtTest').innerHTML = 0 ;
  }

  ZwischenSumme_1 = PreisAusInfoPreisTabelle + FarbenAufpreisAlsZahl + VerglasungAufpreisAlsZahl + GlasartAufpreisAlsZahl + SicherheitsglasAussenAufpreisAlsZahl + SicherheitsglasInnenAufpreisAlsZahl + (PreisAusInfoBeschlagAufpreis * AnzahlFlugelEchtAusInfoAnzahlFlugelEcht) + (PreisAusInfoGriffAufpreis * AnzahlGriffeAusInfoAnzahlGriffe) + (PreisAusInfoAnschlussprofilAufpreis * (BreiteAusInfoBreite/1000)) + (PreisAusInfoLufterAufpreis * AnzahlFlugelEchtAusInfoAnzahlFlugelEcht) + PreisAusInfoLochAufpreis + AufpreisDichtungInnen + AufpreisDichtungAussen + (PreisAusVerbreiterungLinksAufpreis * (iHohe/1000)) + (PreisAusVerbreiterungRechtsAufpreis * (iHohe/1000)) + (PreisAusVerbreiterungObenAufpreis * (iBreite/1000)) + (PreisAusVerbreiterungUntenAufpreis * (iBreite/1000)) + AufpreisMontageVerbreiterungZusammen + PreisAusInfoTurgriffAussenAufpreis + KastenAufpreis + PreisAusGurtwicklerAufpreis + AntriebAufpreis + AufpreisPanzerFarbe + AufpreisPanzerschienen + AufpreisPutzschiene + AufpreisSprossen + SchwelleAufpreis + FutterPVCAufpreis + FutterAluAufpreis + PSK_aufpreis + ALU_beschlag_aufpreis + produkt_aufpreis_value + pvcAluSchalenAufpreis + SchallsicherAufpreis ;
  GewinnAlsZahl = (ZwischenSumme_1 / 100) * gewinnProzent ;

  ZwischenSumme_2 = PreisAusFernbedienungAufpreis + PreisAusSteuereinheitAufpreis + ZwischenSumme_1 + GewinnAlsZahl ;

  

  MwStSumme = (ZwischenSumme_2 / 100) * MWSteuer ;



  GesamtSummePL = ZwischenSumme_2 + MwStSumme ;
  GesamtSummeDE = GesamtSummePL / umrechnungsFaktor ;

  if (rabat_prozente > 0){
   GesamtSummeDE = GesamtSummeDE - ((GesamtSummeDE / 100) * rabat_prozente) ;
  }

  GesamtZuruck = Auf2NachkommeStellenVerkurzen (GesamtSummeDE) ;

  document.getElementById('debuggerLichtGesamtHauptfenster').innerHTML = GesamtZuruck ;

  GesamtZuruckMitLicht = parseFloat(GesamtZuruck) + parseFloat(GesamtZuruck_oberLicht) + parseFloat(GesamtZuruck_unterLicht) ;
  
  GesamtZuruckMitLichtVerkurzt = Auf2NachkommeStellenVerkurzen (GesamtZuruckMitLicht) ;
  

  ProduktInfoAktualisieren (1000, GesamtZuruckMitLichtVerkurzt, gewinnProzent, GewinnAlsZahl, '', '', '') ;
  ProduktInfoAktualisieren (21, GesamtZuruckMitLichtVerkurzt, '', '', '', '', '') ;
  document.getElementById('inputPostHiddenID1000000').value = md5 (GesamtZuruckMitLichtVerkurzt) ;
 }
 else{
  ProduktInfoAktualisieren (21, breite_und_hohe_eingeben, '', '', '', '', '') ;
 }
}

function preisInPreistabelleFinden (pt, ib, ih){
 var iHoheTreffer = 0 ;
 var iBreiteTreffer = 0 ;
 var preisGefunden = 0 ;
 var x = 0 ;
 if ((ib > 0) && (ih > 0)){
  for (x = (pt.length-1); x >= 0; x--){ // hohe
   if (ih <= pt[x][0]){
    iHoheTreffer = x ;
   }
  }
  for (x = (pt[1].length-1); x >= 0; x--){ // breite
   if (ib <= pt[0][x]){
    iBreiteTreffer = x ;
   }
  }
  preisGefunden = pt[iHoheTreffer][iBreiteTreffer] ;
 }
 return preisGefunden ;
}

function LinienImObjektZeichnen (idObjekt, bezeichnung){
 var c = document.getElementById(idObjekt) ;
 var ctx = c.getContext ('2d') ;
 var Oben = 0 ;
 var Unten = 120 ;
 var Rechts = 90 ;
 var Links = 0 ;
 var VertikalMitte = 60 ;
 var HorizontalMitte = 45 ;
 
 ctx.beginPath () ;
 if (bezeichnung == 'DKL'){
  ctx.moveTo (Links, Oben) ;
  ctx.lineTo (Rechts, VertikalMitte) ;
  ctx.lineTo (Links, Unten) ;
  ctx.lineTo (HorizontalMitte, Oben) ;
  ctx.lineTo (Rechts, Unten) ;
 }
 if (bezeichnung == 'DL'){
  ctx.moveTo (Links, Oben) ;
  ctx.lineTo (Rechts, VertikalMitte) ;
  ctx.lineTo (Links, Unten) ;
 }
 else if (bezeichnung == 'DKR'){
  ctx.moveTo (Rechts, Oben) ;
  ctx.lineTo (Links, VertikalMitte) ;
  ctx.lineTo (Rechts, Unten) ;
  ctx.lineTo (HorizontalMitte, Oben) ;
  ctx.lineTo (Links, Unten) ;
 }
 else if (bezeichnung == 'DR'){
  ctx.moveTo (Rechts, Oben) ;
  ctx.lineTo (Links, VertikalMitte) ;
  ctx.lineTo (Rechts, Unten) ;
 }
 else if (bezeichnung == 'K'){
  ctx.lineTo (Links, Unten) ;
  ctx.lineTo (HorizontalMitte, Oben) ;
  ctx.lineTo (Rechts, Unten) ;
 }
 ctx.stroke () ;
}

function objektSchalten (idObjekt, statusObjekt){
 if (statusObjekt == 1){
  document.getElementById(idObjekt).style.display = 'block' ;
 }
 else if (statusObjekt == 0){
  document.getElementById(idObjekt).style.display = 'none' ;
 }
}

function RollladePrufen (){
 var rollladeIst = parseInt(document.getElementById('infoID50').innerHTML) ; // 0=keine, 1=rolllade, 2=rollade mit moskito
 var produktBreite = document.getElementById('id_input_breite').value ;
 var produktHohe = document.getElementById('id_input_hohe').value ;

 var iHoheOberLichtFertig = 0 ;
 var iHoheUnterLichtFertig = 0 ;
 if (istOberLicht){
  if (document.getElementById('div_standard_98')){
   iHoheOberLichtFertig = document.getElementById('div_standard_98').innerHTML ;
  }
 }
 if (istUnterLicht){

  if (document.getElementById('div_standard_100')){
   iHoheUnterLichtFertig = document.getElementById('div_standard_100').innerHTML ;
  }
 }
 produktHohe = parseInt (produktHohe) + parseInt (iHoheOberLichtFertig) + parseInt (iHoheUnterLichtFertig) ;

 RollladenReseten (rollladeIst) ; // Rollladen ALLES auf 0 setzen

 // alle kästen ausschalten
 document.getElementById('kasten_einzeln_52_0').style.display = 'none' ; // 170 ohne
 document.getElementById('kasten_einzeln_52_1').style.display = 'none' ; // 210 ohne
 document.getElementById('kasten_einzeln_52_2').style.display = 'none' ; // 240 ohne
 document.getElementById('kasten_einzeln_54_3').style.display = 'none' ; // 170 mit
 document.getElementById('kasten_einzeln_54_4').style.display = 'none' ; // 210 mit
 document.getElementById('kasten_einzeln_54_5').style.display = 'none' ; // 240 mit
 document.getElementById('kasten_einzeln_52_6').style.display = 'none' ; // 215 drutex ohne
 document.getElementById('kasten_einzeln_52_8').style.display = 'none' ; // 170 drutex ohne
 document.getElementById('kasten_einzeln_54_7').style.display = 'none' ; // 215 drutex mit
 document.getElementById('kasten_einzeln_54_9').style.display = 'none' ; // 170 drutex mit
 document.getElementById('kasten_einzeln_52_10').style.display = 'none' ; // 225 ohne
 document.getElementById('kasten_einzeln_54_11').style.display = 'none' ; // 225 mit


 if (hersteller_id == 1){ // Drutex
  // Breiten und Höhen am 02.02.2018 angegeben
  var BreiteMinimumMit_170 = 750 ;
  var BreiteMaximumMit_170 = 0 ;
  var HoheMinimumMit_170 = 800 ;
  var HoheMaximumMit_170 = 1600 ;

  var BreiteMinimumOhne_170 = 750 ;
  var HoheMaximumOhne_170 = 1700 ;
  var BreiteMaximumOhne_170 = 0 ;
  var HoheMinimumOhne_170 = 750 ;





  var BreiteMinimumOhne_215 = 700 ;
  var BreiteMaximumOhne_215 = 3000 ;
  var HoheMinimumOhne_215 = 500 ;
  var HoheMaximumOhne_215 = 3100 ;

  var BreiteMinimumMit_215 = 700 ;
  var BreiteMaximumMit_215 = 1800 ;
  var HoheMinimumMit_215 = 500 ;
  var HoheMaximumMit_215 = 2700 ;









  var BreiteMinimumMit_225 = 800 ;
  var BreiteMaximumMit_225 = 0 ;
  var HoheMinimumMit_225 = 1000 ;
  var HoheMaximumMit_225 = 3100 ;

  var BreiteMinimumOhne_225 = 800 ;
  var BreiteMaximumOhne_225 = 3000 ;
  var HoheMinimumOhne_225 = 1000 ;
  var HoheMaximumOhne_225 = 3100 ;

//   document.getElementById('standardZusammenInfoObenID50').innerHTML = rolladenInfoObenKeine_txt ;
//   document.getElementById('standardZusammenInfoObenID50').innerHTML = rolladenInfoOben_txt ;

  var gibtEsRolladenOhne = 1 ;
  var gibtEsRolladenMit = 1 ;

  var keineRolladeMassenMinMaxTxt = '' ;
  if (produktBreite < BreiteMinimumOhne_215){
   keineRolladeMassenMinMaxTxt = '<div>' + minimaleBreiteBetragt + ': ' + BreiteMinimumOhne_215 + 'mm</div>' ;
  }
  else if (produktBreite > BreiteMaximumOhne_215){
   keineRolladeMassenMinMaxTxt = keineRolladeMassenMinMaxTxt + '<div>' + maximaleBreiteBetragt + ': ' + BreiteMaximumOhne_215 + 'mm</div>' ;
  }

  if (produktHohe < HoheMinimumOhne_215){
   keineRolladeMassenMinMaxTxt = keineRolladeMassenMinMaxTxt +  '<div>' + minimaleHoheBetragt + ': ' + HoheMinimumOhne_215 + 'mm</div>' ;

  }
  else if (produktHohe > HoheMaximumOhne_215){
   keineRolladeMassenMinMaxTxt = keineRolladeMassenMinMaxTxt +  '<div>' + maximaleHoheBetragt + ': ' + HoheMaximumOhne_215 + 'mm</div>' ;
  }

/*
  if ((produktBreite >= BreiteMinimumOhne_170) && (produktHohe >= HoheMinimumOhne_170) && (produktBreite <= BreiteMaximumOhne_170) && (produktHohe <= HoheMaximumOhne_170)){ // ohne
   document.getElementById('standardEinzeln_50_1').style.display = 'inline-block' ; // rollladen ohne moskitonetz
   document.getElementById('kasten_einzeln_52_8').style.display = 'inline-block' ; // kasten 170
   document.getElementById('kasten_einzeln_52_6').style.display = 'inline-block' ; // kasten 215
   ProduktInfoAktualisieren (52, 0, kastenNameOhne215drutex, 'standard_52_3', 8, '', '') ;	
  }
  else if ((produktBreite >= BreiteMinimumOhne_215) && (produktHohe >= HoheMinimumOhne_215) && (produktBreite <= BreiteMaximumOhne_215) && (produktHohe <= HoheMaximumOhne_215)){
   document.getElementById('standardEinzeln_50_1').style.display = 'inline-block' ; // rollladen mit moskitonetz
   document.getElementById('kasten_einzeln_52_6').style.display = 'inline-block' ; // kasten 215
   ProduktInfoAktualisieren (52, 0, kastenNameOhne215drutex, 'standard_52_4', 6, '', '') ; // 215 als erste setzen
  }
  else{
   document.getElementById('standardEinzeln_50_1').style.display = 'none' ; // keine rollladen ohne
  }

  if ((produktBreite >= BreiteMinimumMit_170) && (produktHohe >= HoheMinimumMit_170) && (produktBreite <= BreiteMaximumMit_170) && (produktHohe <= HoheMaximumMit_170)){ // Mit
   document.getElementById('standardEinzeln_50_2').style.display = 'inline-block' ; // rollladen mit moskitonetz
   document.getElementById('kasten_einzeln_54_9').style.display = 'inline-block' ; // kasten 170 drutex
   document.getElementById('kasten_einzeln_54_7').style.display = 'inline-block' ; // kasten 215 drutex
   ProduktInfoAktualisieren (54, 0, kastenNameMit215drutex, 'standard_54_3', 9, '', '') ; // 170 drutex als erste setzen
  }
  else if ((produktBreite >= BreiteMinimumMit_215) && (produktHohe >= HoheMinimumMit_215) && (produktBreite <= BreiteMaximumMit_215) && (produktHohe <= HoheMaximumMit_215)){
   document.getElementById('standardEinzeln_50_2').style.display = 'inline-block' ; // rollladen mit moskitonetz
   document.getElementById('kasten_einzeln_54_7').style.display = 'inline-block' ; // kasten 215 drutex
   ProduktInfoAktualisieren (54, 0, kastenNameMit215drutex, 'standard_54_4', 7, '', '') ; // 215 als erste setzen
  }
  else{
   document.getElementById('standardEinzeln_50_2').style.display = 'none' ; // keine rollladen Mit
  }
*/

  if (((produktBreite >= BreiteMinimumOhne_170) && (produktHohe >= HoheMinimumOhne_170) && (produktBreite <= BreiteMaximumOhne_170) && (produktHohe <= HoheMaximumOhne_170)) && (produktArtFurSonderAufpreis != 'TERRASSE_HS')){ // ohne
   document.getElementById('standardEinzeln_50_1').style.display = 'inline-block' ; // rollladen ohne moskitonetz
   document.getElementById('kasten_einzeln_52_8').style.display = 'inline-block' ; // kasten 170
   document.getElementById('kasten_einzeln_52_6').style.display = 'inline-block' ; // kasten 215
   ProduktInfoAktualisieren (52, 0, kastenNameOhne215drutex, 'standard_52_3', 8, '', '') ;	
  }
  else if (((produktBreite >= BreiteMinimumOhne_215) && (produktHohe >= HoheMinimumOhne_215) && (produktBreite <= BreiteMaximumOhne_215) && (produktHohe <= HoheMaximumOhne_215)) && (produktArtFurSonderAufpreis != 'TERRASSE_HS')){
   document.getElementById('standardEinzeln_50_1').style.display = 'inline-block' ; // rollladen mit moskitonetz
   document.getElementById('kasten_einzeln_52_6').style.display = 'inline-block' ; // kasten 215
   ProduktInfoAktualisieren (52, 0, kastenNameOhne215drutex, 'standard_52_4', 6, '', '') ; // 215 als erste setzen
  }
  else if (((produktBreite >= BreiteMinimumOhne_225) && (produktHohe >= HoheMinimumOhne_225) && (produktBreite <= BreiteMaximumOhne_225) && (produktHohe <= HoheMaximumOhne_225)) && (produktArtFurSonderAufpreis == 'TERRASSE_HS')){
   document.getElementById('standardEinzeln_50_1').style.display = 'inline-block' ; // rollladen mit moskitonetz
   document.getElementById('kasten_einzeln_52_10').style.display = 'inline-block' ; // kasten 225
   ProduktInfoAktualisieren (52, 0, kastenNameOhne225drutex, 'standard_52_5', 10, '', '') ; // 215 als erste setzen
  }
  else{
   document.getElementById('standardEinzeln_50_1').style.display = 'none' ; // keine rollladen ohne
//   keineRolladeMassenMinMaxTxt = '<div>' + minimaleBreiteBetragt + ': ' + BreiteMinimumOhne_215 + 'mm</div><div>' + minimaleHoheBetragt + ': ' + HoheMinimumOhne_215 + 'mm</div><div>' + maximaleBreiteBetragt + ': ' + BreiteMaximumOhne_215 + 'mm</div><div>' + maximaleHoheBetragt + ': ' + HoheMaximumOhne_215 + 'mm</div>' ;
   gibtEsRolladenOhne = 0 ;
  }


  if (((produktBreite >= BreiteMinimumMit_170) && (produktHohe >= HoheMinimumMit_170) && (produktBreite <= BreiteMaximumMit_170) && (produktHohe <= HoheMaximumMit_170)) && (produktArtFurSonderAufpreis != 'TERRASSE_HS')){ // Mit
   document.getElementById('standardEinzeln_50_2').style.display = 'inline-block' ; // rollladen mit moskitonetz
   document.getElementById('kasten_einzeln_54_9').style.display = 'inline-block' ; // kasten 170 drutex
   document.getElementById('kasten_einzeln_54_7').style.display = 'inline-block' ; // kasten 215 drutex
   ProduktInfoAktualisieren (54, 0, kastenNameMit215drutex, 'standard_54_3', 9, '', '') ; // 170 drutex als erste setzen
  }
  else if (((produktBreite >= BreiteMinimumMit_215) && (produktHohe >= HoheMinimumMit_215) && (produktBreite <= BreiteMaximumMit_215) && (produktHohe <= HoheMaximumMit_215)) && (produktArtFurSonderAufpreis != 'TERRASSE_HS')){
   document.getElementById('standardEinzeln_50_2').style.display = 'inline-block' ; // rollladen mit moskitonetz
   document.getElementById('kasten_einzeln_54_7').style.display = 'inline-block' ; // kasten 215 drutex
   ProduktInfoAktualisieren (54, 0, kastenNameMit215drutex, 'standard_54_4', 7, '', '') ; // 215 als erste setzen
  }
  else if (((produktBreite >= BreiteMinimumMit_225) && (produktHohe >= HoheMinimumMit_225) && (produktBreite <= BreiteMaximumMit_225) && (produktHohe <= HoheMaximumMit_225)) && (produktArtFurSonderAufpreis == 'TERRASSE_HS')){
   document.getElementById('standardEinzeln_50_2').style.display = 'inline-block' ; // rollladen mit moskitonetz
   document.getElementById('kasten_einzeln_54_11').style.display = 'inline-block' ; // kasten 225 drutex
   ProduktInfoAktualisieren (54, 0, kastenNameMit215drutex, 'standard_54_5', 11, '', '') ; // 225 als erste setzen
  }
  else{
   document.getElementById('standardEinzeln_50_2').style.display = 'none' ; // keine rollladen Mit
   gibtEsRolladenMit = 0 ;
  }
 }
 else if ((hersteller_id == 2) || (hersteller_id == 3)){ // Aluplast, salamander
  // Breiten und Höhen am 02.02.2018 angegeben
  // 170 = 165, 210 = 185, 240 = 220
  var BreiteMinimumOhne_170 = 800 ;
  var BreiteMinimumOhne_210 = 800 ;
  var BreiteMinimumOhne_240 = 800 ;

  var BreiteMinimumMit_170 = 0 ;
  var BreiteMinimumMit_210 = 0 ;
  var BreiteMinimumMit_240 = 0 ;

  var BreiteMaximumOhne_170 = 3000 ;
  var BreiteMaximumOhne_210 = 3000 ;
  var BreiteMaximumOhne_240 = 3000 ;

  var BreiteMaximumMit_170 = 0 ;
  var BreiteMaximumMit_210 = 0 ;
  var BreiteMaximumMit_240 = 0 ;

  var HoheMinimumOhne_170 = 600 ;
  var HoheMinimumOhne_210 = 600 ;
  var HoheMinimumOhne_240 = 600 ;

  var HoheMinimumMit_170 = 0 ;
  var HoheMinimumMit_210 = 0 ;
  var HoheMinimumMit_240 = 0 ;


  var HoheMaximumOhne_170 = 1205 ; // 1370 - 165
  var HoheMaximumOhne_210 = 1815 ; // 2000 - 185
  var HoheMaximumOhne_240 = 3030 ; // 3250 - 220




  var HoheMaximumMit_170 = 0 ;
  var HoheMaximumMit_210 = 0 ;
  var HoheMaximumMit_240 = 0 ;

  var gibtEsRolladenOhne = 1 ;
  var gibtEsRolladenMit = 1 ;

  if ((produktBreite >= BreiteMinimumOhne_170) && (produktHohe >= HoheMinimumOhne_170) && (produktBreite <= BreiteMaximumOhne_170) && (produktHohe <= HoheMaximumOhne_170)){ // ohne: 170, 210, 240
   document.getElementById('standardEinzeln_50_1').style.display = 'inline-block' ; // rolllade ohne
   document.getElementById('kasten_einzeln_52_0').style.display = 'inline-block' ; // 170
   document.getElementById('kasten_einzeln_52_1').style.display = 'inline-block' ; // 210
   document.getElementById('kasten_einzeln_52_2').style.display = 'inline-block' ; // 240
   ProduktInfoAktualisieren (52, 0, kastenNameOhne170, 'standard_52_0', 0, '', '') ; // 170 als erste setzen
  }
  else if ((produktBreite >= BreiteMinimumOhne_210) && (produktHohe >= HoheMinimumOhne_210) && (produktBreite <= BreiteMaximumOhne_210) && (produktHohe <= HoheMaximumOhne_210)){ // ohne: 210, 240
   document.getElementById('standardEinzeln_50_1').style.display = 'inline-block' ;
   document.getElementById('kasten_einzeln_52_0').style.display = 'none' ; // 170
   document.getElementById('kasten_einzeln_52_1').style.display = 'inline-block' ; // 210
   document.getElementById('kasten_einzeln_52_2').style.display = 'inline-block' ; // 240
   ProduktInfoAktualisieren (52, 0, kastenNameOhne210, 'standard_52_1', 1, '', '') ; // 210 als erste setzen
  }
  else if ((produktBreite >= BreiteMinimumOhne_240) && (produktHohe >= HoheMinimumOhne_240) && (produktBreite <= BreiteMaximumOhne_240) && (produktHohe <= HoheMaximumOhne_240)){ // ohne: 240
   document.getElementById('standardEinzeln_50_1').style.display = 'inline-block' ;
   document.getElementById('kasten_einzeln_52_0').style.display = 'none' ; // 170
   document.getElementById('kasten_einzeln_52_1').style.display = 'none' ; // 210
   document.getElementById('kasten_einzeln_52_2').style.display = 'inline-block' ; // 240
   ProduktInfoAktualisieren (52, 0, kastenNameOhne240, 'standard_52_2', 2, '', '') ; // 240 als erste setzen
  }
  else{ // keine
   document.getElementById('standardEinzeln_50_1').style.display = 'none' ; // keine rollladen ohne
   keineRolladeMassenMinMaxTxt = '<div>' + minimaleBreiteBetragt + ': ' + BreiteMinimumOhne_170 + 'mm</div><div>' + minimaleHoheBetragt + ': ' + HoheMinimumOhne_170 + 'mm</div><div>' + maximaleBreiteBetragt + ': ' + BreiteMaximumOhne_170 + 'mm</div><div>' + maximaleHoheBetragt + ': ' + HoheMaximumOhne_240 + 'mm</div>' ;
   gibtEsRolladenOhne = 0 ;
  }
  if ((produktBreite >= BreiteMinimumMit_170) && (produktHohe >= HoheMinimumMit_170) && (produktBreite <= BreiteMaximumMit_170) && (produktHohe <= HoheMaximumMit_170)){ // Mit: 170, 210, 240
   document.getElementById('standardEinzeln_50_2').style.display = 'inline-block' ;
   document.getElementById('kasten_einzeln_54_3').style.display = 'inline-block' ; // 170
   document.getElementById('kasten_einzeln_54_4').style.display = 'inline-block' ; // 210
   document.getElementById('kasten_einzeln_54_5').style.display = 'inline-block' ; // 240
   ProduktInfoAktualisieren (54, 0, kastenNameMit170, 'standard_54_0', 3, '', '') ; // 170 als erste setzen
  }
  else if ((produktBreite >= BreiteMinimumMit_210) && (produktHohe >= HoheMinimumMit_210) && (produktBreite <= BreiteMaximumMit_210) && (produktHohe <= HoheMaximumMit_210)){ // Mit: 210, 240
   document.getElementById('standardEinzeln_50_2').style.display = 'inline-block' ;
   document.getElementById('kasten_einzeln_54_3').style.display = 'none' ; // 170
   document.getElementById('kasten_einzeln_54_4').style.display = 'inline-block' ; // 210
   document.getElementById('kasten_einzeln_54_5').style.display = 'inline-block' ; // 240
   ProduktInfoAktualisieren (54, 0, kastenNameMit210, 'standard_54_1', 4, '', '') ; // 210 als erste setzen
  }
  else if ((produktBreite >= BreiteMinimumMit_240) && (produktHohe >= HoheMinimumMit_240) && (produktBreite <= BreiteMaximumMit_240) && (produktHohe <= HoheMaximumMit_240)){ // Mit: 240
   document.getElementById('standardEinzeln_50_2').style.display = 'inline-block' ;
   document.getElementById('kasten_einzeln_54_3').style.display = 'none' ; // 170
   document.getElementById('kasten_einzeln_54_4').style.display = 'none' ; // 210
   document.getElementById('kasten_einzeln_54_5').style.display = 'inline-block' ; // 240
   ProduktInfoAktualisieren (54, 0, kastenNameMit240, 'standard_54_2', 5, '', '') ; // 240 als erste setzen
  }
  else{ // keine
   document.getElementById('standardEinzeln_50_2').style.display = 'none' ; // keine rollladen mit
   gibtEsRolladenMit = 0 ;
  }
 }
 else{
  document.getElementById('standardEinzeln_50_1').style.display = 'none' ; // keine rollladen ohne
  document.getElementById('standardEinzeln_50_2').style.display = 'none' ; // keine rollladen mit
  gibtEsRolladenOhne = 0 ;
  gibtEsRolladenMit = 0 ;
 }
 if (!gibtEsRolladenOhne && !gibtEsRolladenMit){
// alert ('herstellerID: '+hersteller_id+' - Breite: '+produktBreite+' - Hoche: '+produktHohe) ;
  document.getElementById('standardZusammenInfoObenID50').innerHTML = '<div>' + rolladenInfoObenKeine_txt + '</div>' + keineRolladeMassenMinMaxTxt ;
 }
 else{
  document.getElementById('standardZusammenInfoObenID50').innerHTML = rolladenInfoOben_txt ;
 }
}

function RollladenReseten (rollladeIst){
// var ok_knopf = "<div class=\"weiterKaufen\"><div class=\"kinderProduktBildKonfig\"><div class=\"kaufenBlende\"><div class=\"kaufenBlendeInnen hand\" onclick=\"LightBoxSchalten('', 2, '', '', this);\"></div></div><div class=\"kinderProduktBildKonfigText\">"+ok_txt+"</div><div class=\"kinderProduktBildKonfigBild\"><img class=\"imgSauber\" src=\"bilder/konfig.png\" /></div></div></div>" ;
 var ok_knopf = "<div class=\"lightBoxButtonAussen\"><div onclick=\"LightBoxSchalten('', 2, '', '', this);\" class=\"left wasAlsNachstesEinzeln hand\">"+ok_txt+"</div><div class=\"clear_left\"></div></div>" ;
 ProduktInfoAktualisieren (50, 0, document.getElementById('infoRollladen').innerHTML, 'standard_50_0', 0, '', '') ; // Rollladen
 if (hersteller_id == 1){ // Drutex
  ProduktInfoAktualisieren (52, 0, document.getElementById('infoKastenOhne').innerHTML, 'standard_52_3', 8, '', '') ; // Kasten Ohne 170 drutex
  ProduktInfoAktualisieren (54, 0, document.getElementById('infoKastenMit').innerHTML, 'standard_54_3', 9, '', '') ; // Kasten Mit 170 drutex
 }
 else if (hersteller_id == 2){ // Aluplast
  ProduktInfoAktualisieren (52, 0, document.getElementById('infoKastenOhne').innerHTML, 'standard_52_0', 0, '', '') ; // Kasten Ohne
  ProduktInfoAktualisieren (54, 0, document.getElementById('infoKastenMit').innerHTML, 'standard_54_0', 3, '', '') ; // Kasten Mit
 }
 else if (hersteller_id == 3){ // Salamander
  ProduktInfoAktualisieren (52, 0, document.getElementById('infoKastenOhne').innerHTML, 'standard_52_0', 0, '', '') ; // Kasten Ohne
  ProduktInfoAktualisieren (54, 0, document.getElementById('infoKastenMit').innerHTML, 'standard_54_0', 3, '', '') ; // Kasten Mit
 }
 ProduktInfoAktualisieren (58, 0, document.getElementById('infoAntrieb').innerHTML, 'standard_58_0', 0, '', '') ; // Antrieb
 ProduktInfoAktualisieren (60, 0, document.getElementById('infoPanzerfarbe').innerHTML, 'standard_60_0', 11, '', '') ; // Panzerfarbe
 ProduktInfoAktualisieren (64, 0, document.getElementById('infoPutzschiene').innerHTML, 'standard_64_0', 0, '', '') ; // Putzschiene
 if (rollladeIst > 0){ // nur wenn rolllade ausgewählt ist info ausgeben
  LightBoxSchalten ('', 1, rollladenResetenUberschrift, '<div class=\"informationBoxText\">'+rollladenResetenInhalt+'</div>'+ok_knopf) ;
 }
}

function LightBoxSchalten (bild, schaltung, uberschrift, inhalt, eUBERGEBEN){
 var zuruck = false ;
 var e = window.event || eUBERGEBEN ;
// if (e){
  if (schaltung == '1'){ // an

   document.getElementById('meineLightbox').style.display = 'block' ;
   document.getElementById('meineLightboxText').innerHTML = uberschrift ;
   if (bild != ''){
    document.getElementById('meineLightboxInhalt_Text').style.display = 'none' ;
    document.getElementById('meineLightboxInhalt_Bild').style.display = 'block' ;
    document.getElementById('LightBoxBild').src = bild ;
   }
   else if (inhalt != ''){
    document.getElementById('meineLightboxInhalt_Text').style.display = 'block' ;
    document.getElementById('meineLightboxInhalt_Bild').style.display = 'none' ;
    document.getElementById('meineLightboxInhalt_Text').innerHTML = inhalt+'<div class=\"abstandLightBoxUnten_div\"></div>' ;
   }

  }
  else if (schaltung == '2'){ // aus
   document.getElementById('meineLightbox').style.display = 'none' ;
  }
// }
 return zuruck ;
}

function WeiterKnopf (div_id){
 var arrayAnzahl = reihenfolgeAufbau.length ;
 var treffer = 0 ;
 var x = 0 ;
 DivMitAuswahlAnzeigen (div_id, 'Auto') ;
 for (x = 0; x < arrayAnzahl; x++){
  if (parseInt(div_id) == parseInt(reihenfolgeAufbau[x])){
   treffer = x ;
  }
 }
 if ((treffer+1) < arrayAnzahl){
  DivMitAuswahlAnzeigen (reihenfolgeAufbau[treffer+1], 'An') ;
  window.location.hash = '#href_'+reihenfolgeAufbau[treffer+1] ;
 }
}

function DivInfoSchalten (div_id){
 if (document.getElementById('infoBereich'+div_id).style.display == ''){
  document.getElementById('infoBereich'+div_id).style.display = 'none' ;
  document.getElementById('img'+div_id).src = 'bilder/plus_klein.png' ;
 }
 else if (document.getElementById('infoBereich'+div_id).style.display == 'block'){
  document.getElementById('infoBereich'+div_id).style.display = 'none' ;
  document.getElementById('img'+div_id).src = 'bilder/plus_klein.png' ;
 }
 else{
  document.getElementById('infoBereich'+div_id).style.display = 'block' ;  
  document.getElementById('img'+div_id).src = 'bilder/minus_klein.png' ;
 }
}

function DivMitAuswahlAnzeigen (div_id, AnAus){
 if(AnAus == "An"){
  document.getElementById('div_'+div_id).style.display = 'block' ;
  document.getElementById('PlusAndern'+div_id).src = 'bilder/minus.png' ;
 }
 else if (AnAus == 'Aus'){
  document.getElementById('div_'+div_id).style.display = 'none' ;
  document.getElementById('PlusAndern'+div_id).src = 'bilder/plus.png' ;
 }
 else if (AnAus == 'Auto'){
  if (document.getElementById('div_'+div_id).style.display == 'block'){
   document.getElementById('div_'+div_id).style.display = 'none' ;
   document.getElementById('PlusAndern'+div_id).src = 'bilder/plus.png' ;
  }
  else{
   document.getElementById('div_'+div_id).style.display = 'block' ;
   document.getElementById('PlusAndern'+div_id).src = 'bilder/minus.png' ;
  }
 }
}

function menuKlappenNeu (AnAus, menuId, xAlsZahl, anzahlEintregeSub){
// console.log(menuId) ;
 var hEintrag = 32 ;
 var hHauptMenu = hEintrag * anzahlHauptMenuEintrage ;

 // alle sub menus schliessen bis auf das zu öffnende
 for (x = 0; x < anzahlHauptMenuEintrage; x++){
  if (document.getElementById('ersteLeisteMenuHandyInnerEinzelnSub_'+x)){
   if (menuId != 'ersteLeisteMenuHandyInnerEinzelnSub_'+x){
    document.getElementById('ersteLeisteMenuHandyInnerEinzelnSub_'+x).style.height = '0px' ;
    document.getElementById('ersteLeisteMenuHandyInnerEinzelnSubGrafik_'+x).src = 'bilder/menu_schmall_plus_neu.png' ;
   }
  }
 }

 if (menuId == 'ersteLeisteMenuHandyInner'){ // hauptmenu
  if ((document.getElementById('ersteLeisteMenuHandyInner').style.height == '0px') || (document.getElementById('ersteLeisteMenuHandyInner').style.height == '')){
   document.getElementById('ersteLeisteMenuHandyInner').style.height = hHauptMenu+'px' ;
   document.getElementById('ersteLeisteInnerFunfUntenSubMenuGrafik_1').src = 'bilder/menu_schmall_x_neu.png' ;
   document.getElementById('ersteLeisteInnerFunfUntenSubMenuGrafik_2').src = 'bilder/menu_schmall_x_neu.png' ;
  }
  else{
   document.getElementById('ersteLeisteMenuHandyInner').style.height = '0px' ;
   document.getElementById('ersteLeisteInnerFunfUntenSubMenuGrafik_1').src = 'bilder/menu_schmall_neu.png' ;
   document.getElementById('ersteLeisteInnerFunfUntenSubMenuGrafik_2').src = 'bilder/menu_schmall_neu.png' ;
  }
 }
 else{ // submenus
  if ((document.getElementById(menuId).style.height == '0px') || (document.getElementById(menuId).style.height == '')){
   var hSub = hEintrag * anzahlEintregeSub ;
   document.getElementById(menuId).style.height = hSub+'px' ;
   document.getElementById('ersteLeisteMenuHandyInner').style.height = hHauptMenu+hSub+'px' ;
   document.getElementById('ersteLeisteMenuHandyInnerEinzelnSubGrafik_'+xAlsZahl).src = 'bilder/menu_schmall_minus_neu.png' ;
  }
  else{
   document.getElementById(menuId).style.height = '0px' ;
   document.getElementById('ersteLeisteMenuHandyInner').style.height = hHauptMenu+'px' ;
   document.getElementById('ersteLeisteMenuHandyInnerEinzelnSubGrafik_'+xAlsZahl).src = 'bilder/menu_schmall_plus_neu.png' ;
  }
 }
}

function Create2DArray (varName, zeilen, spalten){
 for (var i = 0; i < zeilen; i++){
  eval (varName)[i] = [] ;
 }
}

function Auf2NachkommeStellenVerkurzen (iZahlUBERGEBEN){
 var iZahl ;
 var iZahlReturn ;
 iZahl = Math.round (iZahlUBERGEBEN * 100) / 100 ;
 iZahlReturn = iZahl.toFixed(2) ;
 return iZahlReturn ;
}

function PreisAusPreisTabelleEinlesen (){
 var iHoheTreffer = 0 ;
 var iBreiteTreffer = 0 ;
 var x = 0 ;
 if ((iBreite > 0) && (iHohe > 0)){
  for (x = (preisTabelle.length-1); x >= 0; x--){ // hohe
   if (iHohe <= preisTabelle[x][0]){
    iHoheTreffer = x ;
   }
  }

  for (x = (preisTabelle[1].length-1); x >= 0; x--){ // breite
   if (iBreite <= preisTabelle[0][x]){
    iBreiteTreffer = x ;
   }
  }
  preisAusPreistabelle = preisTabelle[iHoheTreffer][iBreiteTreffer] ;
  ProduktInfoAktualisieren (3, '', '', '', '', '', '') ; // PreisTabelle
 }
 document.getElementById('div_standard_10000').innerHTML = iBreite+' x '+iHohe ;
}

function EingegebeneBreitePrufen (){
 var ok_knopf = "<div class=\"lightBoxButtonAussen\"><div onclick=\"LightBoxSchalten('', 2, '', '', this);\" class=\"left wasAlsNachstesEinzeln hand\">"+ok_txt+"</div><div class=\"clear_left\"></div></div>" ;
 if ((istOberLicht) || (istUnterLicht)){
  var MinBreite = minBreiteWegenLicht ;
  var MaxBreite = maxBreiteWegenLicht ;
 }
 else{
  var MinBreite = preisTabelle[0][1] ;
  var MaxBreite = preisTabelle[0][preisTabelle[1].length-1] ;
 }
 if ((iBreite >= MinBreite) && (iBreite <= MaxBreite)){
  iUmfang = (2*iBreite) + (2*iHohe) ;
  iM2 = (iBreite/1000) * (iHohe/1000) ;
  ProduktInfoAktualisieren (17, '', '', '', '', '', '') ; // m2
  ProduktInfoAktualisieren (18, '', '', '', '', '', '') ; // umfang
  return 1 ;
 }
 else if (iBreite < MinBreite){
  LightBoxSchalten ('', 1, falsche_breite_eingegeben_txt, '<div class=\"informationBoxText\">'+min_breite_txt+' '+MinBreite+'mm<br />'+minimale_breite_wurde_gesetzt_txt+'</div>'+ok_knopf) ;
  document.getElementById('id_input_breite').value = MinBreite ;
 }
 else if (iBreite > MaxBreite){
  LightBoxSchalten ('', 1, falsche_breite_eingegeben_txt, '<div class=\"informationBoxText\">'+max_breite_txt+' '+MaxBreite+'mm<br />'+maximale_breite_wurde_gesetzt_txt+'</div>'+ok_knopf) ;
  document.getElementById('id_input_breite').value = MaxBreite ;
 }
 ProduktInfoAktualisieren (1, '', '', '', '', '', '') ;
 return 0 ;
}

function EingegebeneHohePrufen (){
 var ok_knopf = "<div class=\"lightBoxButtonAussen\"><div onclick=\"LightBoxSchalten('', 2, '', '', this);\" class=\"left wasAlsNachstesEinzeln hand\">"+ok_txt+"</div><div class=\"clear_left\"></div></div>" ;
 var MinHohe = preisTabelle[1][0] ;
 var MaxHohe = preisTabelle[preisTabelle.length-1][0] ;
 if ((iHohe >= MinHohe) && (iHohe <= MaxHohe)){
  iUmfang = (2*iBreite) + (2*iHohe) ;
  iM2 = (iBreite/1000) * (iHohe/1000) ;
  ProduktInfoAktualisieren (17, '', '', '', '', '', '') ; // m2
  ProduktInfoAktualisieren (18, '', '', '', '', '', '') ; // umfang
  return 1 ;
 }
 else if (iHohe < MinHohe){
  LightBoxSchalten ('', 1, falsche_hohe_eingegeben_txt, '<div class=\"informationBoxText\">'+min_hohe_txt+' '+MinHohe+'mm<br />'+minimale_hohe_wurde_gesetzt_txt+'</div>'+ok_knopf) ;
  document.getElementById('id_input_hohe').value = MinHohe ;
 }
 else if (iHohe > MaxHohe){
  LightBoxSchalten ('', 1, falsche_hohe_eingegeben_txt, '<div class=\"informationBoxText\">'+max_hohe_txt+' '+MaxHohe+'mm<br />'+maximale_hohe_wurde_gesetzt_txt+'</div>'+ok_knopf) ;
  document.getElementById('id_input_hohe').value = MaxHohe ;
 }
 ProduktInfoAktualisieren (2, '', '', '', '', '', '') ;
 return 0 ;
}

function VerbreiterungAufpreisPrufen (fensterSeite, inhalt){



 var ausgabeVerbreiterungenZusammen = keineText ;
 var trennZeichen = ' + ' ;
 var positionImArray = parseInt(document.getElementById('infoVerbreiterung'+fensterSeite+'Hidden').innerHTML) ;
 if (!isNaN (positionImArray)){// wegen aufruf aus farben (positionImArray existiert noch nicht beim ersten aufruf) UND falls verbreiterung nicht vorhanden



  var positionAuswahlFarbeInnen = parseInt(document.getElementById('infoFarbeInnenHidden').innerHTML) ;
  var positionAuswahlFarbeAussen = parseInt(document.getElementById('infoFarbeAussenHidden').innerHTML) ;


// alert ('emma:'+positionImArray+' - '+positionAuswahlFarbeInnen+' - '+positionAuswahlFarbeAussen) ;


  var Aufpreis = 0 ;
  if ((positionAuswahlFarbeInnen == 0) && (positionAuswahlFarbeAussen == 0)){ // weiss - weiss
   Aufpreis = verbreiterungArray[positionImArray][5] ;
  }
  else if ((positionAuswahlFarbeAussen == 0) && (positionAuswahlFarbeInnen > 0)){ // aussen weiss - innen farbe
   Aufpreis = verbreiterungArray[positionImArray][7] ;
  }
  else if ((positionAuswahlFarbeAussen > 0) && (positionAuswahlFarbeInnen == 0)){ // aussen farbe - innen weiss
   Aufpreis = verbreiterungArray[positionImArray][6] ;
  }
  else if ((positionAuswahlFarbeInnen > 0) && (positionAuswahlFarbeAussen > 0)){ // farbe - farbe
   Aufpreis = verbreiterungArray[positionImArray][9] ;
  }



  document.getElementById('infoVerbreiterung'+fensterSeite+'Aufpreis').innerHTML = Aufpreis ;



  if ((verbreiterungLinksAnzahl > 0) || (verbreiterungRechtsAnzahl > 0) || (verbreiterungObenAnzahl > 0) || (verbreiterungUntenAnzahl > 0)){
   ausgabeVerbreiterungenZusammen = '' ;
   if (verbreiterungLinksAnzahl > 0){
    ausgabeVerbreiterungenZusammen = linksText+'('+document.getElementById('inputPostHiddenID44').value+')' ;
   }
   if (verbreiterungRechtsAnzahl > 0){
    if (ausgabeVerbreiterungenZusammen != ""){
     ausgabeVerbreiterungenZusammen = ausgabeVerbreiterungenZusammen+trennZeichen+rechtsText+'('+document.getElementById('inputPostHiddenID45').value+')' ;
    }
    else{
     ausgabeVerbreiterungenZusammen = rechtsText+'('+document.getElementById('inputPostHiddenID45').value+')' ;
    }
   }
   if (verbreiterungObenAnzahl > 0){
    if (ausgabeVerbreiterungenZusammen != ""){
     ausgabeVerbreiterungenZusammen = ausgabeVerbreiterungenZusammen+trennZeichen+obenText+'('+document.getElementById('inputPostHiddenID46').value+')' ;
    }
    else{
     ausgabeVerbreiterungenZusammen = obenText+'('+document.getElementById('inputPostHiddenID46').value+')' ;
    }
   }
   if (verbreiterungUntenAnzahl > 0){
    if (ausgabeVerbreiterungenZusammen != ""){
     ausgabeVerbreiterungenZusammen = ausgabeVerbreiterungenZusammen+trennZeichen+untenText+'('+document.getElementById('inputPostHiddenID47').value+')' ;
    }
    else{
     ausgabeVerbreiterungenZusammen = untenText+'('+document.getElementById('inputPostHiddenID47').value+')' ;
    }
   }
  }
  document.getElementById('div_standard_10001').innerHTML =  ausgabeVerbreiterungenZusammen ; // Verbreiterungen zusammen anzeigen
 }
 else{
  document.getElementById('infoVerbreiterung'+fensterSeite+'Aufpreis').innerHTML = 0 ;
 }
}





function FarbePVCAufpreisPrufen (farbe_id){
// alert (farbeAussenAufpreis+' - '+farbeInnenAufpreis) ;
 var farbeAufpreisAusArray = 0 ;
 if ((farbeAussenAufpreis == 0) && (farbeInnenAufpreis == 0)){

  farbeAufpreisAusArray = 0 ;
  document.getElementById('FarbenWeissWeissDiv').innerHTML = 1 ; // wegen sprossen
  document.getElementById('FarbenGleichDiv').innerHTML = 1 ; // wegen sprossen
  ProduktInfoAktualisieren (8, 'Aussen Weiss - Innen Weiss', farbeAufpreisAusArray, '', '', '', '') ;
 }
 else if ((farbeAussenAufpreis > 0) && (farbeInnenAufpreis == 0)){
  farbeAufpreisAusArray = parseInt(farbenAussenArray[farbeAussenID][5]) ; // Aussen Farbe - Innen Weiss
  document.getElementById('FarbenWeissWeissDiv').innerHTML = 0 ; // wegen sprossen
  document.getElementById('FarbenGleichDiv').innerHTML = 0 ; // wegen sprossen
  ProduktInfoAktualisieren (8, 'Aussen Farbe - Innen Weiss', farbeAufpreisAusArray, '', '', '', '') ;
 }
 else if ((farbeAussenAufpreis == 0) && (farbeInnenAufpreis > 0)){
  farbeAufpreisAusArray = parseInt(farbenInnenArray[farbeInnenID][6]) ; // Aussen Weiss - Innen Farbe
  document.getElementById('FarbenWeissWeissDiv').innerHTML = 0 ; // wegen sprossen
  document.getElementById('FarbenGleichDiv').innerHTML = 0 ; // wegen sprossen
  ProduktInfoAktualisieren (8, 'Aussen Weiss - Innen Farbe', farbeAufpreisAusArray, '', '', '', '') ;
 }
 else if ((farbeAussenAufpreis > 0) && (farbeInnenAufpreis > 0)){
  if (farbeInnenID == farbeAussenID){
   farbeAufpreisAusArray = parseInt(farbenInnenArray[farbe_id][7]) ; // Aussen Farbe = Innen Farbe
   document.getElementById('FarbenWeissWeissDiv').innerHTML = 0 ; // wegen sprossen
   document.getElementById('FarbenGleichDiv').innerHTML = 1 ; // wegen sprossen
   ProduktInfoAktualisieren (8, 'Aussen Farbe = Innen Farbe', farbeAufpreisAusArray, '', '', '', '') ;
  }
  else{
   farbeAufpreisAusArray = parseInt(farbenInnenArray[farbe_id][8]) ; // Aussen Farbe <> Innen Farbe
   document.getElementById('FarbenWeissWeissDiv').innerHTML = 0 ; // wegen sprossen
   document.getElementById('FarbenGleichDiv').innerHTML = 0 ; // wegen sprossen
   ProduktInfoAktualisieren (8, 'Aussen Farbe <> Innen Farbe', farbeAufpreisAusArray, '', '', '', '') ;
  }
 }
}

function FarbeHolzAufpreisPrufen (farbe_id){
 var farbeAufpreisAusArray = 0 ;
 if ((farbeAussenAufpreis == 0) && (farbeInnenAufpreis == 0)){
  document.getElementById('FarbenWeissWeissDiv').innerHTML = 1 ; // wegen sprossen
  document.getElementById('FarbenGleichDiv').innerHTML = 1 ; // wegen sprossen
  ProduktInfoAktualisieren (8, 'Aussen Weiss - Innen Weiss', 'kein Aufpreis', '', '', '', '') ;
 }
 else if ((farbeAussenAufpreis > 0) && (farbeInnenAufpreis == 0)){
  farbeAufpreisAusArray = parseInt(farbenAussenArray[farbeAussenID][5]) ; // Aussen Farbe - Innen Weiss
  document.getElementById('FarbenWeissWeissDiv').innerHTML = 0 ; // wegen sprossen
  document.getElementById('FarbenGleichDiv').innerHTML = 0 ; // wegen sprossen
  ProduktInfoAktualisieren (8, 'Aussen Farbe - Innen Weiss', farbeAufpreisAusArray, '', '', '', '') ;
 }
 else if ((farbeAussenAufpreis == 0) && (farbeInnenAufpreis > 0)){
  farbeAufpreisAusArray = parseInt(farbenInnenArray[farbeInnenID][6]) ; // Aussen Weiss - Innen Farbe
  document.getElementById('FarbenWeissWeissDiv').innerHTML = 0 ; // wegen sprossen
  document.getElementById('FarbenGleichDiv').innerHTML = 0 ; // wegen sprossen
  ProduktInfoAktualisieren (8, 'Aussen Weiss - Innen Farbe', farbeAufpreisAusArray, '', '', '', '') ;
 }
 else if ((farbeAussenAufpreis > 0) && (farbeInnenAufpreis > 0)){ // wichtig für pvc und holz !!!!!
  if (farbeInnenID == farbeAussenID){
   farbeAufpreisAusArray = parseInt(farbenInnenArray[farbe_id][7]) ; // Aussen Farbe = Innen Farbe
   document.getElementById('FarbenWeissWeissDiv').innerHTML = 0 ; // wegen sprossen
   document.getElementById('FarbenGleichDiv').innerHTML = 1 ; // wegen sprossen
   ProduktInfoAktualisieren (8, 'Aussen Farbe = Innen Farbe', farbeAufpreisAusArray, '', '', '', '') ;
  }
  else{
   farbeAufpreisAusArray = parseInt(farbenInnenArray[farbe_id][8]) ; // Aussen Farbe <> Innen Farbe
   document.getElementById('FarbenWeissWeissDiv').innerHTML = 0 ; // wegen sprossen
   document.getElementById('FarbenGleichDiv').innerHTML = 0 ; // wegen sprossen
   ProduktInfoAktualisieren (8, 'Aussen Farbe <> Innen Farbe', farbeAufpreisAusArray, '', '', '', '') ;
  }
 }
}



function FarbeHolzAluAufpreisPrufen (farbe_id){
 var farbeAufpreisAusArray = 0 ;
 if ((farbeAussenAufpreis == 0) && (farbeInnenAufpreis == 0)){
  ProduktInfoAktualisieren (8, 'Aussen Weiss - Innen Weiss', 'kein Aufpreis', '', '', '', '') ;
 }
 else if ((farbeAussenAufpreis > 0) && (farbeInnenAufpreis == 0)){
  farbeAufpreisAusArray = parseInt(farbenAussenArray[farbeAussenID][5]) ; // Aussen Farbe - Innen Weiss
  ProduktInfoAktualisieren (8, 'Aussen Farbe - Innen Weiss', farbeAufpreisAusArray, '', '', '', '') ;
 }
 else if ((farbeAussenAufpreis == 0) && (farbeInnenAufpreis > 0)){
  farbeAufpreisAusArray = parseInt(farbenInnenArray[farbeInnenID][6]) ; // Aussen Weiss - Innen Farbe
  ProduktInfoAktualisieren (8, 'Aussen Weiss - Innen Farbe', farbeAufpreisAusArray, '', '', '', '') ;
 }
 else if ((farbeAussenAufpreis > 0) && (farbeInnenAufpreis > 0)){ // wichtig für pvc und holz !!!!!
  if (farbeInnenID == farbeAussenID){
   farbeAufpreisAusArray = parseInt(farbenInnenArray[farbe_id][7]) ; // Aussen Farbe = Innen Farbe
   ProduktInfoAktualisieren (8, 'Aussen Farbe = Innen Farbe', farbeAufpreisAusArray, '', '', '', '') ;
  }
  else{
   farbeAufpreisAusArray = parseInt(farbenInnenArray[farbe_id][8]) ; // Aussen Farbe <> Innen Farbe
   ProduktInfoAktualisieren (8, 'Aussen Farbe <> Innen Farbe', farbeAufpreisAusArray, '', '', '', '') ;
  }
 }
}

function FarbeAluAufpreisPrufen (farbe_id){
 var farbeAufpreisAusArray = 0 ;
 if (farbeInnenID != farbeAussenID){
  farbeAufpreisAusArray = farbeAufpreisAusArray = parseInt(farbenAussenArray[farbe_id][8]) ;
 }
 else{
  farbeAufpreisAusArray = 0 ;
 }
 ProduktInfoAktualisieren (8, 'RAL Farbe', farbeAufpreisAusArray, '', '', '', '') ;
}

function VerglasungAufpreisPrufen (verglasung_aufpreis){
 verglasungAufpreis = verglasung_aufpreis ;
 ProduktInfoAktualisieren (20, 'Aufpreis', verglasungAufpreis, '', '', '', '') ;
}

function GlasartAufpreisPrufen (glasart_aufpreis){
 glasartAufpreis = glasart_aufpreis ;
 ProduktInfoAktualisieren (23, 'Aufpreis', glasartAufpreis, '', '', '', '') ;
}

function DichtungInnenAufpreisPrufen (dichtung_aufpreis){
 dichtungInnenAufpreis = dichtung_aufpreis ;
 ProduktInfoAktualisieren (24, 'Aufpreis', dichtungInnenAufpreis, '', '', '', '') ;
}


function DichtungAussenAufpreisPrufen (dichtung_aufpreis){
 dichtungAussenAufpreis = dichtung_aufpreis ;
 ProduktInfoAktualisieren (43, 'Aufpreis', dichtungAussenAufpreis, '', '', '', '') ;
}

function SicherheitsglasAussenAufpreisPrufen (sicherheitsglas_aufpreis){
 sicherheitsglasAussenAufpreis = sicherheitsglas_aufpreis ;
 ProduktInfoAktualisieren (26, 'Aufpreis', sicherheitsglasAussenAufpreis, '', '', '', '') ;
}

function SicherheitsglasInnenAufpreisPrufen (sicherheitsglas_aufpreis){
 sicherheitsglasInnenAufpreis = sicherheitsglas_aufpreis ;
 ProduktInfoAktualisieren (30, 'Aufpreis', sicherheitsglasInnenAufpreis, '', '', '', '') ;
}

function GriffAufpreisPrufen (var_aufpreis){
 griffAufpreis = var_aufpreis ;
 ProduktInfoAktualisieren (28, 'Aufpreis', griffAufpreis, '', '', '', '') ;
}

function BeschlagAufpreisPrufen (var_aufpreis){
 beschlagAufpreis = var_aufpreis ;
 ProduktInfoAktualisieren (32, 'Aufpreis', beschlagAufpreis, '', '', '', '') ;
}

function LochAufpreisPrufen (var_aufpreis){
 lochAufpreis = var_aufpreis ;
 ProduktInfoAktualisieren (34, 'Aufpreis', lochAufpreis, '', '', '', '') ;
}

function AnschlussprofilAufpreisPrufen (var_aufpreis){
 anschlussprofilAufpreis = var_aufpreis ;
 ProduktInfoAktualisieren (40, 'Aufpreis', anschlussprofilAufpreis, '', '', '', '') ;
}

function LufterAufpreisPrufen (var_aufpreis){
 lufterAufpreis = var_aufpreis ;
 ProduktInfoAktualisieren (42, 'Aufpreis', lufterAufpreis, '', '', '', '') ;
}

function TurgriffAussenAufpreisPrufen (var_aufpreis){
 turgriffAussenAufpreis = var_aufpreis ;
 ProduktInfoAktualisieren (49, 'Aufpreis', turgriffAussenAufpreis, '', '', '', '') ;
}

function RollladenAufpreisPrufen (var_aufpreis){
 rollladenAufpreis = var_aufpreis ;
 ProduktInfoAktualisieren (51, 'Aufpreis', rollladenAufpreis, '', '', '', '') ;
}

function KastenOhneAufpreisPrufen (var_aufpreis){
 kastenOhneAufpreis = var_aufpreis ;
 ProduktInfoAktualisieren (53, 'Aufpreis', kastenOhneAufpreis, '', '', '', '') ;
}

function KastenMitAufpreisPrufen (var_aufpreis){
 kastenMitAufpreis = var_aufpreis ;
 ProduktInfoAktualisieren (55, 'Aufpreis', kastenMitAufpreis, '', '', '', '') ;
}

function GurtwicklerAufpreisPrufen (var_aufpreis){
 gurtwicklerAufpreis = var_aufpreis ;
 ProduktInfoAktualisieren (57, 'Aufpreis', gurtwicklerAufpreis, '', '', '', '') ;
}

function AntriebAufpreisPrufen (var_aufpreis){
 antriebAufpreis = var_aufpreis ;
 ProduktInfoAktualisieren (59, 'Aufpreis', antriebAufpreis, '', '', '', '') ;
}

function PanzerfarbeAufpreisPrufen (var_aufpreis){
 panzerfarbeAufpreis = var_aufpreis ;
 ProduktInfoAktualisieren (61, 'Aufpreis', panzerfarbeAufpreis, '', '', '', '') ;
}

function PanzerschienenAufpreisPrufen (var_aufpreis){
 ProduktInfoAktualisieren (63, 'Aufpreis', var_aufpreis, '', '', '', '') ;
}

function PutzschieneAufpreisPrufen (var_aufpreis){
 putzschieneAufpreis = var_aufpreis ;
 ProduktInfoAktualisieren (65, 'Aufpreis', putzschieneAufpreis, '', '', '', '') ;
}

function FernbedienungAufpreisPrufen (var_aufpreis){
 fernbedienungAufpreis = var_aufpreis ;
 ProduktInfoAktualisieren (67, 'Aufpreis', fernbedienungAufpreis, '', '', '', '') ;
}

function SteuereinheitAufpreisPrufen (var_aufpreis){
 steuereinheitAufpreis = var_aufpreis ;
 ProduktInfoAktualisieren (69, 'Aufpreis', steuereinheitAufpreis, '', '', '', '') ;
}

function SprossenAufpreisPrufen (var_aufpreis){
 sprossenAufpreis = var_aufpreis ;
 ProduktInfoAktualisieren (71, 'Aufpreis', sprossenAufpreis, '', '', '', '') ;
}

function SprossenTypAufpreisPrufen (var_aufpreis){
 sprossenTypAufpreis = var_aufpreis ;
 ProduktInfoAktualisieren (73, 'Aufpreis', sprossenTypAufpreis, '', '', '', '') ;
}

function SprossenBreiteInnenliegendeAufpreisPrufen (var_aufpreis){
 sprossenBreiteInnenliegendeAufpreis = var_aufpreis ;
 ProduktInfoAktualisieren (75, 'Aufpreis', sprossenBreiteInnenliegendeAufpreis, '', '', '', '') ;
}

function SprossenBreiteAufgeklebteAufpreisPrufen (var_aufpreis){
 sprossenBreiteAufgeklebteAufpreis = var_aufpreis ;
 ProduktInfoAktualisieren (77, 'Aufpreis', sprossenBreiteAufgeklebteAufpreis, '', '', '', '') ;
}

function SprossenBreiteWinnerAufpreisPrufen (var_aufpreis){
 sprossenBreiteWinnerAufpreis = var_aufpreis ;
 ProduktInfoAktualisieren (79, 'Aufpreis', sprossenBreiteWinnerAufpreis, '', '', '', '') ;
}

function SchwelleAufpreisPrufen (var_aufpreis){
 schwelleAufpreis = var_aufpreis ;
 ProduktInfoAktualisieren (81, 'Aufpreis', schwelleAufpreis, '', '', '', '') ;
}

function SchallsicherAufpreisPrufen (var_aufpreis){
 schallsicherAufpreis = var_aufpreis ;
 ProduktInfoAktualisieren (103, 'Aufpreis', schallsicherAufpreis, '', '', '', '') ;
}

function FutterPVCAufpreisPrufen (var_aufpreis){
 futterPVCAufpreis = var_aufpreis ;
 ProduktInfoAktualisieren (83, 'Aufpreis', futterPVCAufpreis, '', '', '', '') ;
}

function FutterPVCFarbeAufpreisPrufen (var_aufpreis){
 ProduktInfoAktualisieren (85, 'Aufpreis', var_aufpreis, '', '', '', '') ;
}

function FutterAluArtenAufpreisPrufen (var_aufpreis){
 ProduktInfoAktualisieren (87, 'Aufpreis', var_aufpreis, '', '', '', '') ;
}

function FutterAluOhneFlugelUberdeckendAufpreisPrufen (var_aufpreis){
 ProduktInfoAktualisieren (89, 'Aufpreis', var_aufpreis, '', '', '', '') ;
}

function FutterAluAussenFlugelUberdeckendAufpreisPrufen (var_aufpreis){
 ProduktInfoAktualisieren (91, 'Aufpreis', var_aufpreis, '', '', '', '') ;
}

function FutterAluAussenInnenFlugelUberdeckendAufpreisPrufen (var_aufpreis){
 ProduktInfoAktualisieren (93, 'Aufpreis', var_aufpreis, '', '', '', '') ;
}

function FalzAufpreisPrufen (var_aufpreis){
 falzAufpreis = var_aufpreis ;
 ProduktInfoAktualisieren (95, 'Aufpreis', falzAufpreis, '', '', '', '') ;
}

function EntwaesserungAufpreisPrufen (var_aufpreis){
 entwaesserungAufpreis = var_aufpreis ;
 ProduktInfoAktualisieren (97, 'Aufpreis', entwaesserungAufpreis, '', '', '', '') ;
}

function InputPostFullen (iFunktionId, alternativeInputAusgabe){
 if (alternativeInputAusgabe > 0){
  if (document.getElementById ('inputPostHiddenID'+alternativeInputAusgabe)){
   if (document.getElementById('ProduktSpezifikationName'+iFunktionId) && (document.getElementById('div_standard_'+iFunktionId))){
    var ProduktSpezifikationName = document.getElementById('ProduktSpezifikationName'+iFunktionId).innerHTML ;
    var ProduktSpezifikation = document.getElementById('div_standard_'+iFunktionId).innerHTML ;
    document.getElementById('inputPostHiddenID'+alternativeInputAusgabe).value = ProduktSpezifikationName+' '+ProduktSpezifikation ;
   }
  }
 }
 else{
  if (document.getElementById ('inputPostHiddenID'+iFunktionId)){
   if (document.getElementById('ProduktSpezifikationName'+iFunktionId) && (document.getElementById('div_standard_'+iFunktionId))){
    var ProduktSpezifikationName = document.getElementById('ProduktSpezifikationName'+iFunktionId).innerHTML ;
    var ProduktSpezifikation = document.getElementById('div_standard_'+iFunktionId).innerHTML ;
    document.getElementById('inputPostHiddenID'+iFunktionId).value = ProduktSpezifikationName+' '+ProduktSpezifikation ;
   }
  }
 }





 // nur wegen SKRZYDLO_DOK DO OKNA2000 tomputer, kann nach Okna2000 gelöscht werden

 if (document.getElementById('ID_SKRZYDLO_DOK_'+iFunktionId)){ // alle inputs ausser farben
  if ((document.getElementById('infoID'+iFunktionId).innerHTML) && (document.getElementById('infoID'+iFunktionId))){
   document.getElementById('ID_SKRZYDLO_DOK_'+iFunktionId).value = document.getElementById('infoID'+iFunktionId).innerHTML ;
  }
 }
 else if (document.getElementById('ID_SKRZYDLO_DOK_'+alternativeInputAusgabe)){ // für farben
  if (document.getElementById('infoID'+alternativeInputAusgabe)){
   document.getElementById('ID_SKRZYDLO_DOK_'+alternativeInputAusgabe).value = document.getElementById('infoID'+alternativeInputAusgabe).innerHTML ;
  }
  if ((document.getElementById('ID_SKRZYDLO_DOK_FarbenWeissWeissDiv')) && (document.getElementById('ID_SKRZYDLO_DOK_FarbenGleichDiv'))){
   if ((document.getElementById('FarbenWeissWeissDiv')) && (document.getElementById('FarbenGleichDiv'))){
    document.getElementById('ID_SKRZYDLO_DOK_FarbenWeissWeissDiv').value = document.getElementById('FarbenWeissWeissDiv').innerHTML ;
    document.getElementById('ID_SKRZYDLO_DOK_FarbenGleichDiv').value = document.getElementById('FarbenGleichDiv').innerHTML ;
   }
  }
 }

 // bis hier



}

function SubInputPostFullen (iFunktionId, objektName, vorText){
 if (typeof (vorText) === "undefined"){
  vorText = '' ; 
 }
 if (document.getElementById ('inputPostHiddenID'+iFunktionId)){
  document.getElementById('inputPostHiddenID'+iFunktionId).value = vorText+objektName ;
 }
}

function ProduktInfoAktualisieren (iObjekt, objekt_1, objekt_2, objekt_3, objekt_4, objekt_5, objekt_6){
 if ((iObjekt == 1) || (iObjekt == 0)){ // Breite
  iBreite = document.getElementById('id_input_breite').value ;
  if (EingegebeneBreitePrufen ()){
   document.getElementById('infoBreite').innerHTML = iBreite ;
   PreisAusPreisTabelleEinlesen () ;
   if (rollladenDabei){
    KastenMitAufpreisPrufen (0) ;
    KastenOhneAufpreisPrufen (0) ;
    RollladePrufen () ;
   }
   document.getElementById('infoBild_td_produkt_breite').innerHTML = iBreite ;
   InputPostFullen (10000, 0) ;
   if (istOberLicht){
    ProduktInfoAktualisieren (98, '', '', '', '', '', '') ; // oberlicht hohe
   }
   if (istUnterLicht){
    ProduktInfoAktualisieren (100, '', '', '', '', '', '') ; // unterlicht hohe
   }
   grafikAnpassen () ;
  }
 }
 if ((iObjekt == 2) || (iObjekt == 0)){ // Höhe
  iHohe = document.getElementById('id_input_hohe').value ;
  if (EingegebeneHohePrufen ()){
   document.getElementById('infoHohe').innerHTML = iHohe ;
   PreisAusPreisTabelleEinlesen () ;
   if (rollladenDabei){
    KastenMitAufpreisPrufen (0) ;
    KastenOhneAufpreisPrufen (0) ;
    RollladePrufen () ;
   }
   if (document.getElementById('infoBild_td_mit_unterlicht_zusamen_hohe')){
    document.getElementById('infoBild_td_mit_unterlicht_zusamen_hohe').innerHTML = iHohe ;
   }
   InputPostFullen (10000, 0) ;
   if (istOberLicht){
    ProduktInfoAktualisieren (98, '', '', '', '', '', '') ; // oberlicht hohe
   }
   if (istUnterLicht){
    ProduktInfoAktualisieren (100, '', '', '', '', '', '') ; // unterlicht hohe
   }
   grafikAnpassen () ;
  }
 }
 if ((iObjekt == 3) || (iObjekt == 0)){ // PreisTabelle
  document.getElementById('infoPreisTabelle').innerHTML = preisAusPreistabelle ;
  GesamtsummeAusrechnen () ;
 }
 if ((iObjekt == 4) || (iObjekt == 0)){ // Dichtung Innen
  document.getElementById('infoDichtungInnenSoll').style.display = 'block' ;
  document.getElementById('infoDichtungInnenHidden').innerHTML = objekt_1 ;
  document.getElementById('infoDichtungInnen').innerHTML = objekt_2 ;
  DichtungInnenAufpreisPrufen (objekt_1) ;
  if (document.getElementById (dichtungInnenImgAlt)) {
   document.getElementById(dichtungInnenImgAlt).style.display = 'none' ;
  }  
  document.getElementById(objekt_3).style.display = 'block' ;
  dichtungInnenImgAlt = objekt_3 ;
  document.getElementById('div_standard_'+iObjekt).innerHTML = objekt_2 ;
  document.getElementById('infoID'+iObjekt).innerHTML = objekt_4 ; // produkt ID aus der DB
  InputPostFullen (iObjekt, 0) ;
 }
 if ((iObjekt == 5) || (iObjekt == 0)){ // Dichtung Aussen
  document.getElementById('infoDichtungAussenSoll').style.display = 'block' ;
  document.getElementById('infoDichtungAussenHidden').innerHTML = objekt_1 ;
  document.getElementById('infoDichtungAussen').innerHTML = objekt_2 ;
  DichtungAussenAufpreisPrufen (objekt_1) ;
  if (document.getElementById (dichtungAussenImgAlt)){
   document.getElementById(dichtungAussenImgAlt).style.display = 'none' ;
  }  
  document.getElementById(objekt_3).style.display = 'block' ;
  dichtungAussenImgAlt = objekt_3 ;
  document.getElementById('div_standard_'+iObjekt).innerHTML = objekt_2 ;
  document.getElementById('infoID'+iObjekt).innerHTML = objekt_4 ; // produkt ID aus der DB
  InputPostFullen (iObjekt, 0) ;
 }
 if ((iObjekt == 6) || (iObjekt == 0)){ // Farbe PVC Aussen
  document.getElementById('infoFarbeAussenImg').style.display = 'block' ;
  document.getElementById('infoFarbeAussenImg').src = farbenAussenArray[objekt_1][2] ;
  document.getElementById('infoFarbeAussenHidden').innerHTML = objekt_1 ;
  document.getElementById('infoFarbeAussen').innerHTML = objekt_2 ;
  farbeAussenID = objekt_1 ;
  if (document.getElementById (farbeAussenImgAlt)){
   document.getElementById(farbeAussenImgAlt).style.display = 'none' ;
  }  
  document.getElementById(objekt_3).style.display = 'block' ;
  farbeAussenImgAlt = objekt_3 ;
  document.getElementById('div_standard_'+iObjekt).innerHTML = objekt_2 ;
  document.getElementById('infoID15').innerHTML = objekt_4 ; // produkt ID aus der DB
  farbeAussenAufpreis = parseInt(farbenAussenArray[objekt_1][5]) ;
  FarbePVCAufpreisPrufen (objekt_1) ;
  PanzerschienenAufpreisPrufen (objekt_5) ;
  FutterPVCFarbeAufpreisPrufen (objekt_6) ;
  InputPostFullen (iObjekt, 15) ;
 }
 if ((iObjekt == 7) || (iObjekt == 0)){ // Farbe PVC Innen
  document.getElementById('infoFarbeInnenImg').style.display = 'block' ;
  document.getElementById('infoFarbeInnenImg').src = farbenInnenArray[objekt_1][2] ;
  document.getElementById('infoFarbeInnenHidden').innerHTML = objekt_1 ;
  document.getElementById('infoFarbeInnen').innerHTML = objekt_2 ;
  farbeInnenAufpreis = parseInt(farbenInnenArray[objekt_1][5]) ;  // Farbe aufpreis (weiss ist auf 0 in der .csv datei)
  farbeInnenID = objekt_1 ;
  if (document.getElementById (farbeInnenImgAlt)){
   document.getElementById(farbeInnenImgAlt).style.display = 'none' ;
  }  
  document.getElementById(objekt_3).style.display = 'block' ;
  farbeInnenImgAlt = objekt_3 ;
  document.getElementById('div_standard_'+iObjekt).innerHTML = objekt_2 ;
  document.getElementById('infoID16').innerHTML = objekt_4 ; // produkt ID aus der DB
  FarbePVCAufpreisPrufen (objekt_1) ;
  InputPostFullen (iObjekt, 16) ;
 }
 if ((iObjekt == 8) || (iObjekt == 0)){ // Farbe Aufpreis Prozent
  document.getElementById('infoFarbeAufpreisHidden').innerHTML = objekt_1 ;
  document.getElementById('infoFarbeAufpreis').innerHTML = objekt_2 ;
  GesamtsummeAusrechnen () ;
 }
 if ((iObjekt == 9) || (iObjekt == 0)){ // Farbe Holz Aussen
  document.getElementById('infoFarbeAussenImg').style.display = 'block' ;
  document.getElementById('infoFarbeAussenImg').src = farbenAussenArray[objekt_1][2] ;
  document.getElementById('infoFarbeAussenHidden').innerHTML = objekt_1 ;
  document.getElementById('infoFarbeAussen').innerHTML = objekt_2 ;
  farbeAussenID = objekt_1 ;
  farbeAussenAufpreis = parseInt(farbenAussenArray[objekt_1][5]) ;
  if (document.getElementById (farbeAussenImgAlt)){
   document.getElementById(farbeAussenImgAlt).style.display = 'none' ;
  }  
  document.getElementById(objekt_3).style.display = 'block' ;
  farbeAussenImgAlt = objekt_3 ;
  document.getElementById('div_standard_'+iObjekt).innerHTML = objekt_2 ;
  document.getElementById('infoID15').innerHTML = objekt_4 ; // produkt ID aus der DB
  FarbeHolzAufpreisPrufen (objekt_1) ;
  InputPostFullen (iObjekt, 15) ;
 }
 if ((iObjekt == 10) || (iObjekt == 0)){ // Farbe Holz Innen
  document.getElementById('infoFarbeInnenImg').style.display = 'block' ;
  document.getElementById('infoFarbeInnenImg').src = farbenInnenArray[objekt_1][2] ;


// alert ('emma:'+objekt_1) ;


  document.getElementById('infoFarbeInnenHidden').innerHTML = objekt_1 ;
  document.getElementById('infoFarbeInnen').innerHTML = objekt_2 ;
  farbeInnenAufpreis = parseInt(farbenInnenArray[objekt_1][5]) ;  // Farbe aufpreis (weiss ist auf 0 in der .csv datei)
  farbeInnenID = objekt_1 ;
  FarbeHolzAufpreisPrufen (objekt_1) ;
  if (document.getElementById (farbeInnenImgAlt)){
   document.getElementById(farbeInnenImgAlt).style.display = 'none' ;
  }  
  document.getElementById(objekt_3).style.display = 'block' ;
  farbeInnenImgAlt = objekt_3 ;
  document.getElementById('div_standard_'+iObjekt).innerHTML = objekt_2 ;
  document.getElementById('infoID16').innerHTML = objekt_4 ; // produkt ID aus der DB
  InputPostFullen (iObjekt, 16) ;
 }
 if ((iObjekt == 11) || (iObjekt == 0)){ // Farbe Holz-Alu Aussen
  document.getElementById('infoFarbeAussenImg').style.display = 'block' ;
  document.getElementById('infoFarbeAussenImg').src = farbenAussenArray[objekt_1][2] ;
  document.getElementById('infoFarbeAussenHidden').innerHTML = objekt_1 ;
  document.getElementById('infoFarbeAussen').innerHTML = objekt_2 ;
  farbeAussenID = objekt_1 ;
  farbeAussenAufpreis = parseInt(farbenAussenArray[objekt_1][5]) ; // immer gleich laut .csv
  ProduktInfoAktualisieren (8, 'RAL Farbe', farbeAussenAufpreis, '', '', '', '') ;
  if (document.getElementById (farbeAussenImgAlt)){
   document.getElementById(farbeAussenImgAlt).style.display = 'none' ;
  }  
  document.getElementById(objekt_3).style.display = 'block' ;
  farbeAussenImgAlt = objekt_3 ;
  document.getElementById('div_standard_'+iObjekt).innerHTML = objekt_2 ;
  document.getElementById('infoID15').innerHTML = objekt_4 ; // produkt ID aus der DB
  InputPostFullen (iObjekt, 15) ;
 }
 if ((iObjekt == 12) || (iObjekt == 0)){ // Farbe Holz-Alu Innen
  document.getElementById('infoFarbeInnenImg').style.display = 'block' ;
  document.getElementById('infoFarbeInnenImg').src = farbenInnenArray[objekt_1][2] ;
  document.getElementById('infoFarbeInnenHidden').innerHTML = objekt_1 ;
  document.getElementById('infoFarbeInnen').innerHTML = objekt_2 ;
  farbeInnenAufpreis = 0 ;  // Farbe Innen aufpreis 0 bei HolzAlu
  farbeInnenID = objekt_1 ;
  if (document.getElementById (farbeInnenImgAlt)){
   document.getElementById(farbeInnenImgAlt).style.display = 'none' ;
  }  
  document.getElementById(objekt_3).style.display = 'block' ;
  farbeInnenImgAlt = objekt_3 ;
  document.getElementById('div_standard_'+iObjekt).innerHTML = objekt_2 ;
  document.getElementById('infoID16').innerHTML = objekt_4 ; // produkt ID aus der DB
  InputPostFullen (iObjekt, 16) ;
 }
 if ((iObjekt == 13) || (iObjekt == 14) || (iObjekt == 0)){ // Farbe alu MB45
  document.getElementById('infoFarbeAussenImg').style.display = 'block' ;
  document.getElementById('infoFarbeAussenImg').src = farbenAussenArray[objekt_1][2] ;
  document.getElementById('infoFarbeInnenImg').style.display = 'block' ;
  document.getElementById('infoFarbeInnenImg').src = farbenInnenArray[objekt_1][2] ;
  document.getElementById('infoFarbeAussenHidden').innerHTML = objekt_1 ;
  document.getElementById('infoFarbeAussen').innerHTML = objekt_2 ;
  document.getElementById('infoFarbeInnenHidden').innerHTML = objekt_1 ;
  document.getElementById('infoFarbeInnen').innerHTML = objekt_2 ;
  farbeAussenID = objekt_1 ;
  farbeInnenID = objekt_1 ;
  farbeAussenAufpreis = 0 ;
  farbeInnenAufpreis = 0 ;
  ProduktInfoAktualisieren (8, 'RAL Farbe', farbeAussenAufpreis, '', '', '', '') ;
  if (document.getElementById (farbeInnenImgAlt)){
   document.getElementById(farbeInnenImgAlt).style.display = 'none' ;
  }  
  document.getElementById(objekt_3).style.display = 'block' ;
  farbeInnenImgAlt = objekt_3 ;
  document.getElementById('div_standard_'+iObjekt).innerHTML = objekt_2 ;
  document.getElementById('infoID15').innerHTML = objekt_4 ; // produkt ID aus der DB
  document.getElementById('infoID16').innerHTML = objekt_4 ; // produkt ID aus der DB
  InputPostFullen (iObjekt, 15) ;
  InputPostFullen (iObjekt, 16) ;
 }
 if ((iObjekt == 15) || (iObjekt == 0)){ // Farbe Alu Aussen
  document.getElementById('infoFarbeAussenImg').style.display = 'block' ;
  document.getElementById('infoFarbeAussenImg').src = farbenAussenArray[objekt_1][2] ;
  document.getElementById('infoFarbeAussenHidden').innerHTML = objekt_1 ;
  document.getElementById('infoFarbeAussen').innerHTML = objekt_2 ;
  farbeAussenID = objekt_1 ;
  if (document.getElementById (farbeAussenImgAlt)){
   document.getElementById(farbeAussenImgAlt).style.display = 'none' ;
  }  
  document.getElementById(objekt_3).style.display = 'block' ;
  farbeAussenImgAlt = objekt_3 ;
  document.getElementById('div_standard_'+iObjekt).innerHTML = objekt_2 ;
  document.getElementById('infoID15').innerHTML = objekt_4 ; // produkt ID aus der DB
  FarbeAluAufpreisPrufen (objekt_1) ;
  FutterPVCFarbeAufpreisPrufen (objekt_6) ;
  InputPostFullen (iObjekt, 15) ;
 }
 if ((iObjekt == 16) || (iObjekt == 0)){ // Farbe Alu innen
  document.getElementById('infoFarbeInnenImg').style.display = 'block' ;
  document.getElementById('infoFarbeInnenImg').src = farbenInnenArray[objekt_1][2] ;
  document.getElementById('infoFarbeInnenHidden').innerHTML = objekt_1 ;
  document.getElementById('infoFarbeInnen').innerHTML = objekt_2 ;
  farbeInnenID = objekt_1 ;
  if (document.getElementById (farbeInnenImgAlt)){
   document.getElementById(farbeInnenImgAlt).style.display = 'none' ;
  }  
  document.getElementById(objekt_3).style.display = 'block' ;
  farbeInnenImgAlt = objekt_3 ;
  document.getElementById('div_standard_'+iObjekt).innerHTML = objekt_2 ;
  document.getElementById('infoID16').innerHTML = objekt_4 ; // produkt ID aus der DB
  FarbeAluAufpreisPrufen (objekt_1) ;
  InputPostFullen (iObjekt, 16) ;
 }
 if ((iObjekt == 17) || (iObjekt == 0)){ // m2
  document.getElementById('infoM2').style.display = 'block' ;
  document.getElementById('infoM2').innerHTML = iM2 ;
 }
 if ((iObjekt == 18) || (iObjekt == 0)){ // Umfang
  document.getElementById('infoUmfang').style.display = 'block' ;
  document.getElementById('infoUmfang').innerHTML = iUmfang ;
 }
 if ((iObjekt == 19) || (iObjekt == 0)){ // Verglasung
  document.getElementById('infoVerglasungSoll').style.display = 'block' ;
  document.getElementById('infoVerglasung').style.display = 'block' ;
  document.getElementById('infoVerglasungHidden').innerHTML = objekt_1 ; // aufpreis aus DB
  document.getElementById('infoVerglasung').innerHTML = objekt_2 ; // name
  if (document.getElementById (verglasungImgAlt)){
   document.getElementById(verglasungImgAlt).style.display = 'none' ;
  }  
  document.getElementById(objekt_3).style.display = 'block' ;
  verglasungImgAlt = objekt_3 ;
  document.getElementById('div_standard_'+iObjekt).innerHTML = objekt_2 ;
  document.getElementById('infoID'+iObjekt).innerHTML = objekt_4 ; // produkt ID aus der DB
  VerglasungAufpreisPrufen (objekt_1) ;
  InputPostFullen (iObjekt, 0) ;
  VerglasungSchallSicherGrafikenTauschen (objekt_4) ;
 }
 if ((iObjekt == 20) || (iObjekt == 0)){ // Verglasung Aufpreis
  document.getElementById('infoVerglasungAufpreis').style.display = 'block' ;
  document.getElementById('infoVerglasungAufpreis').innerHTML = objekt_2 ;
  GesamtsummeAusrechnen () ;
 }
 if ((iObjekt == 21) || (iObjekt == 0)){ // Gesammtsumme
  document.getElementById('infoGesamtsumme').style.display = 'block' ;
  document.getElementById('infoGesamtsumme').innerHTML = objekt_1 ;
 }
 if ((iObjekt == 22) || (iObjekt == 0)){ // Glasart
  document.getElementById('infoGlasartSoll').style.display = 'block' ;
  document.getElementById('infoGlasart').style.display = 'block' ;
  document.getElementById('infoGlasartHidden').innerHTML = objekt_1 ; // aufpreis aus DB
  document.getElementById('infoGlasart').innerHTML = objekt_2 ; // name
  GlasartAufpreisPrufen (objekt_1) ;
  if (document.getElementById (glasartImgAlt)){
   document.getElementById(glasartImgAlt).style.display = 'none' ;
  }  
  document.getElementById(objekt_3).style.display = 'block' ;
  glasartImgAlt = objekt_3 ;
  document.getElementById('div_standard_'+iObjekt).innerHTML = objekt_2 ;
  document.getElementById('infoID'+iObjekt).innerHTML = objekt_4 ; // produkt ID aus der DB
  InputPostFullen (iObjekt, 0) ;
 }
 if ((iObjekt == 23) || (iObjekt == 0)){ // Glasart Aufpreis
  document.getElementById('infoGlasartAufpreis').style.display = 'block' ;
  document.getElementById('infoGlasartAufpreis').innerHTML = objekt_2 ;
  GesamtsummeAusrechnen () ;
 }
 if ((iObjekt == 24) || (iObjekt == 0)){ // Dichtung Innen Aufpreis
  document.getElementById('infoDichtungInnenAufpreis').style.display = 'block' ;
  document.getElementById('infoDichtungInnenAufpreis').innerHTML = objekt_2 ;
  GesamtsummeAusrechnen () ;
 }
 if ((iObjekt == 25) || (iObjekt == 0)){ // Sicherheitsglas Aussen
  document.getElementById('infoSicherheitsglasAussenSoll').style.display = 'block' ;
  document.getElementById('infoSicherheitsglasAussen').style.display = 'block' ;
  document.getElementById('infoSicherheitsglasAussenHidden').innerHTML = objekt_1 ; // aufpreis aus DB
  document.getElementById('infoSicherheitsglasAussen').innerHTML = objekt_2 ; // name
  SicherheitsglasAussenAufpreisPrufen (objekt_1) ;
  if (document.getElementById (sicherheitsglasAussenImgAlt)){
   document.getElementById(sicherheitsglasAussenImgAlt).style.display = 'none' ;
  }  
  document.getElementById(objekt_3).style.display = 'block' ;
  sicherheitsglasAussenImgAlt = objekt_3 ;
  document.getElementById('div_standard_'+iObjekt).innerHTML = objekt_2 ;
  document.getElementById('infoID'+iObjekt).innerHTML = objekt_4 ; // produkt ID aus der DB
  InputPostFullen (iObjekt, 0) ;
 }
 if ((iObjekt == 26) || (iObjekt == 0)){ // Sicherheitsglas Aussen Aufpreis
  document.getElementById('infoSicherheitsglasAussenAufpreis').style.display = 'block' ;
  document.getElementById('infoSicherheitsglasAussenAufpreis').innerHTML = objekt_2 ;
  GesamtsummeAusrechnen () ;
 }
 if ((iObjekt == 27) || (iObjekt == 0)){ // Griff
  document.getElementById('infoGriffSoll').style.display = 'block' ;
  document.getElementById('infoGriff').style.display = 'block' ;
  document.getElementById('infoGriffHidden').innerHTML = objekt_1 ; // aufpreis aus DB
  document.getElementById('infoGriff').innerHTML = objekt_2 ; // name
  GriffAufpreisPrufen (objekt_1) ;
  if (document.getElementById (griffImgAlt)){
   document.getElementById(griffImgAlt).style.display = 'none' ;
  }  
  document.getElementById(objekt_3).style.display = 'block' ;
  griffImgAlt = objekt_3 ;
  document.getElementById('div_standard_'+iObjekt).innerHTML = objekt_2 ;
  document.getElementById('infoID'+iObjekt).innerHTML = objekt_4 ; // produkt ID aus der DB
  InputPostFullen (iObjekt, 0) ;
 }
 if ((iObjekt == 28) || (iObjekt == 0)){ // Griff Aufpreis
  document.getElementById('infoGriffAufpreis').style.display = 'block' ;
  document.getElementById('infoGriffAufpreis').innerHTML = objekt_2 ;
  GesamtsummeAusrechnen () ;
 }
 if ((iObjekt == 29) || (iObjekt == 0)){ // Sicherheitsglas Innen
  document.getElementById('infoSicherheitsglasInnenSoll').style.display = 'block' ;
  document.getElementById('infoSicherheitsglasInnen').style.display = 'block' ;
  document.getElementById('infoSicherheitsglasInnenHidden').innerHTML = objekt_1 ; // aufpreis aus DB
  document.getElementById('infoSicherheitsglasInnen').innerHTML = objekt_2 ; // name
  SicherheitsglasInnenAufpreisPrufen (objekt_1) ;
  if (document.getElementById (sicherheitsglasInnenImgAlt)){
   document.getElementById(sicherheitsglasInnenImgAlt).style.display = 'none' ;
  }  
  document.getElementById(objekt_3).style.display = 'block' ;
  sicherheitsglasInnenImgAlt = objekt_3 ;
  document.getElementById('div_standard_'+iObjekt).innerHTML = objekt_2 ;
  document.getElementById('infoID'+iObjekt).innerHTML = objekt_4 ; // produkt ID aus der DB
  InputPostFullen (iObjekt, 0) ;
 }
 if ((iObjekt == 30) || (iObjekt == 0)){ // Sicherheitsglas Innen Aufpreis
  document.getElementById('infoSicherheitsglasInnenAufpreis').style.display = 'block' ;
  document.getElementById('infoSicherheitsglasInnenAufpreis').innerHTML = objekt_2 ;
  GesamtsummeAusrechnen () ;
 }
 if ((iObjekt == 31) || (iObjekt == 0)){ // Beschlag
  document.getElementById('infoBeschlagSoll').style.display = 'block' ;
  document.getElementById('infoBeschlag').style.display = 'block' ;
  document.getElementById('infoBeschlagHidden').innerHTML = objekt_1 ; // aufpreis aus DB
  document.getElementById('infoBeschlag').innerHTML = objekt_2 ; // name
  BeschlagAufpreisPrufen (objekt_1) ;
  if (document.getElementById (beschlagImgAlt)){
   document.getElementById(beschlagImgAlt).style.display = 'none' ;
  }  
  document.getElementById(objekt_3).style.display = 'block' ;
  beschlagImgAlt = objekt_3 ;
  document.getElementById('div_standard_'+iObjekt).innerHTML = objekt_2 ;
  document.getElementById('infoID'+iObjekt).innerHTML = objekt_4 ; // produkt ID aus der DB
  InputPostFullen (iObjekt, 0) ;
 }
 if ((iObjekt == 32) || (iObjekt == 0)){ // Beschlag Aufpreis
  document.getElementById('infoBeschlagAufpreis').style.display = 'block' ;
  document.getElementById('infoBeschlagAufpreis').innerHTML = objekt_2 ;
  GesamtsummeAusrechnen () ;
 }
 if ((iObjekt == 33) || (iObjekt == 0)){ // Loch
  document.getElementById('infoLochSoll').style.display = 'block' ;
  document.getElementById('infoLoch').style.display = 'block' ;
  document.getElementById('infoLochHidden').innerHTML = objekt_1 ; // aufpreis aus DB
  document.getElementById('infoLoch').innerHTML = objekt_2 ; // name
  LochAufpreisPrufen (objekt_1) ;
  if (document.getElementById (lochImgAlt)){
   document.getElementById(lochImgAlt).style.display = 'none' ;
  }  
  document.getElementById(objekt_3).style.display = 'block' ;
  lochImgAlt = objekt_3 ;
  document.getElementById('div_standard_'+iObjekt).innerHTML = objekt_2 ;
  document.getElementById('infoID'+iObjekt).innerHTML = objekt_4 ; // produkt ID aus der DB
  InputPostFullen (iObjekt, 0) ;
 }
 if ((iObjekt == 34) || (iObjekt == 0)){ // Loch Aufpreis
  document.getElementById('infoLochAufpreis').style.display = 'block' ;
  document.getElementById('infoLochAufpreis').innerHTML = objekt_2 ;
  GesamtsummeAusrechnen () ;
 }
 if ((iObjekt == 35) || (iObjekt == 0)){ // Anzahl Flugel
  document.getElementById('infoAnzahlFlugel').style.display = 'block' ;
  document.getElementById('infoAnzahlFlugel').innerHTML = produkt_anzahl_flugel ;
 }
 if ((iObjekt == 36) || (iObjekt == 0)){ // Anzahl Griffe
  document.getElementById('infoAnzahlGriffe').style.display = 'block' ;
  document.getElementById('infoAnzahlGriffe').innerHTML = produkt_anzahl_griffe ;
 }
 if ((iObjekt == 37) || (iObjekt == 0)){ // Alles Initialisieren
  ProduktInfoAktualisieren (35, '', '', '', '', '', '') ; // anzahl flugel
  ProduktInfoAktualisieren (36, '', '', '', '', '', '') ; // anzahl griffe
  ProduktInfoAktualisieren (38, '', '', '', '', '', '') ; // anzahl flugel echt
  document.getElementById('infoMWSt').innerHTML = 'MWSt: '+MWSteuer+'%' ;
  document.getElementById('infoAufpreis').innerHTML = 'Gewinn: '+gewinnProzent+'%' ;
  document.getElementById('infoUmrechnung').innerHTML = 'Umrechnungsfaktor: '+umrechnungsFaktor+' zl = 1 Euro' ;

  VerglasungSchallSicherGrafikenTauschen (0) ; // wegen schallschutzAusgabe bei schallschutz und Sicherheitsglas dB

//  VerglasungAufpreisPrufen (0) ; // wegen hs drutex, der fängt bei 3fach verglausung an.
  GlasartAufpreisPrufen (0) ;
  DichtungInnenAufpreisPrufen (0) ;
  DichtungAussenAufpreisPrufen (0) ;
  SicherheitsglasAussenAufpreisPrufen (0) ;
  SicherheitsglasInnenAufpreisPrufen (0) ;


  if (!parseInt(document.getElementById('infoGriffAufpreis').innerHTML)){
   GriffAufpreisPrufen (0) ;
  }


  BeschlagAufpreisPrufen (0) ;
  LochAufpreisPrufen (0) ;
  AnschlussprofilAufpreisPrufen (0) ;
  LufterAufpreisPrufen (0) ;
  FalzAufpreisPrufen (0) ;
  EntwaesserungAufpreisPrufen (0) ;
  TurgriffAussenAufpreisPrufen (0) ;
  RollladenAufpreisPrufen (0) ;
  KastenOhneAufpreisPrufen (0) ;
  KastenMitAufpreisPrufen (0) ;
  GurtwicklerAufpreisPrufen (0) ;
  AntriebAufpreisPrufen (0) ;
  PanzerfarbeAufpreisPrufen (0) ;
  PanzerschienenAufpreisPrufen (0) ;
  PutzschieneAufpreisPrufen (0) ;
  FernbedienungAufpreisPrufen (0) ;
  SteuereinheitAufpreisPrufen (0) ;
  SprossenAufpreisPrufen (0) ;
  SchwelleAufpreisPrufen (0) ;
  SchallsicherAufpreisPrufen (0) ;

  if (document.getElementById('infoFutterPVCAufpreis').innerHTML){
   FutterPVCAufpreisPrufen (document.getElementById('infoFutterPVCAufpreis').innerHTML) ;
  }
  else{
   FutterPVCAufpreisPrufen (0) ;
  }

  FutterPVCFarbeAufpreisPrufen (0) ;
  FutterAluArtenAufpreisPrufen (0) ;

//  FutterAluOhneFlugelUberdeckendAufpreisPrufen (0) ;
//  FutterAluAussenFlugelUberdeckendAufpreisPrufen (0) ;
//  FutterAluAussenInnenFlugelUberdeckendAufpreisPrufen (0) ;

//  SprossenTypAufpreisPrufen (0) ;

//  SprossenBreiteInnenliegendeAufpreisPrufen (0) ;
//  SprossenBreiteAufgeklebteAufpreisPrufen (0) ;
//  SprossenBreiteWinnerAufpreisPrufen (0) ;

  VerbreiterungAufpreisPrufen ('Links', '') ;
  VerbreiterungAufpreisPrufen ('Rechts', '') ;
  VerbreiterungAufpreisPrufen ('Oben', '') ;
  VerbreiterungAufpreisPrufen ('Unten', '') ;

  document.getElementById('infoMaterialSoll').style.display = 'block' ;
  document.getElementById('infoMaterial').innerHTML = produktMaterial ;

  document.getElementById('infoSystemSoll').style.display = 'block' ;
  document.getElementById('infoSystem').innerHTML = produktSystem ;

  document.getElementById('infoArtSoll').style.display = 'block' ;
  document.getElementById('infoArt').innerHTML = produktArt ;

  document.getElementById('infoTypSoll').style.display = 'block' ;
  document.getElementById('infoTyp').innerHTML = produktTyp ;

  document.getElementById('infoBezeichnungSoll').style.display = 'block' ;
  document.getElementById('infoBezeichnung').innerHTML = produktBezeichnung ;

//  DivMitAuswahlAnzeigen (10000, 'Auto') ; // Breite und Höhe öffnen
//  DivMitAuswahlAnzeigen (10001, 'Auto') ; // Verbreiterungen öffnen
//  DivMitAuswahlAnzeigen (19, 'Auto') ; // Verglasung öffnen
//  DivMitAuswahlAnzeigen (4, 'Auto') ; // Dichtung öffnen
//  DivMitAuswahlAnzeigen (31, 'Auto') ; // Beschlag öffnen
//  WeiterKnopf (50) ; // Rollladen öffnen

  // infoAusgabe ausschalten
//  DivInfoSchalten ('PREIS') ;
//  DivInfoSchalten ('PRODUKT') ;
//  DivInfoSchalten ('ROLLLADEN') ;


// diese sollen normalerweise aus sein, nur wegen window24 (bo po polsku nazwy sa i nie funkcjonuje to dlatego wylaczone to jest)
/*
  DivInfoSchalten ('MASSEN') ;
  DivInfoSchalten ('FARBEN') ;
  DivInfoSchalten ('GLAS') ;
  DivInfoSchalten ('SICHERHEIT') ;
  DivInfoSchalten ('ZUBEHÖR') ;
  DivInfoSchalten ('SPROSSEN') ;
*/
// <- bis hier






//  DivInfoSchalten ('DEBUGGER') ;

  // bild links unter PRODUKT
  document.getElementById('infoBild_tr_kasten').style.visibility = 'hidden' ; // kasten über dem bild
/*
  document.getElementById('infoBild_td_kasten_hohe').style.borderTop = '0' ;
  document.getElementById('infoBild_td_kasten_hohe').style.borderRight = '0'
  document.getElementById('infoBild_td_kasten_hohe').style.borderBottom = '0' ;
  document.getElementById('infoBild_td_zusamen_hohe').style.borderTop = '0' ;
  document.getElementById('infoBild_td_zusamen_hohe').style.borderRight = '0'
  document.getElementById('infoBild_td_zusamen_hohe').style.borderBottom = '0' ;
*/

  // ober unter licht starthöhe setzen
  if (istOberLicht){
   document.getElementById('id_input_hohe_oberlicht').value = preisTabelleOberLicht[1][0] ;
  }
  if (istUnterLicht){
   document.getElementById('id_input_hohe_unterlicht').value = preisTabelleUnterLicht[1][0] ;
  }

  // Breite und Höhe vorgeben
  if (minBreiteWegenLicht > 0){
   document.getElementById('id_input_breite').value = minBreiteWegenLicht ;
  }
  else{
   document.getElementById('id_input_breite').value = preisTabelle[0][1] ;
  }
  document.getElementById('id_input_hohe').value = preisTabelle[1][0] ;

  ProduktInfoAktualisieren (1, '', '', '', '', '', '') ; // breite
  ProduktInfoAktualisieren (2, '', '', '', '', '', '') ; // höhe

  // letzten weiter knopf in kaufen knopf ändern
  document.getElementById(weiterKnopfKaufenID).innerHTML = weiterKnopfKaufenText ;
//  document.getElementById(weiterKnopfKaufenID+'FurJava').onclick = new Function ("inDenWarenkorb()") ;
  document.getElementById(weiterKnopfKaufenID).onclick = new Function ("inDenWarenkorb()") ;

  //Grafik für input
  if (document.getElementById('infoBild_1')){
   document.getElementById('inputPostHiddenID10002').value = document.getElementById('infoBild_1').src ;
  }

  //MwSt für input
  document.getElementById('inputPostHiddenID10003').value = MWSteuer ;
  //Umrechnungsfaktor für input
  document.getElementById('inputPostHiddenID10005').value = umrechnungsFaktor ;
  //Gewinn für input
  document.getElementById('inputPostHiddenID10004').value = gewinnProzent ;

 }
 if ((iObjekt == 38) || (iObjekt == 0)){ // Anzahl Flugel Echt
  document.getElementById('infoAnzahlFlugelEcht').style.display = 'block' ;
  document.getElementById('infoAnzahlFlugelEcht').innerHTML = produkt_anzahl_flugel_echt ;
 }
 if ((iObjekt == 39) || (iObjekt == 0)){ // Anschlussprofil
  document.getElementById('infoAnschlussprofilSoll').style.display = 'block' ;
  document.getElementById('infoAnschlussprofil').style.display = 'block' ;
  document.getElementById('infoAnschlussprofilHidden').innerHTML = objekt_1 ; // aufpreis aus DB
  document.getElementById('infoAnschlussprofil').innerHTML = objekt_2 ; // name
  AnschlussprofilAufpreisPrufen (objekt_1) ;
  if (document.getElementById (anschlussprofilImgAlt)){
   document.getElementById(anschlussprofilImgAlt).style.display = 'none' ;
  }  
  document.getElementById(objekt_3).style.display = 'block' ;
  anschlussprofilImgAlt = objekt_3 ;
  document.getElementById('div_standard_'+iObjekt).innerHTML = objekt_2 ;
  document.getElementById('infoID'+iObjekt).innerHTML = objekt_4 ; // produkt ID aus der DB
  InputPostFullen (iObjekt, 0) ;
 }
 if ((iObjekt == 40) || (iObjekt == 0)){ // Anschlussprofil Aufpreis
  document.getElementById('infoAnschlussprofilAufpreis').style.display = 'block' ;
  document.getElementById('infoAnschlussprofilAufpreis').innerHTML = objekt_2 ;
  GesamtsummeAusrechnen () ;
 }
 if ((iObjekt == 41) || (iObjekt == 0)){ // Lufter
  document.getElementById('infoLufterSoll').style.display = 'block' ;
  document.getElementById('infoLufter').style.display = 'block' ;
  document.getElementById('infoLufterHidden').innerHTML = objekt_1 ; // aufpreis aus DB
  document.getElementById('infoLufter').innerHTML = objekt_2 ; // name
  LufterAufpreisPrufen (objekt_1) ;
  if (document.getElementById (lufterImgAlt)){
   document.getElementById(lufterImgAlt).style.display = 'none' ;
  }  
  document.getElementById(objekt_3).style.display = 'block' ;
  lufterImgAlt = objekt_3 ;
  document.getElementById('div_standard_'+iObjekt).innerHTML = objekt_2 ;
  document.getElementById('infoID'+iObjekt).innerHTML = objekt_4 ; // produkt ID aus der DB
  InputPostFullen (iObjekt, 0) ;
 }
 if ((iObjekt == 42) || (iObjekt == 0)){ // Lufter Aufpreis
  document.getElementById('infoLufterAufpreis').style.display = 'block' ;
  document.getElementById('infoLufterAufpreis').innerHTML = objekt_2 ;
  GesamtsummeAusrechnen () ;
 }
 if ((iObjekt == 43) || (iObjekt == 0)){ // Dichtung Aussen Aufpreis
  document.getElementById('infoDichtungAussenAufpreis').style.display = 'block' ;
  document.getElementById('infoDichtungAussenAufpreis').innerHTML = objekt_2 ;
  GesamtsummeAusrechnen () ;
 }
 if ((iObjekt == 44) || (iObjekt == 0)){ // verbreiterungen links









  document.getElementById('inputPostHiddenID44').value = objekt_2 ; // wegen inputübergabe an warenkorb
  if (verbreiterungLinksAnzahl == 0){
   if (objekt_1 > '0'){
    verbreiterungLinksAnzahl = 1 ;
   }
  }
  else{
   if (objekt_1 == '0'){
    verbreiterungLinksAnzahl = 0 ;
   }
  }
  document.getElementById(objekt_3).checked = true ; // Radio einschalten
  document.getElementById('infoVerbreiterungLinksSoll').style.display = 'block' ;
  document.getElementById('infoVerbreiterungLinksHidden').innerHTML = objekt_1 ;
  document.getElementById('infoVerbreiterungLinks').innerHTML = objekt_2 ;
  VerbreiterungAufpreisPrufen ('Links', objekt_2) ;
  VerbreiterungAufpreisPrufen ('Rechts', objekt_2) ;
  VerbreiterungAufpreisPrufen ('Oben', objekt_2) ;
  VerbreiterungAufpreisPrufen ('Unten', objekt_2) ;
  GesamtsummeAusrechnen () ;
  document.getElementById('infoID'+iObjekt).innerHTML = objekt_4 ; // produkt ID aus der DB
  InputPostFullen (10001, 0) ;














 }
 if ((iObjekt == 45) || (iObjekt == 0)){ // verbreiterungen rechts
  document.getElementById('inputPostHiddenID45').value = objekt_2 ; // wegen inputübergabe an warenkorb
  if (verbreiterungRechtsAnzahl == 0){
   if (objekt_1 > '0'){
    verbreiterungRechtsAnzahl = 1 ;
   }
  }
  else{
   if (objekt_1 == '0'){
    verbreiterungRechtsAnzahl = 0 ;
   }
  }
  document.getElementById(objekt_3).checked = true ; // Radio einschalten
  document.getElementById('infoVerbreiterungRechtsSoll').style.display = 'block' ;
  document.getElementById('infoVerbreiterungRechtsHidden').innerHTML = objekt_1 ;
  document.getElementById('infoVerbreiterungRechts').innerHTML = objekt_2 ;
  VerbreiterungAufpreisPrufen ('Links', objekt_2) ;
  VerbreiterungAufpreisPrufen ('Rechts', objekt_2) ;
  VerbreiterungAufpreisPrufen ('Oben', objekt_2) ;
  VerbreiterungAufpreisPrufen ('Unten', objekt_2) ;
  GesamtsummeAusrechnen () ;
  document.getElementById('infoID'+iObjekt).innerHTML = objekt_4 ; // produkt ID aus der DB
  InputPostFullen (10001, 0) ;
 }
 if ((iObjekt == 46) || (iObjekt == 0)){ // verbreiterungen oben
  document.getElementById('inputPostHiddenID46').value = objekt_2 ; // wegen inputübergabe an warenkorb
  if (verbreiterungObenAnzahl == 0){
   if (objekt_1 > '0'){
    verbreiterungObenAnzahl = 1 ;
   }
  }
  else{
   if (objekt_1 == '0'){
    verbreiterungObenAnzahl = 0 ;
   }
  }
  document.getElementById(objekt_3).checked = true ; // Radio einschalten
  document.getElementById('infoVerbreiterungObenSoll').style.display = 'block' ;
  document.getElementById('infoVerbreiterungObenHidden').innerHTML = objekt_1 ;
  document.getElementById('infoVerbreiterungOben').innerHTML = objekt_2 ;
  VerbreiterungAufpreisPrufen ('Links', objekt_2) ;
  VerbreiterungAufpreisPrufen ('Rechts', objekt_2) ;
  VerbreiterungAufpreisPrufen ('Oben', objekt_2) ;
  VerbreiterungAufpreisPrufen ('Unten', objekt_2) ;
  GesamtsummeAusrechnen () ;
  document.getElementById('infoID'+iObjekt).innerHTML = objekt_4 ; // produkt ID aus der DB
  InputPostFullen (10001, 0) ;
 }
 if ((iObjekt == 47) || (iObjekt == 0)){ // verbreiterungen unten
  document.getElementById('inputPostHiddenID47').value = objekt_2 ; // wegen inputübergabe an warenkorb
  if (verbreiterungUntenAnzahl == 0){
   if (objekt_1 > '0'){
    verbreiterungUntenAnzahl = 1 ;
   }
  }
  else{
   if (objekt_1 == '0'){
    verbreiterungUntenAnzahl = 0 ;
   }
  }
  document.getElementById(objekt_3).checked = true ; // Radio einschalten
  document.getElementById('infoVerbreiterungUntenSoll').style.display = 'block' ;
  document.getElementById('infoVerbreiterungUntenHidden').innerHTML = objekt_1 ;
  document.getElementById('infoVerbreiterungUnten').innerHTML = objekt_2 ;
  VerbreiterungAufpreisPrufen ('Links', objekt_2) ;
  VerbreiterungAufpreisPrufen ('Rechts', objekt_2) ;
  VerbreiterungAufpreisPrufen ('Oben', objekt_2) ;
  VerbreiterungAufpreisPrufen ('Unten', objekt_2) ;
  GesamtsummeAusrechnen () ;
  document.getElementById('infoID'+iObjekt).innerHTML = objekt_4 ; // produkt ID aus der DB
  InputPostFullen (10001, 0) ;
 }
 if ((iObjekt == 48) || (iObjekt == 0)){ // türgriff aussen
  document.getElementById('infoTurgriffAussenSoll').style.display = 'block' ;
  document.getElementById('infoTurgriffAussen').style.display = 'block' ;
  document.getElementById('infoTurgriffAussenHidden').innerHTML = objekt_1 ; // aufpreis aus DB
  document.getElementById('infoTurgriffAussen').innerHTML = objekt_2 ; // name
  TurgriffAussenAufpreisPrufen (objekt_1) ;
  if (document.getElementById (turgriffAussenImgAlt)){
   document.getElementById(turgriffAussenImgAlt).style.display = 'none' ;
  }  
  document.getElementById(objekt_3).style.display = 'block' ;
  turgriffAussenImgAlt = objekt_3 ;
  document.getElementById('div_standard_'+iObjekt).innerHTML = objekt_2 ;
  document.getElementById('infoID'+iObjekt).innerHTML = objekt_4 ; // produkt ID aus der DB
  InputPostFullen (iObjekt, 0) ;
 }
 if ((iObjekt == 49) || (iObjekt == 0)){ // türgriff aussen Aufpreis
  document.getElementById('infoTurgriffAussenAufpreis').style.display = 'block' ;
  document.getElementById('infoTurgriffAussenAufpreis').innerHTML = objekt_2 ;
  GesamtsummeAusrechnen () ;
 }
 if ((iObjekt == 50) || (iObjekt == 0)){ // Rollladen
  document.getElementById('infoRollladenSoll').style.display = 'block' ;
  document.getElementById('infoRollladen').style.display = 'block' ;
  document.getElementById('infoRollladenHidden').innerHTML = objekt_1 ; // aufpreis aus DB
  document.getElementById('infoRollladen').innerHTML = objekt_2 ; // name
  RollladenAufpreisPrufen (objekt_1) ;
  if (document.getElementById (rollladenImgAlt)){
   document.getElementById(rollladenImgAlt).style.display = 'none' ;
  }  
  document.getElementById(objekt_3).style.display = 'block' ;
  rollladenImgAlt = objekt_3 ;
  document.getElementById('div_standard_'+iObjekt).innerHTML = objekt_2 ;
  document.getElementById('infoID'+iObjekt).innerHTML = objekt_4 ; // produkt ID aus der DB
  if (objekt_4 == 0){ // keine rollladen
   RollladenSchalten (objekt_4) ;
// zum test
   KastenOhneAufpreisPrufen (0) ;
   KastenMitAufpreisPrufen (0) ;
//
  }
  else if (objekt_4 == 1){ // rolladen ohne
   RollladenSchalten (objekt_4) ;
// zum test
   KastenOhneAufpreisPrufen (0) ;
//
  }
  else if (objekt_4 == 2){ // rolladen mit
   RollladenSchalten (objekt_4) ;
// zum test
   KastenMitAufpreisPrufen (0) ;
//
  }
//  KastenMitAufpreisPrufen (0) ;
  InputPostFullen (iObjekt, 0) ;
 }
 if ((iObjekt == 51) || (iObjekt == 0)){ // Rollladen Aufpreis
  document.getElementById('infoRollladenAufpreis').style.display = 'block' ;
  document.getElementById('infoRollladenAufpreis').innerHTML = objekt_2 ;
  GesamtsummeAusrechnen () ;
 }
 if ((iObjekt == 52) || (iObjekt == 0)){ // KastenOhne ohne
  document.getElementById('infoKastenOhneSoll').style.display = 'block' ;
  document.getElementById('infoKastenOhne').style.display = 'block' ;
  document.getElementById('infoKastenOhneHidden').innerHTML = objekt_1 ; // aufpreis aus DB
  document.getElementById('infoKastenOhne').innerHTML = objekt_2 ; // name
  if (document.getElementById (kastenOhneImgAlt)){
   document.getElementById(kastenOhneImgAlt).style.display = 'none' ;
  }  
  document.getElementById(objekt_3).style.display = 'block' ;
  kastenOhneImgAlt = objekt_3 ;
  document.getElementById('infoID'+iObjekt).innerHTML = objekt_4 ; // produkt ID aus der DB
  KastenOhneAufpreisPrufen (objekt_1) ;
  SubInputPostFullen (iObjekt, objekt_2, '') ;
 }
 if ((iObjekt == 53) || (iObjekt == 0)){ // KastenOhne Aufpreis
  var preisKasten = 0 ;
  var aufpreisKastenProzent = 0 ;
  var aufpreisKastenZahl = 0 ;
  if (parseInt(document.getElementById('infoID52').innerHTML) == 0){ // 170 ohne
   preisKasten = PreisAusPreisTabelleKastenEinlesen (preistabelle_170_ohne, 165) ; // alt 170
   aufpreisKastenProzent = aufpreis_170_ohne ;
   aufpreisKastenZahl = Math.round ((preisKasten / 100) * aufpreisKastenProzent) ;
   preisKasten = preisKasten + aufpreisKastenZahl ;
   document.getElementById('zusatz_1_52').innerHTML = '165' ;   // wegen rahmenhöhe + kastenhöhe im gesammtpreis berechnen, alt 170
   MassenUberDemBildAktualisieren (165) ; // alt 170
  }
  else if (parseInt(document.getElementById('infoID52').innerHTML) == 1){ // 210 ohne
   preisKasten = PreisAusPreisTabelleKastenEinlesen (preistabelle_210_ohne, 185) ; // alt 210
   aufpreisKastenProzent = aufpreis_210_ohne ;
   aufpreisKastenZahl = Math.round ((preisKasten / 100) * aufpreisKastenProzent) ;
   preisKasten = preisKasten + aufpreisKastenZahl ;
   document.getElementById('zusatz_1_52').innerHTML = '185' ;   // wegen rahmenhöhe + kastenhöhe im gesammtpreis berechnen, alt 210
   MassenUberDemBildAktualisieren (185) ; // alt 210
  }
  else if (parseInt(document.getElementById('infoID52').innerHTML) == 2){ // 240 ohne
   preisKasten = PreisAusPreisTabelleKastenEinlesen (preistabelle_240_ohne, 220) ; // alt 240
   aufpreisKastenProzent = aufpreis_240_ohne ;
   aufpreisKastenZahl = Math.round ((preisKasten / 100) * aufpreisKastenProzent) ;
   preisKasten = preisKasten + aufpreisKastenZahl ;
   document.getElementById('zusatz_1_52').innerHTML = '220' ;   // wegen rahmenhöhe + kastenhöhe im gesammtpreis berechnen, alt 240
   MassenUberDemBildAktualisieren (220) ; // alt 240
  }
  else if (parseInt(document.getElementById('infoID52').innerHTML) == 6){ // 215 ohne
   preisKasten = PreisAusPreisTabelleKastenEinlesen (preistabelle_215_drutex_ohne, 215) ;
   aufpreisKastenProzent = aufpreis_215_drutex_ohne ;
   aufpreisKastenZahl = Math.round ((preisKasten / 100) * aufpreisKastenProzent) ;
   preisKasten = preisKasten + aufpreisKastenZahl ;
   document.getElementById('zusatz_1_52').innerHTML = '215' ;   // wegen rahmenhöhe + kastenhöhe im gesammtpreis berechnen
   MassenUberDemBildAktualisieren (215) ;
  }
  else if (parseInt(document.getElementById('infoID52').innerHTML) == 8){ // 170 drutex ohne
   preisKasten = PreisAusPreisTabelleKastenEinlesen (preistabelle_170_drutex_ohne, 170) ;
   aufpreisKastenProzent = aufpreis_170_drutex_ohne ;
   aufpreisKastenZahl = Math.round ((preisKasten / 100) * aufpreisKastenProzent) ;
   preisKasten = preisKasten + aufpreisKastenZahl ;
   document.getElementById('zusatz_1_52').innerHTML = '170' ;   // wegen rahmenhöhe + kastenhöhe im gesammtpreis berechnen
   MassenUberDemBildAktualisieren (170) ;
  }
  else if (parseInt(document.getElementById('infoID52').innerHTML) == 10){ // 225 drutex ohne
   preisKasten = PreisAusPreisTabelleKastenEinlesen (preistabelle_225_drutex_ohne, 225) ;
   aufpreisKastenProzent = aufpreis_225_drutex_ohne ;
   aufpreisKastenZahl = Math.round ((preisKasten / 100) * aufpreisKastenProzent) ;
   preisKasten = preisKasten + aufpreisKastenZahl ;
   document.getElementById('zusatz_1_52').innerHTML = '225' ;   // wegen rahmenhöhe + kastenhöhe im gesammtpreis berechnen
   MassenUberDemBildAktualisieren (225) ;
  }
  document.getElementById('infoKastenOhneAufpreis').style.display = 'block' ;
  document.getElementById('infoKastenOhneAufpreis').innerHTML =  preisKasten ;
  GesamtsummeAusrechnen () ;
 }
 if ((iObjekt == 54) || (iObjekt == 0)){ // KastenMit Mit
  document.getElementById('infoKastenMitSoll').style.display = 'block' ;
  document.getElementById('infoKastenMit').style.display = 'block' ;
  document.getElementById('infoKastenMitHidden').innerHTML = objekt_1 ; // aufpreis aus DB
  document.getElementById('infoKastenMit').innerHTML = objekt_2 ; // name
  if (document.getElementById (kastenMitImgAlt)){
   document.getElementById(kastenMitImgAlt).style.display = 'none' ;
  }  
  document.getElementById(objekt_3).style.display = 'block' ;
  kastenMitImgAlt = objekt_3 ;
  document.getElementById('infoID'+iObjekt).innerHTML = objekt_4 ; // produkt ID aus der DB
  KastenMitAufpreisPrufen (objekt_1) ;
  SubInputPostFullen (iObjekt, objekt_2, '') ;
 }
 if ((iObjekt == 55) || (iObjekt == 0)){ // KastenMit Aufpreis
  var preisKasten = 0 ;
  if (parseInt(document.getElementById('infoID54').innerHTML) == 3){ // 170 mit
   preisKasten = PreisAusPreisTabelleKastenEinlesen (preistabelle_170_mit, 165) ; // alt 170
   aufpreisKastenProzent = aufpreis_170_mit ;
   aufpreisKastenZahl = Math.round ((preisKasten / 100) * aufpreisKastenProzent) ;
   preisKasten = preisKasten + aufpreisKastenZahl ;
   document.getElementById('zusatz_1_54').innerHTML = '165' ;   // wegen rahmenhöhe + kastenhöhe im gesammtpreis berechnen, alt 170
   MassenUberDemBildAktualisieren (165) ; // alt 165
  }
  else if (parseInt(document.getElementById('infoID54').innerHTML) == 4){ // 210 mit
   preisKasten = PreisAusPreisTabelleKastenEinlesen (preistabelle_210_mit, 185) ; // alt 210
   aufpreisKastenProzent = aufpreis_210_mit ;
   aufpreisKastenZahl = Math.round ((preisKasten / 100) * aufpreisKastenProzent) ;
   preisKasten = preisKasten + aufpreisKastenZahl ;
   document.getElementById('zusatz_1_54').innerHTML = '185' ;   // wegen rahmenhöhe + kastenhöhe im gesammtpreis berechnen, alt 210
   MassenUberDemBildAktualisieren (185) ; // alt 210
  }
  else if (parseInt(document.getElementById('infoID54').innerHTML) == 5){ // 240 mit
   preisKasten = PreisAusPreisTabelleKastenEinlesen (preistabelle_240_mit, 220) ; // alt 240
   aufpreisKastenProzent = aufpreis_240_mit ;
   aufpreisKastenZahl = Math.round ((preisKasten / 100) * aufpreisKastenProzent) ;
   preisKasten = preisKasten + aufpreisKastenZahl ;
   document.getElementById('zusatz_1_54').innerHTML = '220' ;   // wegen rahmenhöhe + kastenhöhe im gesammtpreis berechnen, alt 240
   MassenUberDemBildAktualisieren (220) ;
  }
  else if (parseInt(document.getElementById('infoID54').innerHTML) == 7){ // 215 mit
   preisKasten = PreisAusPreisTabelleKastenEinlesen (preistabelle_215_drutex_mit, 215) ;
   aufpreisKastenProzent = aufpreis_215_drutex_mit ;
   aufpreisKastenZahl = Math.round ((preisKasten / 100) * aufpreisKastenProzent) ;
   preisKasten = preisKasten + aufpreisKastenZahl ;
   document.getElementById('zusatz_1_54').innerHTML = '215' ;   // wegen rahmenhöhe + kastenhöhe im gesammtpreis berechnen
   MassenUberDemBildAktualisieren (215) ;
  }
  else if (parseInt(document.getElementById('infoID54').innerHTML) == 9){ // 170 drutex mit
   preisKasten = PreisAusPreisTabelleKastenEinlesen (preistabelle_170_drutex_mit, 170) ;
   aufpreisKastenProzent = aufpreis_170_drutex_mit ;
   aufpreisKastenZahl = Math.round ((preisKasten / 100) * aufpreisKastenProzent) ;
   preisKasten = preisKasten + aufpreisKastenZahl ;
   document.getElementById('zusatz_1_54').innerHTML = '170' ;   // wegen rahmenhöhe + kastenhöhe im gesammtpreis berechnen
   MassenUberDemBildAktualisieren (170) ;
  }
  else if (parseInt(document.getElementById('infoID54').innerHTML) == 11){ // 225 drutex mit
   preisKasten = PreisAusPreisTabelleKastenEinlesen (preistabelle_225_drutex_mit, 225) ;
   aufpreisKastenProzent = aufpreis_225_drutex_mit ;
   aufpreisKastenZahl = Math.round ((preisKasten / 100) * aufpreisKastenProzent) ;
   preisKasten = preisKasten + aufpreisKastenZahl ;
   document.getElementById('zusatz_1_54').innerHTML = '225' ;   // wegen rahmenhöhe + kastenhöhe im gesammtpreis berechnen
   MassenUberDemBildAktualisieren (225) ;
  }
  document.getElementById('infoKastenMitAufpreis').style.display = 'block' ;
  document.getElementById('infoKastenMitAufpreis').innerHTML = preisKasten ;
  GesamtsummeAusrechnen () ;
 }
 if ((iObjekt == 56) || (iObjekt == 0)){ // Gurtwickler
  document.getElementById('infoGurtwicklerSoll').style.display = 'block' ;
  document.getElementById('infoGurtwickler').style.display = 'block' ;
  document.getElementById('infoGurtwicklerHidden').innerHTML = objekt_1 ; // aufpreis aus DB
  document.getElementById('infoGurtwickler').innerHTML = objekt_2 ; // name
  GurtwicklerAufpreisPrufen (objekt_1) ;
  if (document.getElementById (gurtwicklerImgAlt)){
   document.getElementById(gurtwicklerImgAlt).style.display = 'none' ;
  }  
  document.getElementById(objekt_3).style.display = 'block' ;
  gurtwicklerImgAlt = objekt_3 ;
  document.getElementById('infoID'+iObjekt).innerHTML = objekt_4 ; // produkt ID aus der DB
  SubInputPostFullen (iObjekt, objekt_2, '') ;
 }
 if ((iObjekt == 57) || (iObjekt == 0)){ // Gurtwickler Aufpreis
  document.getElementById('infoGurtwicklerAufpreis').style.display = 'block' ;
  document.getElementById('infoGurtwicklerAufpreis').innerHTML = objekt_2 ;
  GesamtsummeAusrechnen () ;
 }
 if ((iObjekt == 58) || (iObjekt == 0)){ // Antrieb
  document.getElementById('infoAntriebSoll').style.display = 'block' ;
  document.getElementById('infoAntrieb').style.display = 'block' ;
  document.getElementById('infoAntriebHidden').innerHTML = objekt_1 ; // aufpreis aus DB
  document.getElementById('infoAntrieb').innerHTML = objekt_2 ; // name
  AntriebAufpreisPrufen (objekt_1) ;
  if (document.getElementById (antriebImgAlt)){
   document.getElementById(antriebImgAlt).style.display = 'none' ;
  }  
  document.getElementById(objekt_3).style.display = 'block' ;
  antriebImgAlt = objekt_3 ;
  document.getElementById('infoID'+iObjekt).innerHTML = objekt_4 ; // produkt ID aus der DB
  SubInputPostFullen (iObjekt, objekt_2, document.getElementById('subUberschrift58').innerHTML+': ') ;
 }
 if ((iObjekt == 59) || (iObjekt == 0)){ // Antrieb Aufpreis
  document.getElementById('infoAntriebAufpreis').style.display = 'block' ;
  document.getElementById('infoAntriebAufpreis').innerHTML = objekt_2 ;
  GesamtsummeAusrechnen () ;
 }
 if ((iObjekt == 60) || (iObjekt == 0)){ // Panzerfarbe
  document.getElementById('infoPanzerfarbeSoll').style.display = 'block' ;
  document.getElementById('infoPanzerfarbe').style.display = 'block' ;
  document.getElementById('infoPanzerfarbeHidden').innerHTML = objekt_1 ; // aufpreis aus DB
  document.getElementById('infoPanzerfarbe').innerHTML = objekt_2 ; // name
  PanzerfarbeAufpreisPrufen (objekt_1) ;
  if (document.getElementById (panzerfarbeImgAlt)){
   document.getElementById(panzerfarbeImgAlt).style.display = 'none' ;
  }  
  document.getElementById(objekt_3).style.display = 'block' ;
  panzerfarbeImgAlt = objekt_3 ;
  document.getElementById('infoID'+iObjekt).innerHTML = objekt_4 ; // produkt ID aus der DB
  SubInputPostFullen (iObjekt, objekt_2, document.getElementById('subUberschrift60').innerHTML+': ') ;
 }
 if ((iObjekt == 61) || (iObjekt == 0)){ // Panzerfarbe Aufpreis
  document.getElementById('infoPanzerfarbeAufpreis').style.display = 'block' ;
  document.getElementById('infoPanzerfarbeAufpreis').innerHTML = objekt_2 ;
  GesamtsummeAusrechnen () ;
 }
 if ((iObjekt == 62) || (iObjekt == 0)){ // Panzerschienen
  PanzerschienenAufpreisPrufen (objekt_1) ;
  InputPostFullen (iObjekt, 0) ;
  SubInputPostFullen (iObjekt, objekt_2, '') ;
 }
 if ((iObjekt == 63) || (iObjekt == 0)){ // Panzerschienen Aufpreis
  document.getElementById('infoPanzerschienenAufpreis').style.display = 'block' ;
  document.getElementById('infoPanzerschienenAufpreis').innerHTML = objekt_2 ;
  GesamtsummeAusrechnen () ;
 }
 if ((iObjekt == 64) || (iObjekt == 0)){ // Putzschiene
  document.getElementById('infoPutzschieneSoll').style.display = 'block' ;
  document.getElementById('infoPutzschiene').style.display = 'block' ;
  document.getElementById('infoPutzschieneHidden').innerHTML = objekt_1 ; // aufpreis aus DB
  document.getElementById('infoPutzschiene').innerHTML = objekt_2 ; // name
  PutzschieneAufpreisPrufen (objekt_1) ;
  if (document.getElementById (putzschieneImgAlt)){
   document.getElementById(putzschieneImgAlt).style.display = 'none' ;
  }  
  document.getElementById(objekt_3).style.display = 'block' ;
  putzschieneImgAlt = objekt_3 ;
  document.getElementById('infoID'+iObjekt).innerHTML = objekt_4 ; // produkt ID aus der DB
  SubInputPostFullen (iObjekt, objekt_2, document.getElementById('subUberschrift64').innerHTML+': ') ;
 }
 if ((iObjekt == 65) || (iObjekt == 0)){ // Putzschiene Aufpreis
  document.getElementById('infoPutzschieneAufpreis').style.display = 'block' ;
  document.getElementById('infoPutzschieneAufpreis').innerHTML = objekt_2 ;
  GesamtsummeAusrechnen () ;
 }
 if ((iObjekt == 66) || (iObjekt == 0)){ // Fernbedienung
  document.getElementById('infoFernbedienungSoll').style.display = 'block' ;
  document.getElementById('infoFernbedienung').style.display = 'block' ;
  document.getElementById('infoFernbedienungHidden').innerHTML = objekt_1 ; // aufpreis aus DB
  document.getElementById('infoFernbedienung').innerHTML = objekt_2 ; // name
  FernbedienungAufpreisPrufen (objekt_1) ;
  if (document.getElementById (fernbedienungImgAlt)){
   document.getElementById(fernbedienungImgAlt).style.display = 'none' ;
  }  
  document.getElementById(objekt_3).style.display = 'block' ;
  fernbedienungImgAlt = objekt_3 ;
  document.getElementById('infoID'+iObjekt).innerHTML = objekt_4 ; // produkt ID aus der DB
  SubInputPostFullen (iObjekt, objekt_2, document.getElementById('subUberschrift66').innerHTML+': ') ;
 }
 if ((iObjekt == 67) || (iObjekt == 0)){ // Fernbedienung Aufpreis
  document.getElementById('infoFernbedienungAufpreis').style.display = 'block' ;
  document.getElementById('infoFernbedienungAufpreis').innerHTML = objekt_2 ;
  GesamtsummeAusrechnen () ;
 }
 if ((iObjekt == 68) || (iObjekt == 0)){ // Steuereinheit
  document.getElementById('infoSteuereinheitSoll').style.display = 'block' ;
  document.getElementById('infoSteuereinheit').style.display = 'block' ;
  document.getElementById('infoSteuereinheitHidden').innerHTML = objekt_1 ; // aufpreis aus DB
  document.getElementById('infoSteuereinheit').innerHTML = objekt_2 ; // name
  SteuereinheitAufpreisPrufen (objekt_1) ;
  if (document.getElementById (steuereinheitImgAlt)){
   document.getElementById(steuereinheitImgAlt).style.display = 'none' ;
  }  
  document.getElementById(objekt_3).style.display = 'block' ;
  steuereinheitImgAlt = objekt_3 ;
  document.getElementById('infoID'+iObjekt).innerHTML = objekt_4 ; // produkt ID aus der DB
  SubInputPostFullen (iObjekt, objekt_2, document.getElementById('subUberschrift68').innerHTML+': ') ;
 }
 if ((iObjekt == 69) || (iObjekt == 0)){ // Steuereinheit Aufpreis
  document.getElementById('infoSteuereinheitAufpreis').style.display = 'block' ;
  document.getElementById('infoSteuereinheitAufpreis').innerHTML = objekt_2 ;
  GesamtsummeAusrechnen () ;
 }
 if ((iObjekt == 70) || (iObjekt == 0)){ // Sprossen
  document.getElementById('infoSprossenSoll').style.display = 'block' ;
  document.getElementById('infoSprossen').style.display = 'block' ;
  document.getElementById('infoSprossenHidden').innerHTML = objekt_1 ; // aufpreis aus DB
  document.getElementById('infoSprossen').innerHTML = objekt_2 ; // name
  if (document.getElementById (sprossenImgAlt)){
   document.getElementById(sprossenImgAlt).style.display = 'none' ;
  }  
  document.getElementById(objekt_3).style.display = 'block' ;
  sprossenImgAlt = objekt_3 ;
  document.getElementById('div_standard_'+iObjekt).innerHTML = objekt_2 ;
  document.getElementById('infoID'+iObjekt).innerHTML = objekt_4 ; // produkt ID aus der DB
  SprossenAufpreisPrufen (objekt_1) ;
  if (objekt_4 == 0){ // keine sprossen
   SprossenSchalten (objekt_4) ;
  }
  else if (objekt_4 == 1){ // innenliegende
   SprossenSchalten (objekt_4) ;
  }
  else if (objekt_4 == 2){ // aufgeklebte
   SprossenSchalten (objekt_4) ;
  }
  else if (objekt_4 == 3){ // winner
   SprossenSchalten (objekt_4) ;
  }
  InputPostFullen (iObjekt, 0) ;

//  console.log('test') ;
  grafikAnpassen () ;


 }
 if ((iObjekt == 71) || (iObjekt == 0)){ // Sprossen Aufpreis
  document.getElementById('infoSprossenAufpreis').style.display = 'block' ;
  document.getElementById('infoSprossenAufpreis').innerHTML = objekt_2 ;
  GesamtsummeAusrechnen () ;
 }
 if ((iObjekt == 72) || (iObjekt == 0)){ // SprossenTyp
  document.getElementById('infoSprossenTypSoll').style.display = 'block' ;
  document.getElementById('infoSprossenTyp').style.display = 'block' ;
  document.getElementById('infoSprossenTypHidden').innerHTML = objekt_1 ; // aufpreis aus DB
  document.getElementById('infoSprossenTyp').innerHTML = objekt_2 ; // name
  if (document.getElementById (sprossenTypImgAlt)){
   document.getElementById(sprossenTypImgAlt).style.display = 'none' ;
  }  
  document.getElementById(objekt_3).style.display = 'block' ;
  sprossenTypImgAlt = objekt_3 ;
  document.getElementById('infoID'+iObjekt).innerHTML = objekt_4 ; // produkt ID aus der DB
  SprossenTypAufpreisPrufen (objekt_1) ;
  SubInputPostFullen (iObjekt, objekt_2, document.getElementById('subUberschrift72').innerHTML+': ') ;
  grafikAnpassen () ;
 }
 if ((iObjekt == 73) || (iObjekt == 0)){ // SprossenTyp Aufpreis
  document.getElementById('infoSprossenTypAufpreis').style.display = 'block' ;
  document.getElementById('infoSprossenTypAufpreis').innerHTML = objekt_2 ;
  GesamtsummeAusrechnen () ;
 }
 if ((iObjekt == 74) || (iObjekt == 0)){ // SprossenBreiteInnenliegende
  document.getElementById('infoSprossenBreiteInnenliegendeSoll').style.display = 'block' ;
  document.getElementById('infoSprossenBreiteInnenliegende').style.display = 'block' ;
  document.getElementById('infoSprossenBreiteInnenliegendeHidden').innerHTML = objekt_1 ; // aufpreis aus DB
  document.getElementById('infoSprossenBreiteInnenliegende').innerHTML = objekt_2 ; // name
  if (document.getElementById (sprossenBreiteInnenliegendeImgAlt)){
   document.getElementById(sprossenBreiteInnenliegendeImgAlt).style.display = 'none' ;
  }
  document.getElementById(objekt_3).style.display = 'block' ;
  sprossenBreiteInnenliegendeImgAlt = objekt_3 ;
  document.getElementById('infoID'+iObjekt).innerHTML = objekt_4 ; // produkt ID aus der DB
  SprossenBreiteInnenliegendeAufpreisPrufen (objekt_1) ;
  SubInputPostFullen (iObjekt, objekt_2, document.getElementById('subUberschrift74').innerHTML+': ') ;
 }
 if ((iObjekt == 75) || (iObjekt == 0)){ // SprossenBreiteInnenliegende Aufpreis
  document.getElementById('infoSprossenBreiteInnenliegendeAufpreis').style.display = 'block' ;
  document.getElementById('infoSprossenBreiteInnenliegendeAufpreis').innerHTML = objekt_2 ;
  GesamtsummeAusrechnen () ;
 }
 if ((iObjekt == 76) || (iObjekt == 0)){ // SprossenBreiteAufgeklebte
  document.getElementById('infoSprossenBreiteAufgeklebteSoll').style.display = 'block' ;
  document.getElementById('infoSprossenBreiteAufgeklebte').style.display = 'block' ;
  document.getElementById('infoSprossenBreiteAufgeklebteHidden').innerHTML = objekt_1 ; // aufpreis aus DB
  document.getElementById('infoSprossenBreiteAufgeklebte').innerHTML = objekt_2 ; // name
  if (document.getElementById (sprossenBreiteAufgeklebteImgAlt)){
   document.getElementById(sprossenBreiteAufgeklebteImgAlt).style.display = 'none' ;
  }  
  document.getElementById(objekt_3).style.display = 'block' ;
  sprossenBreiteAufgeklebteImgAlt = objekt_3 ;
  document.getElementById('infoID'+iObjekt).innerHTML = objekt_4 ; // produkt ID aus der DB
  SprossenBreiteAufgeklebteAufpreisPrufen (objekt_1) ;
  SubInputPostFullen (iObjekt, objekt_2, document.getElementById('subUberschrift76').innerHTML+': ') ;
 }
 if ((iObjekt == 77) || (iObjekt == 0)){ // SprossenBreiteAufgeklebte Aufpreis
  document.getElementById('infoSprossenBreiteAufgeklebteAufpreis').style.display = 'block' ;
  document.getElementById('infoSprossenBreiteAufgeklebteAufpreis').innerHTML = objekt_2 ;
  GesamtsummeAusrechnen () ;
 }
 if ((iObjekt == 78) || (iObjekt == 0)){ // SprossenBreiteWinner
  document.getElementById('infoSprossenBreiteWinnerSoll').style.display = 'block' ;
  document.getElementById('infoSprossenBreiteWinner').style.display = 'block' ;
  document.getElementById('infoSprossenBreiteWinnerHidden').innerHTML = objekt_1 ; // aufpreis aus DB
  document.getElementById('infoSprossenBreiteWinner').innerHTML = objekt_2 ; // name
  if (document.getElementById (sprossenBreiteWinnerImgAlt)){
   document.getElementById(sprossenBreiteWinnerImgAlt).style.display = 'none' ;
  }  
  document.getElementById(objekt_3).style.display = 'block' ;
  sprossenBreiteWinnerImgAlt = objekt_3 ;
  document.getElementById('infoID'+iObjekt).innerHTML = objekt_4 ; // produkt ID aus der DB
  SprossenBreiteWinnerAufpreisPrufen (objekt_1) ;
  SubInputPostFullen (iObjekt, objekt_2, document.getElementById('subUberschrift78').innerHTML+': ') ;
 }
 if ((iObjekt == 79) || (iObjekt == 0)){ // SprossenBreiteWinner Aufpreis
  document.getElementById('infoSprossenBreiteWinnerAufpreis').style.display = 'block' ;
  document.getElementById('infoSprossenBreiteWinnerAufpreis').innerHTML = objekt_2 ;
  GesamtsummeAusrechnen () ;
 }
 if ((iObjekt == 80) || (iObjekt == 0)){ // Schwelle
  document.getElementById('infoSchwelleSoll').style.display = 'block' ;
  document.getElementById('infoSchwelle').style.display = 'block' ;
  document.getElementById('infoSchwelleHidden').innerHTML = objekt_1 ; // aufpreis aus DB
  document.getElementById('infoSchwelle').innerHTML = objekt_2 ; // name
  if (document.getElementById (schwelleImgAlt)){
   document.getElementById(schwelleImgAlt).style.display = 'none' ;
  }  
  document.getElementById(objekt_3).style.display = 'block' ;
  schwelleImgAlt = objekt_3 ;
  document.getElementById('div_standard_'+iObjekt).innerHTML = objekt_2 ;
  document.getElementById('infoID'+iObjekt).innerHTML = objekt_4 ; // produkt ID aus der DB
  SchwelleAufpreisPrufen (objekt_1) ;
  InputPostFullen (iObjekt, 0) ;
 }
 if ((iObjekt == 81) || (iObjekt == 0)){ // Schwelle Aufpreis
  document.getElementById('infoSchwelleAufpreis').style.display = 'block' ;
  document.getElementById('infoSchwelleAufpreis').innerHTML = objekt_2 ;
  GesamtsummeAusrechnen () ;
 }
 if ((iObjekt == 82) || (iObjekt == 0)){ // FutterPVC
  document.getElementById('infoFutterPVCSoll').style.display = 'block' ;
  document.getElementById('infoFutterPVC').style.display = 'block' ;
  document.getElementById('infoFutterPVCHidden').innerHTML = objekt_1 ; // aufpreis aus DB
  document.getElementById('infoFutterPVC').innerHTML = objekt_2 ; // name
  if (document.getElementById (futterPVCImgAlt)){
   document.getElementById(futterPVCImgAlt).style.display = 'none' ;
  }  
  document.getElementById(objekt_3).style.display = 'block' ;
  futterPVCImgAlt = objekt_3 ;
  document.getElementById('div_standard_'+iObjekt).innerHTML = objekt_2 ;
  document.getElementById('infoID'+iObjekt).innerHTML = objekt_4 ; // produkt ID aus der DB
  FutterPVCAufpreisPrufen (objekt_1) ;
  InputPostFullen (iObjekt, 0) ;
 }
 if ((iObjekt == 83) || (iObjekt == 0)){ // FutterPVC Aufpreis
  document.getElementById('infoFutterPVCAufpreis').style.display = 'block' ;
  document.getElementById('infoFutterPVCAufpreis').innerHTML = objekt_2 ;
  GesamtsummeAusrechnen () ;
 }
 if ((iObjekt == 84) || (iObjekt == 0)){ // FutterPVCFarbe
  FutterPVCFarbeAufpreisPrufen (objekt_1) ;
 }
 if ((iObjekt == 85) || (iObjekt == 0)){ // FutterPVCFarbe Aufpreis
  document.getElementById('infoFutterPVCFarbeAufpreis').style.display = 'block' ;
  document.getElementById('infoFutterPVCFarbeAufpreis').innerHTML = objekt_2 ;
  GesamtsummeAusrechnen () ;
 }
 if ((iObjekt == 86) || (iObjekt == 0)){ // FutterAluArten
  document.getElementById('infoFutterAluArtenSoll').style.display = 'block' ;
  document.getElementById('infoFutterAluArten').style.display = 'block' ;
  document.getElementById('infoFutterAluArtenHidden').innerHTML = objekt_1 ; // aufpreis aus DB
  document.getElementById('infoFutterAluArten').innerHTML = objekt_2 ; // name
  if (document.getElementById (futterAluArtenImgAlt)){
   document.getElementById(futterAluArtenImgAlt).style.display = 'none' ;
  }  
  document.getElementById(objekt_3).style.display = 'block' ;
  futterAluArtenImgAlt = objekt_3 ;
  document.getElementById('div_standard_'+iObjekt).innerHTML = objekt_2 ;
  document.getElementById('infoID'+iObjekt).innerHTML = objekt_4 ; // produkt ID aus der DB
  FutterAluArtenAufpreisPrufen (objekt_1) ;
  FutterAluArtenSchalten (objekt_4) ;
  InputPostFullen (iObjekt, 0) ;
 }
 if ((iObjekt == 87) || (iObjekt == 0)){ // FutterAluArten Aufpreis
  document.getElementById('infoFutterAluArtenAufpreis').style.display = 'block' ;
  document.getElementById('infoFutterAluArtenAufpreis').innerHTML = objekt_2 ;
  GesamtsummeAusrechnen () ;
 }
 if ((iObjekt == 88) || (iObjekt == 0)){ // FutterAluOhneFlugelUberdeckend
  document.getElementById('infoFutterAluOhneFlugelUberdeckendSoll').style.display = 'block' ;
  document.getElementById('infoFutterAluOhneFlugelUberdeckend').style.display = 'block' ;
  document.getElementById('infoFutterAluOhneFlugelUberdeckendHidden').innerHTML = objekt_1 ; // aufpreis aus DB
  document.getElementById('infoFutterAluOhneFlugelUberdeckend').innerHTML = objekt_2 ; // name
  if (document.getElementById (futterAluOhneFlugelUberdeckendImgAlt)){
   document.getElementById(futterAluOhneFlugelUberdeckendImgAlt).style.display = 'none' ;
  }  
  document.getElementById(objekt_3).style.display = 'block' ;
  futterAluOhneFlugelUberdeckendImgAlt = objekt_3 ;
  document.getElementById('infoID'+iObjekt).innerHTML = objekt_4 ; // produkt ID aus der DB
  FutterAluOhneFlugelUberdeckendAufpreisPrufen (objekt_1) ;
  SubInputPostFullen (iObjekt, objekt_2, '') ;
 }
 if ((iObjekt == 89) || (iObjekt == 0)){ // FutterAluOhneFlugelUberdeckend Aufpreis
  document.getElementById('infoFutterAluOhneFlugelUberdeckendAufpreis').style.display = 'block' ;
  document.getElementById('infoFutterAluOhneFlugelUberdeckendAufpreis').innerHTML = objekt_2 ;
  GesamtsummeAusrechnen () ;
 }
 if ((iObjekt == 90) || (iObjekt == 0)){ // FutterAluAussenFlugelUberdeckend
  document.getElementById('infoFutterAluAussenFlugelUberdeckendSoll').style.display = 'block' ;
  document.getElementById('infoFutterAluAussenFlugelUberdeckend').style.display = 'block' ;
  document.getElementById('infoFutterAluAussenFlugelUberdeckendHidden').innerHTML = objekt_1 ; // aufpreis aus DB
  document.getElementById('infoFutterAluAussenFlugelUberdeckend').innerHTML = objekt_2 ; // name
  if (document.getElementById (futterAluAussenFlugelUberdeckendImgAlt)){
   document.getElementById(futterAluAussenFlugelUberdeckendImgAlt).style.display = 'none' ;
  }  
  document.getElementById(objekt_3).style.display = 'block' ;
  futterAluAussenFlugelUberdeckendImgAlt = objekt_3 ;
  document.getElementById('infoID'+iObjekt).innerHTML = objekt_4 ; // produkt ID aus der DB
  FutterAluAussenFlugelUberdeckendAufpreisPrufen (objekt_1) ;
  SubInputPostFullen (iObjekt, objekt_2, '') ;
 }
 if ((iObjekt == 91) || (iObjekt == 0)){ // FutterAluAussenFlugelUberdeckend Aufpreis
  document.getElementById('infoFutterAluAussenFlugelUberdeckendAufpreis').style.display = 'block' ;
  document.getElementById('infoFutterAluAussenFlugelUberdeckendAufpreis').innerHTML = objekt_2 ;
  GesamtsummeAusrechnen () ;
 }
 if ((iObjekt == 92) || (iObjekt == 0)){ // FutterAluAussenInnenFlugelUberdeckend
  document.getElementById('infoFutterAluAussenInnenFlugelUberdeckendSoll').style.display = 'block' ;
  document.getElementById('infoFutterAluAussenInnenFlugelUberdeckend').style.display = 'block' ;
  document.getElementById('infoFutterAluAussenInnenFlugelUberdeckendHidden').innerHTML = objekt_1 ; // aufpreis aus DB
  document.getElementById('infoFutterAluAussenInnenFlugelUberdeckend').innerHTML = objekt_2 ; // name
  if (document.getElementById (futterAluAussenInnenFlugelUberdeckendImgAlt)){
   document.getElementById(futterAluAussenInnenFlugelUberdeckendImgAlt).style.display = 'none' ;
  }  
  document.getElementById(objekt_3).style.display = 'block' ;
  futterAluAussenInnenFlugelUberdeckendImgAlt = objekt_3 ;
  document.getElementById('infoID'+iObjekt).innerHTML = objekt_4 ; // produkt ID aus der DB
  FutterAluAussenInnenFlugelUberdeckendAufpreisPrufen (objekt_1) ;
  SubInputPostFullen (iObjekt, objekt_2, '') ;
 }
 if ((iObjekt == 93) || (iObjekt == 0)){ // FutterAluAussenInnenFlugelUberdeckend Aufpreis
  document.getElementById('infoFutterAluAussenInnenFlugelUberdeckendAufpreis').style.display = 'block' ;
  document.getElementById('infoFutterAluAussenInnenFlugelUberdeckendAufpreis').innerHTML = objekt_2 ;
  GesamtsummeAusrechnen () ;
 }

 if ((iObjekt == 94) || (iObjekt == 0)){ // Falz
  document.getElementById('infoFalzSoll').style.display = 'block' ;
  document.getElementById('infoFalz').style.display = 'block' ;
  document.getElementById('infoFalzHidden').innerHTML = objekt_1 ; // aufpreis aus DB
  document.getElementById('infoFalz').innerHTML = objekt_2 ; // name
  FalzAufpreisPrufen (objekt_1) ;
  if (document.getElementById (falzImgAlt)){
   document.getElementById(falzImgAlt).style.display = 'none' ;
  }  
  document.getElementById(objekt_3).style.display = 'block' ;
  falzImgAlt = objekt_3 ;
  document.getElementById('div_standard_'+iObjekt).innerHTML = objekt_2 ;
  document.getElementById('infoID'+iObjekt).innerHTML = objekt_4 ; // produkt ID aus der DB
  InputPostFullen (iObjekt, 0) ;
 }
 if ((iObjekt == 95) || (iObjekt == 0)){ // Falz Aufpreis
  document.getElementById('infoFalzAufpreis').style.display = 'block' ;
  document.getElementById('infoFalzAufpreis').innerHTML = objekt_2 ;
  GesamtsummeAusrechnen () ;
 }

 if ((iObjekt == 96) || (iObjekt == 0)){ // Entwaesserung
  document.getElementById('infoEntwaesserungSoll').style.display = 'block' ;
  document.getElementById('infoEntwaesserung').style.display = 'block' ;
  document.getElementById('infoEntwaesserungHidden').innerHTML = objekt_1 ; // aufpreis aus DB
  document.getElementById('infoEntwaesserung').innerHTML = objekt_2 ; // name
  EntwaesserungAufpreisPrufen (objekt_1) ;
  if (document.getElementById (entwaesserungImgAlt)){
   document.getElementById(entwaesserungImgAlt).style.display = 'none' ;
  }  
  document.getElementById(objekt_3).style.display = 'block' ;
  entwaesserungImgAlt = objekt_3 ;
  document.getElementById('div_standard_'+iObjekt).innerHTML = objekt_2 ;
  document.getElementById('infoID'+iObjekt).innerHTML = objekt_4 ; // produkt ID aus der DB
  InputPostFullen (iObjekt, 0) ;
 }
 if ((iObjekt == 97) || (iObjekt == 0)){ // Entwaesserung Aufpreis
  document.getElementById('infoEntwaesserungAufpreis').style.display = 'block' ;
  document.getElementById('infoEntwaesserungAufpreis').innerHTML = objekt_2 ;
  GesamtsummeAusrechnen () ;
 }
 if ((iObjekt == 98) || (iObjekt == 0)){ // Oberlicht
  LichtHohePrufen (0, document.getElementById('id_input_hohe_oberlicht').value) ;
  if (rollladenDabei){
   RollladePrufen () ;
  }
  grafikAnpassen () ;
  GesamtsummeAusrechnen () ;
 }
 if ((iObjekt == 100) || (iObjekt == 0)){ // Unterlicht
  LichtHohePrufen (1, document.getElementById('id_input_hohe_unterlicht').value) ;
  if (rollladenDabei){
   RollladePrufen () ;
  }
  grafikAnpassen () ;
  GesamtsummeAusrechnen () ;
 }

 if ((iObjekt == 102) || (iObjekt == 0)){ // Schallsicher
  document.getElementById('infoSchallsicherSoll').style.display = 'block' ;
  document.getElementById('infoSchallsicher').style.display = 'block' ;
  document.getElementById('infoSchallsicherHidden').innerHTML = objekt_1 ; // aufpreis aus DB
  document.getElementById('infoSchallsicher').innerHTML = objekt_2 ; // name
  if (document.getElementById (schallsicherImgAlt)){
   document.getElementById(schallsicherImgAlt).style.display = 'none' ;
  }  
  document.getElementById(objekt_3).style.display = 'block' ;
  schallsicherImgAlt = objekt_3 ;
  document.getElementById('div_standard_'+iObjekt).innerHTML = objekt_2 ;
  document.getElementById('infoID'+iObjekt).innerHTML = objekt_4 ; // produkt ID aus der DB
  SchallsicherAufpreisPrufen (objekt_1) ;
  InputPostFullen (iObjekt, 0) ;
 }
 if ((iObjekt == 103) || (iObjekt == 0)){ // Schallsicher Aufpreis
  document.getElementById('infoSchallsicherAufpreis').style.display = 'block' ;
  document.getElementById('infoSchallsicherAufpreis').innerHTML = objekt_2 ;
  GesamtsummeAusrechnen () ;
 }


 if ((iObjekt == 1000) || (iObjekt == 0)){ // Debugger
  document.getElementById('infoDebugger').innerHTML = objekt_1+' - '+objekt_2+' - '+objekt_3+' - '+objekt_4 ;
 }
}

function LichtHohePrufen (wasFurLicht, iLichtHoheUbergeben){
 var ok_knopf = "<div class=\"lightBoxButtonAussen\"><div onclick=\"LightBoxSchalten('', 2, '', '', this);\" class=\"left wasAlsNachstesEinzeln hand\">"+ok_txt+"</div><div class=\"clear_left\"></div></div>" ;
 if (wasFurLicht == 0){ // oberlicht
  var MinHohe = preisTabelleOberLicht[1][0] ;
  var MaxHohe = preisTabelleOberLicht[preisTabelleOberLicht.length-1][0] ;
 }
 else if (wasFurLicht == 1){ // unterlicht
  var MinHohe = preisTabelleUnterLicht[1][0] ;
  var MaxHohe = preisTabelleUnterLicht[preisTabelleUnterLicht.length-1][0] ;
 }
 var iHoheOberLichtFertig = 0 ;
 if (document.getElementById('div_standard_98')){
  iHoheOberLichtFertig = document.getElementById('div_standard_98').innerHTML ;
 }
 var iHoheUnterLichtFertig = 0 ;
 if (document.getElementById('div_standard_100')){
  iHoheUnterLichtFertig = document.getElementById('div_standard_100').innerHTML ;
 }

 if ((iLichtHoheUbergeben >= MinHohe) && (iLichtHoheUbergeben <= MaxHohe)){ // alles OK
  if (wasFurLicht == 0){ // oberlicht
   document.getElementById('div_standard_98').innerHTML = iLichtHoheUbergeben ;
   iHoheOberLichtFertig = iLichtHoheUbergeben ;
  }
  else if (wasFurLicht == 1){ // unterlicht
   document.getElementById('div_standard_100').innerHTML = iLichtHoheUbergeben ;
   iHoheUnterLichtFertig = iLichtHoheUbergeben ;
  }
 }
 else if (iLichtHoheUbergeben < MinHohe){
  if (wasFurLicht == 0){ // oberlicht
   LightBoxSchalten ('', 1, falsche_hohe_eingegeben_oberlicht_txt, '<div class=\"informationBoxText\">'+min_hohe_txt+' '+MinHohe+'mm<br />'+minimale_hohe_wurde_gesetzt_oberlicht_txt+'</div>'+ok_knopf) ;
   document.getElementById('id_input_hohe_oberlicht').value = MinHohe ;
   document.getElementById('div_standard_98').innerHTML = MinHohe ;
   iHoheOberLichtFertig = MinHohe ;
  }
  else if (wasFurLicht == 1){ // unterlicht
   LightBoxSchalten ('', 1, falsche_hohe_eingegeben_unterlicht_txt, '<div class=\"informationBoxText\">'+min_hohe_txt+' '+MinHohe+'mm<br />'+minimale_hohe_wurde_gesetzt_unterlicht_txt+'</div>'+ok_knopf) ;
   document.getElementById('id_input_hohe_unterlicht').value = MinHohe ;
   document.getElementById('div_standard_100').innerHTML = MinHohe ;
   iHoheUnterLichtFertig = MinHohe ;
  }
 }
 else if (iLichtHoheUbergeben > MaxHohe){
  if (wasFurLicht == 0){ // oberlicht
   LightBoxSchalten ('', 1, falsche_hohe_eingegeben_oberlicht_txt, '<div class=\"informationBoxText\">'+max_hohe_txt+' '+MaxHohe+'mm<br />'+maximale_hohe_wurde_gesetzt_oberlicht_txt+'</div>'+ok_knopf) ;
   document.getElementById('id_input_hohe_oberlicht').value = MaxHohe ;
   document.getElementById('div_standard_98').innerHTML = MaxHohe ;
   iHoheOberLichtFertig = MaxHohe ;
  }
  else if (wasFurLicht == 1){ // unterlicht
   LightBoxSchalten ('', 1, falsche_hohe_eingegeben_unterlicht_txt, '<div class=\"informationBoxText\">'+max_hohe_txt+' '+MaxHohe+'mm<br />'+maximale_hohe_wurde_gesetzt_unterlicht_txt+'</div>'+ok_knopf) ;
   document.getElementById('id_input_hohe_unterlicht').value = MaxHohe ;
   document.getElementById('div_standard_100').innerHTML = MaxHohe ;
   iHoheUnterLichtFertig = MaxHohe ;
  }
 }
 var hoheMitOberUnterLicht = parseInt (iHoheOberLichtFertig) + parseInt (iHohe) + parseInt (iHoheUnterLichtFertig) ;
 if (document.getElementById('infoBild_td_produkt_oberlicht_hohe')){
  document.getElementById('infoBild_td_produkt_oberlicht_hohe').innerHTML = iHoheOberLichtFertig ;
 }
 if (document.getElementById('infoBild_td_produkt_hohe')){
  document.getElementById('infoBild_td_produkt_hohe').innerHTML = hoheMitOberUnterLicht ;
 }
 if (document.getElementById('infoBild_td_produkt_unterlicht_hohe')){
  document.getElementById('infoBild_td_produkt_unterlicht_hohe').innerHTML = iHoheUnterLichtFertig ;
 }
}

function PreisAusPreisTabelleKastenEinlesen (preisTabelleUBERGEBEN, plusKastenHohe){
 var iHoheTreffer = 0 ;
 var iBreiteTreffer = 0 ;
 var preisKastenAusPreistabelle = 0 ;
 var x = 0 ;
 var iHohePlusKastenHohe = parseInt(iHohe) + parseInt(plusKastenHohe) ;
 if ((iBreite > 0) && (iHohe > 0)){
  for (x = (preisTabelleUBERGEBEN.length-1); x >= 0; x--){ // hohe
   if (iHohePlusKastenHohe <= preisTabelleUBERGEBEN[x][0]){
    iHoheTreffer = x ;
   }
  }
  for (x = (preisTabelleUBERGEBEN[1].length-1); x >= 0; x--){ // breite
   if (iBreite <= preisTabelleUBERGEBEN[0][x]){
    iBreiteTreffer = x ;
   }
  }
  preisKastenAusPreistabelle = preisTabelleUBERGEBEN[iHoheTreffer][iBreiteTreffer] ;
 }
 return preisKastenAusPreistabelle ;
}

function MassenUberDemBildAktualisieren (plusKastenHohe){
 var iHoheOberLichtFertig = 0 ;
 if (document.getElementById('div_standard_98')){
  iHoheOberLichtFertig = document.getElementById('div_standard_98').innerHTML ;
 }
 var iHoheUnterLichtFertig = 0 ;
 if (document.getElementById('div_standard_100')){
  iHoheUnterLichtFertig = document.getElementById('div_standard_100').innerHTML ;
 }
 var iHohePlusKastenHohe = parseInt (iHohe) + parseInt (plusKastenHohe) + parseInt (iHoheOberLichtFertig) + parseInt (iHoheUnterLichtFertig) ;
 document.getElementById('infoBild_td_kasten_hohe').innerHTML = plusKastenHohe ;
 document.getElementById('infoBild_td_zusamen_hohe').innerHTML = iHohePlusKastenHohe ;
}

function RollladenSchalten (rollladenID){
 if (rollladenID == 0){ // keine rolladen
  if (document.getElementById ('kasten_54')){ // kasten mit
   document.getElementById('kasten_54').style.display = 'none' ; // kasten
  }
  if (document.getElementById ('kasten_52')){ // kasten ohne
   document.getElementById('kasten_52').style.display = 'none' ; // kasten ohne
  }
  if (document.getElementById ('sub_56')){
   document.getElementById('sub_56').style.display = 'none' ; // gurtwickler
  }
  if (document.getElementById ('sub_58')){
   document.getElementById('sub_58').style.display = 'none' ; // antrieb
  }
  if (document.getElementById ('sub_60')){
   document.getElementById('sub_60').style.display = 'none' ; // panzerfarbe
  }
  if (document.getElementById ('sub_64')){
   document.getElementById('sub_64').style.display = 'none' ; // putzschiene
  }
  if (document.getElementById ('sub_66')){
   document.getElementById('sub_66').style.display = 'none' ; // fernbedienung
  }
  if (document.getElementById ('sub_68')){
   document.getElementById('sub_68').style.display = 'none' ; // Steuereinheit
  }
  if (document.getElementById ('infoBild_tr_kasten')){
   document.getElementById('infoBild_tr_kasten').style.visibility = 'hidden' ; // kasten über dem bild
/*
   document.getElementById('infoBild_td_kasten_hohe').style.borderTop = '0' ;
   document.getElementById('infoBild_td_kasten_hohe').style.borderRight = '0'
   document.getElementById('infoBild_td_kasten_hohe').style.borderBottom = '0' ;
   document.getElementById('infoBild_td_zusamen_hohe').style.borderTop = '0' ;
   document.getElementById('infoBild_td_zusamen_hohe').style.borderRight = '0'
   document.getElementById('infoBild_td_zusamen_hohe').style.borderBottom = '0' ;
*/
  }
 }
 else if (rollladenID == 1){ // rolladen ohne
  if (document.getElementById ('kasten_54')){
   document.getElementById('kasten_54').style.display = 'none' ;
  }
  if (document.getElementById ('kasten_52')){
   document.getElementById('kasten_52').style.display = 'block' ;
  }
  if (document.getElementById ('sub_56')){
   document.getElementById('sub_56').style.display = 'block' ; // gurtwickler
  }
  if (document.getElementById ('sub_58')){
   document.getElementById('sub_58').style.display = 'block' ; // antrieb
  }
  if (document.getElementById ('sub_60')){
   document.getElementById('sub_60').style.display = 'block' ; // panzerfarbe
  }
  if (document.getElementById ('sub_64')){
   document.getElementById('sub_64').style.display = 'block' ; // putzschiene
  }
  if (document.getElementById ('sub_66')){
   document.getElementById('sub_66').style.display = 'block' ; // fernbedienung
  }
  if (document.getElementById ('sub_68')){
   document.getElementById('sub_68').style.display = 'block' ; // Steuereinheit
  }
  if (document.getElementById ('infoBild_tr_kasten')){
   document.getElementById('infoBild_tr_kasten').style.visibility = 'visible' ; // kasten über dem bild
/*
   document.getElementById('infoBild_td_kasten_hohe').style.borderTop = '1px solid #ff0000' ;
   document.getElementById('infoBild_td_kasten_hohe').style.borderRight = '1px solid #0ff0000'
   document.getElementById('infoBild_td_kasten_hohe').style.borderBottom = '1px solid #ff0000' ;
   document.getElementById('infoBild_td_zusamen_hohe').style.borderTop = '1px solid #ff0000' ;
   document.getElementById('infoBild_td_zusamen_hohe').style.borderRight = '1px solid #ff0000' ;
   document.getElementById('infoBild_td_zusamen_hohe').style.borderBottom = '1px solid #ff0000' ;
*/
  }
 }
 else if (rollladenID == 2){ // rolladen mit
  if (document.getElementById ('kasten_54')){
   document.getElementById('kasten_54').style.display = 'block' ;
  }
  if (document.getElementById ('kasten_52')){
   document.getElementById('kasten_52').style.display = 'none' ;
  }
  if (document.getElementById ('sub_56')){
   document.getElementById('sub_56').style.display = 'block' ; // gurtwickler
  }
  if (document.getElementById ('sub_58')){
   document.getElementById('sub_58').style.display = 'block' ; // antrieb
  }
  if (document.getElementById ('sub_60')){
   document.getElementById('sub_60').style.display = 'block' ; // panzerfarbe
  }
  if (document.getElementById ('sub_64')){
   document.getElementById('sub_64').style.display = 'block' ; // putzschiene
  }
  if (document.getElementById ('sub_66')){
   document.getElementById('sub_66').style.display = 'block' ; // fernbedienung
  }
  if (document.getElementById ('sub_68')){
   document.getElementById('sub_68').style.display = 'block' ; // Steuereinheit
  }
  if (document.getElementById ('infoBild_tr_kasten')){
   document.getElementById('infoBild_tr_kasten').style.visibility = 'visible' ; // kasten über dem bild
/*
   document.getElementById('infoBild_td_kasten_hohe').style.borderTop = '1px solid #ff0000' ;
   document.getElementById('infoBild_td_kasten_hohe').style.borderRight = '1px solid #ff0000'
   document.getElementById('infoBild_td_kasten_hohe').style.borderBottom = '1px solid #ff0000' ;
   document.getElementById('infoBild_td_zusamen_hohe').style.borderTop = '1px solid #ff0000' ;
   document.getElementById('infoBild_td_zusamen_hohe').style.borderRight = '1px solid #ff0000' ;
   document.getElementById('infoBild_td_zusamen_hohe').style.borderBottom = '1px solid #ff0000' ;
*/
  }
 }
}

function SprossenSchalten (sprossenID){
 if (sprossenID == 0){ // keine sprossen
  if (document.getElementById ('sub_72')){ // typ
   document.getElementById('sub_72').style.display = 'none' ;
  }
  if (document.getElementById ('sub_74')){ // innenliegende
   document.getElementById('sub_74').style.display = 'none' ;
  }
  if (document.getElementById ('sub_76')){ // aufgeklebte
   document.getElementById('sub_76').style.display = 'none' ;
  }
  if (document.getElementById ('sub_78')){ // winner
   document.getElementById('sub_78').style.display = 'none' ;
  }
 }
 else if (sprossenID == 1){ // innenliegende
  if (document.getElementById ('sub_72')){ // typ
   document.getElementById('sub_72').style.display = 'block' ;
  }
  if (document.getElementById ('sub_74')){ // innenliegende
   document.getElementById('sub_74').style.display = 'block' ;
  }
  if (document.getElementById ('sub_76')){ // aufgeklebte
   document.getElementById('sub_76').style.display = 'none' ;
  }
  if (document.getElementById ('sub_78')){ // winner
   document.getElementById('sub_78').style.display = 'none' ;
  }
 }
 else if (sprossenID == 2){ // aufgeklebte
  if (document.getElementById ('sub_72')){ // typ
   document.getElementById('sub_72').style.display = 'block' ;
  }
  if (document.getElementById ('sub_74')){ // innenliegende
   document.getElementById('sub_74').style.display = 'none' ;
  }
  if (document.getElementById ('sub_76')){ // aufgeklebte
   document.getElementById('sub_76').style.display = 'block' ;
  }
  if (document.getElementById ('sub_78')){ // winner
   document.getElementById('sub_78').style.display = 'none' ;
  }
 }
 else if (sprossenID == 3){ // winner
  if (document.getElementById ('sub_72')){ // typ
   document.getElementById('sub_72').style.display = 'block' ;
  }
  if (document.getElementById ('sub_74')){ // innenliegende
   document.getElementById('sub_74').style.display = 'none' ;
  }
  if (document.getElementById ('sub_76')){ // aufgeklebte
   document.getElementById('sub_76').style.display = 'none' ;
  }
  if (document.getElementById ('sub_78')){ // winner
   document.getElementById('sub_78').style.display = 'block' ;
  }
 }
}

function FutterAluArtenSchalten (artID){
 if (produktSystemFurSonderAufpreis == 'MB_86SI'){
  if (artID == 2){ // nur glass
   if (document.getElementById ('sub_90')){ // aussen flugel uberdeckend
    document.getElementById('sub_90').style.display = 'none' ;
   }
   if (document.getElementById ('sub_92')){ // aussen innen flugel uberdeckend
    document.getElementById('sub_92').style.display = 'none' ;
   }
  }
  else if (artID == 3){ // aussen flugel uberdecken
   if (document.getElementById ('sub_90')){ // aussen flugel uberdeckend
    document.getElementById('sub_90').style.display = 'block' ;
   }
   if (document.getElementById ('sub_92')){ // aussen innen flugel uberdeckend
    document.getElementById('sub_92').style.display = 'none' ;
   }	
  }
  else if (artID == 4){ // aussen flugel uberdecken
   if (document.getElementById ('sub_90')){ // aussen flugel uberdeckend
    document.getElementById('sub_90').style.display = 'none' ;
   }
   if (document.getElementById ('sub_92')){ // aussen innen flugel uberdeckend
    document.getElementById('sub_92').style.display = 'block' ;
   }	
  }
 }
 else{
  if (artID == 0){ // nur glas
   if (document.getElementById ('sub_88')){ // ohne flugel uberdeckend
    document.getElementById('sub_88').style.display = 'none' ;
   }
   if (document.getElementById ('sub_90')){ // aussen flugel uberdeckend
    document.getElementById('sub_90').style.display = 'none' ;
   }
   if (document.getElementById ('sub_92')){ // aussen innen flugel uberdeckend
    document.getElementById('sub_92').style.display = 'none' ;
   }
  }
  else if (artID == 1){ // ohne flugel uberdecken
   if (document.getElementById ('sub_88')){ // ohne flugel uberdeckend
    document.getElementById('sub_88').style.display = 'block' ;
   }
   if (document.getElementById ('sub_90')){ // aussen flugel uberdeckend
    document.getElementById('sub_90').style.display = 'none' ;
   }
   if (document.getElementById ('sub_92')){ // aussen innen flugel uberdeckend
    document.getElementById('sub_92').style.display = 'none' ;
   }
  }
  else if (artID == 2){ // aussen flugel uberdecken
   if (document.getElementById ('sub_88')){ // ohne flugel uberdeckend
    document.getElementById('sub_88').style.display = 'none' ;
   }
   if (document.getElementById ('sub_90')){ // aussen flugel uberdeckend
    document.getElementById('sub_90').style.display = 'block' ;
   }
   if (document.getElementById ('sub_92')){ // aussen innen flugel uberdeckend
    document.getElementById('sub_92').style.display = 'none' ;
   }
  }
  else if (artID == 3){ // ohne flugel uberdecken
   if (document.getElementById ('sub_88')){ // ohne flugel uberdeckend
    document.getElementById('sub_88').style.display = 'none' ;
   }
   if (document.getElementById ('sub_90')){ // aussen flugel uberdeckend
    document.getElementById('sub_90').style.display = 'none' ;
   }
   if (document.getElementById ('sub_92')){ // aussen innen flugel uberdeckend
    document.getElementById('sub_92').style.display = 'block' ;
   }
  }
 }
}

function md5(str) {
  var xl;

  var rotateLeft = function(lValue, iShiftBits) {
    return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
  };

  var addUnsigned = function(lX, lY) {
    var lX4, lY4, lX8, lY8, lResult;
    lX8 = (lX & 0x80000000);
    lY8 = (lY & 0x80000000);
    lX4 = (lX & 0x40000000);
    lY4 = (lY & 0x40000000);
    lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
    if (lX4 & lY4) {
      return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
    }
    if (lX4 | lY4) {
      if (lResult & 0x40000000) {
        return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
      } else {
        return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
      }
    } else {
      return (lResult ^ lX8 ^ lY8);
    }
  };

  var _F = function(x, y, z) {
    return (x & y) | ((~x) & z);
  };
  var _G = function(x, y, z) {
    return (x & z) | (y & (~z));
  };
  var _H = function(x, y, z) {
    return (x ^ y ^ z);
  };
  var _I = function(x, y, z) {
    return (y ^ (x | (~z)));
  };

  var _FF = function(a, b, c, d, x, s, ac) {
    a = addUnsigned(a, addUnsigned(addUnsigned(_F(b, c, d), x), ac));
    return addUnsigned(rotateLeft(a, s), b);
  };

  var _GG = function(a, b, c, d, x, s, ac) {
    a = addUnsigned(a, addUnsigned(addUnsigned(_G(b, c, d), x), ac));
    return addUnsigned(rotateLeft(a, s), b);
  };

  var _HH = function(a, b, c, d, x, s, ac) {
    a = addUnsigned(a, addUnsigned(addUnsigned(_H(b, c, d), x), ac));
    return addUnsigned(rotateLeft(a, s), b);
  };

  var _II = function(a, b, c, d, x, s, ac) {
    a = addUnsigned(a, addUnsigned(addUnsigned(_I(b, c, d), x), ac));
    return addUnsigned(rotateLeft(a, s), b);
  };

  var convertToWordArray = function(str) {
    var lWordCount;
    var lMessageLength = str.length;
    var lNumberOfWords_temp1 = lMessageLength + 8;
    var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - (lNumberOfWords_temp1 % 64)) / 64;
    var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
    var lWordArray = new Array(lNumberOfWords - 1);
    var lBytePosition = 0;
    var lByteCount = 0;
    while (lByteCount < lMessageLength) {
      lWordCount = (lByteCount - (lByteCount % 4)) / 4;
      lBytePosition = (lByteCount % 4) * 8;
      lWordArray[lWordCount] = (lWordArray[lWordCount] | (str.charCodeAt(lByteCount) << lBytePosition));
      lByteCount++;
    }
    lWordCount = (lByteCount - (lByteCount % 4)) / 4;
    lBytePosition = (lByteCount % 4) * 8;
    lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
    lWordArray[lNumberOfWords - 2] = lMessageLength << 3;     lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
    return lWordArray;
  };

  var wordToHex = function(lValue) {
    var wordToHexValue = '',
      wordToHexValue_temp = '',
      lByte, lCount;
    for (lCount = 0; lCount <= 3; lCount++) {       lByte = (lValue >>> (lCount * 8)) & 255;
      wordToHexValue_temp = '0' + lByte.toString(16);
      wordToHexValue = wordToHexValue + wordToHexValue_temp.substr(wordToHexValue_temp.length - 2, 2);
    }
    return wordToHexValue;
  };

  var utf8_encode = function(string) {
      string = (string+'').replace(/\r\n/g, "\n").replace(/\r/g, "\n");

      var utftext = "";
      var start, end;
      var stringl = 0;

      start = end = 0;
      stringl = string.length;
      for (var n = 0; n < stringl; n++) {
          var c1 = string.charCodeAt(n);
          var enc = null;

          if (c1 < 128) {               end++;           } else if((c1 > 127) && (c1 < 2048)) {               enc = String.fromCharCode((c1 >> 6) | 192) + String.fromCharCode((c1 & 63) | 128);
          } else {
              enc = String.fromCharCode((c1 >> 12) | 224) + String.fromCharCode(((c1 >> 6) & 63) | 128) + String.fromCharCode((c1 & 63) | 128);
          }
          if (enc != null) {
              if (end > start) {
                  utftext += string.substring(start, end);
              }
              utftext += enc;
              start = end = n+1;
          }
      }

      if (end > start) {
          utftext += string.substring(start, string.length);
      }

      return utftext;
  }

  var x = [],
    k, AA, BB, CC, DD, a, b, c, d, S11 = 7,
    S12 = 12,
    S13 = 17,
    S14 = 22,
    S21 = 5,
    S22 = 9,
    S23 = 14,
    S24 = 20,
    S31 = 4,
    S32 = 11,
    S33 = 16,
    S34 = 23,
    S41 = 6,
    S42 = 10,
    S43 = 15,
    S44 = 21;

  str = utf8_encode(str);
  x = convertToWordArray(str);
  a = 0x67452301;
  b = 0xEFCDAB89;
  c = 0x98BADCFE;
  d = 0x10325476;

  xl = x.length;
  for (k = 0; k < xl; k += 16) {
    AA = a;
    BB = b;
    CC = c;
    DD = d;
    a = _FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
    d = _FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
    c = _FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
    b = _FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
    a = _FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
    d = _FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
    c = _FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
    b = _FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
    a = _FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
    d = _FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
    c = _FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
    b = _FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
    a = _FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
    d = _FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
    c = _FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
    b = _FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
    a = _GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
    d = _GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
    c = _GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
    b = _GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
    a = _GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
    d = _GG(d, a, b, c, x[k + 10], S22, 0x2441453);
    c = _GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
    b = _GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
    a = _GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
    d = _GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
    c = _GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
    b = _GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
    a = _GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
    d = _GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
    c = _GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
    b = _GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
    a = _HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
    d = _HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
    c = _HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
    b = _HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
    a = _HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
    d = _HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
    c = _HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
    b = _HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
    a = _HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
    d = _HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
    c = _HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
    b = _HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
    a = _HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
    d = _HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
    c = _HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
    b = _HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
    a = _II(a, b, c, d, x[k + 0], S41, 0xF4292244);
    d = _II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
    c = _II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
    b = _II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
    a = _II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
    d = _II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
    c = _II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
    b = _II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
    a = _II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
    d = _II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
    c = _II(c, d, a, b, x[k + 6], S43, 0xA3014314);
    b = _II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
    a = _II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
    d = _II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
    c = _II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
    b = _II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
    a = addUnsigned(a, AA);
    b = addUnsigned(b, BB);
    c = addUnsigned(c, CC);
    d = addUnsigned(d, DD);
  }

  var temp = wordToHex(a) + wordToHex(b) + wordToHex(c) + wordToHex(d);

  return temp.toLowerCase();
}




















