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
		// Enrollment
		var containerOverview, numberStudents, desertionPercent, containerBox, enrollmentBox, totalStudents, dropout, totalDeEstudiantes, contadorDeserciones, porcentajeDeserciones
		containerOverview=document.getElementById("containerOverview"); 
		containerOverview.classList.remove("noShow"); 
		containerOverview.classList.add("show");
		numberStudents= document.createElement("p");
		numberStudents.classList.add("numberOverview"); 
		desertionPercent=document.createElement("p"); 
		enrollmentBox=document.getElementById("enrollement"); 
		totalStudents=document.getElementById("totalStudents"); 
		dropout=document.getElementById("dropout"); 
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
		porcentajeDeserciones=((contadorDeserciones*100)/totalDeEstudiantes).toFixed(1);
		
		//creando nodos de texto 
		nodoPorcentaje=document.createTextNode(porcentajeDeserciones); 
		nodoTotalEstudiantes=document.createTextNode(totalDeEstudiantes); 

		//pasando hijos 
		numberStudents.appendChild(nodoTotalEstudiantes); 
		desertionPercent.appendChild(nodoPorcentaje); 

		enrollmentBox.appendChild(numberStudents); 
		enrollmentBox.appendChild(desertionPercent); 

		containerOverview.appendChild(enrollmentBox);


		//NPS

	//hacer visible la caja 
	var npsBox=document.getElementById("nps"); 
	npsBox.classList.remove("noShow"); 
	npsBox.classList.add("show"); 
	//Crear elementos
	var acumulativeBox, acumulativePercent, promoters, detractors, passive,
	acumulativeBox=document.createElement("div");
	acumulativePercent=document.createElement("p"); 
	promotersDetractors=document.createElement("p"); 


	//calcular el nps por sprint y sacar el promedio; 
	var acumuladoNPS=0;
	var acumuladoPromoters=0;
	var acumuladoPassive=0;
	var acumuladoDetractors=0;
	for (var j=0; j< data.AQP["2016-2"].ratings.length; j++){
	var promoters, detractors, nps, acumuladoNPS, 
	promoters=data.AQP["2016-2"].ratings[j].nps.promoters; 
	acumuladoPromoters+= promoters;
	detractors=data.AQP["2016-2"].ratings[j].nps.detractors;
	acumuladoDetractors+= detractors; 
	passive=data.AQP["2016-2"].ratings[j].nps.passive;
	acumuladoPassive+=passive; 

	nps= promoters - detractors;
	acumuladoNPS += nps; 
	}
	var promedioNPS = acumuladoNPS/data.AQP["2016-2"].ratings.length; 
	var promedioPromoters= acumuladoPromoters/data.AQP["2016-2"].ratings.length; 
	var promedioPassive= acumuladoPassive/data.AQP["2016-2"].ratings.length; 
	var promedioDetractors= acumuladoDetractors/data.AQP["2016-2"].ratings.length; 

	//creando nodo de texto 
	npsNode=document.createTextNode(promedioNPS); 
	promotersDetractors.innerHTML= "% Promoters: " + promedioPromoters +  "<br> % Passive: " + promedioPassive + "<br> % Detractors: " + promedioDetractors; 
	
	//pasando hijos 

	acumulativePercent.appendChild(npsNode);  

	acumulativeBox.appendChild(acumulativePercent); 
	acumulativeBox.appendChild(promotersDetractors); 

	npsBox.appendChild(acumulativeBox);
	containerOverview.appendChild(npsBox); 

}

	//Student Satisfaction 
	

















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

