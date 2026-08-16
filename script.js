const bookingModal = document.getElementById("booking-modal");
const closeBooking = document.getElementById("close-booking");
const bookNowButtons = document.querySelectorAll(".book-now");
const destinationSelect = document.getElementById("booking-destination");

if (bookingModal && closeBooking && destinationSelect) {
    bookNowButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const destination = button.dataset.destination;

            if (destination) {
                destinationSelect.value = destination;            
            } else {
                destinationSelect.value = "";
            }

            bookingModal.classList.add("active");
        });
    });

    closeBooking.addEventListener("click", function () {
        bookingModal.classList.remove("active");
    });

    bookingModal.addEventListener("click", function (event) {
        if (event.target === bookingModal) {
            bookingModal.classList.remove("active");
        }
    });
}

// -------------- BOOKING FORM.
const bookingForm = document.getElementById("booking-form");
if (bookingForm) {
    bookingForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const name = document.getElementById("booking-name").value.trim();
        const destination = document.getElementById("booking-destination").value;
        const date = document.getElementById("booking-date").value;
        const guests = document.getElementById("booking-guests").value;
        const message = document.getElementById("booking-message");

        if (!name || !destination || !date || !guests) {
            message.textContent = "Please fill in all fields.";
            message.style.display = "block";
            return;
        }

        message.textContent = `Thank you ${name}, your booking to ${destination} is confirmed!`;    
        message.style.display = "block";

    bookingForm.reset();
    });
}

// -------------- CONTACT FORM.
const contactForm = document.getElementById("contactForm");
const contactConfirmation = document.getElementById("contactConfirmation");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        if (!contactForm.checkValidity()) {
            contactForm.reportValidity();
            return;
        }
        
        contactConfirmation.style.display = "block";
        contactForm.reset();
    });
}

// -------------- PART 4 DEBUGGING TASK - ANSWER.
// answer: getElementsById() is a typo. The method is correct, but it should be `getElementById()` instead.
const bookBtn = document.getElementById("bookBtn");

if (bookBtn) {
    bookBtn.onclick = function () {
        alert("Booking Confirmed!");
    };
}
