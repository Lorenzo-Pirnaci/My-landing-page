(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

  }); // end of document ready
})(jQuery); // end of jQuery name space



let frase1 = "Sono Lorenzo Pirnaci";
let frase2 = "E sono uno sviluppatore Front End";
let a = document.getElementById('macchinina');
a.innerHTML ="";
let frasi =[frase1,frase2];
let i = 0;
let t = 0;
let n = 0;
let dummy = "";
let stato;

function macchina(){
  a.innerHTML = dummy ;
  let delay=100;

  switch (stato) {
  	case 00:
  		if (n == frasi.length) {
        n = 0;
      }
  		stato=10;
  	break;

  	case 10:
  		dummy = fraseggio(frasi[n],dummy,0);
  		if (dummy.length<frasi[n].length) {
  			stato=10;
  			delay=100;
  		}
  		else {
        stato=20;
      }
  	break;

	  case 20:
		  delay=1000;
		  stato=30;
		break;

	  case 30:
		  dummy = fraseggio(frasi[n],dummy,1);
		  if (dummy.length>0) {
			  stato=30;
		    delay=100;
		  }
		  else {
        stato=40;
      }
		break;

	  case 40:
		  delay=1000;
		  n++;
		  stato=0;
		break;

    default:
	    stato=0;
	    delay=100;
  }
  setTimeout("macchina()",delay);
}

function fraseggio (frase, dfrase,sel){
  let l = dfrase.length;
  let out="";
	if(sel==0){
 	  out = frase.substring(0,l+1);
	}
	else if(sel==1){
	  out = frase.substring(0,l-1);
	}
  return out;
}
