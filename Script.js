function createStars() {
  const container = document.querySelector("body");

  for (let i = 0; i < 1000; i++) {
    const star = document.createElement("div");
    star.className = "star";
    
    star.style.width = "1px";
    star.style.height = "1px";
    star.style.background = "white";
    star.style.position = "absolute";
    
    star.style.top = Math.random() * 1000 + "%";
    star.style.left = Math.random() * 1000 + "%";
    
    container.appendChild(star);
  }
}

createStars();