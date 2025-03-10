function Share() {
    const id = document.getElementById("share-id").value;
    const data = document.getElementById("input-field").value;

    fetch("http://localhost:8000/v1/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ id, data })
    })
    .then(response => response.json())
    .then(result => {
        console.log("Success:", result);
    })
    .catch(error => {
        console.error("Error:", error);
    });

    window.location.href = `http://localhost:8000/v1/${id}`;
}
