'use strict';

/**
 * navbar toggle
 */

const overlay = document.querySelector("[data-overlay]");
const navbar = document.querySelector("[data-navbar]");
const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");

const navToggleFunc = function () {
  navToggleBtn.classList.toggle("active");
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
}

navToggleBtn.addEventListener("click", navToggleFunc);
overlay.addEventListener("click", navToggleFunc);

for (let i = 0; i < navbarLinks.length; i++) {
  navbarLinks[i].addEventListener("click", navToggleFunc);
}



/**
 * header active on scroll
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  window.scrollY >= 10 ? header.classList.add("active")
    : header.classList.remove("active");
});

// Check if a user is logged in (you can implement login functionality)
const isLoggedIn = false; // Change this based on your login logic

document.addEventListener("DOMContentLoaded", function () {
  const profileLink = document.getElementById("Profile");

  if (isLoggedIn) {
    // If the user is logged in, show the profile link
    profileLink.style.display = "block";

    // Add a click event listener to the profile link
    profileLink.addEventListener("click", function () {
      // Retrieve user data from local storage (you can replace this with your actual user data)
      const userData = JSON.parse(localStorage.getItem("user"));

      // Display user information in a modal or a separate page
      if (userData) {
        alert(`User Profile:\nName: ${userData.name}\nEmail: ${userData.email}`);
      }
    });
  } else {
    // If the user is not logged in, hide the profile link
    profileLink.style.display = "none";
  }
});
// Add a submit event listener to the booking form
const bookingForm = document.getElementById("booking-form");

if (bookingForm) {
    bookingForm.addEventListener("submit", function (e) {
        e.preventDefault();

        // Get selected date and time
        const bookingDate = document.getElementById("booking-date").value;
        const bookingTime = document.getElementById("booking-time").value;

        // Store booking information in local storage
        const bookingData = {
            date: bookingDate,
            time: bookingTime,
        };

        // You can store multiple bookings in an array in local storage
        const bookings = JSON.parse(localStorage.getItem("bookings")) || [];
        bookings.push(bookingData);
        localStorage.setItem("bookings", JSON.stringify(bookings));

        alert("Booking successful! You will be contacted by the seller.");
    });
}

document.addEventListener("DOMContentLoaded", function () {
  const loginForm = document.getElementById("login-form");
  const errorMessage = document.getElementById("error-message");

  loginForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Get user input
      const email = document.getElementById("email").value;
      const password = document.getElementById("password").value;

      // Perform user authentication (you will replace this with your authentication logic)
      // For demonstration purposes, we'll assume a hardcoded username and password.
      const hardcodedUsername = "user@example.com";
      const hardcodedPassword = "password123";

      if (email === hardcodedUsername && password === hardcodedPassword) {
          // Authentication successful, redirect or perform other actions here
          alert("Login successful!");
      } else {
          // Authentication failed, display an error message
          errorMessage.textContent = "Invalid email or password.";
      }
  });
});



