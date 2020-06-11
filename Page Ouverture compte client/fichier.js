/*$(document).ready(function(){

    $('.typeCompte').click(function() {
        var id = $(this).attr('id');
        $('.hidden').hide();
        $('.' + id).show();
    });

});*/

var radios = document.querySelectorAll('.typeCompte');
for (i = 0; i < radios.length; i++) {
    radios[i].addEventListener('click', function () {
        var id = this.getAttribute('id');
        var divTypeCompte = document.querySelector('.' + id);
        var hiddens = document.querySelectorAll('.hidden');
        for (i = 0; i < hiddens.length; i++) {
            hiddens[i].style.display = 'none';
        }
        divTypeCompte.style.display = 'block';
        var button_valider = document.querySelector('.button_valider')
        button_valider.style.display = 'block';
    });
}