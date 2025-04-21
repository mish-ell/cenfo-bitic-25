// variables controladores : led y var pueden usara=se 
var panorama, viewer, container, infospot; 

//obtener una referencia al contenedor donde se mostrara la escena 3D 
container = document.querySelector('#container_principal'); 

//cargar la foto 360 : 
panorama = new PANOLENS.ImagePanorama('imagenes/tourmaya.png'); 

//el valor 50 es el radio del infospot 



//crea y agrega el primer infospot --- Maya 1

var infospot1 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
// establecen las coordenadas x, y y z posicion, tridimensional del infospot dentro de la panoramica. Por ejemplo, x = 0, y = 0 y z + -500

infospot1.position.set(131, 21, 500); // (-500 ,125 , -396) (131 ,21 , 500)
//-60 segundos indica que el teexto permanecera hasta que el usuario lo cierra manualmente
infospot1.addHoverText('Maya3', -60);

//permite agregar la apariencia visual del cuadro 
infospot1.element.innerHTML = `
  <div style="background-color: rgba(0, 0, 0, 0.8); border-radius: 5px; width: 280px; color: #fff; padding: 10px; font-size: 14px;">
    <strong>Bienvenido a Acropolis Norte, </strong> uno de los conjuntos arquitectónicos más antiguos y enigmáticos del sitio arqueológico de Tikal.
    <br>
  </div>
`;
panorama.add(infospot1);


//crea y agrega el primer infospot 

var infospot2 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
// establecen las coordenadas x, y y z posicion, tridimensional del infospot dentro de la panoramica. Por ejemplo, x = 0, y = 0 y z + -500

infospot2.position.set(-148, 25, 500); //(-91 ,-6 , 500) (-148 ,25 , 500)
//-60 segundos indica que el teexto permanecera hasta que el usuario lo cierra manualmente
infospot2.addHoverText('Selva Maya', -60);

//

//permite agregar la apariencia visual del cuadro 
infospot2.element.innerHTML = `
  <div style="background-color: rgba(0, 0, 0, 0.8); border-radius: 5px; width: 280px; color: #fff; padding: 10px; font-size: 14px;">
    <strong>Selva Maya, </strong> Asi se llama la gran región forestal que se extiende hasta los vecinos México y Belice. El Parque Nacional Tikal está ubicado en la provincia de Petén, al norte de Guatemala, dentro de esta Selva. 
    <br>
  </div>
`;
panorama.add(infospot2);

//3er infospot

//crea y agrega el primer infospot 

var infospot3 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);

infospot3.position.set(-501, 68, 264); //(-501 ,68 , 264)

infospot3.addHoverText('Curioso sobre la cultura maya ? Te contamos mas de su cultura es este video', -60);

//insertar el reproductor de video de Youtube en el Infospot
infospot3.element.innerHTML = `
    <div class="" style="">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/l9TrHItgNlw?si=b6XBQfZaFOEf_Ehy"></iframe>  
    </div>
`;


panorama.add(infospot3);

//infospot4
var infospot4 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot4.position.set(-500, 102, -78); // (-500 ,102 , -78)
infospot4.addHoverText('Un audio M4A multimedial...', -60);
infospot4.element.innerHTML = `
  <div style="color:#000; border-radius: 5px; padding: 10px; font-size: 14px; width: 200px;">
    <audio controls>
      <source src="audios/Tikal-audio.m4a" type="audio/mp4">
    </audio>
  </div>

`; 

panorama.add(infospot4); 

//infospot5 - Audio 
// Crea y agrega el quinto infospot
var infospot5 = new PANOLENS.Infospot(75, PANOLENS.DataImage.Info);
infospot5.position.set(500, 42, 464); 
infospot5.addHoverText('Templo Jaguar', -60);
infospot5.element.innerHTML = `
  <div style="background-color: rgba(0, 0, 0, 0.8); border-radius: 5px; width: 320px; color: #fff; padding: 10px; font-size: 14px;">
    <strong>Templo I:</strong> Una de las estructuras más emblemáticas del sitio arqueológico de Tikal.<br>
    También conocido como el Templo de Ah Cacao o Templo Jaguar, tiene una imponente altura de 154 pies (47 metros).<br>
    <br>
	    <div style="width: 100%; border-radius: 5px; overflow: hidden;">
      <img src="imagenes/temploI.jpg" alt="Templo I" style="width: 100%; height: auto; display: block;">
    </div>
  </div>
`;

panorama.add(infospot5);


//infospot6  - PDF

var infospot6 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
infospot6.position.set(-74, 38, -500); // (-74 ,38 , -500)

//Agregar texto al hover y poner una posicion diferente al texto
infospot6.addHoverText('Entrar el pdf', 100);

