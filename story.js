/*----------------------------------------------------- TÖRTÉNET ----------------------------------------------*/
/*----------------------------------------------------- Game over ---------------------------------------------*/
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
/*----------------------------------------------------- 0 -----------------------------------------------------*/

function nulla()
{
	document.getElementById("Start").style.visibility = "hidden";
	document.getElementById("tortenet").innerHTML = "Egy hosszú hadjáratot hagytál magad mögött, melyben zsoldoskapitányként szolgáltál, és ennek fáradalmait kipihenni jöttél Zhedar városába.<br>Egy borongós nap délutánján éppen a jókora, zsúfolt piactéren nézelődsz, amikor egy hangos mennydörgést követően suakadni kezd az eső. Mindenki futva igyekszik fedezékbe húzodni az égi elől. Az árusok is kapkodva szedik össze portékájukat, és te is sietősen nézel körbevalami menedék után. Elsőnek egy apró, csíkos ponyvával borítottsátoron akad meg a tekinteted, melynek bejárata fölé egy kopott falapra jósgömböt mázoltak. Gondolkodás nélkül a sátorhoz futsz, és beugrasz a ponyva védelme alá.<br>Shoa nem jártál még jósnál, hiszen babonás handabandának tartod az egészet. Most mégis erőt vesz rajtad a kiváncsiság, és ha már ide vetődtél, a szűk előtérből az elválasztófüggönyt félrehúzva beóvatoskodsz a sátor belsejébe.<br>Biztosan több réteg ponyvábóláll a sátor, fut át az agyadon, hiszen kint világos nappal van, bent pedig csak egy majd tövig éget vastag gyertya szolgál valamicske gyér fénnyel.<br>Alacsony asztalka áll az egyébként üres helyiség közepén, mellette pedig egy vénséges vén, kopasz, szakáll nélküli öregember üldögélócska rongyokba öltözötten. Fogatlan ínyét kivillantva rád vigyorog, majd csontos karjával biztatóan integet feléd.<br>- Erős vagy, és bölcs! - szólal meg váratlanul az aggastyán. Száraz, recsegő hangja csöppet sem teszi barátságosabbá. - Ülj le, barátom megmondom a jövődet!<br>- Nem érdekel mit hordasz össze, öreg! - válaszolsz kimérten. - Nem akarom megismerni a jövőmet.<br>A vénember mekegésszerű hangon felnevet.<br>- Amit ismerünk, azt az uralmunk alá is hajthatjuk, barátom! Ne félj, neked ingyen jósolok!<br>Megcsóválod a fejed, de asztán - magad sem tudod miért - letelepedsz az öreggel szemben az asztal másik oldalára.<br>- Remek! - húzza mosolyra száját a jós, s azzal egy kis ládikát nyújt feléd, és erőteljesen rád szól: - Nyisd ki!<br>Magadban elmosolyodsz az akaratos hanghordozásról, de azért kinyitod a ládikát. ebben a pillanatban arasznyi, zöld kígyó pattan ki a ládából, és tűhegyes fogati kézfejedbe mélyeszti, majd eltűnik a sátor homályában. Szemed elkerekedik a rémülettől, mert rögtön megismered ezt az alattomos hüllőt. A kígyó különös mérge csak egy hét múlva fejti ki hatását, addig a megmart áldozat mit sem sejtve éli világát.<br>- Úgy látom, ismered a kígyót! - vihog az öreg. - Így azt is tudod, hogy egy hét múlva összeesel, és meghalsz.<br>Tűrhetetlen düh kerít hatalmába, de elhatározod, hogy az öregembert magad elé küldöd a másvilágra. Ő azonban felemeli a karját, és így szól:<br>- Lassan a testel barátom! Tudok neked ellenmérget adni!<br>- Ennek a kígyónak a mérge ellen nincs orvosság! - kiáltod haraggal.<br>- Sokáig nem is volt, de mivel én varázsló vagyok, hosszú kutatás után megtaláltam. Ha szolgálatomba állsz, adok belőle jó szivvel.<br>Bár fogaid csikorognak az inulattól, leengeded a karod.<br>- Mit kell tennem? - kérdezed.<br>- Szerezz nekem egy ősi varázsszert, melynek neve: Sárkány vére. Már évek óta kutatok utána, és már nincs messze a siker. Ám én vén vagyok, nem kelhetek útra. Egy erős harcosra van szükség, aki halált megvetően képes befejezni a kutatást.<br>- Hol találom meg, amit kívánsz?<br>- Menj ki a temetőbe, és a nemes d'Yr család kriptájának lehtátsó termében találsz hátom falfestményt. Ezek a dimenziókapuk, amelyeken átlépve arra a helyre jutsz, amit a festmény ábrázol. Valamelyik festmény világában található egy ajtó, amelyet három kulcs nyit. Előbb tehát a kulcsokat kell megszerezned, aztán találd meg az ajtót. Az jató mögött van egy edény, amely tartalmazza a Sárkány Vérét.<br>Az öreg ekkor egy nyakéket nyújt át neked, amely egy szárnyakból font kört ábrázol.<br>- Ezt akaszd a nyakadba, szkséged lesz rá! Ha a festmények világából vissza a akrsz térni a kripta termébe, szorítsd meg ezt az amulettet, és koncentrálj a teremre! Devigyázz! Kétszer nem léphetsz be ugyanabba a festménybe, mert az amulett ereje csak három visszaútra elegendő. Ha elhozod a Sárkány Vérét, megkapod az ellenmérget, és mindazokat a dolgokat megtarthatod, amiket útközben összeszedsz.<br>Mérgesen taszítod hüvelyébe a pengéd. Átveszed az öregtől a talizmánt, a nyakadba akasztod, és útnak indulsz.<br>- Egy dolgot mondok neked, vénember! - fordulsz vissza az ajtóból. - Ha visszatérek, és kiderül, hogy becsaptál, azt fogod kívánni, bár meg se születtél volna.<br>Odakinn már elállt az eső, és hét ágra süt a nap. Szállásodra térsz, és összeszeded a holmidat. Három napi élelmet vásárolsz, és egy kulacs vizet is az iszákodba süllyesztesz. Magadhoz veszel tizenöt aranyat, bízva abban, hogy ez elég lesz az út költségeire.<br>Már alkonyodik mire a temetőbe érsz. Nem esik nehezedre, hogy a d'Yr család kriptáját megtaláld, mivel ez a legnagyobb ilyen épület. Körülnézel, és mivel senkit sem látsz, levered a lakatot az ajtóról, és belépsz a félhomályba. <br><button id='enged' onclick='nulla_script()'> Elolvastam </button>";
}
function nulla_script()
{	
	document.getElementById("enged").style.visibility = "hidden";
	/*	
	felszerelesitargyak[i] = "Visszatérés Amulettje"
	felszerelesitargyak[i+1] = "Három napi élelem"
	felszerelesitargyak[i+2] = "Egy kulacs víz"
	var arany = 0;
	arany += 15;
	*/
	document.getElementById("tortenet").innerHTML += "<button id='enged' onclick='huszonnegy()'> Lapozz a 24-re! </button>"; 
}
/*----------------------------------------------------- 1 -----------------------------------------------------*/
function egy()
{
	document.getElementById("tortenet").innerHTML = "Megragadod a kopogtatót, és határozott mozdulatokkal megveregeted vele az ajtót. Tompa döndülés hullámzik végig az épületen, <br>de nem történik semmi. Vársz egy darabig, és már újra a karikáért nyúlnál, de ekkor csoszogó lépteket hallasz közeledni, majd kinyílik az ajtó.Egy tíz év körüli legényke áll előtted, aki egy jókora hétágú gyertyatartót cipel magával, <br>amelyben azonban csak egyetlen gyertya ég. A kisfiú csupán vászontunikát visel, melyet egyszerű kötéllel fog össze a derekán.<br>- A kastély urát keresem! - mondod a kisfiúnak.<br>- Úrnőm még ébren van - válaszol a legényke szokatlanul mély hangon. - Jöjj velem, kérlek, és elvezetlek hozzá!<br>Köszönetet mondasz és követed a fiúcskát a kestély belsejébe.<br><button id='gomb209' onclick='szazhatvanegy()'> Lapozz a 161-re! </button>";
}

