function initTrion() {
    "use strict";
    firstLoad();
    function firstLoad() {
        setTimeout(function () {
            $(".main-loader-wrap .loader-spin").addClass("novisspin");
        }, 1500);
        setTimeout(function () {
            $(".main-loader-wrap").fadeOut(500);
        }, 2200);
        var chdpt = $(".content-holder").data("pagetitle");
        $(".breadcrumb-wrap span").text(chdpt);
    }

    $("a").on({
        mouseenter: function () {
            $(".element-item").addClass("elem_hover");
        },
        mouseleave: function () {
            $(".element-item").removeClass("elem_hover");
        }
    });
    $("  #portfolio_horizontal_container").on({
        mouseenter: function () {
            $(".element-item").addClass("slider_hover");
        },
        mouseleave: function () {
            $(".element-item").removeClass("slider_hover");
        }
    });
}

$.fn.duplicate = function (a, b) {
    var c = [];
    for (var d = 0; d < a; d++) $.merge(c, this.clone(b).get());
    return this.pushStack(c);
};

var a = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return a.Android() || a.BlackBerry() || a.iOS() || a.Opera() || a.Windows();
    }
};
trueMobile = a.any();
if (null == trueMobile) {
    $(function () {
        $.coretemp({
            reloadbox: "#wrapper",
            outDuration: 1200,
            inDuration: 100
        });
        readyFunctions();
        $(document).on({
            ksctbCallback: function () {
                readyFunctions();
            }
        });
    });
    function readyFunctions() {
        initTrion();
    }
}
if (trueMobile) {
    $(document).ready(function () {
        initTrion();
    });

    $("html, body").animate({
        scrollTop: 0
    }, 1);
}
$('head').append('<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">');
document.addEventListener('gesturestart', function (e) {
    e.preventDefault();
});

if ($(".element-item").length > 0) {
    var mouse = {
        x: 0,
        y: 0
    };
    var pos = {
        x: 0,
        y: 0
    };
    var ratio = 0.15;
    var active = false;
    var ball = document.querySelector('.element-item');
    TweenLite.set(ball, {
        xPercent: -50,
        yPercent: -50
    });
    document.addEventListener("mousemove", mouseMove);
    function mouseMove(e) {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        mouse.x = e.pageX;
        mouse.y = e.pageY - scrollTop;
    }
    TweenMax.ticker.addEventListener("tick", updatePosition);
    function updatePosition() {
        if (!active) {
            pos.x += (mouse.x - pos.x) * ratio;
            pos.y += (mouse.y - pos.y) * ratio;
            TweenMax.set(ball, {
                x: pos.x,
                y: pos.y
            });
        }
    }
}

$(function () {
    $(".typed").typed({
        strings: ["Web Designer", "Web Developer", "Youtuber", "Freelancer", "Graphics Designer"],
        stringsElement: null,
        typeSpeed: 100,
        startDelay: 0,
        backSpeed: 20,
        loop: true,
        loopCount: 5,
        showCursor: false,
        cursorChar: "|",
    });
});

$(document).ready(function () {
    function toggleSidebar() {
        $(".button").toggleClass("active");
        $(".leftside").toggleClass("move-to-left");
        $(".sidebar-item").toggleClass("active");
    }

    $(".button").on("click tap", function () {
        toggleSidebar();
    });

    $(document).keyup(function (e) {
        if (e.keyCode === 27) {
            toggleSidebar();
        }
    });
});

$('.count').each(function () {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 3000,
        easing: 'swing',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});

$(".meter > span").each(function () {
    $(this)
        .data("origWidth", $(this).width())
        .width(0)
        .animate(
            {
                width: $(this).data("origWidth")
            },
            1200
        );
});

var containerEl = document.querySelector('.containered');

if (containerEl) {
    var mixer = mixitup(containerEl, {
        animation: {
            effects: 'fade scale stagger(50ms)'
        },
        load: {
            filter: 'none'
        }
    });

    containerEl.classList.add('mixitup-ready');

    mixer.show().then(function () {
        mixer.configure({
            animation: {
                effects: 'fade scale'
            }
        });
    });
}

var modal = document.getElementById("myModal");
var img = document.getElementById("myImg");
var img1 = document.getElementById("myimg1");
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");
img.onclick = function () {
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
};

var span = document.getElementsByClassName("close")[0];

span.onclick = function () {
    modal.style.display = "none";
};

img1.onclick = function () {
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
};

var modal1 = document.getElementById("DETAIL_myModal");
var DETAIL_btn = document.getElementById("detailmybtn");
var span1 = document.getElementsByClassName("DETAIL_close")[0];
console.log(span1);
DETAIL_btn.onclick = function () {
    modal1.style.display = "block";
};

span1.onclick = function () {
    modal1.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }

    if (event.target == modal1) {
        modal1.style.display = "none";
    }
};

const player = document.querySelector("#play-video");
const player1 = document.querySelector("#play-video1");
const player2 = document.querySelector("#play-video2");
const player3 = document.querySelector("#play-video3");
const videoOverlay = document.querySelector("#video-overlay");

player.addEventListener("click", function (e) {
    e.preventDefault();
    videoOverlay.classList.add("open");
    videoOverlay.innerHTML += '<iframe width="560" height="315" src="https://www.youtube.com/embed/9iDXWx7GtZQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>';
});

player1.addEventListener("click", function (e) {
    e.preventDefault();
    videoOverlay.classList.add("open");
    videoOverlay.innerHTML += '<iframe src="https://player.vimeo.com/video/89167552?h=c2db0948cc&loop=1&color=ffffff" width="640" height="338" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>';
});

player2.addEventListener("click", function (e) {
    e.preventDefault();
    videoOverlay.classList.add("open");
    videoOverlay.innerHTML += `<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay"
    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1606365934&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>`;
});

player3.addEventListener("click", function (e) {
    e.preventDefault();
    videoOverlay.classList.add("open");
    videoOverlay.innerHTML += `<iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1606365931&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>`;
});

videoOverlay.addEventListener("click", function (e) {
    e.preventDefault();
    close_video();
});

document.addEventListener("keyup", function (e) {
    if (e.keyCode === 27) {
        close_video();
    }
});

function close_video() {
    videoOverlay.classList.remove("open");
    videoOverlay.querySelector("iframe").remove();
}

