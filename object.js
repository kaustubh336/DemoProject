function submitForm() {
    const name = document.getElementById('name').value.trim();
    const age = document.getElementById('age').value.trim();
    const city = document.getElementById('city').value.trim();
    const resultDiv = document.getElementById('result');

    if (!name || !age) {
        resultDiv.textContent = "Please enter both name and age.";
        return;
    }


    resultDiv.innerHTML = `
        <b>Name:</b> ${name} <br>
        <b>Age:</b> ${age || 18} <br>
        <b>City:</b> ${city || 'N/A'}
    `;
}
