// Criar folhas caindo
function createLeaves() {
  const leavesContainer = document.getElementById("leaves-container");
  const colors = ["#e39645", "#dc6546", "#8e2c2c", "#f5d372", "#3c2c1d"];
  const leafTypes = ["🍁", "🍂", "🥮"];

  for (let i = 0; i < 30; i++) {
    const leaf = document.createElement("div");
    leaf.classList.add("leaf");
    const leafType = leafTypes[Math.floor(Math.random() * leafTypes.length)];
    leaf.innerHTML = leafType;
    leaf.style.fontSize = Math.random() * 20 + 15 + "px";
    leaf.style.color = colors[Math.floor(Math.random() * colors.length)];
    leaf.style.left = Math.random() * 100 + "vw";
    leaf.style.animationDuration = Math.random() * 5 + 5 + "s";
    leaf.style.animationDelay = Math.random() * 5 + "s";
    leavesContainer.appendChild(leaf);
  }
}

function personalizeMessage() {
  const urlParams = new URLSearchParams(window.location.search);
  const friendName = urlParams.get("nome") || "Maria";
  const myName = urlParams.get("de") || "Ana";
  document.body.innerHTML = document.body.innerHTML.replace(
    /Maria/g,
    friendName
  );
  document.body.innerHTML = document.body.innerHTML.replace(/Ana/g, myName);
}

window.onload = function () {
  personalizeMessage();
  createLeaves();
};
