// Declaring a number variable and letting it's initial value to be 0
let number1 = 0;

// Selecting a button using query selector button
const button1 = document.querySelector("#button1");
// Select where we want to show the number
const display1 = document.querySelector("#display1");

// Add click event listener to the button

button1.addEventListener("click", () => {
    // When click event is listened we increase the variable by 1
    number1++;
    // Display the increased value of the variable
    display1.textContent = number1;
});

// For vaniall we cannot scale it and have to write it multiple times




let number2 = 0;
const button2 = document.querySelector("#button2");
const display2 = document.querySelector("#display2");
button2.addEventListener("click", () => { 
    number2++;
    display2.textContent = number2;
});

