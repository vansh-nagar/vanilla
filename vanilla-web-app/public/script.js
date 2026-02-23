const btn = document.getElementById("pingBtn");
const output = document.getElementById("output");

btn.addEventListener("click", async () => {
  output.textContent = "Pinging server...";
  try {
    const res = await fetch("/api/health");
    const data = await res.json();
    output.textContent = JSON.stringify(data, null, 2);
  } catch (err) {
    output.textContent = "Error connecting to server";
  }
});
