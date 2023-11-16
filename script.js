let rate_1 = document.querySelector(".rate-1");
let rate_2 = document.querySelector(".rate-2");
let rate_3 = document.querySelector(".rate-3");
let rate_4 = document.querySelector(".rate-4");
let rate_5 = document.querySelector(".rate-5");
let rateResult = document.querySelector(".rate");
let submitBtn = document.getElementById("submit");
let resultPage = document.querySelector(".rate-page");
let resultRate = document.querySelector(".rate-result");
rate_1.addEventListener("click", (event) => {
 event.preventDefault();
 rate_1.classList.toggle("active");
});
rate_2.addEventListener("click", (event) => {
 event.preventDefault();
 rate_2.classList.toggle("active");
});
rate_3.addEventListener("click", (event) => {
 event.preventDefault();
 rate_3.classList.toggle("active");
});
rate_4.addEventListener("click", (event) => {
 event.preventDefault();
 rate_4.classList.toggle("active");
});
rate_5.addEventListener("click", (event) => {
 event.preventDefault();
 rate_5.classList.toggle("active");
});
submitBtn.addEventListener("click", (event) => {
 event.preventDefault();

 let rateItems = [rate_1, rate_2, rate_3, rate_4, rate_5];
 let rateValue = "";
 let rateCount = 0;

 for (let i = 0; i < rateItems.length; i++) {
  if (rateItems[i].classList.contains("active")) {
   rateValue = rateItems[i].textContent;
   rateResult.textContent = rateValue;
   rateCount++;
  }
 }
 if (rateCount > 1) {
  alert("Select 1 only.");
 } else if (!rateValue) {
  alert("Please select ratings");
 } else {
  resultPage.classList.add("result");
  resultRate.classList.add("open");
 }
});
