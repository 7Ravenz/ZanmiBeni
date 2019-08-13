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

var kids = 
[
    {"imgfile":"Gallery5.JPG", "name":"Child 1",
    "enBio":"Child's Bio... Some English stuff!",
    "frBio":"Child's Bio... Des choses Françaises!"},

    {"imgfile":"Gallery6.JPG", "name":"",
    "enBio":"",
    "frBio":""},

    {"imgfile":"Whatever.JPG", "name":"", 
    "enBio":"", 
    "frBio":""}
];

var createChildren = function()
{
var htmlreturn = "";

for(var i = 0 ; i < kids.length ; i++)
{
    htmlreturn += 
    `
    <div class="col s12 m6 l4">
    <div class="card">
        <div class="card-image">
            <img src="../IMAGES/${kids[i].imgfile}" alt="${kids[i].name} picture">
            <span class="card-title"> ${kids[i].name} </span>

            <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">attach_money</i></a>
        </div>
        <div class="card-content">
            <span class="en" lang="en"> <p class="childInfo"> ${kids[i].enBio} </p> </span>
            <span class="fr" lang="fr"> <p class="childInfo"> ${kids[i].frBio} </p> </span>
        </div>
    </div>
</div>
`
}

return htmlreturn;
}