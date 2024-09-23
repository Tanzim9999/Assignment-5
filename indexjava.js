// clicking sections Functions
document.getElementById('donateButton').addEventListener('click',function(){clickSection('donationSection')});
document.getElementById('historyButton').addEventListener('click',function(){clickSection('historySection')});
// button color changing functions
document.getElementById('historyButton').addEventListener('click',function(){buttonColor('historyButton')});
document.getElementById('donateButton').addEventListener('click',function(){buttonColor('donateButton')});
// Function to send alert for invalid inputs
document.getElementById('donateNow').addEventListener('click',function(){
    const donateAmount = document.getElementById('inputField1').value
    const balance = document.getElementById('balance').innerText
    console.log(balance)
    const sectionBalance = document.getElementById('sectionBalance').innerText
    const newBalance = balance - donateAmount
    const newSectionBalance = sectionBalance + donateAmount
    console.log(newBalance, newSectionBalance);
})