
	var max_elet, elet;
	var max_tamadas, tamadas;
	var max_vedettseg, vedettseg;
	var max_szerencse, szerencse;
	var max_magia=0, magia=0;
	var max_sebzes=6, min_sebzes=1;
	var max_sebzes_e, min_sebzes_e;
	var ellenfel_nev, ellenfel_eletero, ellenfel_vedettseg, ellenfel_tamadas;
	var	max_jatekos = max_sebzes - min_sebzes + 1; //2 sebzés közötti különbség, randomolásnál kell
	var	max_ellenfel;
	var repeater;
	var kezdes;
	var menekules=false;
	var kigyo1_elet=32;
	var kigyo2_elet=28;
	var kigyo=true; //1-es vagy 2-es kígyót támad
	var illuzio=false; //kígyó illuzio 
	var harceredmeny=0; //1-nyert 2-vesztett 3-elfutott
	
	function Random(szam1,szam2){
		return Math.floor((Math.random()*szam1)+szam2);
	}	
	function Max_Eletero(){
		max_elet=Random(21,14);
		elet=max_elet;
	}
	function Max_Tamadas(){
		max_tamadas=Random(11,8);
		tamadas=max_tamadas;
	}
	function Max_Vedettseg(){
		max_vedettseg=Random(11,8);
		vedettseg=max_vedettseg;
	}
	function Max_Szerencse(){
		max_szerencse=Random(6,7);
		szerencse=max_szerencse;
	}
	function Max_Magia(){
		max_magia=magia=0;
	}
	function Feltoltes(){
	Max_Eletero();
	Max_Tamadas();
	Max_Vedettseg();
	Max_Szerencse();
	Max_Magia();
	Frissites();
	document.getElementById('feltolt').style.visibility = 'hidden';
	}
	function Frissites(){
		document.getElementById("eletero_kezdeti").innerHTML="Életerő: "+max_elet;
		document.getElementById("eletero_valtozott").innerHTML="Életerő: "+elet;
	
		document.getElementById("tamadas_kezdeti").innerHTML="Támadóerő: "+max_tamadas;
		document.getElementById("tamadas_valtozott").innerHTML="Támadóerő: "+tamadas;
	
		document.getElementById("vedettseg_kezdeti").innerHTML="Védettség: "+max_vedettseg;
		document.getElementById("vedettseg_valtozott").innerHTML="Védettség: "+vedettseg;
		
		document.getElementById("szerencse_kezdeti").innerHTML="Szerencse: "+max_szerencse;
		document.getElementById("szerencse_valtozott").innerHTML="Szerencse: "+szerencse;
	
		document.getElementById("magia_kezdeti").innerHTML="Mágia: "+ max_magia;
		document.getElementById("magia_valtozott").innerHTML="Mágia: "+magia;
	}
	
	function Kuzdelem(szam1,szam2){
		//ki kezdjen?
		jatekos = Random(6,1);
		ellenfel = Random(6,1);
		
		if(ellenfel_nev=="Kőszobor" || ellenfel_nev=="Ajtó"){
			jatekos+=ellenfel; //mindig a játékos kezd
		}
		
		if(jatekos < ellenfel){
			//ellenfel kezd
			kezdes=false;
			document.getElementById("kezdes").innerHTML = ellenfel_nev + " kezd";
			if(ellenfel_nev=="Kigyók"){ 
				repeater = setInterval(function(){ Kigyok(); },1000); 
			}
			else{
				repeater = setInterval(function(){ Harc(szam1,szam2); },1000);
			}
		}
		else{				  
			//jatekos kezd
			kezdes=true;
			document.getElementById("kezdes").innerHTML="Jatekos kezd";
			if(ellenfel_nev=="Kigyók"){ 
				repeater = setInterval(function(){ Kigyok(); },1000); 
			}
			else{
				repeater = setInterval(function(){ Harc(szam1,szam2); },1000);
			}
		}
	}
	
	function Harc(szam1,szam2){
		if(menekules){
			tamadoero = Random(11,2);
			tamadoero += ellenfel_tamadas+8;
			Ellenfel_tamad(tamadoero);
			menekules=false;
			clearInterval(repeater);
			if(elet>0) { 
				document.getElementById("eredmeny").innerHTML="Elfutottál!"; 
				harceredmeny=3;
			}
			else{ harceredmeny=2;
				id="g"+szam2;
				document.getElementById(id).style.display = "inherit";
			}
			Frissites();
		}
		else{
			document.getElementById("csata_elet").innerHTML="Életerőd: "+elet;
			document.getElementById("csata_elet_e").innerHTML=ellenfel_nev+" életerereje: "+ellenfel_eletero;
		
			if(kezdes){		//jatekos tamad
				tamadoero = Random(11,2);
				tamadoero += tamadas;
				Jatekos_tamad(tamadoero,szam1,szam2);
				kezdes=false;
			}
			else{ 			//ellenfel tamad
				tamadoero = Random(11,2);
				tamadoero += ellenfel_tamadas;
				Ellenfel_tamad(tamadoero,szam1,szam2);
				kezdes=true;
			}
		}
	}
	
	function Csata(ellenfel_nev,ellenfel_eletero,ellenfel_tamadas,ellenfel_vedettseg,max_sebzes_e,min_sebzes_e,szam1,szam2){
		this.ellenfel_nev = ellenfel_nev;
		this.ellenfel_eletero = ellenfel_eletero;
		this.ellenfel_tamadas = ellenfel_tamadas;
		this.ellenfel_vedettseg = ellenfel_vedettseg;
		this.max_sebzes_e = max_sebzes_e;
		this.min_sebzes_e = min_sebzes_e;
		max_ellenfel = max_sebzes_e - min_sebzes_e + 1;
		Kuzdelem(szam1,szam2);
	}
	
	function Ellenfelek(szam,szam1,szam2){
		switch(szam){
			case 1: Csata("Kőszobor",30,8,13,12,2,szam1,szam2); break;
			case 2: Csata("Kecskepásztor",20,10,10,6,1,szam1,szam2); break;
			case 3: Csata("Farkasember",25,14,10,6,1,szam1,szam2); break;
			case 4: Csata("Sámán",29,14,16,12,2,szam1,szam2); break;
			case 5: Csata("Kapuőrző Démon",80,18,20,10,5,szam1,szam2); break;
			case 6: Csata("Rémkutya",10,10,9,6,1,szam1,szam2); break;
			case 7: Csata("Kigyók",28,18,16,12,2,szam1,szam2); break;
			case 8: Csata("Ajtó",13,8,11,3,1,szam1,szam2); break;
			case 9: Csata("Hószörny",36,12,10,8,3,szam1,szam2); break;
			case 10: Csata("Törpe",22,14,13,7,2,szam1,szam2); break;
			case 11: Csata("Törpe",25,14,13,7,2,szam1,szam2); break; //128. 13
			case 12: Csata("Rabló",13,11,10,6,1,szam1,szam2); break;
			case 13: Csata("Törpe",25,14,13,7,2,szam1,szam2); break; //146. 11
			case 14: Csata("Az alvilág őre",80,18,20,10,5,szam1,szam2); break; //149. 5
			case 15: Csata("Jégóriás",35,14,10,12,2,szam1,szam2); break; //151.
			case 16: Csata("Varázsló",11,8,6,0,0,szam1,szam2); break; //186.
			case 17: Csata("Harcos nő",20,13,10,8,3,szam1,szam2); break;
			case 18: Csata("Rabló",14,11,8,6,1,szam1,szam2); break; //208.
			case 19: Csata("Rabló",12,12,10,8,3,szam1,szam2); break; //214.
			case 20: Csata("Hószörny",36,12,10,7,2,szam1,szam2); break; //227.
			case 21: Csata("Sivatagi szellem",30,12,18,4,4,szam1,szam2); break; //260.
			case 22: Csata("Rukh fióka",12,10,7,6,1,szam1,szam2); break; //286.
			default: break;
		}
	}
	
	//támadások
	function Jatekos_tamad(tamadoero,szam1,szam2){
				document.getElementById("csata_kiteres").innerHTML="";
		if(tamadoero > ellenfel_vedettseg){ //megsebezve
			sebzes = Random(max_jatekos,min_sebzes);
			if(ellenfel_nev=="Harcos nő"){ //3-al kevesebb sebzés
				sebzes-=3;
				if(sebzes<=0) { sebzes=1; } //min 1 sebzés
			}
			ellenfel_eletero -= sebzes;
			document.getElementById("csata_kiteres_e").innerHTML="-"+sebzes;
			document.getElementById("csata_elet_e").innerHTML= ellenfel_nev+" életerereje: "+ellenfel_eletero;
			if(ellenfel_eletero <= 0){ 
				clearInterval(repeater);
				document.getElementById("eredmeny").innerHTML="Jatekos nyert";
				id="g"+szam1;
				document.getElementById(id).style.display = "inherit";
				harceredmeny=1;
				Frissites();
				//nyert
			}
		}
		else{ 
		//elkerülte a támadást 
		document.getElementById("csata_kiteres_e").innerHTML="Elkerülte a Támadást!";
		}
	}
	function Ellenfel_tamad(tamadoero,szam1,szam2){
				document.getElementById("csata_kiteres_e").innerHTML="";
		if(tamadoero > vedettseg){ //megsebezve
			if(ellenfel_nev=="Varázsló"){ //ha a varázsló eltalál vége
				document.getElementById("csata_kiteres").innerHTML="Eltalált";
				document.getElementById("eredmeny").innerHTML="Jatekos vesztett";
				clearInterval(repeater);
				elet=0;
				return;
			}
			sebzes = Random(max_ellenfel,min_sebzes_e);
			elet -= sebzes;
			document.getElementById("csata_kiteres").innerHTML="-"+sebzes;
			document.getElementById("csata_elet").innerHTML="Életerőd: "+elet;
			if(elet <= 0){ 
				clearInterval(repeater);
				document.getElementById("eredmeny").innerHTML="Jatekos vesztett";
				id="g"+szam2;
				document.getElementById(id).style.display = "inherit";
				harceredmeny=2;
				Frissites();
				//vesztett 
				}
			}
		else{ 
		//elkerülte a támadást
		document.getElementById("csata_kiteres").innerHTML="Elkerülted a Támadást!";
		}
	}
	function Elso_kigyo_tamadasa(tamadoero){	
		document.getElementById("csata_kiteres").innerHTML="";
		if(tamadoero > ellenfel_vedettseg){ //megsebezve
			sebzes = Random(max_jatekos,min_sebzes);
			kigyo1_elet -= sebzes;
			document.getElementById("csata_kiteres_e").innerHTML="-"+sebzes;
			document.getElementById("csata_elet_e").innerHTML="Első kígyó életerereje: "+ kigyo1_elet+"<br>Második kígyó életerereje: "+ kigyo2_elet;
			if(kigyo1_elet <= 0 && kigyo2_elet <= 0){ 
				clearInterval(repeater);
				document.getElementById("eredmeny").innerHTML="Jatekos nyert";
				harceredmeny=1;
				Frissites();
				//nyert
			}
		}
		else{ 
		//elkerülte a támadást 
		document.getElementById("csata_kiteres_e").innerHTML="Elkerülte a Támadást!";
		}
	}
	function Masodik_kigyo_tamadasa(tamadoero){	
		document.getElementById("csata_kiteres").innerHTML="";
		if(tamadoero > ellenfel_vedettseg){ //megsebezve
			sebzes = Random(max_jatekos,min_sebzes);
			kigyo2_elet -= sebzes;
			document.getElementById("csata_kiteres_e").innerHTML="-"+sebzes;
			document.getElementById("csata_elet_e").innerHTML="Első kígyó életerereje: "+ kigyo1_elet+"<br>Második kígyó életerereje: "+ kigyo2_elet;
			if(kigyo1_elet <= 0 && kigyo2_elet <= 0){ 
				clearInterval(repeater);
				document.getElementById("eredmeny").innerHTML="Jatekos nyert";
				harceredmeny=1;
				Frissites();
				//nyert
			}
		}
		else{ 
		//elkerülte a támadást 
		document.getElementById("csata_kiteres_e").innerHTML="Elkerülte a Támadást!";
		}
	}
	
	function Kigyok_tamadas(tamadoero){
		document.getElementById("csata_kiteres_e").innerHTML="";
		if(kigyo1_elet>0){
			if(tamadoero > vedettseg){ //megsebezve
				sebzes = Random(max_ellenfel,min_sebzes_e);
				elet -= sebzes;
				document.getElementById("csata_kiteres").innerHTML="-"+sebzes;
				document.getElementById("csata_elet").innerHTML="Életerőd: "+elet;
				if(elet <= 0){ 
					clearInterval(repeater);
					document.getElementById("eredmeny").innerHTML="Jatekos vesztett";
					harceredmeny=2;
					Frissites();
					//vesztett 
				}
			}
			else{ 
			//elkerülte a támadást
			document.getElementById("csata_kiteres").innerHTML="Elkerülted a Támadást!";
			}
		}
		if(elet>0){
			if(kigyo2_elet>0){
				tamadoero = Random(11,2);
				tamadoero += ellenfel_tamadas;
				if(menekules){ tamadoero +=8; }
				if(tamadoero > vedettseg){ //megsebezve
					sebzes = Random(max_ellenfel,min_sebzes_e);
					elet -= sebzes;
					if(kigyo1_elet<=0){
						document.getElementById("csata_kiteres").innerHTML ="-"+sebzes;
					}
					else{
						document.getElementById("csata_kiteres").innerHTML +=", -"+sebzes;
					}
					document.getElementById("csata_elet").innerHTML="Életerőd: "+elet;
					if(elet <= 0){ 
						clearInterval(repeater);
						document.getElementById("eredmeny").innerHTML="Jatekos vesztett";
						harceredmeny=2;
						Frissites();
						//vesztett 
					}
				}
				else{ 
				//elkerülte a támadást
				document.getElementById("csata_kiteres").innerHTML+=", Elkerülted a Támadást!";
				}
			}
		}
	}
	function Kigyok(){
		if(illuzio){
			document.getElementById("eredmeny").innerHTML="A kígyók csak illúziók voltak!";
			illuzio=false;
			clearInterval(repeater);
			harceredmeny=1; //ha elég a győzelem
			Frissites();
		}
		else{
			if(menekules){
				tamadoero = Random(11,2);
				tamadoero += ellenfel_tamadas+8;
				Kigyok_tamadas(tamadoero);
				menekules=false;
				clearInterval(repeater);
				if(elet>0) { 
				document.getElementById("eredmeny").innerHTML="Elfutottál!"; 
				harceredmeny=3;
				}
				else{ harceredmeny=2; }
				Frissites();
			}
			else{
				document.getElementById("csata_elet").innerHTML="Életerőd: "+elet;
				document.getElementById("csata_elet_e").innerHTML="Első kígyó életerereje: "+ kigyo1_elet+"<br>Második kígyó életerereje: "+ kigyo2_elet;
			}
		
			if(kezdes){		//jatekos tamad
				if(kigyo1_elet<=0) { kigyo=false; }
				if(kigyo2_elet<=0) { kigyo=true; }
				if(kigyo){
					tamadoero = Random(11,2);
					tamadoero += tamadas;
					Elso_kigyo_tamadasa(tamadoero);
				}
				else{
					tamadoero = Random(11,2);
					tamadoero += tamadas;	
					Masodik_kigyo_tamadasa(tamadoero);
				}
				kezdes=false;
			}
			else{ 			//ellenfel tamad
				tamadoero = Random(11,2);
				tamadoero += ellenfel_tamadas;
				Kigyok_tamadas(tamadoero);
				kezdes=true;
			}
		}
	}
	function Menekules(){
		menekules=true;
	}
	function Elsokigyo(){
		kigyo=true;
	}
	function Masodikkigyo(){
		kigyo=false;
	}
	function Illuziok(){
		illuzio=true;
	}
	
	function Eltuntet(){
				for(i=1;i<303;i++){
				id="g"+i;
				document.getElementById(id).style.display = "none";
				}
			}