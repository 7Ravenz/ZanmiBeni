var createChildren = function()
{
var htmlreturn = "";

for(var i = 0 ; i < kids.length ; i++)
{
    htmlreturn += 
    `
    <div class="col s12 m4 l3">
    <div class="card">
        <div class="card-image">
            <img src="../KIDS/${kids[i].name}.jpg" alt="${kids[i].name} picture">
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

var kids = 
[
    {"name":"Alicia",
    "enBio":"Child's Bio... Some English stuff!",
    "frBio":"Child's Bio... Des choses Françaises!"},

    {"name":"Andrecia",
    "enBio":"Child's Bio... Some English stuff!",
    "frBio":"Child's Bio... Des choses Françaises!"},

    {"name":"Betty",
    "enBio":"english",
    "frBio":"francais"},

    {"name":"Carl", 
    "enBio":"english", 
    "frBio":"francais"},

    {"name":"Christopher",
    "enBio":"Child's Bio... Some English stuff!",
    "frBio":"Child's Bio... Des choses Françaises!"},

    {"name":"Claudia",
    "enBio":"Child's Bio... Some English stuff!",
    "frBio":"Child's Bio... Des choses Françaises!"},

    {"name":"Davidson",
    "enBio":"Child's Bio... Some English stuff!",
    "frBio":"Child's Bio... Des choses Françaises!"},

    {"name":"Dieuverson",
    "enBio":"Child's Bio... Some English stuff!",
    "frBio":"Child's Bio... Des choses Françaises!"},

    {"name":"Dorestan",
    "enBio":"Child's Bio... Some English stuff!",
    "frBio":"Child's Bio... Des choses Françaises!"},

    {"name":"Esmane",
    "enBio":"Child's Bio... Some English stuff!",
    "frBio":"Child's Bio... Des choses Françaises!"},

    {"name":"Geraldine",
    "enBio":"Child's Bio... Some English stuff!",
    "frBio":"Child's Bio... Des choses Françaises!"},

    {"name":"Gilbert",
    "enBio":"Child's Bio... Some English stuff!",
    "frBio":"Child's Bio... Des choses Françaises!"},

    {"name":"Gisele",
    "enBio":"Child's Bio... Some English stuff!",
    "frBio":"Child's Bio... Des choses Françaises!"},

    {"name":"James",
    "enBio":"Child's Bio... Some English stuff!",
    "frBio":"Child's Bio... Des choses Françaises!"},

    {"name":"Laurent",
    "enBio":"Child's Bio... Some English stuff!",
    "frBio":"Child's Bio... Des choses Françaises!"},

    {"name":"Lucie",
    "enBio":"Child's Bio... Some English stuff!",
    "frBio":"Child's Bio... Des choses Françaises!"},

    {"name":"Lovely",
    "enBio":"Child's Bio... Some English stuff!",
    "frBio":"Child's Bio... Des choses Françaises!"},

    {"name":"Marco",
    "enBio":"Child's Bio... Some English stuff!",
    "frBio":"Child's Bio... Des choses Françaises!"},

    {"name":"Marcus",
    "enBio":"Child's Bio... Some English stuff!",
    "frBio":"Child's Bio... Des choses Françaises!"},

    {"name":"Marken",
    "enBio":"Child's Bio... Some English stuff!",
    "frBio":"Child's Bio... Des choses Françaises!"},

    {"name":"Martine",
    "enBio":"Child's Bio... Some English stuff!",
    "frBio":"Child's Bio... Des choses Françaises!"},

    {"name":"Merline",
    "enBio":"Child's Bio... Some English stuff!",
    "frBio":"Child's Bio... Des choses Françaises!"},

    {"name":"Michalle",
    "enBio":"Child's Bio... Some English stuff!",
    "frBio":"Child's Bio... Des choses Françaises!"},

    {"name":"Mishama",
    "enBio":"Child's Bio... Some English stuff!",
    "frBio":"Child's Bio... Des choses Françaises!"},

    {"name":"Mona",
    "enBio":"Child's Bio... Some English stuff!",
    "frBio":"Child's Bio... Des choses Françaises!"},

    {"name":"Nephtalie",
    "enBio":"Child's Bio... Some English stuff!",
    "frBio":"Child's Bio... Des choses Françaises!"},

    {"name":"Nicole",
    "enBio":"Child's Bio... Some English stuff!",
    "frBio":"Child's Bio... Des choses Françaises!"},

    {"name":"Ogeline",
    "enBio":"Child's Bio... Some English stuff!",
    "frBio":"Child's Bio... Des choses Françaises!"},

    {"name":"Pascal",
    "enBio":"Child's Bio... Some English stuff!",
    "frBio":"Child's Bio... Des choses Françaises!"},

    {"name":"Pascale",
    "enBio":"Child's Bio... Some English stuff!",
    "frBio":"Child's Bio... Des choses Françaises!"},

    {"name":"Peter John",
    "enBio":"Child's Bio... Some English stuff!",
    "frBio":"Child's Bio... Des choses Françaises!"},

    {"name":"Peterson",
    "enBio":"Child's Bio... Some English stuff!",
    "frBio":"Child's Bio... Des choses Françaises!"},

    {"name":"Rene",
    "enBio":"Child's Bio... Some English stuff!",
    "frBio":"Child's Bio... Des choses Françaises!"},

    {"name":"Rosemarie",
    "enBio":"Child's Bio... Some English stuff!",
    "frBio":"Child's Bio... Des choses Françaises!"},

    {"name":"Rosemercie",
    "enBio":"Child's Bio... Some English stuff!",
    "frBio":"Child's Bio... Des choses Françaises!"},

    {"name":"Roudy",
    "enBio":"Child's Bio... Some English stuff!",
    "frBio":"Child's Bio... Des choses Françaises!"},

    {"name":"Samuel",
    "enBio":"Child's Bio... Some English stuff!",
    "frBio":"Child's Bio... Des choses Françaises!"},

    {"name":"Sebastien",
    "enBio":"Child's Bio... Some English stuff!",
    "frBio":"Child's Bio... Des choses Françaises!"},

    {"name":"Sherika",
    "enBio":"Child's Bio... Some English stuff!",
    "frBio":"Child's Bio... Des choses Françaises!"},

    {"name":"Steff",
    "enBio":"Child's Bio... Some English stuff!",
    "frBio":"Child's Bio... Des choses Françaises!"},

    {"name":"Stephane",
    "enBio":"Child's Bio... Some English stuff!",
    "frBio":"Child's Bio... Des choses Françaises!"},

    {"name":"Tommy",
    "enBio":"Child's Bio... Some English stuff!",
    "frBio":"Child's Bio... Des choses Françaises!"},

    {"name":"Wadley",
    "enBio":"Child's Bio... Some English stuff!",
    "frBio":"Child's Bio... Des choses Françaises!"},

    {"name":"Wendy",
    "enBio":"Child's Bio... Some English stuff!",
    "frBio":"Child's Bio... Des choses Françaises!"},

    {"name":"Yveline",
    "enBio":"Child's Bio... Some English stuff!",
    "frBio":"Child's Bio... Des choses Françaises!"},
];