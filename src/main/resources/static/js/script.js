document.addEventListener("DOMContentLoaded", function () {
  const card = document.querySelector(".crm_card");
  const overlay = document.querySelector(".prompt-overlay");
  const inputName = document.querySelector("#employeeName");
  const inputAge = document.querySelector("#employeeAge");
  const inputPosition = document.querySelector("#employeePosition");
  const inputEmail = document.querySelector("#employeeEmail");
  const submitButtonEmployee = document.querySelector("#submitEmployee");
  const cancelButtonEmployee = document.querySelector("#cancelEmployee");

  const card2 = document.querySelector(".crm_card2");
  const overlay2 = document.querySelector(".prompt-overlay2");
  const inputName2 = document.querySelector("#customerName");
  const inputEmail2 = document.querySelector("#customerEmail");
  const submitButtonCustomer = document.querySelector("#submitCustomer");
  const cancelButtonCustomer = document.querySelector("#cancelCustomer");

  const rightContainer = document.querySelector(".right-container");
  const rightContainer2 = document.querySelector(".right-container2");

  card.addEventListener("click", function () {
    overlay.style.display = "flex";
    inputName.focus();
  });

  submitButtonEmployee.addEventListener("click", function () {
    const name = inputName.value;
    const age = inputAge.value;
    const position = inputPosition.value;
    const email = inputEmail.value;

    const cardHTML = `
      <div class="card">
        <h3>Employee</h3>
        <p>Name: ${name}</p>
        <p>Age: ${age}</p>
        <p>Position: ${position}</p>
        <p>Email: ${email}</p>
      </div>
    `;

    const newCard = document.createElement("div");
    newCard.innerHTML = cardHTML;

    const newCard2 = document.createElement("div");
    newCard2.innerHTML = cardHTML;

    newCard.classList.add("card");
    newCard2.classList.add("card2");

    rightContainer.appendChild(newCard);

    overlay.style.display = "none";
    inputName.value = "";
    inputAge.value = "";
    inputPosition.value = "";
    inputEmail.value = "";
  });

  cancelButtonEmployee.addEventListener("click", function () {
    overlay.style.display = "none";
    inputName.value = "";
    inputAge.value = "";
    inputPosition.value = "";
    inputEmail.value = "";
  });

  card2.addEventListener("click", function () {
    overlay2.style.display = "flex";
    inputName2.focus();
  });

  submitButtonCustomer.addEventListener("click", function () {
    const name = inputName2.value;
    const email = inputEmail2.value;

    const cardHTML = `
      <div class="card">
        <h3>Customer</h3>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
      </div>
    `;

    rightContainer2.insertAdjacentHTML("beforeend", cardHTML);

    overlay2.style.display = "none";
    inputName2.value = "";
    inputEmail2.value = "";
  });

  cancelButtonCustomer.addEventListener("click", function () {
    overlay2.style.display = "none";
    inputName2.value = "";
    inputEmail2.value = "";
  });
});



// Schedule
document.addEventListener("DOMContentLoaded", function () {
  const card = document.querySelector(".schedule_card");
  const overlay3 = document.querySelector(".prompt-overlay3");
  const input = document.querySelector(".prompt-input3");
  const submitButton = document.querySelector("#submitInput3");

  card.addEventListener("click", function () {
    overlay3.style.display = "flex"; 
    input.focus();
  });

  submitButton.addEventListener("click", function () {
    const userInput3 = input.value;
    console.log("User input:", userInput3);
    overlay3.style.display = "none"; 
    input.value = ""; 
  });
});

function displaySchedule(name, date) {
  const scheduleList = document.getElementById('scheduleList');
  const scheduleItem = document.createElement('div');
  scheduleItem.textContent = `${name} - ${date}`;
  scheduleList.appendChild(scheduleItem);
}

document.addEventListener("DOMContentLoaded", function () {
  const addScheduleButton = document.querySelector('.add-schedule');
  const overlay = document.getElementById('overlay3');
  const cancelButton = document.getElementById('cancelInput');
  const submitButton = document.getElementById('submitInput3');
  const card = document.querySelector(".schedule_card");
  const input = document.querySelector(".prompt-input3");

  card.addEventListener("click", function () {
    overlay.style.display = "flex"; 
    input.focus();
  });

  cancelButton.addEventListener('click', function() {
      overlay.style.display = 'none';
  });

  submitButton.addEventListener('click', function() {
      const name = document.getElementById('userInput3').value;
      const date = document.getElementById('schedule-date').value;

      // Display the schedule
      displaySchedule(name, date);

      // Clear input fields
      document.getElementById('userInput3').value = '';
      document.getElementById('schedule-date').value = '';

      overlay.style.display = 'none';
  });
});

function displaySchedule(name, date) {
  const scheduleList = document.getElementById('scheduleList');
  const scheduleItem = document.createElement('div');
  scheduleItem.textContent = `${name} - ${date}`;
  scheduleList.appendChild(scheduleItem);
}
