function validateForm() {
    const name = document.getElementById('name').value;
    const province = document.getElementById('province').value;
    const phone = document.getElementById('phone').value;
    const apples = parseInt(document.getElementById('apples').value, 10);
    const potatoes = parseInt(document.getElementById('potatoes').value, 10);
    const nickname = document.getElementById('nickname').value;

    const errorMessages = [];

    // Validation des données
    if (name.length < 2 || name.length > 100) {
        errorMessages.push("Le nom doit comporter entre 2 et 100 caractères.");
    }

    if (province !== "ontario" && province !== "quebec" && province !== "manitoba") {
        errorMessages.push("La province sélectionnée doit être l'Ontario, le Québec ou le Manitoba.");
    }

    if ((province === "ontario" && !phone.startsWith("613")) ||
        (province === "quebec" && !phone.startsWith("819"))) {
        errorMessages.push("Le numéro de téléphone ne correspond pas à la province sélectionnée.");
    }

    if (apples < 0 || apples > 40) {
        errorMessages.push("Le nombre de pommes doit être compris entre 0 et 40.");
    }

    if (potatoes < 5 || potatoes > 40 || potatoes % 5 !== 0) {
        errorMessages.push("Le nombre de patates doit être un multiple de 5 compris entre 5 et 40.");
    }

    if (potatoes <= apples) {
        errorMessages.push("Il doit y avoir plus de patates que de pommes.");
    }

    if (!nickname.match(/^[A-Z][a-zA-Z0-9!$?]{2,8}$/)) {
        errorMessages.push("Le pseudonyme doit commencer par une majuscule et finir par !, $ ou ?");
    }

    // Afficher les messages d'erreurs
    const errorDiv = document.getElementById('errorMessages');
    errorDiv.innerHTML = "";

    if (errorMessages.length > 0) {
        errorMessages.forEach(message => {
            const p = document.createElement('p');
            p.textContent = message;
            errorDiv.appendChild(p);
        });
    } else {
        errorDiv.innerHTML = '<p>Toutes les données sont validées!</p>';
    }
}