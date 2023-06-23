$(document).ready(function(){

    /*
    document.getElementById('root').addEventListener('click', function(e){

        e.preventDefault()

    })

    */
    /* -----------------------------------------------
                btn-menu-toggle
    ----------------------------------------------- */
    
    // Quand on click sur le btn-toggle
    $("nav a.btn-menu-toggle").click(function(e){
        // nav menu 
        $('nav .menu').css('top' , '0');

        // nav btn-close
        // nav menu 
        $('nav .btn-menu-close svg').css('top' , '0');

        e.preventDefault();

    });


    // Quand on click sur le btn-close
    $("nav .btn-menu-close").click(function(e){
        // nav menu 
        $('nav .menu').css('top' , '-100vh');

        // nav btn-close
        // nav menu 
        $('nav .btn-menu-close svg').css('top' , '-100vh');

        e.preventDefault();

    });


    // -----------------------------------------------
    //                  MEDIA QUERY
    //-----------------------------------------------
    
    


    


});


/*
    if (window.matchMedia("(min-width: 600px)").matches) {
        
        $('nav .menu').removeClass('active')
        .addClass('menu');
        
    } else {
        // L'affichage est inférieur à 600px de large 
    }

*/