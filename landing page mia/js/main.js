(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space

let frase1 = "Ciao sono Lorenzo Pirnaci";
let frase2 = "Sono uno sviluppatore Front End";
let a = document.getElementById('macchinina');
a.innerHTML ="";
frasi =[frase1.length,frase1,frase2.length,frase2];
let i = 0;
let t = 0;
let n = 0;
let dummy = "";
let dummy1 =[0,""];

function macchina(){
  a.innerHTML = dummy ;
  
  if (t==1){
  dummy="";
  t=0;
  
  }
  if (t==0){
	if ( dummy.length < frasi[1+n*2].length){
		dummy = fraseggio(frasi[1+n*2],dummy);
		setTimeout("macchina()",100);
		frasi[n*2] = dummy.length
		}
  else {
		if ( frasi[n*2]>=0){
		     if ( frasi[n*2]==dummy.length){
			dummy1 = defraseggio(dummy,frasi[n*2]);
			dummy=dummy1[1];
			frasi[n*2]= dummy1[0];
			setTimeout("macchina()",1500);
			console.log("n " + frasi[n*2]);
			}
			else{
			dummy1 = defraseggio(dummy,frasi[n*2]);
			dummy=dummy1[1];
			frasi[n*2]= dummy1[0];
			setTimeout("macchina()",100);}
			}
		else {
			t=1;
			n++;
			if (n == frasi.length/2) {n = 0;}
			setTimeout("macchina()",800);
			}
		
	  }

	  }
	  }
  
 
 
  

 function fraseggio (pippo, lung){
 let pippo1="";
 let l = lung.length;
 if(l < pippo.length){
 pippo1=pippo.substring(0,l+1);
 
 return pippo1;
 }
 }
 
 function defraseggio (phrase,lunghezza){
 let space =" ";
 let suca=""; 
 if(lunghezza > 0){
 suca = phrase.substring(0,lunghezza);
 lunghezza--;
 }
 else if (lunghezza == 0){suca =" ";  console.log("sono entrato" ); lunghezza--;}
 for (let n= phrase.length - lunghezza; n >0 ; n--){
  space = space + " ";
  
  }
  console.log("space " + space.length);
  let output =suca + space + " " ;
   return [lunghezza,output];
 }
 