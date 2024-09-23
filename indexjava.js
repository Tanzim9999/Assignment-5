// clicking sections Functions
document.getElementById('donateButton').addEventListener('click',function(){clickSection('donationSection')});
document.getElementById('historyButton').addEventListener('click',function(){clickSection('historySection')});
// button color changing functions
document.getElementById('historyButton').addEventListener('click',function(){buttonColor('historyButton')});
document.getElementById('donateButton').addEventListener('click',function(){buttonColor('donateButton')});
// Function to send alert for invalid inputs
    
document.getElementById('donateNow').addEventListener('click',function(){
    const donateAmount = parseFloat(document.getElementById('inputField1').value)
    const balance = parseFloat(document.getElementById('balance').innerText)
    const sectionBalance = parseFloat(document.getElementById('sectionBalance').innerText)
    if (isNaN(donateAmount) || donateAmount <= 0 || donateAmount > balance ){
        alert ("Sorry Invalid Format or Donation Amount is more than your Balance");}
    else{ 
    const newBalance = balance - donateAmount
    const newSectionBalance = sectionBalance + donateAmount
    document.getElementById('balance').innerText = newBalance;
    document.getElementById('sectionBalance').innerText = newSectionBalance;
}});