//Creal el contenido del infospot 
infospot6.element.innerHTML = `<div style="background-color: rgba(0, 0, 0, 0.8); border-radius: 5px; width: 320px; color: #fff; padding: 10px; font-size: 14px;"> Entrar al PDF para visualizar el mapa de Tikal
	</div>
`;

// Agregar un evento de clic para abrir el PDF 
infospot6.addEventListener('click', function() {
	//Abrir el PDF en una nueva pestana
	window.open("pdf/Tikal-mapa-turistico.pdf", "_blank");
	
});

panorama.add(infospot6);

//agregar la panoramica al visor con pantalla completa habilitada 
viewer = new PANOLENS.Viewer({
	container: container, 
	output: 'fullscreen', 
	autoHideInfospot: false
});

//crea y agrega el primer infospot --- Maya 1

var infospot7 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
// establecen las coordenadas x, y y z posicion, tridimensional del infospot dentro de la panoramica. Por ejemplo, x = 0, y = 0 y z + -500

infospot7.position.set(499 ,405 , 172); // 
//-60 segundos indica que el teexto permanecera hasta que el usuario lo cierra manualmente
infospot7.addHoverText('Maya3', -60);

//permite agregar la apariencia visual del cuadro 
infospot7.element.innerHTML = `
  <div style="background-color: rgba(0, 0, 0, 0.8); border-radius: 5px; width: 280px; color: #fff; padding: 10px; font-size: 14px;">
  <strong>Explora el majestuoso Templo IV,</strong> la estructura más alta de Tikal, desde donde podrás admirar un amanecer inolvidable sobre la selva maya.
    <br>
  </div>
`;
panorama.add(infospot7);


//infospot8

//crea y agrega el primer infospot --- Maya 1

var infospot8 = new PANOLENS.Infospot(30, PANOLENS.DataImage.Info);
// establecen las coordenadas x, y y z posicion, tridimensional del infospot dentro de la panoramica. Por ejemplo, x = 0, y = 0 y z + -500

infospot8.position.set(-442 ,-182 , 500); // (-442 ,-182 , 500) (131 ,21 , 500)
//-60 segundos indica que el teexto permanecera hasta que el usuario lo cierra manualmente
infospot8.addHoverText('Maya3', -60);

//permite agregar la apariencia visual del cuadro 
infospot8.element.innerHTML = `
  <div style="background-color: rgba(0, 0, 0, 0.8); border-radius: 5px; width: 280px; color: #fff; padding: 10px; font-size: 14px;">
    <strong>Adventura Maya, </strong> se parte de los 120,000 y 180,000 visitantes que llegan a Tikal cada año.
    <br>
  </div>
`;
panorama.add(infospot8);


//infospot9

//crea y agrega el primer infospot --- Maya 1

var infospot9 = new PANOLENS.Infospot(30, PANOLENS.DataImage.Info);
// establecen las coordenadas x, y y z posicion, tridimensional del infospot dentro de la panoramica. Por ejemplo, x = 0, y = 0 y z + -500

infospot9.position.set(-66 ,-130 , 500)
//-60 segundos indica que el teexto permanecera hasta que el usuario lo cierra manualmente
infospot9.addHoverText('Maya3', -60);

//permite agregar la apariencia visual del cuadro 
infospot9.element.innerHTML = `
  <div style="background-color: rgba(0, 0, 0, 0.8); border-radius: 5px; width: 280px; color: #fff; padding: 10px; font-size: 14px;">
   <strong>Descubre las enigmáticas estelas de Tikal,</strong> monumentos de piedra que narran la historia de reyes mayas y sus rituales sagrados.
    <br>
  </div>
`;
panorama.add(infospot9);


//infospot9

//crea y agrega el primer infospot --- Maya 1

var infospot10 = new PANOLENS.Infospot(50, PANOLENS.DataImage.Info);
// establecen las coordenadas x, y y z posicion, tridimensional del infospot dentro de la panoramica. Por ejemplo, x = 0, y = 0 y z + -500

infospot10.position.set(349 ,106 , -500)
//-60 segundos indica que el teexto permanecera hasta que el usuario lo cierra manualmente
infospot10.addHoverText('Horario', -60);

//permite agregar la apariencia visual del cuadro 
infospot10.element.innerHTML = `
<div style="background-color: rgba(0, 0, 0, 0.8); border-radius: 5px; width: 280px; color: #fff; padding: 10px; font-size: 14px;">
  <strong>Horarios del Parque Nacional Tikal:</strong><br><br>
  -Horario regular: 6:00 a.m. a 6:00 p.m.<br>
  -Tour Amanecer: 4:00 a.m. a 6:00 a.m.<br>
  -Tour Atardecer: 6:00 p.m. a 8:00 p.m.<br><br>
</div>
`;

infospot10.addEventListener('click', function() {
  window.open("https://boletos.culturaguate.com/", "_blank");
});


panorama.add(infospot10);

viewer.add(panorama);

