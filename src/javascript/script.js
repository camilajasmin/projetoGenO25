$(document).ready(function(){
    $('#mobile_btn').on('click', function(){
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function(){
        const header = $('header');

        const scrollPosition = $(window).scrollTop()-header.outerHeight();
        let activeSectionIndex = 0;

        if(scrollPosition <=0) {
            header.css('box-shadow', 'none');
        } else{
            header.css('box-shadow', '5px 1px 5px rgba(0,0,0, 1');
        }

        sections.each(function(i){
            const section = $(this);
            const sectionTop = section.offset().top - 140;
            const sectionBottom = sectionTop + section.outerHeight();

            if(scrollPosition >= sectionTop && scrollPosition < sectionBottom){
                activeSectionIndex = i;
                return false;
            }
        })
        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active')
    });

    ScrollReveal().reveal('.title', {
        origin: 'left',
        duration: 2000,
        distance:'20%'
    })
    ScrollReveal().reveal('.social-media-buttons', {
        origin: 'left',
        duration: 3000,
        distance:'70%'
    })
    ScrollReveal().reveal('#imgPerfil', {
        origin: 'right',
        duration: 3000,
        distance:'40%'
    })
    ScrollReveal().reveal('.card-back',{
        origin: 'right',
        duration: 3000,
        distance:'40%'
    })
     ScrollReveal().reveal('#img201',{
        origin: 'right',
        duration: 3000,
        distance:'40%'
    })
        ScrollReveal().reveal('#img202', {
        origin: 'bottom',
        duration: 3000,
        distance:'40%'
    })
        ScrollReveal().reveal('#img203', {
        origin: 'left',
        duration: 3000,
        distance:'40%'
    })
    ScrollReveal().reveal('.carrossel', {
        origin: 'bottom',
        duration: 3000,
        distance:'40%'
    })
     ScrollReveal().reveal('#imgFolclore', {
        origin: 'bottom',
        duration: 3000,
        distance:'40%'
    })
      ScrollReveal().reveal('#tituloRaizes', {
        origin: 'right',
        duration: 3000,
        distance:'40%'
    })
});

