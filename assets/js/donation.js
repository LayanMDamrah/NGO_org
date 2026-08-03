const donateBtn = document.getElementById("donateBtn");

if (donateBtn) {
    donateBtn.addEventListener("click", function (event) {
        event.preventDefault();

        const donateModal = new bootstrap.Modal(
            document.getElementById("donateModal")
        );

        donateModal.show();
    });
}