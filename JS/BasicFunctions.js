var changeLanguage = function(lang) {
    $(".en").hide();
    $(".fr").hide();
    
    if(lang == "en") {
        $(".en").show();
        localStorage.setItem('language', 'en');
    } else if(lang == "fr") {
        $(".fr").show();
        localStorage.setItem('language', 'fr');
    }
};

var initLanguage = function(){
    if (localStorage.getItem('language') == null)
        changeLanguage('en')
    else
        changeLanguage(localStorage.getItem('language'))
}

var switchLanguage = function() {
    if (localStorage.getItem('language') == 'en')
        changeLanguage('fr')
    else
        changeLanguage('en')
}