//version avec du js natif
var inputs = document.querySelectorAll('.typeCompte');
for (i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('click', function () {
        var id = this.getAttribute('id');
        var divTypeCompte = document.querySelector('.' + id);
        var hiddens = document.querySelectorAll('.hidden');
        for (i = 0; i < hiddens.length; i++) {
            hiddens[i].style.display = 'none';
        }
        divTypeCompte.style.display = 'block';
    });
}

//Jquery
/*$(document).ready(function(){

    $('.typeCompte').click(function() {
        var id = $(this).attr('id');
        $('.hidden').hide();
        $('.' + id).show();
    });

});

*/
