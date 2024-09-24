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
// Function to send alert for invalid inputs and main function for CARD 1
//
//
document.getElementById("donateNow").addEventListener("click", function () {
  const donateAmount = parseFloat(document.getElementById("inputField1").value);
  const balance = parseFloat(document.getElementById("balance").innerText);
  const sectionBalance = parseFloat(
    document.getElementById("sectionBalance").innerText
  );
  if (
    typeof donateAmount !== "number" ||
    isNaN(donateAmount) ||
    donateAmount <= 0 ||
    donateAmount > balance
  ) {
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

// Function for card 2
//
//
document.getElementById("donateNow2").addEventListener("click", function () {
  const donateAmount = parseFloat(document.getElementById("inputField2").value);
  const balance = parseFloat(document.getElementById("balance").innerText);
  const sectionBalance = parseFloat(
    document.getElementById("sectionBalance2").innerText
  );
  if (
    typeof donateAmount !== "number" ||
    isNaN(donateAmount) ||
    donateAmount <= 0 ||
    donateAmount > balance
  ) {
    alert("Sorry Invalid Format or Donation Amount is more than your Balance");
  } else {
    // Static model appear
    document.getElementById("alert").classList.remove("hidden");
    // Calculation stuffs
    const newBalance = balance - donateAmount;
    const newSectionBalance = sectionBalance + donateAmount;
    document.getElementById("balance").innerText = newBalance;
    document.getElementById("sectionBalance2").innerText = newSectionBalance;
    const title = document.getElementById("title-2").innerText;
    // Transactions History Stuff
    const ajkerDate = new Date();
    const sampleHTML = `<div class="border rounded-lg border-gray-200 p-8">
            <h6 class="text-lg">
              ${donateAmount} Taka is Donated for ${title}
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

//   Function for card 3
//
//
document.getElementById("donateNow3").addEventListener("click", function () {
  const donateAmount = parseFloat(document.getElementById("inputField3").value);
  const balance = parseFloat(document.getElementById("balance").innerText);
  const sectionBalance = parseFloat(
    document.getElementById("sectionBalance3").innerText
  );
  if (
    typeof donateAmount !== "number" ||
    isNaN(donateAmount) ||
    donateAmount <= 0 ||
    donateAmount > balance
  ) {
    return alert(
      "Sorry Invalid Format or Donation Amount is more than your Balance"
    );
  } else {
    // Static model appear
    document.getElementById("alert").classList.remove("hidden");
    // Calculation stuffs
    const newBalance = balance - donateAmount;
    const newSectionBalance = sectionBalance + donateAmount;
    document.getElementById("balance").innerText = newBalance;
    document.getElementById("sectionBalance3").innerText = newSectionBalance;
    const title = document.getElementById("title-3").innerText;
    // Transactions History Stuff
    const ajkerDate = new Date();
    const sampleHTML = `<div class="border rounded-lg border-gray-200 p-8">
            <h6 class="text-lg">
              ${donateAmount} Taka is Donated for ${title}
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
