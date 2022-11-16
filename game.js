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
let moves = 0;

cards.forEach((card) => {
  randomNumberPosition = Math.floor(Math.random() * images.length);
  let image = document.createElement("img");
  image.src = images[randomNumberPosition];
  images.splice(randomNumberPosition, 1);
  image.setAttribute("class", "hidden");
  card.appendChild(image);

  card.addEventListener("click", function () {
    image.classList.remove("hidden");

    clickedArray.push(this);

    if (clickedArray.length === 2) {
      if (
        clickedArray[0].querySelector("img").getAttribute("src") ===
        clickedArray[1].querySelector("img").getAttribute("src")
      ) {
        clickedArray.forEach((el) => {
          setTimeout(() => {
            el.remove();
          }, 500);
        });

        //FIXME: klikniecie dwa razy na ta sama karte powoduje dopasowanie
        clickedArray.length = 0;
      } else {
        clickedArray.forEach((el) => {
          setTimeout(() => {
            el.querySelector("img").setAttribute("class", "hidden");
          }, 500);
        });
        clickedArray.length = 0;
      }

      moves++;
    }

    document.querySelector(".navbar span").innerHTML = moves;
  });
  console.log(cards);
});
