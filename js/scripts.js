	var micolor = "White";
	var miotrocolor = "Grey";
	var mitercercolor = "Black";
	var escala = 0.5;

	//Dibujo el icono Sobre Mi
	
	var c=document.getElementById("iconosobremi");
	var cxt=c.getContext("2d");

	cxt.fillStyle=(micolor);
	cxt.beginPath();
	cxt.arc(escala*50,escala*25,escala*20,0,Math.PI*2,true);
	cxt.closePath;
	cxt.fill();

	cxt.fillStyle=(micolor);
	cxt.beginPath();
	cxt.arc(escala*50,escala*90,escala*40,Math.PI,Math.PI*2,false);
	cxt.closePath;
	cxt.fill();

	//Dibujo el icono Contacto

	var c=document.getElementById("iconocontacto");
	var cxt=c.getContext("2d");

	cxt.fillStyle=(miotrocolor);
	cxt.beginPath();
	cxt.arc(escala*50-10,escala*25,escala*20,0,Math.PI*2,true);
	cxt.closePath;
	cxt.fill();

	cxt.fillStyle=(miotrocolor);
	cxt.beginPath();
	cxt.arc(escala*50-10,escala*90,escala*40,Math.PI,Math.PI*2,false);
	cxt.closePath;
	cxt.fill();

	cxt.fillStyle=(micolor);
	cxt.beginPath();
	cxt.arc(escala*50+10,escala*25,escala*20,0,Math.PI*2,true);
	cxt.closePath;
	cxt.fill();

	cxt.fillStyle=(micolor);
	cxt.beginPath();
	cxt.arc(escala*50+10,escala*90,escala*40,Math.PI,Math.PI*2,false);
	cxt.closePath;
	cxt.fill();

	//Dibujo el icono Inicio
	
	var c=document.getElementById("iconoinicio");
	var cxt=c.getContext("2d");

	cxt.fillStyle=(micolor);
	cxt.beginPath();
	cxt.arc(escala*50,escala*50,escala*40,0,Math.PI*2,true);
	cxt.closePath;
	cxt.fill();

	cxt.fillStyle=(mitercercolor);
	cxt.beginPath();
	cxt.arc(escala*50,escala*50,escala*30,0,Math.PI*2,true);
	cxt.closePath;
	cxt.fill();
	
	cxt.fillStyle=(micolor);
	cxt.beginPath();
	cxt.arc(escala*50,escala*50,escala*20,0,Math.PI*2,true);
	cxt.closePath;
	cxt.fill();

	//Dibujo el icono Noticias
	
	var c=document.getElementById("icononoticias");
	var cxt=c.getContext("2d");

	cxt.fillStyle=(micolor);
	cxt.beginPath();
	cxt.arc(escala*50,escala*50,escala*20,0,Math.PI*2,true);
	cxt.closePath;
	cxt.fill();

	cxt.fillStyle=(micolor);
	cxt.beginPath();
	cxt.arc(escala*50,escala*50,escala*40,Math.PI,Math.PI*2,false);
	cxt.closePath;
	cxt.fill();
	//fin icono noticias
	
	// script que hace de contador de visitas 
	
	//contador local
	if(localStorage.pagecount){
		localStorage.pagecount = Number(localStorage.pagecount) + 1;
	}
	else{
		localStorage.pagecount = 1;
	}
	//contador de sesion
	if(sessionStorage.pagecount){
		sessionStorage.pagecount = Number(sessionStorage.pagecount) + 1;
	}
	else{
		sessionStorage.pagecount = 1;
	}
	document.getElementById("footer").innerHTML = "Haz visitado mi pagina " + localStorage.pagecount + " veces" + "<br/> En esta sesion has visitado mi pagina " + sessionStorage.pagecount + " veces";
	
	
	