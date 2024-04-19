// document.addEventListener("DOMContentLoaded", function () {
//   const card = document.querySelector(".crm_card");
//   const overlay = document.querySelector(".prompt-overlay");
//   const input = document.querySelector(".prompt-input");
//   const submitButton = document.querySelector("#submitInput");
//   const cancelButton = document.querySelector("#cancelInput"); 

//   card.addEventListener("click", function () {
//     overlay.style.display = "flex";
//     input.focus();
//   });

//   submitButton.addEventListener("click", function () {
//     const userInput = input.value;
//     console.log("User input:", userInput);
//     overlay.style.display = "none";
//     input.value = "";
//   });

//   cancelButton.addEventListener("click", function () { 
//     overlay.style.display = "none";
//     input.value = "";
//   });
// });


// document.addEventListener("DOMContentLoaded", function () {
//   const card2 = document.querySelector(".crm_card2");
//   const overlay2 = document.querySelector(".prompt-overlay2");
//   const input2 = document.querySelector(".prompt-input2");
//   const submitButton2 = document.querySelector("#submitInput2");
//   const cancelButton2 = document.querySelector("#cancelInput2");

//   card2.addEventListener("click", function () {
//     overlay2.style.display = "flex";
//     input2.focus();
//   });

//   submitButton2.addEventListener("click", function () {
//     const userInput2 = input2.value;
//     console.log("User input:", userInput2);
//     overlay2.style.display = "none";
//     input2.value = "";
//   });

//   cancelButton2.addEventListener("click", function () {
//     overlay2.style.display = "none";
//     input2.value = "";
//   });
// });

// // Define JavaScript classes to mirror customer and employee classes in Java
// class Employee {
//   constructor(name, age, position, email) {
//     this.name = name;
//     this.age = age;
//     this.position = position;
//     this.email = email;
//   }
// }

// class Customer {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
// }

// document.addEventListener("DOMContentLoaded", function () {
//   const card = document.querySelector(".crm_card");
//   const overlay = document.querySelector(".prompt-overlay");
//   const input = document.querySelector(".prompt-input");
//   const submitButton = document.querySelector("#submitInput");
//   const cancelButton = document.querySelector("#cancelInput"); 

//   card.addEventListener("click", function () {
//     overlay.style.display = "flex";
//     input.focus();
//   });

//   submitButton.addEventListener("click", function () {
//     const userInput = input.value;
//     console.log("User input:", userInput);
//     overlay.style.display = "none";
//     input.value = "";
//   });

//   cancelButton.addEventListener("click", function () { 
//     overlay.style.display = "none";
//     input.value = "";
//   });
// });


// document.addEventListener("DOMContentLoaded", function () {
//   const card2 = document.querySelector(".crm_card2");
//   const overlay2 = document.querySelector(".prompt-overlay2");
//   const inputName2 = document.querySelector("#userInput2");
//   const inputEmail2 = document.querySelectorAll(".prompt-input2")[1];
//   const submitButton2 = document.querySelector("#submitInput2");
//   const cancelButton2 = document.querySelector("#cancelInput2");

//   const addCardButton = document.querySelector("#addCardButton"); // Assuming there's a button with id "addCardButton"

//   const rightContainer = document.querySelector(".right-container");

//   card2.addEventListener("click", function () {
//     overlay2.style.display = "flex";
//     inputName2.focus();
//   });

//   submitButton2.addEventListener("click", function () {
//     const name = inputName2.value;
//     const email = inputEmail2.value;

//     const customerObj = new Customer(name, email);

//     // Create card HTML
//     const cardHTML = `
//       <div class="card">
//         <h3>Customer</h3>
//         <p>Name: ${customerObj.name}</p>
//         <p>Email: ${customerObj.email}</p>
//       </div>
//     `;

//     // Append card HTML to right container
//     rightContainer.insertAdjacentHTML("beforeend", cardHTML);

//     overlay2.style.display = "none";
//     inputName2.value = "";
//     inputEmail2.value = "";
//   });

//   cancelButton2.addEventListener("click", function () {
//     overlay2.style.display = "none";
//     inputName2.value = "";
//     inputEmail2.value = "";
//   });
// });

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

  card.addEventListener("click", function () {
    overlay.style.display = "flex";
    inputName.focus();
  });

  submitButtonEmployee.addEventListener("click", function () {
    const name = inputName.value;
    const age = inputAge.value;
    const position = inputPosition.value;
    const email = inputEmail.value;

    // Create card HTML for employee
    const cardHTML = `
      <div class="card">
        <h3>Employee</h3>
        <p>Name: ${name}</p>
        <p>Age: ${age}</p>
        <p>Position: ${position}</p>
        <p>Email: ${email}</p>
      </div>
    `;

    // Create a new div for the card and set its HTML content
    const newCard = document.createElement("div");
    newCard.innerHTML = cardHTML;

    // Add card class to the new card element
    newCard.classList.add("card");

    // Append the new card to the right container
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

    // Create card HTML for customer
    const cardHTML = `
      <div class="card">
        <h3>Customer</h3>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
      </div>
    `;

    // Append card HTML to right container
    rightContainer.insertAdjacentHTML("beforeend", cardHTML);

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
