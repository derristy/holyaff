function stepfinal() {
    jQuery("#p_body_content").fadeOut("slow"), jQuery("#p_loading").fadeIn("slow")
}

function scrollTo(e) {
    if ($("#" + e).length) {
        var n = $("#" + e).offset().top;
        $("html,body").animate({
            scrollTop: n
        }, {
                duration: "slow"
            })
    }
}

function getBrowser() {
    return -1 != (navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf("OPR")) ? "Opera" : -1 != navigator.userAgent.indexOf("Chrome") ? "Google Chrome" : -1 != navigator.userAgent.indexOf("Safari") ? "Safari" : -1 != navigator.userAgent.indexOf("Firefox") ? "Firefox" : -1 != navigator.userAgent.indexOf("MSIE") || 1 == !!document.documentMode ? "IE" : "Unknown"
}

function getPlatform() {
    return -1 != window.navigator.userAgent.indexOf("Windows NT 10.0") ? "Windows 10" : -1 != window.navigator.userAgent.indexOf("Windows NT 6.2") ? "Windows 8" : -1 != window.navigator.userAgent.indexOf("Windows NT 6.1") ? "Windows 7" : -1 != window.navigator.userAgent.indexOf("Windows NT 6.0") ? "Windows Vista" : -1 != window.navigator.userAgent.indexOf("Windows NT 5.1") ? "Windows XP" : -1 != window.navigator.userAgent.indexOf("Windows NT 5.0") ? "Windows 2000" : -1 != window.navigator.userAgent.indexOf("iPhone") ? "iPhone" : -1 != window.navigator.userAgent.indexOf("iPad") ? "iPad" : -1 != window.navigator.userAgent.indexOf("Android") ? "Android" : -1 != window.navigator.userAgent.indexOf("Mac") ? "Macintosh" : -1 != window.navigator.userAgent.indexOf("X11") ? "UNIX" : -1 != window.navigator.userAgent.indexOf("Linux") ? "Linux" : -1 != window.navigator.userAgent.indexOf("BlackBerry") ? "BlackBerry" : "Unknown"
}
jQuery(document).ready(function () {
    var e, n, t, r;

    function o(e) {
        return e < 10 && (e = "0" + e), e
    }
    1 <= jQuery("#timerr").length && (t = 89, r = setInterval(function () {
        e = parseInt(t / 60, 10), n = (n = parseInt(t % 60, 10)) < 10 ? "0" + n : n, $("#timerr").text(e + " " + minutos_y + n + " " + segundos), --t < 0 && clearInterval(r)
    }, 1e3));
    var a = new Date,
        i = o(a.getHours()) + ":" + o(a.getMinutes()),
        u = o(a.getMonth() + 1);
    if (jQuery(".p_var-dia").text(a.getDate()), jQuery(".p_var-mes").text(u), jQuery(".p_var-anyo").text(a.getFullYear()), jQuery(".p_var-dia_nombre").text(dayNames[a.getDay()]), jQuery(".p_var-mes_nombre").text(monthNames[a.getMonth()]), jQuery(".p_var-hora_fija").text(i), 1 <= jQuery(".p_var-browser").length) {
        var l = getBrowser();
        jQuery(".p_var-browser").text(l)
    }
    if (1 <= jQuery(".p_var-browser").length) {
        var d = getPlatform();
        jQuery(".p_var-so").text(d)
    }
}), $(document).ready(function () {
    $(".bq1").click(function () {
        $("#q1").fadeOut("slow", function () {
            $("#q2").fadeIn("slow")
        })
    }), $(".bq2").click(function () {
        $("#q2").fadeOut("slow", function () {
            $("#q3").fadeIn("slow")
        })
    }), $(".bq3").click(function () {
        $("#q3").fadeOut("slow", function () {
            $("#q4").fadeIn("slow")
        })
    }), $(".bq4").click(function () {
        scrollTo("id1"), $("#content1").fadeOut("slow", function () {
            $("#content2").fadeIn(), setTimeout(function () {
                $("#result1").fadeIn(1e3)
            }, 3e3), setTimeout(function () {
                $("#result2").fadeIn(1e3)
            }, 4100), setTimeout(function () {
                $("#result3").fadeIn(1e3)
            }, 6e3), setTimeout(function () {
                $("#content2").fadeOut("slow", function () {
                    "undefined" != typeof roulette_ini ? rouletteRoot._init() : "undefined" != typeof box_ini && boxRoot._init(), $("#content3").fadeIn()
                })
            }, 7100)
        })
    })
});
var boxRoot, count = 1,
    intentos = 3,
    puedo = !1;
! function () {
    "use strict";
    boxRoot = {
        _init: function () {
            setTimeout(function () {
                jQuery("#p_modal1").modal(modalOptions)
            }, 1e3), jQuery(".try").on("click", function () {
                puedo && count <= intentos && (jQuery(this).hasClass("abierta") || (puedo = !1, jQuery(".circle-loader").removeClass("load-complete"), jQuery(".checkmark").css("display", "none"), jQuery(this).addClass("abierta"), 2 == count ? (jQuery(this).addClass("premiazo"), setTimeout(function () {
                    jQuery(".div_img_gift, .img_gift").fadeIn("slow", function () {
                        setTimeout(function () {
                            jQuery("#p_modal3").modal(modalOptions), jQuery(".circle-loader").addClass("load-complete"), jQuery(".checkmark").css("display", "block")
                        }, 1500)
                    })
                }, 4e3)) : (count++ , intentos-- , jQuery("#num_intentos").html(intentos), setTimeout(function () {
                    jQuery("#p_modal2").modal(modalOptions), setTimeout(function () {
                        jQuery(".circle-loader").addClass("load-complete"), jQuery(".checkmark").css("display", "block"), puedo = !0
                    }, 1e3)
                }, 2e3))))
            }), jQuery("#p_modal_button1").on("click", function (e) {
                e.stopPropagation(), jQuery("#p_modal1").modal("hide"), puedo = !0
            }), jQuery("#p_modal_button2").on("click", function (e) {
                e.stopPropagation(), jQuery("#p_modal2").modal("hide")
            }), jQuery("#p_modal_button3").on("click", function (e) {
                e.stopPropagation(), jQuery("#p_modal3").modal("hide"), stepfinal()
            })
        }
    }, jQuery(document).ready(function () {
        "undefined" == typeof box_ini && 0 < jQuery("#boxes").length && boxRoot._init()
    })
}();

$(".survey_button").click((event) => {
    let element = $(event.target);
    console.log("data-bq:"+element.attr("data-bq")+"|text:"+element.text());
});

$(".temblor").click((event) => {
    let element = $(event.currentTarget).attr("id");
    console.log("box_id:"+element);
});

function addComment(comment){
    $("#comment_section").prepend("<div class=\"comments\"><div class=\"profile\"><img src=\"assets/images/guest.png\"></div><div class=\"comment-content\"><p class=\"name\">Guest</p><p>"+comment+"</p></div><div class=\"clr\"></div><div class=\"comment-status\"><span>Curte·comente<img src=\"assets/images/like.png\" width=\"15\" height=\"15\">0</span><small> · </small><small><u>now</u></small><small><u></u></small></div></div>");
}

$(".comment-button").click(() => {
    if($("#comment_text").val()){
        let comment = $("#comment_text");
        addComment(comment.val());
        comment.val("");
    } else {
        alert("Empty comment");
    }
});