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
    "enBio":"2010-2019",
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
    
    {"name":"Lovely",
    "enBio":"Child's Bio... Some English stuff!",
    "frBio":"Child's Bio... Des choses Françaises!"},

    {"name":"Lucie",
    "enBio":"Child's Bio... Some English stuff!",
    "frBio":"Child's Bio... Des choses Françaises!"},

    {"name":"Marco",
    "enBio":"Marco loves soccer and would like to become a proffessional goaltender when he i solder. He likes to eat rice and his favorite animal is a dog.",
    "frBio":"Marco adore le football et aimerait devenir un gardien de buts professionnel lorsqu’il sera grand. Il aime beaucoup manger du riz et son animal préféré est un chien."},

    {"name":"Marcus",
    "enBio":"Marcus loves to play soccer with his friends at Zamni Beni. When he’s older, he would like to become a pilote, because he often looks at them in the sky and imagines himself flying an airplane. ",
    "frBio":"Marcus aime jouer au football avec ses amis à Zamni Beni. Plus tard, il aimerait devenir pilote d’avions parce qu’il adore les regarder dans le ciel et s’imagine les piloter."},

    {"name":"Marken",
    "enBio":"Child's Bio... Some English stuff!",
    "frBio":"Child's Bio... Des choses Françaises!"},

    {"name":"Martine",
    "enBio":"Child's Bio... Some English stuff!",
    "frBio":"Child's Bio... Des choses Françaises!"},

    {"name":"Merline",
    "enBio":"Child's Bio... Some English stuff!",
    "frBio":"Child's Bio... Des choses Françaises!"},

    {"name":"Michaelle (Micha)",
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
    "enBio":"Nicole likes to sing and dance with her friend Ogéline. ",
    "frBio":"Nicole aime danser et chanter avec son amie Ogéline. "},

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
    "enBio":"Peterson is a super smiley kid. He is Steff’s best friend, and they like to play soccer or basketball together.",
    "frBio":"Peterson est un enfant super souriant. Il est le meillleur ami de Steff et ils aiment jouer au football et au basket ball ensemble "},

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
    "enBio":"Steff dreams of becoming a soccer superstar. He says that he runs very fast and likes to have his team win when they play for fun at Zamni Beni. In addition, he loves to play cards. His competitive side shows. ",
    "frBio":"Steff rêve de devenir un grand footballeur. Il dit courir vite et aime que son équipe gagne lors des jeux de football à Zamni Beni. En ajoutant, il aime jouer aux cartes. Son côté compétitif est évident. "},

    {"name":"Stephane",
    "enBio":"Child's Bio... Some English stuff!",
    "frBio":"Child's Bio... Des choses Françaises!"},

    {"name":"Tommy",
    "enBio":"Stéphane likes to go out of Zamni Beni, and to walk around the facility with his friend Chrisley. When he grows up, he would like to be an electrician because this job is interesting to him. He also likes to help with manual work and chores. ",
    "frBio":"Stéphane aime faire des sorties et de marcher dans l’espace de Zamni Beni avec son ami Chrisley. Plus tard, il aimerait devenir électricien parce que le métier lui parait très intéressant. Il aime aussi faire des travaux manuels et d’aider aux tâches ménagères. "},

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