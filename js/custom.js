// to get current year
function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getYear();

//  course section owl carousel

$(".work_owl-carousel").owlCarousel({
    loop: false,
    margin: 10,
    autoHeight: true,
    nav: true,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>', '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    responsive: {
        0: {
            items: 1,
            nav: true,
            loop: false
        },
        576: {
            items: 2,
            nav: true,
            loop: false
        },
        768: {
            items: 3,
            nav: true,
            loop: false
        },
        1000: {
            items: 4
        }
    }
});

// client section owl carousel
$(".client_owl-carousel").owlCarousel({
    loop: false,
    margin: 0,
    dots: false,
    nav: true,
    navText: [],
    autoplay: false,
    autoplayHoverPause: true,
    navText: [
        '<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'
    ],
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
        1000: {
            items: 2
        }
    }
});

/** google_map js **/

function myMap() {
    var mapProp = {
        center: new google.maps.LatLng(40.712775, -74.005973),
        zoom: 18,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
}