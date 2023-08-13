const validate = () => {
  let companyNameStr = document.getElementById("companyNameStr");
  let contactNameStr = document.getElementById("contactNameStr");
  let contactNumberStr = document.getElementById("contactNumberStr");
  let chairsQuantityInt = document.getElementById("chairsQuantityInt");

  if (companyNameStr.value === "") {
    alert("Please insert the company's name");
  } else if (contactNameStr.value === "") {
    alert("Please insert the contact's name");
  } else if (contactNumberStr.value === "") {
    alert("Please insert the contact's number");
  }

  if (chairsQuantityInt.value < 1 || chairsQuantityInt > 10) {
    alert("Please enter the number of chairs only 1-10.");
  }
};
