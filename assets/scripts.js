$(document).ready(function() {
    $('.gallery').mauGallery({
        columns: {
            xs: 1,
            sm: 2,
            md: 3,
            lg: 3,
            xl: 3
        },
        lightBox: true,
        lightboxId: 'myAwesomeLightbox',
        showTags: true,
        tagsPosition: 'top'
    });
});

function imageDeferLoading()
{
    const HQCarrousell1 = new Image();
    const HQCarrousell2 = new Image();
    const HQCarrousell3 = new Image();

    HQCarrousell1.src = "assets/images/slider/hq-carrousel-1.webp";
    HQCarrousell2.src = "assets/images/slider/hq-carrousel-2.webp";
    HQCarrousell3.src = "assets/images/slider/hq-carrousel-3.webp";

    HQCarrousell1.onload = () => {
        document.querySelector("#carrousel1").src = HQCarrousell1.src;
    };
    HQCarrousell2.onload = () => {
        document.querySelector("#carrousel2").src = HQCarrousell2.src;
    };
    HQCarrousell3.onload = () => {
        document.querySelector("#carrousel3").src = HQCarrousell3.src;
    };
}

imageDeferLoading();