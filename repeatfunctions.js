function clickSection(id) {
  document.getElementById("donationSection").classList.add("hidden");
  document.getElementById("historySection").classList.add("hidden");
  document.getElementById(id).classList.remove("hidden");
}

function buttonColor(id) {
  document.getElementById("donateButton").classList.remove("!bg-specialgreen");
  document.getElementById("historyButton").classList.remove("!bg-specialgreen");
  document.getElementById(id).classList.add("!bg-specialgreen");
}
