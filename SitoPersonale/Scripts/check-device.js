alert("check-device.je - line 1");
var isMobile = {
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
        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
    }
};
console.log("isMobile.Android: " + isMobile.Android());
console.log("sono in isMobile.BlackBarry: " + isMobile.BlackBerry());
console.log("sono in isMobile.iOS: " + isMobile.iOS());
console.log("sono in isMobile.Opera: " + isMobile.Opera());
console.log("sono in isMobile.Windows: " + isMobile.Windows());
console.log("sono in isMobile.any: " + isMobile.any());
console.log(navigator.userAgent.toString());
console.log(navigator.userAgent.match(/Mozilla/i));

//if (isMobile.any()) {
//    $('.carousel').carousel({
//        interval: false
//    });
//}


//-------------- Nasconde i tasti whatsapp

$('#wa-contact').hide();



//------------- Verifica il SO del dispositivo attualmente connesso e mostra il tasto whatsapp adeguato
//if (isMobile.Android) {
//    $('#whatsappContact > i').show();
//    $('#whatsappContact > i').attr("href", "intent://send/4912345678#Intent;scheme=smsto;package=com.whatsapp;action=android.intent.action.SENDTO;end");
//}

//if (isMobile.iOS) {
//    $('#whatsappContact > i').show();
//    $('#whatsappContact > i').attr("href", "whatsapp://app?abid=+393899649683");
//}