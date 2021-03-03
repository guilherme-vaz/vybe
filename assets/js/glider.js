new Glider(document.querySelector('.glider'), {
    // Mobile-first defaults
    slidesToShow: 1,
    slidesToScroll: 1,
    scrollLock: false,

    responsive: [
        {
        // screens greater than >= 775px
        breakpoint: 500,
        settings: {
            // Set to `auto` and provide item width to adjust to viewport
            slidesToShow: 1.5,
            slidesToScroll: 1,
            draggable: true,
            itemWidth: 150,
            duration: 0.25
        }
        },{
        // screens greater than >= 1024px
        breakpoint: 1024,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            draggable: true,
            itemWidth: 150,
            duration: 0.25
        }
        }
    ]
    });