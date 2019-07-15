var changeLanguage = function(lang) {
    $(".en").hide();
    $(".fr").hide();

    $("#French_btn").hide();
    $("#English_btn").hide();

    if(lang == "en") {
        $(".en").show();
        $("#French_btn").show();
    } else if(lang == "fr") {
        $(".fr").show();
        $("#English_btn").show();
    }
};