/*
 * Funcionalidad de tu producto
 */

// Puedes hacer uso de la base de datos a través de la variable `data`
console.log(data);

// 

// Creando funcionalidades para overview 
	 
	function overview(){
		//ocultando students 
		var contenedorStudents=document.getElementById("container"); 
		contenedorStudents.classList.remove("show"); 
		contenedorStudents.classList.add("noShow");

		// mostrar o no Overview 
		var containerOverview, 
		containerOverview=document.getElementById("containerOverview"); 
		containerOverview.classList.remove("noShow"); 
		containerOverview.classList.add("show");
		

		// Enrollement 
		var alumnasMatriculadas=document.getElementById("alumnasMatriculadas"); 
		var porcentajeDeserciones=document.getElementById("porcentajeDeserciones"); 
		//numero de estudiantes
		totalDeEstudiantes= data.AQP["2016-2"].students.length; 
		//numero de deserciones
		contadorDeserciones=0
		for (var i=0; i< data.AQP["2016-2"].students.length; i++){
			if (data.AQP["2016-2"].students[i].active == false){
				contadorDeserciones++; 
			}  
		} 
		//Porcentaje de deserciones respecto al total 
		deserciones=((contadorDeserciones*100)/totalDeEstudiantes).toFixed(1);
		
		alumnasMatriculadas.innerHTML=totalDeEstudiantes; 
		porcentajeDeserciones.innerHTML=deserciones;
		
		
		//NPS

	 var promedioNPS=document.getElementById("promedioNPS"); 
	 var promedioPromoters=document.getElementById("promedioPromoters"); 
	 var promedioPassive=document.getElementById("promedioPassive"); 
	 var promedioDetractors=document.getElementById("promedioDetractors"); 
	
	//promoters
	var acumuladoPromoters=0;
	 for(var j=0; j< data.AQP["2016-2"].ratings.length ; j++){
	 	var promoters=data.AQP["2016-2"].ratings[j].nps.promoters; 
	 	acumuladoPromoters+=promoters; 
	 } porcentajePromoters= (acumuladoPromoters/data.AQP["2016-2"].ratings.length).toFixed(1); 
	 promedioPromoters.innerHTML+=" " + porcentajePromoters; 

	 //Passive
	 var acumuladoPassive=0; 
	 for( var k=0; k<data.AQP["2016-2"].ratings.length ; k++){
	 	var passive= data.AQP["2016-2"].ratings[k].nps.passive; 
	 	acumuladoPassive+=passive; 
	 } porcentajePassive= (acumuladoPassive/data.AQP["2016-2"].ratings.length).toFixed(1);
	promedioPassive.innerHTML+= " "+ porcentajePassive; 

	//Detractors 
	var acumuladoDetractors=0; 
	 for( var l=0; l<data.AQP["2016-2"].ratings.length ; l++){
	 	var detractors= data.AQP["2016-2"].ratings[l].nps.detractors; 
	 	acumuladoDetractors+=detractors; 
	 } porcentajeDetractors= (acumuladoDetractors/data.AQP["2016-2"].ratings.length).toFixed(1);
	promedioDetractors.innerHTML+=" "+ porcentajeDetractors;


	//calculando nps promedio
	var acumuladorNPS=0; 
	for ( var m=0 ; m< data.AQP["2016-2"].ratings.length ; m++){
		var numeroPromoters=data.AQP["2016-2"].ratings[m].nps.promoters; 
		var numeroDetractors= data.AQP["2016-2"].ratings[m].nps.detractors;
		var nps= numeroPromoters - numeroDetractors ; 
		acumuladorNPS+=nps; 
	} var porcentajePromedioNPS= (acumuladorNPS/data.AQP["2016-2"].ratings.length).toFixed(1); 
	promedioNPS.innerHTML= porcentajePromedioNPS;


	//Student Satisfaction 
	//creando elementos 
 
	var porcentajeSprintBox=document.getElementById("porcentajeSprintBox"); 
	var parrafoParaPorcentaje=document.getElementById("porcentajePromedioSatisfaccion");

	var acumuladorPorcentajes=0; 
	for (var w=0 ; w< data.AQP["2016-2"].ratings.length; w++){
		var cumple= data.AQP["2016-2"].ratings[w].student.cumple; 
		var supera= data.AQP["2016-2"].ratings[w].student.supera; 
		var sumaSatisfaccion= cumple + supera;

		var porcentPorSprint=document.createElement("p");
		var nodoPorcentajeSprint= document.createTextNode("% sprint " + [w+1] + ": " + sumaSatisfaccion); 
		porcentPorSprint.appendChild(nodoPorcentajeSprint); 
		porcentajeSprintBox.appendChild(porcentPorSprint); 


		acumuladorPorcentajes+=sumaSatisfaccion; 
	} 
	parrafoParaPorcentaje.innerHTML=(acumuladorPorcentajes/data.AQP["2016-2"].ratings.length);


	// Teacher Ratings 
	var notaProfe= document.getElementById("notaProfe"); 

	var sumaNotas=0; 
	for (var v=0; v<data.AQP["2016-2"].ratings.length; v++){
		var notaTeacher=data.AQP["2016-2"].ratings[v].teacher; 
		sumaNotas+= notaTeacher; 
	} 
	notaProfe.innerHTML=(sumaNotas/data.AQP["2016-2"].ratings.length).toFixed(1); 


	// Jedi master Ranting 

	var notaJedi= document.getElementById("notaJedi"); 

	var sumaRatingJedi=0;
	for(var g=0; g<data.AQP["2016-2"].ratings.length; g++){
		var puntajeJedi=data.AQP["2016-2"].ratings[g].jedi; 
		sumaRatingJedi+= puntajeJedi; 
	}
	notaJedi.innerHTML=(sumaRatingJedi/data.AQP["2016-2"].ratings.length).toFixed(1); 


	//achievement 

	var superanMeta=document.getElementById("superanMeta"); 
	var metaRespectoTotal=document.getElementById("metaRespectoTotal"); 

	var acumuladorCumplenMeta=0; 
	var alumnasActivas=0;
	var puntosTech=0;
	var puntosHSE=0;
	//puntos tech y puntos hse 
	for( var n=0 ; n<data.AQP["2016-2"].students.length; n++){
		if (data.AQP["2016-2"].students[n].active == true){
			console.log("alumna numero " + [n] + " activa ? = " + data.AQP["2016-2"].students[n].active)
			alumnasActivas++;
			console.log("numero de alumnas activas: "+ alumnasActivas); 
			for (var m=0; m<data.AQP["2016-2"].students[n].sprints.length; m++){
				puntosTech+=data.AQP["2016-2"].students[n].sprints[m].score.tech; 
				puntosHSE+=data.AQP["2016-2"].students[n].sprints[m].score.hse; 
				console.log("suma todos sus puntajes tecnicos: "+puntosTech); 
				console.log("suma todos los puntajes hse: "+ puntosHSE); 
			}
		var promedioTech=puntosTech/data.AQP["2016-2"].students[n].sprints.length;
		console.log("promedio puntaje tecnico: "+ promedioTech);  
		var promedioHSE=puntosHSE/data.AQP["2016-2"].students[n].sprints.length; 
		console.log("promedio puntaje hse: "+ promedioHSE); 


		if( promedioTech >= 1260 && promedioHSE >= 840){
			acumuladorCumplenMeta++;
			console.log("numero de alumnas que cumplen con la meta: "+ acumuladorCumplenMeta); 
			console.log("----------");  
		}
		}
		puntosTech=0;
		puntosHSE=0;
 }
	superanMeta.innerHTML=acumuladorCumplenMeta; 
	metaRespectoTotal.innerHTML= ((acumuladorCumplenMeta*100)/alumnasActivas).toFixed(1);


}


