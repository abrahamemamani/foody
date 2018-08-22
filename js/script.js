$("[data-component-name~='page-to-page']").initTo();

/*##
  # Funcion "goto" (al clickear)
  ## */
$('[data-goto-id]').on('click', function(e){
    e.preventDefault();
    goto($(this).attr('data-goto-id'));
});

function goto(link){
    let pos = $(link).offset().top;
    $('html, body').animate({
        scrollTop: pos
    }, 1000);
}