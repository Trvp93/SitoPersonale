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

var Whatsapp = {
    Android: function () {
        //Mostra i tasti di contatto whatsapp
        $('#wa-contact').show();
        $("div.modal-footer #wa-contact").show();

        //Imposta il collegamento a whatsapp - sintassi android
        $('#wa-contact').attr("href", "intent://send/+393899649683#Intent;scheme=smsto;package=com.whatsapp;action=android.intent.action.SENDTO;end");
        $("div.modal-footer #wa-contact").attr("href", "intent://send/+393899649683#Intent;scheme=smsto;package=com.whatsapp;action=android.intent.action.SENDTO;end");
    },
    iOS: function () {
        //Mostra i tasti di contatto whatsapp
        $("#wa-contact").show();
        $("div.modal-footer #wa-contact").show();

        //Imposta il collegamento a whatsapp - sintassi iOS
        $('#wa-contact').attr("href", "whatsapp://app?abid=+393899649683");
        $("div.modal-footer #wa-contact").attr("href", "whatsapp://app?abid=+393899649683");
    },
    Off: function () {
        //Nasconde i tasti di contatto whatsapp
        $("#wa-contact").hide();
        $("div.modal-footer #wa-contact").hide();
    }
};

function CallMobile() {
    // Sostituisce l'icona di skype con quella del telefono
    $('#icon-chiama').removeClass("fa-skype");
    $('div.modal-footer #icon-chiama').removeClass("fa-skype");
    $('#icon-chiama').addClass("fa-phone");
    $('div.modal-footer #icon-chiama').addClass("fa-phone");

    // Imposta l'href per abilitare le telefonate
    $('#chiama').attr('href', 'tel:+393899649683');
    $('div.modal-footer #chiama').attr('href', 'tel:+393899649683');
}

// Verifica se il dispositivo connesso è mobile e imposta il DOM di conseguenza
if (isMobile.any()) {
    // Blocca lo scorrimento dello slider su mobile
    $('.carousel').carousel({
        interval: false
    });

    CallMobile();

}


//-------------- Nasconde i tasti whatsapp
Whatsapp.Off();


//------------- Verifica il SO del dispositivo attualmente connesso e richiama la funzione corrispondente
if (isMobile.Android()) {
    
    Whatsapp.Android();
}

if (isMobile.iOS()) {

    Whatsapp.iOS();
}
