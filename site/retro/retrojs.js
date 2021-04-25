const buttonSBM = document.getElementById('butSuperBomberMan');
const feedBomberMan = document.getElementById('feedSuperBomberMan');
const buttonSMB = document.getElementById('butMarioBros');
const feedMarioBros = document.getElementById('feedSuperMarioBros');
let imageDisplay = false;

console.log(buttonSMB);

buttonSMB.addEventListener('click', () => {

	if (imageDisplay) {

		feedMarioBros.innerHTML = '';
		imageDisplay = false;
	}	else {

			feedMarioBros.innerHTML =	`<img style="width:250px;"src="../../dossier/img/retroimg/nes/superMarioBros.jpg"> <p>date de sorti:1985<br>console: nes,gameboy color,gba<br></p>`
		imageDisplay = true;

	}

});

buttonSBM.addEventListener('click', () => {


	if (imageDisplay) {

		feedBomberMan.innerHTML = '';
		imageDisplay = false;
	}	else {

			feedBomberMan.innerHTML =	` <img style="width: 400px;" src="../../dossier/img/retroimg/snes/superBomberMan.jpg"> <p>date de sortie: jap=28 avril an=1993 eur=20 novembre 1993 <br> console:super nintendo</p>`
		imageDisplay = true;

	}


})