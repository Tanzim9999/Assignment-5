// clicking sections Functions
document.getElementById("donateButton").addEventListener("click", function () {
  clickSection("donationSection");
});
document.getElementById("historyButton").addEventListener("click", function () {
  clickSection("historySection");
});
// button color changing functions
document.getElementById("historyButton").addEventListener("click", function () {
  buttonColor("historyButton");
});
document.getElementById("donateButton").addEventListener("click", function () {
  buttonColor("donateButton");
});
// Function to send alert for invalid inputs

document.getElementById("donateNow").addEventListener("click", function () {
  const donateAmount = parseFloat(document.getElementById("inputField1").value);
  const balance = parseFloat(document.getElementById("balance").innerText);
  const sectionBalance = parseFloat(
    document.getElementById("sectionBalance").innerText
  );
  if (isNaN(donateAmount) || donateAmount <= 0 || donateAmount > balance) {
    alert("Sorry Invalid Format or Donation Amount is more than your Balance");
  } else {
    // Static model appear
    document.getElementById("alert").classList.remove("hidden");
    // Calculation stuffs
    const newBalance = balance - donateAmount;
    const newSectionBalance = sectionBalance + donateAmount;
    document.getElementById("balance").innerText = newBalance;
    document.getElementById("sectionBalance").innerText = newSectionBalance;
    const title1 = document.getElementById("title-1").innerText;
    // Transactions History Stuff
    const ajkerDate = new Date();
    const sampleHTML = `<div class="border rounded-lg border-gray-200 p-8">
          <h6 class="text-lg">
            ${donateAmount} Taka is Donated for ${title1}
          </h6>
          <br />
          <p class="font-light">
            Date: ${ajkerDate}
          </p>
        </div>`;
    const div = document.createElement("div");
    div.innerHTML = sampleHTML;
    document.getElementById("historySection").appendChild(div);
  }
});

// Function for static modal to close
document.getElementById("closeAlert").addEventListener("click", function () {
  document.getElementById("alert").classList.add("hidden");
});