/*----------------------------------------------------- 2 -----------------------------------------------------*/
function ketto()
{
	document.getElementById("tortenet").innerHTML = "Rossz ötlet volt megtámadni a lényt! Túlságosan erős, és meg sem tudod igazán sebezni,<br> míg ő ocsmány érintésével gond nélkül leszívja minden életerődet.<br><b>Kalandod véget ért!</b>";
	Game_Over();
}
/*----------------------------------------------------- 3 -----------------------------------------------------*/
function harom()
{
	document.getElementById("tortenet").innerHTML = "Már harc közben is úgy tűnt neked, mintha számtalan árny suhanna el rendkívüli sebességgel a démon mellett.<br>Amikor az utolsó is eltűnik a fényben, hangos örömujjongást hallasz, mire a szörny felhördül, és döhödten utánuk veti magát,<br>veled pedig nem törődik tovább.<br>Amint a démon eltűnik a vakító fényben, amilyen gyorsan csak a lábad bírja, nekivágsz a lépcsősornak, amely a felső világba vezet. <br>Alaposan elfáradsz, mire a megszámlálhatatlan lépcsőfok tetejére érsz. Bár tartottál attól, hogy a Kapuőr utánad jön, <br>szerencsére nem hagyta el az őrhelyét.<br>A felszínre érve szusszansz egy nagyot, és elindulsz, hogy megkeresd a kulcsot a csillaggal jelölt kő mögött.<br><button id='gomb209' onclick='ketszazkilenc()'> Lapozz a 209-re! </button>"
}
/*----------------------------------------------------- 4 -----------------------------------------------------*/
function negy()
{	
	document.getElementById("tortenet").innerHTML = "Sem időd, sem kedved nincs összetűzésbe keveredni senkivel, ezért épp ellenkező irányba indulsz el.<br>Jó ideig bandukolsz a pusztában, és ez meglehetősen fárasztó, hiszen a lábad néhol bokáig süllyed a homokba, és a nap is kegyetlenül tűz. <br><button id='gomb193' onclick='szazkilencvenharom()'> Lapozz a 193-re! </button>"
	negy_script();
}
function negy_script()
{
	for(i=0; i<targyak.length; i++)
	{
		if(targyak[i] == "gkulacs")
		{
			document.getElementById("tortenet").innerHTML += "<br>Ha van nálad egy kis kulacs, amely gránátalma nagyságú: <button id='gomb261' onclick='ketszazhatvanegy()'> Lapozz a 261-re! </button>"
		}
	}
}
/*----------------------------------------------------- 5 -----------------------------------------------------*/
function ot()
{
	document.getElementById("tortenet").innerHTML = "Megpróbálod meg védeni az életed, de hiába. A parasztok puszta kézzel és botokkal esnek neked, s hiába vágsz le közülük néhányat, <br>ez csak olaj a tűzre. Valaki hátulról a nyakadba ugrik, és leránt a földre, a feldühödött falusiak pedig örjöngve agyonvernek...<br><b>Kalandod véget ért!</b>"
	Game_Over();
}
/*----------------------------------------------------- 6 -----------------------------------------------------*/
function hat()
{
	document.getElementById("tortenet").innerHTML = "Alig kezdesz el lefelé ereszkedni, amikor a kezed megcsúszik, elveszíted egyensúlyodat, <br>és hatalmasat zuhanva érsz földet. <i> Veszítesz 15 életerőpontot! </i> <br><br>"
	hat_script();
}
function hat_script()
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
/*----------------------------------------------------- 7 -----------------------------------------------------*/
function het()
{
	document.getElementById("tortenet").innerHTML = "Kíváncsian folytatod a keresgélést. A kőfülkével szemközt lévő falat is végigtapogatod. <br>Amikor az egyik kőlapot megnyomod, a fal egy része felfelé becsúszik egy vájatba, és újabb kőszobor válik láthatóvá az így  <br>feltárult fülkében. Olyan, mint az előző, és sajnos, ez is életre kél lassan, merev mozdulatokkal. <br>Lelép a talpazatról, és ütésre lendíti buzogányát. Meg kell küzdened vele!<br>" /*harc!*/
	het_script();
}
het_script()
{
	Ellenfelek(1);
}
/*INNEN FOLYTATOM!*/
/*----------------------------------------------------- 261 -----------------------------------------------------*/
function ketszazhatvanegy()
{
	
}
function ketszazhatvanegy_script()
{
	for(i=0; i<targyak.length; i++)
	{
		if(targyak[i] == "gkulacs")
		{targyak[i] = "";}
	}
}
/*----------------------------------------------------- 24 -----------------------------------------------------*/
/*PRÓBA*/
function huszonnegy()
{
	document.getElementById("tortenet").innerHTML = "Ebbe a kriptába... <br> <center><img src='pictures/Harcos.png' width='178'> </center>";
	
}