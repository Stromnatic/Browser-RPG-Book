/*----------------------------------------------------- TÖRTÉNET ----------------------------------------------*/
/*----------------------------------------------------- Game over ---------------------------------------------*/
/*-----------fx()-funkció-------------------------------------sx()-script--------------------------------------*/
function Game_Over()
{
	max_magia = magia = max_szerencse = szerencse = max_vedettseg = vedettseg = max_tamadas = tamadas = max_elet = elet = 0;
	
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
/*----------------------------------------------------- 0 ------------------------------------------------------*/

function f0()
{
	//document.getElementById("Start").style.visibility = "hidden";
	document.getElementById("tortenet").innerHTML = "Egy hosszú hadjáratot hagytál magad mögött, melyben zsoldoskapitányként szolgáltál, és ennek fáradalmait kipihenni jöttél Zhedar városába.<br>Egy borongós nap délutánján éppen a jókora, zsúfolt piactéren nézelődsz, amikor egy hangos mennydörgést követően suakadni kezd az eső. Mindenki futva igyekszik fedezékbe húzodni az égi elől. Az árusok is kapkodva szedik össze portékájukat, és te is sietősen nézel körbevalami menedék után. Elsőnek egy apró, csíkos ponyvával borítottsátoron akad meg a tekinteted, melynek bejárata fölé egy kopott falapra jósgömböt mázoltak. Gondolkodás nélkül a sátorhoz futsz, és beugrasz a ponyva védelme alá.<br>Shoa nem jártál még jósnál, hiszen babonás handabandának tartod az egészet. Most mégis erőt vesz rajtad a kiváncsiság, és ha már ide vetődtél, a szűk előtérből az elválasztófüggönyt félrehúzva beóvatoskodsz a sátor belsejébe.<br>Biztosan több réteg ponyvábóláll a sátor, fut át az agyadon, hiszen kint világos nappal van, bent pedig csak egy majd tövig éget vastag gyertya szolgál valamicske gyér fénnyel.<br>Alacsony asztalka áll az egyébként üres helyiség közepén, mellette pedig egy vénséges vén, kopasz, szakáll nélküli öregember üldögélócska rongyokba öltözötten. Fogatlan ínyét kivillantva rád vigyorog, majd csontos karjával biztatóan integet feléd.<br>- Erős vagy, és bölcs! - szólal meg váratlanul az aggastyán. Száraz, recsegő hangja csöppet sem teszi barátságosabbá. - Ülj le, barátom megmondom a jövődet!<br>- Nem érdekel mit hordasz össze, öreg! - válaszolsz kimérten. - Nem akarom megismerni a jövőmet.<br>A vénember mekegésszerű hangon felnevet.<br>- Amit ismerünk, azt az uralmunk alá is hajthatjuk, barátom! Ne félj, neked ingyen jósolok!<br>Megcsóválod a fejed, de asztán - magad sem tudod miért - letelepedsz az öreggel szemben az asztal másik oldalára.<br>- Remek! - húzza mosolyra száját a jós, s azzal egy kis ládikát nyújt feléd, és erőteljesen rád szól: - Nyisd ki!<br>Magadban elmosolyodsz az akaratos hanghordozásról, de azért kinyitod a ládikát. ebben a pillanatban arasznyi, zöld kígyó pattan ki a ládából, és tűhegyes fogati kézfejedbe mélyeszti, majd eltűnik a sátor homályában. Szemed elkerekedik a rémülettől, mert rögtön megismered ezt az alattomos hüllőt. A kígyó különös mérge csak egy hét múlva fejti ki hatását, addig a megmart áldozat mit sem sejtve éli világát.<br>- Úgy látom, ismered a kígyót! - vihog az öreg. - Így azt is tudod, hogy egy hét múlva összeesel, és meghalsz.<br>Tűrhetetlen düh kerít hatalmába, de elhatározod, hogy az öregembert magad elé küldöd a másvilágra. Ő azonban felemeli a karját, és így szól:<br>- Lassan a testel barátom! Tudok neked ellenmérget adni!<br>- Ennek a kígyónak a mérge ellen nincs orvosság! - kiáltod haraggal.<br>- Sokáig nem is volt, de mivel én varázsló vagyok, hosszú kutatás után megtaláltam. Ha szolgálatomba állsz, adok belőle jó szivvel.<br>Bár fogaid csikorognak az inulattól, leengeded a karod.<br>- Mit kell tennem? - kérdezed.<br>- Szerezz nekem egy ősi varázsszert, melynek neve: Sárkány vére. Már évek óta kutatok utána, és már nincs messze a siker. Ám én vén vagyok, nem kelhetek útra. Egy erős harcosra van szükség, aki halált megvetően képes befejezni a kutatást.<br>- Hol találom meg, amit kívánsz?<br>- Menj ki a temetőbe, és a nemes d'Yr család kriptájának lehtátsó termében találsz hátom falfestményt. Ezek a dimenziókapuk, amelyeken átlépve arra a helyre jutsz, amit a festmény ábrázol. Valamelyik festmény világában található egy ajtó, amelyet három kulcs nyit. Előbb tehát a kulcsokat kell megszerezned, aztán találd meg az ajtót. Az jató mögött van egy edény, amely tartalmazza a Sárkány Vérét.<br>Az öreg ekkor egy nyakéket nyújt át neked, amely egy szárnyakból font kört ábrázol.<br>- Ezt akaszd a nyakadba, szkséged lesz rá! Ha a festmények világából vissza a akrsz térni a kripta termébe, szorítsd meg ezt az amulettet, és koncentrálj a teremre! Devigyázz! Kétszer nem léphetsz be ugyanabba a festménybe, mert az amulett ereje csak három visszaútra elegendő. Ha elhozod a Sárkány Vérét, megkapod az ellenmérget, és mindazokat a dolgokat megtarthatod, amiket útközben összeszedsz.<br>Mérgesen taszítod hüvelyébe a pengéd. Átveszed az öregtől a talizmánt, a nyakadba akasztod, és útnak indulsz.<br>- Egy dolgot mondok neked, vénember! - fordulsz vissza az ajtóból. - Ha visszatérek, és kiderül, hogy becsaptál, azt fogod kívánni, bár meg se születtél volna.<br>Odakinn már elállt az eső, és hét ágra süt a nap. Szállásodra térsz, és összeszeded a holmidat. Három napi élelmet vásárolsz, és egy kulacs vizet is az iszákodba süllyesztesz. Magadhoz veszel tizenöt aranyat, bízva abban, hogy ez elég lesz az út költségeire.<br>Már alkonyodik mire a temetőbe érsz. Nem esik nehezedre, hogy a d'Yr család kriptáját megtaláld, mivel ez a legnagyobb ilyen épület. Körülnézel, és mivel senkit sem látsz, levered a lakatot az ajtóról, és belépsz a félhomályba. <br><button id='enged' onclick='s0()'> Elolvastam </button>";
	document.getElementById("Start").style.display = "none";
}
function s0()
{	
	document.getElementById("enged").style.display = "none";
	/*	
	felszerelesitargyak[i] = "Visszatérés Amulettje"
	felszerelesitargyak[i+1] = "Három napi élelem"
	felszerelesitargyak[i+2] = "Egy kulacs víz"
	var arany = 0;
	arany += 15;
	*/
	//document.getElementById("tortenet").innerHTML += "<button id='enged' onclick='f24()'> Lapozz a 24-re! </button>"; 
	document.getElementById("g24").style.display = "inherit";
}
/*----------------------------------------------------- 1 ------------------------------------------------------*/
function f1()
{
	document.getElementById("tortenet").innerHTML = "Megragadod a kopogtatót, és határozott mozdulatokkal megveregeted vele az ajtót. Tompa döndülés hullámzik végig az épületen, <br>de nem történik semmi. Vársz egy darabig, és már újra a karikáért nyúlnál, de ekkor csoszogó lépteket hallasz közeledni, majd kinyílik az ajtó.Egy tíz év körüli legényke áll előtted, aki egy jókora hétágú gyertyatartót cipel magával, <br>amelyben azonban csak egyetlen gyertya ég. A kisfiú csupán vászontunikát visel, melyet egyszerű kötéllel fog össze a derekán.<br>- A kastély urát keresem! - mondod a kisfiúnak.<br>- Úrnőm még ébren van - válaszol a legényke szokatlanul mély hangon. - Jöjj velem, kérlek, és elvezetlek hozzá!<br>Köszönetet mondasz és követed a fiúcskát a kestély belsejébe.";
	document.getElementById("g1").style.display = "none";
	document.getElementById("g161").style.display = "inherit";
}

/*----------------------------------------------------- 2 ------------------------------------------------------*/
function f2()
{
	document.getElementById("tortenet").innerHTML = "Rossz ötlet volt megtámadni a lényt! Túlságosan erős, és meg sem tudod igazán sebezni,<br> míg ő ocsmány érintésével gond nélkül leszívja minden életerődet.<br><b>Kalandod véget ért!</b>";
	Game_Over();
	document.getElementById("g2").style.display = "none";
}
/*----------------------------------------------------- 3 ------------------------------------------------------*/
function f3()
{
	document.getElementById("tortenet").innerHTML = "Már harc közben is úgy tűnt neked, mintha számtalan árny suhanna el rendkívüli sebességgel a démon mellett.<br>Amikor az utolsó is eltűnik a fényben, hangos örömujjongást hallasz, mire a szörny felhördül, és döhödten utánuk veti magát,<br>veled pedig nem törődik tovább.<br>Amint a démon eltűnik a vakító fényben, amilyen gyorsan csak a lábad bírja, nekivágsz a lépcsősornak, amely a felső világba vezet. <br>Alaposan elfáradsz, mire a megszámlálhatatlan lépcsőfok tetejére érsz. Bár tartottál attól, hogy a Kapuőr utánad jön, <br>szerencsére nem hagyta el az őrhelyét.<br>A felszínre érve szusszansz egy nagyot, és elindulsz, hogy megkeresd a kulcsot a csillaggal jelölt kő mögött."
	document.getElementById("g3").style.display = "none";
	document.getElementById("g209").style.display = "inherit";
}
/*----------------------------------------------------- 4 ------------------------------------------------------*/
function f4()
{	
	document.getElementById("tortenet").innerHTML = "Sem időd, sem kedved nincs összetűzésbe keveredni senkivel, ezért épp ellenkező irányba indulsz el.<br>Jó ideig bandukolsz a pusztában, és ez meglehetősen fárasztó, hiszen a lábad néhol bokáig süllyed a homokba, és a nap is kegyetlenül tűz."
	s4();
	document.getElementById("g4").style.display = "none";
	document.getElementById("g193").style.display = "inherit";
}
function s4()
{
	for(i=0; i<targyak.length; i++)
	{
		if(targyak[i] == "gkulacs")
		{
			document.getElementById("tortenet").innerHTML += "<br>Ha van nálad egy kis kulacs, amely gránátalma nagyságú: <button id='gomb261' onclick='ketszazhatvanegy()'> Lapozz a 261-re! </button>"
		}
	}
}
/*----------------------------------------------------- 5 ------------------------------------------------------*/
function f5()
{
	document.getElementById("tortenet").innerHTML = "Megpróbálod meg védeni az életed, de hiába. A parasztok puszta kézzel és botokkal esnek neked, s hiába vágsz le közülük néhányat, <br>ez csak olaj a tűzre. Valaki hátulról a nyakadba ugrik, és leránt a földre, a feldühödött falusiak pedig örjöngve agyonvernek...<br><b>Kalandod véget ért!</b>"
	Game_Over();
	document.getElementById("g5").style.display = "none";
}
/*----------------------------------------------------- 6 ------------------------------------------------------*/
function f6()
{
	document.getElementById("tortenet").innerHTML = "Alig kezdesz el lefelé ereszkedni, amikor a kezed megcsúszik, elveszíted egyensúlyodat, <br>és hatalmasat zuhanva érsz földet. <i> Veszítesz 15 életerőpontot! </i> <br><br>"
	s6();
	document.getElementById("g6").style.display = "none";
}
function s6()
{
	elet -= 15;
	document.getElementById("eletero_valtozott").innerHTML="Életerő: "+elet;
	if(elet <= 0)
	{
		document.getElementById("tortenet").innerHTML += "<br><b>Kalandod véget ért!</b>";
		Game_Over();
	}
	else { document.getElementById("tortenet").innerHTML += "<br> Túlélted a zuhanást, feltápászkodsz, és sajgó tagjaidat tapogatva indulsz utadra. <br> <button id='gomb261' onclick='ketszazhetvenharom()'> Lapozz a 273-re! </button>" }
}
/*----------------------------------------------------- 7 ------------------------------------------------------*/
function f7()
{
	document.getElementById("tortenet").innerHTML = "Kíváncsian folytatod a keresgélést. A kőfülkével szemközt lévő falat is végigtapogatod. <br>Amikor az egyik kőlapot megnyomod, a fal egy része felfelé becsúszik egy vájatba, és újabb kőszobor válik láthatóvá az így  <br>feltárult fülkében. Olyan, mint az előző, és sajnos, ez is életre kél lassan, merev mozdulatokkal. <br>Lelép a talpazatról, és ütésre lendíti buzogányát. Meg kell küzdened vele!<br>" /*harc!*/
	s7();
	document.getElementById("g7").style.display = "none";
}
function s7()
{
	Ellenfelek(1,159,95);
}
/*----------------------------------------------------- 8 ------------------------------------------------------*/
function f8()
{
	document.getElementById("tortenet").innerHTML = "Letörlöd fegyveredről a vért, és szemügyre veszed a helyet, ahol állsz. Legalább 20 méter magas az a kőszál, <br>amin ácsorogsz, tetejének lapos felülete pedig nagyából száz négyzetméter. <br>Falai függőlegesen zuhannak alá.<br>A rukhmadár fészke tulajdonképpen nem más, mint hatalmas kőtömbökből kirakott kör, ami körbefut a kőszál peremén. <br>Rengeteg megszáradt vér és csonttöredék utal a madarak korábbi lakomáira. <br> Tisztában vagy vele, hogy sürgősen le kell jutnod innen, mert ha a felnőtt kukh visszatér, és ott talál <br>döglött fiókája mellett, biztosan nem lesz barátságos veled. <br>Körülnézel, hogy vihetnél-e magaddal valami hasznos dolgot. <br> Mivel semmi használható tárgyat sem találsz, jobb ötleted nem lévén levágod a döglött fióka hatalmas <br> csillogó karmait, és hátizsákodba teszed.<br>";
	/*+1 tárgy: fióka karmai*/
	document.getElementById("tortenet").innerHTML += "Ha megpróbálsz lemászni a sziklafalon, ";
		document.getElementById("g48").style.display = "inherit";
		if(targyak[i]=="grifftoll")
		{
			document.getElementById("tortenet").innerHTML += "<br> Ha van nálad egy griff tolla, és most felhasználod, ";
			document.getElementById("g171").style.display = "inherit";
		}
	document.getElementById("tortenet").innerHTML += "<br> Ha más megoldást választanál, ";
		document.getElementById("g123").style.display = "inherit";
}
/*----------------------------------------------------- 9 ------------------------------------------------------*/
function f9()
{
	document.getElementById("tortenet").innerHTML = "Arra ébredsz, hogy égető fájdalom hasít a ball válladba.<br> Ösztönösen odakapsz, és egy nyílvesszőre tapintasz, amely csak belekarcolt a húsodba, <br>de így is vérző sebet hasított rajtad. (Veszítesz 2 életerő pontot!)<br> Csak ezután jut el a tudatodig a káosz, ami úrrá lett a békésen pihenő táboron. <br>A tüzek lassan kialvó fényében fekete alakokat látsz leözönleni a környező <br>homokdűnékről, és vad kézitusa veszi kezdetét a sivatagi éjszakában.";
	s9();
}
function s9()
{
	elet-=2;
	document.getElementById("eletero_valtozott").innerHTML="Életerő: " + elet;
	if(elet <= 0)
	{
		document.getElementById("tortenet").innerHTML += "<br><b>Kalandod véget ért!</b>";
		Game_Over();
	}
	else{document.getElementById("g208").style.display = "inherit";}
}
/*----------------------------------------------------- 10 -----------------------------------------------------*/
function f10()
{
	document.getElementById("tortenet").innerHTML = "Egyedül maradtál a teremben. Ehyelőre nem fenyeget veszély, odalépsz az állványon pihenő kristálygömbhöz. Óvatosan leveszed a helyéről, és a tarisznyádba teszed. Alig van súlya, állapítod meg, pedig meglehetősen keménynek tűnik. Talán nem törik el a továbbiakban sem.<br> Mivel itt már nincs több keresnivalód, megmarkolod a nyakadban lógó medált, amit kalandod elején az öregembertől kaptál, és erősen próbálod magadban felidézni azt a termet, ahonnan elindultál.<br> A medálból furcsa melegség kezd áradni, és mintha vad forgószél kapna fel. Kavargó, szédítő érzés kerít hatalmába, majd amikor elmúlik, és újra kinyitod a szemed, a három festmény termében találod magad.<br> Mivel elfáradtál, s úgy érzed, itt biztonságban vagy, alszol egy jót, majd ébredés után újabb kalandra indulsz.";
	s10();
}
function s10()
{
	elet = max_elet;
	document.getElementById("eletero_valtozott").innerHTML="Életerő: " + elet;
	document.getElementById("tortenet").innerHTML += "Ha a jégmezőre indulsz, ";
		document.getElementById("g169").style.display = "inherit";
	document.getElementById("tortenet").innerHTML += "Ha a sivatagba mennél, ";
		document.getElementById("g266").style.display = "inherit";
}
/*----------------------------------------------------- 11 -----------------------------------------------------*/
function f11()
{
	document.getElementById("tortenet").innerHTML = "Egy hatalmas, legalább három méter magas, emberforma élőlénnyel találod szmben magad, aki egy meglepő nagyságú husángot lóbál.<br> A fickó hosszúkás, darabos arcvonásai haragot és elszántságot tükröznek.<br> Rajta kívül egy kecskét is látsz odabenn, de azok cask heverésznek a földön. A pásztorral kell tehát megküzdened.";
	s11();
}
function s11()
{
	Ellenfelek(2,300,219);
}
/*----------------------------------------------------- 12 -----------------------------------------------------*/
function f12()
{
	document.getElementById("tortenet").innerHTML = "Biztosan a szédítő utazás meg a sivatagi nap melege teszi, de egyáltalán nem vagy formában. A fióka villámgyors csőrvágásokkal mind súlyosabb sebeket okoz neked, végül egy hatalmas csapással bezúzza a koponyádat. Most már te is az ő tápláléka leszel!<br><b>Kalandod véget ért!</b>";
	Game_Over(); 
}
/*----------------------------------------------------- 13 -----------------------------------------------------*/
function f13()
{
	document.getElementById("tortenet").innerHTML = "kemény harcban sikerül legyőznöd ellenfeledet. Ahogy elvágódik a poros padlón, apró darabokra zúzódik hatalmas kőteste. Megkönnyebbülten ereszted le kardodat, amely itt-ott kicsorbúlt a kődémonnal vívott ütközet során. Ezután jobban körülnézel a folyosón, ahova kerültél.";
	document.getElementById("tortenet").innerHTML += "<br> Ha vizsgálódsz itt egy darabig, ";
		document.getElementById("g235").style.display = "inherit";
	document.getElementById("tortenet").innerHTML += "<br> Ha egyből tovább indulsz, ";
		document.getElementById("g159").style.display = "inherit";
}


/*----------------------------------------------------- 24 -----------------------------------------------------*/
/*PRÓBA*/
function f24()
{
	document.getElementById("tortenet").innerHTML = "Ebbe a kriptába... <br> <center><img src='pictures/Harcos.png' width='178'> </center>";
	document.getElementById("g24").style.display = "none";
	
}
/*----------------------------------------------------- 261 -----------------------------------------------------*/
function f264()
{
	document.getElementById("g264").style.display = "none";
}
function s264()
{
	for(i=0; i<targyak.length; i++)
	{
		if(targyak[i] == "gkulacs")
		{targyak[i] = "";}
	}
}
