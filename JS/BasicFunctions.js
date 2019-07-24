var changeLanguage = function(lang) {
    $(".en").hide();
    $(".fr").hide();

    $("#French_btn").hide();
    $("#English_btn").hide();
    $("#ClubCarlFrench_btn").hide();
    $("#ClubCarlEnglish_btn").hide();

    if(lang == "en") {
        $(".en").show();
        $("#French_btn").show();
        $("#ClubCarlFrench_btn").show();
        localStorage.setItem('language', 'en');
    } else if(lang == "fr") {
        $(".fr").show();
        $("#English_btn").show();
        $("#ClubCarlEnglish_btn").show();
        localStorage.setItem('language', 'fr');
    }
};

var initLanguage = function(){
    if (localStorage.getItem('language') == null)
        changeLanguage('en')
    else
        changeLanguage(localStorage.getItem('language'))
}