//alert("check-device.je - line 1");
var isMobile = {
    Android: function () {
        //return navigator.userAgent.match(/Android/i);
        var result = navigator.userAgent.match(/Android/i) != null;
        return result;
    },
    BlackBerry: function () {
        var result = navigator.userAgent.match(/BlackBerry/i) != null;
        return result;
    },
    iOS: function () {
        var result = navigator.userAgent.match(/iPhone|iPad|iPod/i) != null;
        return result;
    },
    Opera: function () {
        var result = navigator.userAgent.match(/Opera Mini/i) != null;
        return result;
    },
    Windows: function () {
        var result = navigator.userAgent.match(/IEMobile/i) != null;
        return result;
    },
    any: function () {
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};
//console.log("isMobile.Android: " + isMobile.Android());
//console.log("sono in isMobile.BlackBarry: " + isMobile.BlackBerry());
//console.log("sono in isMobile.iOS: " + isMobile.iOS());
//console.log("sono in isMobile.Opera: " + isMobile.Opera());
//console.log("sono in isMobile.Windows: " + isMobile.Windows());
//console.log("sono in isMobile.any: " + isMobile.any());
//console.log(navigator.userAgent.toString());
//console.log(navigator.userAgent.match(/Mozilla/i) != null);


if (isMobile.any()) {
    $('.carousel').carousel({
        interval: false
    });
}


//-------------- Nasconde i tasti whatsapp

$("#wa-contact").hide();
//$("div.modal-footer #wa-contact").hide();


//------------- Verifica il SO del dispositivo attualmente connesso e mostra il tasto whatsapp adeguato
if (isMobile.Android()) {
    $('#wa-contact').show();
    $('#wa-contact').attr("href", "intent://send/+393899649683#Intent;scheme=smsto;package=com.whatsapp;action=android.intent.action.SENDTO;end");
}

if (isMobile.iOS()) {
    $('#wa-contact').show();
    $('#wa-contact').attr("href", "whatsapp://app?abid=+393899649683");
}