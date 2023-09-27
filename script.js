let titre = document.getElementsByTagName("h1")[0]
titre.innerHTML = "Formulaire <em> Javascript </em>"

let bouton = document.createElement("input")
bouton.setAttribute("type", "reset")
formulaire.appendChild(bouton)

// Fonction pour copier le contenu de formulaire en bas de la page
function copier(){
    let nom = document.getElementById("nom").value
    let p = document.createElement("p")
    p. innerText = nom
    formulaire.appendChild(p)

    let prenom = document.getElementById("prenom").value
    let pr = document.createElement("p")
    pr.innerText = prenom
    formulaire.appendChild(pr)

    let email = document.getElementById("email").value
    let e = document.createElement("p")
    e.innerText = email
    formulaire.appendChild(e)


}

function valider() {

}