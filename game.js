const images = [
	"https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a?w=400&fit=crop&h=200&max-w=200&crop=entropy",
	"https://images.unsplash.com/photo-1574856344991-aaa31b6f4ce3?w=400&fit=crop&h=200&max-w=200&crop=entropy",
	"https://images.unsplash.com/photo-1528825871115-3581a5387919?w=400&fit=crop&h=200&max-w=200&crop=entropy",
	"https://images.unsplash.com/photo-1595475207225-428b62bda831?w=400&fit=crop&h=200&max-w=200&crop=entropy",
	"https://images.unsplash.com/photo-1579613832125-5d34a13ffe2a?w=400&fit=crop&h=200&max-w=200&crop=entropy",
	"https://images.unsplash.com/photo-1574856344991-aaa31b6f4ce3?w=400&fit=crop&h=200&max-w=200&crop=entropy",
	"https://images.unsplash.com/photo-1528825871115-3581a5387919?w=400&fit=crop&h=200&max-w=200&crop=entropy",
	"https://images.unsplash.com/photo-1595475207225-428b62bda831?w=400&fit=crop&h=200&max-w=200&crop=entropy",
];

const cards = document.querySelectorAll(".card");
const clickedArray = [];
const matchArray = [];
let moves = 0;
let matched = 0;

cards.forEach((card) => {
	randomNumberPosition = Math.floor(Math.random() * images.length);
	let image = document.createElement("img");
	image.src = images[randomNumberPosition];
	images.splice(randomNumberPosition, 1);
	image.setAttribute("class", "hidden");
	card.appendChild(image);

	card.addEventListener("click", clickCard);

	function clickCard() {
		image.classList.remove("hidden");
		clickedArray.push(this);

		if (clickedArray.length === 2) {
			isPair =
				clickedArray[0].querySelector("img").getAttribute("src") ===
				clickedArray[1].querySelector("img").getAttribute("src");

			isShapeDoubleClicked =
				clickedArray[0].getAttribute("id") ===
				clickedArray[1].getAttribute("id");

			if (isPair && !isShapeDoubleClicked) {
				clickedArray.forEach((el) => {
					el.classList.add("zoom-card");
					card.removeEventListener("click", el);

					if (!matchArray.includes(el.getAttribute("id"))) {
						matchArray.push(el.getAttribute("id"));
						matched++;
					}
				});

				clickedArray.length = 0;
				moves++;
			} else if (isPair && isShapeDoubleClicked) {
				clickedArray.length = 0;
			} else {
				clickedArray.forEach((el) => {
					el.classList.add("shake-box");

					setTimeout(() => {
						el.querySelector("img").setAttribute("class", "hidden");
						el.classList.remove("shake-box");
					}, 500);
				});

				clickedArray.length = 0;
				moves++;
			}
		}

		document.querySelector(".navbar span").innerHTML = moves;

		setTimeout(() => {
			if (matched === 8) {
				if (alert("You win!")) {
				} else window.location.reload();
			}
		}, 500);
	}
});
