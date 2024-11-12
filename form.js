const form = document.querySelector("#infoForm");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const dob = document.querySelector("#dob");
const gender = document.querySelector("#gender");
const bio = document.querySelector("#bio");
const file = document.querySelector("#file");
const displayDetails = document.querySelector("#displayDetails");

form.addEventListener("submit", function(event) {
    event.preventDefault(); 
        
    displayDetails.innerHTML = 
        `Name: ${name.value} <br>
         Email: ${email.value} <br>
         Password: ${password.value} <br>
         Date of Birth: ${dob.value} <br>
         Gender: ${gender.value} <br>
         Bio: ${bio.value} <br>
         File: ${file.value}`;
    });