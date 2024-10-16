/* Sélectionner les éléments HTML */
let container = document.querySelector(".container");
let btn = document.querySelector(".start_btn");
let scoreContainer = document.querySelector(".score");
let timeContainer = document.querySelector(".time");

btn.onclick = function () {
	let score = 0;
	let time = 10;
	container.innerHTML = "";

	let interval = setInterval(function showTarget() {
		/* Créer la cible */
		let target = document.createElement("img");
		target.id = "target";
		target.src = "silly.png";
		container.appendChild(target);
		target.style.top = Math.random() * (500 - target.offsetHeight) + 'px';
		target.style.left = Math.random() * (600 - target.offsetWidth) + 'px';

		/* Faire disparaitre la cible */
		setTimeout(function () {
			target.remove();
		}, 2000)

		/* Quand on clique sur la target */
		target.onclick = function () {
			score += 1;
			target.style.display = "none";
		}
		time -= 1;

		/* Afficher les infos */
		scoreContainer.innerHTML = `Score : ${score}`;
		timeContainer.innerHTML = `Temps : ${time}`;

		/* Quitter le jeu */
		if (time == 0) {
			clearInterval(interval);
			container.innerHTML = "Jeu terminé";
		}
	}, 1000);
}