
    // Pour selectionner le type de client(particulier ou entreprise)

    var radios1 = document.querySelectorAll('.typeClient');
        for (i = 0; i < radios1.length; i++){
        radios1[i].addEventListener('click',function(){
         var id = this.getAttribute('id');
         console.log(id);
         var formTypeClient = document.querySelector('.'+ id);
         var hiddens = document.querySelectorAll('.hidden');
         for (i = 0; i < hiddens.length; i++) {
            hiddens[i].style.display = 'none';
        }
        formTypeClient.style.display = 'block';
        var hidden1 = document.querySelector('.hidden1');
        hidden1.style.display = 'none';
     })
 }

 // Pour selectionner le type de compte(courant, bloqué, epargne)


var radios = document.querySelectorAll('.typeCompte');
for (i = 0; i < radios.length; i++) {
    radios[i].addEventListener('click', function () {
        var id = this.getAttribute('id');
        var divTypeCompte = document.querySelector('.' + id);
        var champsCompteCourant = document.querySelector('.compte_courant');
        champsCompteCourant.style.display = 'none';
        var champsCompteBloque = document.querySelector('.compte_bloque');
        champsCompteBloque.style.display = 'none';
        divTypeCompte.style.display = 'block';
        var button_valider = document.querySelector('.button_valider')
        button_valider.style.display = 'block';
    });
}


// traitement choix ajouter client entreprise
document.forms['form3'].addEventListener('submit', function(e)
{
    var erreur;
    var inputs = document.querySelectorAll('.ClientEntreprise input');
    console.log(inputs);
    for (i=0;i < inputs.length; i++){
        if (!inputs[i].value){
            erreur = 'Veuillez renseigez tous les champs!';
            break;

        }
    }
    console.log(erreur);
    if (erreur) {
		document.getElementById("erreur").innerHTML = erreur;
        return false;
        
    } else{
       
        document.getElementById("erreur").innerHTML = "";
        alert('Compte creer!');

        var inputs = document.querySelectorAll('.ClientEntreprise input');
        console.log(inputs);
        for (i=0;i < inputs.length; i++){
            inputs[i].value = "";
        }

     }
     
});

// traitement choix ajouter client particulier
document.forms['form2'].addEventListener('submit', function(e)
{
    
    var erreur;
    var inputs = document.querySelectorAll('.clientParticulier input');
    for (i=0;i < inputs.length; i++){
        if (!inputs[i].value){
            erreur = 'Veuillez renseigez tous les champs!';
            break;

        }
    }
    if (erreur) {
		document.getElementById("erreur").innerHTML = erreur;
		return false;
    } else{
       
        document.getElementById("erreur").innerHTML = "";
        alert('Compte creer!');

        var inputs = document.querySelectorAll('.ClientParticulier input');
        for (i=0;i < inputs.length; i++){
            inputs[i].value = "";
        }

     }
});

// Les fonctions de verifications de champs

function surligne(champ, erreur)
{
   if(erreur)
      champ.style.backgroundColor = "#fba";
   else
      champ.style.backgroundColor = "";
}

function verifMail(champ)
{
   var regex = /^[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}\.[a-z]{2,4}$/;
   if(!regex.test(champ.value))
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}

function verifTEL(champ)
{
  var regex = /^(77|78|70|76)[0-9]{7}$/;
    
    if (!regex.test (champ.value))
    {
        surligne(champ, true);
     return false;
    }
    else
    {
        return(false);
    }
}
function verifCNI(champ)
{
   if(champ.value.length < 13 || champ.value.length > 13)
   {
      surligne(champ, true);
      return false;
   }
   else
   {
      surligne(champ, false);
      return true;
   }
}
 



// choix chekhbox avec jquery 
/*$(document).ready(function(){

    $('.typeCompte').click(function() {
        var id = $(this).attr('id');
        $('.hidden').hide();
        $('.' + id).show();
    });

});*/


