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

document.addEventListener("DOMContentLoaded", function () {
  const card = document.querySelector(".crm_card2");
  const overlay2 = document.querySelector(".prompt-overlay2");
  const input = document.querySelector(".prompt-input2");
  const submitButton = document.querySelector("#submitInput2");

  card.addEventListener("click", function () {
    overlay2.style.display = "flex"; 
    input.focus();
  });

  submitButton.addEventListener("click", function () {
    const userInput2 = input.value;
    console.log("User input:", userInput2);
    overlay2.style.display = "none"; 
    input.value = ""; 
  });
});
