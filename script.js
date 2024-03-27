console.log("script chargé !");
// Reperer dans le dom comment list
const myError = document.querySelector("#error-message");
const form = document.querySelector("form");
const commentList = document.querySelector("#comment-list");
// recuperer clonecomment cloner
const comment = document.querySelector("#comment-list > div:nth-child(2)");

// creer une fonction pour cloné automatiquement
const cloneComment = (comment, firstname, lastname, message) => {
  const commentClone = comment.cloneNode(true);
  const h3 = commentClone.querySelector(".font-medium, .text-gray-900");
  h3.textContent = `${firstname} ${lastname}`;
  const p = commentClone.querySelector(
    ".prose, .prose-sm, .mt-4, .max-w-none, .text-gray-500"
  );
  p.textContent = message;
  return commentClone;
};

const resetFormInput = () => {
  document.querySelector("#first-name").value = "";
  document.querySelector("#last-name").value = "";
  document.querySelector("#message").value = "";
};

//soumission du form
form.addEventListener("submit", (event) => {
  event.preventDefault();

  // recuperation des valeurs des inputs
  const inputFirstName = document.querySelector("#first-name").value.trim();
  const inputLastName = document.querySelector("#last-name").value.trim();
  const inputMessage = document.querySelector("#message").value.trim();

  // on verifie que les input ne sont pas vide
  if (inputFirstName == "" || inputLastName == "" || inputMessage == "") {
    myError.style.display = "block";
    console.log("un ou plusieurs champs sont vide");
  } else {
    const clone = cloneComment(
      comment,
      inputFirstName,
      inputLastName,
      inputMessage
    );
    // ajout le clone dans le dom
    commentList.appendChild(clone);

    resetFormInput();
    myError.style.display = "none";
    console.log("tout est ok");
  }
});