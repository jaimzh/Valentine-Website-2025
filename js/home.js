document.addEventListener("DOMContentLoaded", () => {
    const appIcons = document.querySelectorAll(".app-icon");

    appIcons.forEach(icon => {
        icon.addEventListener("click", (event) => {
            event.preventDefault();
            const targetPage = icon.getAttribute("href");
            window.location.href = targetPage; // Redirect to the respective page
        });
    });
});



