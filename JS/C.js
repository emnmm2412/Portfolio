let form = document.getElementById('formulaire');
let NAME = document.getElementById('Nom');
let Prenom = document.getElementById('katim');
let adresse = document.getElementById('fodeuk');
let NUM = document.getElementById('num');
let MAIL = document.getElementById('mail');

form.addEventListener('submit',function(event){
    event.preventDefault();
    if(NAME.value === "" || Prenom.value === "" || adresse.value === "" || NUM.value === "" || MAIL.value === ""){
        alert("veuiller remplir le champs restant");
    } else{ 
        alert("Enregistrer avec succès");
    } 
})

   

