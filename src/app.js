const cardValues = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const suits = [
  { name: "diamond", symbol: "♦", colorClass: "text-danger" },
  { name: "heart", symbol: "♥", colorClass: "text-danger" },
  { name: "spade", symbol: "♠", colorClass: "text-dark" },
  { name: "club", symbol: "♣", colorClass: "text-dark" }
];

function generateRandomCard() {
  const randomSuit = suits[Math.floor(Math.random() * suits.length)];
  const randomValue = cardValues[Math.floor(Math.random() * cardValues.length)];

  const cardContainer = document.getElementById("cardContainer");
  cardContainer.innerHTML = ""; // limpia el contenido anterior

  const card = document.createElement("div");
  card.className = `card bg-white border border-3 rounded-4 shadow ${randomSuit.colorClass}`;
  card.classList.add("position-relative", "mx-2");
  card.style.width = "9rem";
  card.style.height = "13rem";

  card.innerHTML = `
    
    <div class="position-absolute top-0 start-0 m-2 fs-4">${randomSuit.symbol}</div>

    
    <div class="d-flex justify-content-center align-items-center h-100">
      <span class="fs-1">${randomValue}</span>
    </div>

    
    <div class="position-absolute bottom-0 end-0 m-2 fs-4">${randomSuit.symbol}</div>
  `;

  cardContainer.appendChild(card);
}

window.onload = () => {
  generateRandomCard();
  document.getElementById("generateButton").addEventListener("click", generateRandomCard);
};
