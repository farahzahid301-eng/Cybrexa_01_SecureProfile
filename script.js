
document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const submitBtn = document.getElementById("submitBtn");
    const formStatus = document.getElementById("formStatus");

    // Check if the form exists on the current page to avoid null pointer errors
    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {
            // 1. Prevent the default browser reload action
            event.preventDefault();

            // 2. Extract values entered by the user
            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const purpose = document.getElementById("purpose").value;
            const message = document.getElementById("message").value.trim();

            // 3. Simple Client-Side Verification
            if (!name || !email || !purpose || !message) {
                formStatus.style.color = "#ef4444"; // Clean red color for error
                formStatus.textContent = "Please fill in all the fields before sending.";
                return;
            }

            // 4. Update Button State to 'Sending...' (Visual Feedback)
            const originalBtnContent = submitBtn.innerHTML;
            submitBtn.disabled = true;
            submitBtn.style.background = "#0ea5e9";
            submitBtn.innerHTML = 'Sending Message... <i class="fas fa-spinner fa-spin" style="margin-left: 6px;"></i>';
            formStatus.textContent = ""; 

            // 5. Simulate a Server Request timeout (1.5 seconds)
            setTimeout(() => {
                // Console log data for easier debugging and structure checks
                console.log("Form Submitted Successfully:", { name, email, purpose, message });

                // 6. Reset Form Inputs & Button State
                contactForm.reset();
                submitBtn.disabled = false;
                submitBtn.style.background = "#38bdf8";
                submitBtn.innerHTML = originalBtnContent;

                // 7. Show a Clean Student-Friendly Success Notice
                formStatus.style.color = "#22c55e"; // Fresh green color for success
                formStatus.textContent = `Thanks, ${name}! Your message has been sent. I'll get back to you soon.`;

                // Fade out the success alert after 5 seconds
                setTimeout(() => {
                    formStatus.textContent = "";
                }, 5000);

            }, 1500);
        });
    }
});