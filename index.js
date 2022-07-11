//namespace shaker
var Shaker = (() => {
  var self = {};

  //Methode public car nous pouvons l'appeler de l'extérieur
  //Structure appeler le module parttern
  self.init = () => {

    form = document.querySelector('.form');

    const nameError = document.getElementById('name-error');
    const telError = document.getElementById('tel-error');
    const emailError = document.getElementById('email-error');
    const messageError = document.getElementById('message-error');
    const submitError = document.getElementById('submit-error');


    form.elements['name'].onkeyup = function() {
      validateName()
    }
    form.elements['tel'].onkeyup = function() {
      validateTel()
    }
    form.elements['email'].onkeyup = function() {
      validateEmail()
    }
    form.elements['message'].onkeyup = function() {
      validateMessage()
    }

    function validateName() {
      targetVal = form.elements['name'].value;

      // si la longueur de la valeur est de 0
      if(targetVal.length == 0) {
        nameError.innerHTML = 'Nom est requis';
        return false;
      }

      // si la valeur ne match pas avec la regex
      if(!targetVal.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML = 'Nom complet';
        return false;
      } 

      nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
      return true;
    }

    function validateTel() {
      targetVal = form.elements['tel'].value;

      if(targetVal.length == 0) {
        telError.innerHTML = "numéro de téléphone requis";
        return false;
      }

      if(targetVal.length !== 10) {
        telError.innerHTML = "10 chiffres";
        return false;
      }

      if(!targetVal.match(/^[0-9]{10}$/)) {
        telError.innerHTML = "Des chiffres s'il vous plait";
        return false;
      }

      telError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
      return true;
    }

    function validateEmail() {
      targetVal = form.elements['email'].value;

      if (targetVal.length == 0) {
        emailError.innerHTML = 'Email requis';
        return false;
      }

      if(!targetVal.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        emailError.innerHTML = 'Email invalid';
        return false;
      }

      emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
      return true;
    }

    function validateMessage() {
      targetVal = form.elements['message'].value;

      var required = 30;
      var left = required - targetVal.length;

      if(left > 0 ) {
        messageError.innerHTML = left + ' caractères requis'
        return false;
      }

      messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
      return true;
    }
    
    form.onsubmit = function() {
      if(!validateName() || !validateTel() || !validateEmail() || !validateMessage()) {
        submitError.style.display ='block';
        submitError.innerHTML = 'veuillez corriger ces erreurs pour soumettre';
        setTimeout(function(){ submitError.style.display = 'none'; }, 3000)
        return false
      }
    }
  }
  
    return self;
  })(); //closure qui s'appelle elle même ()
  
  
  Shaker.init();