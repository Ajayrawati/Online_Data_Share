document.getElementById("copy-btn").addEventListener("click", function () {
    const textToCopy = document.getElementById("main-div").innerText; // Get text

    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            alert("Copied to clipboard! ✅");
        })
        .catch(err => {
            console.error("Failed to copy:", err);
        });
});
