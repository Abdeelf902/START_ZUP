// Sélectionner tous les boutons qui ouvrent les modals
var modalButtons = document.querySelectorAll("[data-modal]");

// Sélectionner tous les boutons qui ferment les modals
var modalCloses = document.querySelectorAll(".modal-close");

// Ajouter un écouteur d'événement pour chaque bouton d'ouverture
modalButtons.forEach(function (modalButton) {
  modalButton.addEventListener("click", function () {
    // Récupérer l'identifiant du modal associé au bouton
    var modalId = modalButton.getAttribute("data-modal");
    // Sélectionner le modal correspondant
    var modal = document.getElementById(modalId);
    // Ajouter la classe open au modal pour le rendre visible
    modal.classList.add("open");
  });
});

// Ajouter un écouteur d'événement pour chaque bouton de fermeture
modalCloses.forEach(function (modalClose) {
  modalClose.addEventListener("click", function () {
    // Récupérer l'identifiant du modal associé au bouton
    var modalId = modalClose.getAttribute("data-modal-id");
    // Sélectionner le modal correspondant
    var modal = document.getElementById(modalId);
    // Supprimer la classe open du modal pour le rendre invisible
    modal.classList.remove("open");
  });
});
