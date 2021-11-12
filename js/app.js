$(function () {

    const worksSlider = $('[data-slider="slick"]');

    //filter
    let filter = $("[data-filter]");

    filter.on("click", function (e) {
        e.preventDefault();
        let cat = $(this).data('filter');

        if (cat == 'all') {
            $("[data-cat]").removeClass('hide');
        } else {
            $("[data-cat]").each(function () {
                let workCat = $(this).data('cat');
                if (workCat != cat) {
                    $(this).addClass('hide');
                } else {
                    $(this).removeClass('hide');
                }
            });
        }
    });


    //modal
    const modalCall = $("[data-modal]");
    const modalClose = $("[data-close]");

    modalCall.on("click", function (e) {
        e.preventDefault();
        let $this = $(this);
        let modalId = $this.data('modal');

        $(modalId).addClass('show');
        $("body").addClass('no-scroll');

        setTimeout(function () {
            $(modalId).find(".modal__dialog").css({
                transform: "scale(1)"
            });
        }, 200);

        worksSlider.slick('setPosition');
    });

    modalClose.on("click", function (e) {
        e.preventDefault();
        let $this = $(this);
        let modalParent = $this.parents('.modal');


        modalParent.find(".modal__dialog").css({
            transform: "scale(0)"
        });


        setTimeout(function () {
            modalParent.removeClass('show');
            $("body").removeClass('no-scroll');
        }, 200);

    });

    $(".modal").on("click", function (e) {
        let $this = $(this);

        $this.find(".modal__dialog").css({
            transform: "scale(0)"
        });

        setTimeout(function () {
            $this.removeClass('show');
            $("body").removeClass('no-scroll');
        }, 200);
    });



    $(".modal__dialog").on("click", function (e) {
        e.stopPropagation();
    });


    //Slider: https://kenwheeler.github.io/slick/
    worksSlider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });

    $(".slickPrev").on("click", function (e) {
        e.preventDefault();

        let carrentSlider = $(this).parents('.modal').find('[data-slider="slick"]');

        carrentSlider.slick("slickPrev");
    });

    $(".slickNext").on("click", function (e) {
        e.preventDefault();

        let carrentSlider = $(this).parents('.modal').find('[data-slider="slick"]');

        carrentSlider.slick("slickNext");
    });

    //navToggle
    const navToggle = $("#navToggle");
    const nav = $("#nav");

    navToggle.on("click", function (e) {
        e.preventDefault();

        nav.toggleClass("show");

    });

});
