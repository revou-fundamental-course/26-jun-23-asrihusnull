/* ============================== FORM VALIDATION ============================== */

const fnameInput = document.getElementById("name");
const femailAddressInput = document.getElementById("email");
const fphoneNumberInput = document.getElementById("phonenumber");
const fmessageInput = document.getElementById("message");
const submitButtonInput = document.getElementById("submitButton");

submitButton.addEventListener ("click", function(event){
    event.preventDefault()
    const fnameValue = fnameInput.value
    const femailAddressValue = femailAddressInput.value
    const fphoneNumbervalue = fphoneNumberInput.value
    const fmessageValue = fmessageInput.value  
    formValidation(fnameValue, femailAddressValue, fphoneNumbervalue, fmessageValue) 
    
})

function formValidation(fname, femail, fphone, fmessage){
    if (fname == "") {
        alert ("Name is required!")
        return false
    }

    if (femail == "") {
        alert ("Email is required!")
        return false
    }

    if (fphone == "") {
        alert ("Phone number is required!")
        return false
    }

    if (fmessage == "") {
        alert ("Messages is required!")
        return false
    }

    if (fname == "" || femail == "" || fphone == "" || fmessage == "") {
        alert ("No blank form allowed!");
        return false;
    } else { 
        alert ("Success! Your data has been send.");
        location.reload();
    }
    
    setSenderUI(fname, femail, fphone, fmessage);

    return false;
}


/* ============================== BANNER SLIDE ============================== */

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("slides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 5000);
}
