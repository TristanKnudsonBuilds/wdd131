const form = document.querySelector("#eventForm");
const userType = document.querySelector("#userType");
const hiddenField = document.querySelector("#hiddenField");
const dynamicLabel = document.querySelector("#dynamicLabel");
const dynamicInput = document.querySelector("#dynamicInput");
const errors = document.querySelector("#errors");
const ticketInfo = document.querySelector("#ticketInfo");

// Show the hidden field when type changes
userType.addEventListener("change", () => {

    hiddenField.classList.remove("hidden");
    dynamicInput.value = "";

    if (userType.value === "student") {
        dynamicLabel.textContent = "Student I#";
    }

    if (userType.value === "guest") {
        dynamicLabel.textContent = "Access Code";
    }

    if (userType.value === "") {
        hiddenField.classList.add("hidden");
    }
});

form.addEventListener("submit", (event) => {

    event.preventDefault();

    errors.innerHTML = "";
    ticketInfo.innerHTML = "";

    let errorMessages = [];

    const firstName = document.querySelector("#firstName").value.trim();
    const lastName = document.querySelector("#lastName").value.trim();
    const email = document.querySelector("#email").value.trim();
    const eventDate = document.querySelector("#eventDate").value;
    const extraValue = dynamicInput.value.trim();

    // Date validation
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const selectedDate = new Date(eventDate);
    selectedDate.setHours(0, 0, 0, 0);

    if (selectedDate <= today) {
        errorMessages.push("Event date must be after today.");
    }

    // Student validation
    if (userType.value === "student") {

        const studentPattern = /^\d{9}$/;

        if (!studentPattern.test(extraValue)) {
            errorMessages.push("Student I# must be 9 digits");
        }
    }

    // Guest validation
    if (userType.value === "guest") {

        if (extraValue !== "EVENT131") {
            errorMessages.push("Access Code must be EVENT131");
        }
    }

    // Display errors
    if (errorMessages.length > 0) {

        errors.innerHTML = errorMessages
            .map(error => `<p>${error}</p>`)
            .join("");

        return;
    }

    // Success ticket
    ticketInfo.innerHTML = `
        <h2>Ticket Created</h2>
        <p>${firstName} ${lastName}</p>
        <p>${userType.value}</p>
        <p>${eventDate}</p>
    `;
});