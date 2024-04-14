document.addEventListener("DOMContentLoaded", function () {
  const card = document.querySelector(".crm_card");
  const overlay = document.querySelector(".prompt-overlay");
  const input = document.querySelector(".prompt-input");
  const submitButton = document.querySelector("#submitInput");

  card.addEventListener("click", function () {
    overlay.style.display = "flex"; 
    input.focus();
  });

  submitButton.addEventListener("click", function () {
    const userInput = input.value;
    console.log("User input:", userInput);
    overlay.style.display = "none"; 
    input.value = ""; 
  });
});
