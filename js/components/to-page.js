/*  ****************************************************************
    * Última actualización: 15/08/2018
    * Descripción: Plugin jQuery para pasar de contenido a contenido
    * Fecha de creación: 15/08/2018
    * Autor: Abraham Mamani
    ****************************************************************
*/

(function($){
    const __MY_CONTENT_ID__     = 'data-content-id',
          __MY_CLASS_ACTIVE__   = 'active',
          __MY_CLASS_SHOW__     = 'is-shown',
          __MY_CLASS_HIDE__     = 'is-hidden';

    $.fn.initTo = function(){
        $(this).each(function(){
            let __selectors = $(this).find('['+ __MY_CONTENT_ID__ +']');
            $(this).selectorsInitializer(__selectors);
            $(this).contentsInitializer(__selectors);
            $(this).execute(__selectors);
        })
    }
    $.fn.execute = function(__selectors){
        $(this).on('click', function(e){
            if($(e.target).attr(__MY_CONTENT_ID__))
                $(this).state(e, __selectors);
        })
    }
    $.fn.state = function(e, __selectors){
        $(this).selectorStateCurrent(__selectors);
        $(this).selectorStateClicked(e);
    }
    //### Funciones extras ###
    $.fn.selectorStateCurrent = function(__selectors){ //Cambia el estado del selector actual
        __selectors.each(function(){
            let contentID;
            if($(this).hasClass(__MY_CLASS_ACTIVE__)){
                contentID = $(this).attr(__MY_CONTENT_ID__)
                $(contentID)
                    .removeClass(__MY_CLASS_SHOW__)
                    .addClass(__MY_CLASS_HIDE__)
                $(this).removeClass(__MY_CLASS_ACTIVE__)
            }
        })
    }
    $.fn.selectorStateClicked = function(e){ //Cambia el estado del selector clickeado
        $(e.target).addClass(__MY_CLASS_ACTIVE__)
        let item = $(e.target).attr(__MY_CONTENT_ID__)
        $(item)
            .removeClass(__MY_CLASS_HIDE__)
            .addClass(__MY_CLASS_SHOW__)
    }
    $.fn.contentsInitializer = function(__selectors){ //Oculta los contenidos excepto el primero
        __selectors.not(':eq(0)').each(function(){
            let contentID = $(this).attr(__MY_CONTENT_ID__);
            $(contentID).addClass(__MY_CLASS_HIDE__);
        })
    }
    $.fn.selectorsInitializer = function(__selectors){ //Activa el primer selector
        __selectors.eq(0).addClass(__MY_CLASS_ACTIVE__);
    }
})(jQuery);