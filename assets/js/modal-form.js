const modal = document.getElementById("modal-overlay");
const openBtn = document.getElementById("open-modal");
const closeBtn = document.querySelector(".close-modal");
const form = document.getElementById("contact-form");
const responseDiv = document.getElementById("form-response");

const savedData = [];

openBtn.addEventListener("click", () => {
    modal.classList.add("active");
    form.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    closeModal();
});

modal.addEventListener("click", e => {
    if (e.target === modal) closeModal();
});

function closeModal() {
    modal.classList.remove("active");
    form.classList.remove("active");
    responseDiv.style.display = "none";
}

form.addEventListener("submit", function (e) {
    e.preventDefault();

    const data = {
        firstName: form["first-name"].value,
        lastName: form["last-name"].value,
        email: form["email"].value,
        phone: form["phone"].value,
        lang: form.querySelector(".lang").value,
        message: form["message"].value
    };

    savedData.push(data);

    console.log("Збережено:", savedData);

    responseDiv.style.display = "flex";
    responseDiv.textContent = `Дякуємо, ${data.firstName} ${data.lastName}! Ваше повідомлення отримано.`;

    form.reset();
});


