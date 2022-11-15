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

cards.forEach((card) => {
  randomNumberPosition = Math.floor(Math.random() * images.length);
  let image = document.createElement("img");
  image.src = images[randomNumberPosition];
  images.splice(randomNumberPosition, 1);
  image.setAttribute("class", "hidden");
  card.appendChild(image);

  card.addEventListener("click", function () {
    image.classList.remove("hidden");
  });
});
