const text = ["DevOps Engineer", "Cloud Engineer", "Terraform Expert"];
let i = 0, j = 0;
let currentText = "";
let isDeleting = false;

function type() {
  currentText = text[i];
  
  if (!isDeleting) {
    document.querySelector(".typing").innerHTML =
      currentText.substring(0, j++);
  } else {
    document.querySelector(".typing").innerHTML =
      currentText.substring(0, j--);
  }

  if (j == currentText.length) isDeleting = true;
  if (j == 0) {
    isDeleting = false;
    i = (i + 1) % text.length;
  }

  setTimeout(type, isDeleting ? 50 : 100);
}

type();