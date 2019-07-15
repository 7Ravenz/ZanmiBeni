var changeLanguage = function(lang) {
    $(".en").hide();
    $(".fr").hide();

    $("#id_of_french_button").hide();
    $("#id_of_english_button").hide();

    if(lang == "en") {
        $(".en").show();
        $("#id_of_french_button").show();
    } else if(lang == "fr") {
        $(".fr").show();
        $("#id_of_english_button").show();
    }
};