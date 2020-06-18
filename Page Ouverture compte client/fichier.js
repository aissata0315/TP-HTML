/*$(document).ready(function(){

    $('.typeCompte').click(function() {
        var id = $(this).attr('id');
        $('.hidden').hide();
        $('.' + id).show();
    });

});*/

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


