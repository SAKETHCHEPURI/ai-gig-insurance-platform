let user = null;
let policy = false;
let premium = 0;

function register() {
  const name = document.getElementById("name").value;
  const city = document.getElementById("city").value;

  user = { name, city };
  alert("Registered successfully!");
}

function calculatePremium() {
  let risk = Math.floor(Math.random() * 3);

  if (risk === 0) premium = 29;
  else if (risk === 1) premium = 49;
  else premium = 79;

  document.getElementById("premium").innerText =
    "Premium: ₹" + premium + "/week";
}

function buyPolicy() {
  if (!user) return alert("Register first!");
  if (!premium) return alert("Calculate premium first!");

  policy = true;
  alert("Policy activated!");
}

function simulateRain() {
  if (!policy) return alert("Buy policy first!");

  document.getElementById("status").innerText =
    "🌧️ Heavy rain detected → Claim auto-approved → ₹500 credited";
}