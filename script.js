// Imposta la data di fine prevendita
const endDate = new Date("2025-12-31T00:00:00Z");

function updateTimer() {
  const now = new Date();
  const timeLeft = endDate - now;

  if (timeLeft <= 0) {
    document.getElementById("timer").innerHTML = "Prevendita conclusa!";
    return;
  }

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML = `Tempo rimanente: ${days}d ${hours}h ${minutes}m ${seconds}s`;
}

// Funzione per connettere MetaMask
async function connectWallet() {
  if (window.ethereum) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const signer = provider.getSigner();
    const address = await signer.getAddress();
    document.getElementById("walletAddress").innerText = `Wallet connesso: ${address}`;
  } else {
    alert("MetaMask non è installato!");
  }
}

setInterval(updateTimer, 1000);