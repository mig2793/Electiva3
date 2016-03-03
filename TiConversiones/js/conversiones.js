const liters = 3.7854118;
const gradesConst = 273.15; 
const gradesConst2 = 32;

function galonsToliters(galons){
	var galonsToliters = galons * liters;
	var idGalons = document.getElementById("galons-span");
	idGalons.innerHTML = galons +" galones son: " + galonsToliters + " Litros"
}	

function grades(grades){

	var temperature =0;
	var gradesU;
	var gradesSelected = document.getElementById("select-grades");
	var idGrades = document.getElementById("grades-span");

	if(gradesSelected[gradesSelected.selectedIndex].value == "o1"){

		temperature = ((9*grades)/5)+gradesConst2;
		gradesU = "ºC";

	}else if(gradesSelected[gradesSelected.selectedIndex].value == "o2"){

		temperature = grades + gradesConst;
		gradesU = "ºK";

	}else if(gradesSelected[gradesSelected.selectedIndex].value == "o3"){

		temperature = grades - gradesConst;
		gradesU = "ºC";

	}else if(gradesSelected[gradesSelected.selectedIndex].value == "o4"){

		temperature = ((5*(grades - gradesConst2))/9)+gradesConst;
		gradesU = "ºF";

	}else if(gradesSelected[gradesSelected.selectedIndex].value == "o5"){

		temperature = (5*(grades-gradesConst2))/9;
		gradesU = "ºC";

	}else if(gradesSelected[gradesSelected.selectedIndex].value == "o6"){

		temperature = ((9*(grades - gradesConst))/5)+gradesConst2;
		gradesU = "ºK";

	}

	idGrades.innerHTML = temperature + gradesU;
}	

function gravity(weight){

	var idGravity = document.getElementById("gravity-span");
	var gravityMoon = .17 * 9.8;
	var weightMoon = weight * gravityMoon;
	idGravity.innerHTML = "Su peso en la Luna es: " + weightMoon + " N";
}	