// Creando funcionalidades para students
	//crear elementos cajas y mas 

	function studentShow(){
		containerOverview=document.getElementById("containerOverview"); 
		containerOverview.classList.remove("show"); 
		containerOverview.classList.add("noShow");
		var container = document.getElementById("container");
		container.classList.remove("noShow"); 
		container.classList.add("show");
	for (var i = 0; i < data.AQP["2016-2"].students.length; i++) {
		var studentBox, photoBox, paraphName, techBox, titleTechBox, lifeBox, titleLifeBox,
		studentBox=document.createElement("div")
		studentBox.classList.add("studentBox"); 
		photoBox=document.createElement("div"); 
		photoBox.classList.add("photoBox"); 
		photoURL=document.createElement("img");
		photoURL.classList.add("photoURL") 
		nameStudent=document.createElement("p"); 
		nameStudent.classList.add("paraphName"); 
		techBox=document.createElement("div"); 
		techBox.classList.add("techBox"); 
		titleTechBox=document.createElement("p"); 
		titleTechBox.classList.add("titleTechBox");
		pointTech=document.createElement("p"); 
		pointTech.classList.add("pointTech");  
		lifeBox=document.createElement("div"); 
		lifeBox.classList.add("lifeBox"); 
		titleLifeBox=document.createElement("p"); 
		titleLifeBox.classList.add("titleLifeBox");
		pointLife=document.createElement("p"); 
		pointLife.classList.add("pointLife"); 

	// dar valores   
	 photoURL.setAttribute("src", data.AQP["2016-2"].students[i].photo);
	 nameStudent.innerHTML= data.AQP["2016-2"].students[i].name;
	 titleTechBox.innerHTML= "Tech Skills"; 
	 titleLifeBox.innerHTML= "Life Skills"; 

	 //calculando el %techSkills 
	 totalPoints=0; 
	 	for (var j=0 ; j<data.AQP["2016-2"].students[i].sprints.length ; j++){
	 	pointSprint= data.AQP["2016-2"].students[i].sprints[j].score.tech;
	 	console.log("puntos por sprint " + [j] + " " + pointSprint)
		totalPoints+=pointSprint
		console.log("total puntos " + totalPoints)
		} percentTechSkills= ((totalPoints*100)/7200).toFixed(3); 
		console.log("porcentaje total " +percentTechSkills + " de tech"); 
	//calculando el %lifeSkills 
		allPoints=0; 
	 	for (var k=0 ; k<data.AQP["2016-2"].students[i].sprints.length ; k++){
	 	pointSprint= data.AQP["2016-2"].students[i].sprints[k].score.hse;
	 	console.log("puntos por sprint " + [k] + " " + pointSprint)
		allPoints+=pointSprint
		console.log("total puntos " + allPoints)
		} percentLifeSkills= ((allPoints*100)/4800).toFixed(3); 
		console.log("porcentaje total " +percentLifeSkills + " de hse "); 

	// asignando puntos a variables 
	pointTech.innerHTML=percentTechSkills; 
	pointLife.innerHTML=percentLifeSkills; 

	//pasando hijos 
	techBox.appendChild(titleTechBox); 
	techBox.appendChild(pointTech); 

	lifeBox.appendChild(titleLifeBox); 
	lifeBox.appendChild(pointLife); 
 	
 	photoBox.appendChild(photoURL); 

 	studentBox.appendChild(photoBox);
	studentBox.appendChild(nameStudent); 
	studentBox.appendChild(techBox); 
	studentBox.appendChild(lifeBox);  

	container.appendChild(studentBox);
}
}


	


	 

// crenado funcionalidades para teachers 

