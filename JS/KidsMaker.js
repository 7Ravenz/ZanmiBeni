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

    {"name":"Carl, 8", 
    "enBio":"Carl likes to play with his friends. Even with his mobility issues, he finds a way to keep up with his friends, and to participate in all activities. He says he loves to play ball. ", 
    "frBio":"Carl aime jouer avec ses amis. Malgré des difficultés de mobilité, Carl trouve moyen de suivre les autres et de participer aux activités avec ses pairs. Il dit adorer jouer au ballon. "},

    {"name":"Christopher, 7",
    "enBio":"Christopher likes to play basketball or dominos with his best friend Michaëlle. He does not mind helping with chores; he says he likes working in the kitchen or sweeping. ",
    "frBio":"Christopher aime jouer au basketball ou aux dominos avec sa meilleure amie Michaëlle. Il trouve aussi du plaisir à faire des tâches ménagères comme travailler dans la cuisine ou balayer. "},

    {"name":"Claudia",
    "enBio":"Child's Bio... Some English stuff!",
    "frBio":"Child's Bio... Des choses Françaises!"},

    {"name":"Davidson",
    "enBio":"Child's Bio... Some English stuff!",
    "frBio":"Child's Bio... Des choses Françaises!"},

    {"name":"Dieuverson, 10",
    "enBio":"Dieuverson, like most kids at Zamni Beni, likes to play soccer. During the games, he likes to be the goaltender. He also lies to play jumprope with his friends. ",
    "frBio":"Dieuverson, comme plusieurs enfants à Zamni Beni, aime jouer au football. Par contre, celui-ci aime bien être le gardien de buts lors des matchs. Il aime aussi sauter à la corde avec ses amis. "},

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

    {"name":"James, 12",
    "enBio":"James adores school and doing his homework. When he’s older, he would like to become a math teacher in an elementary school. On top of this, he likes to play soccer with his friends at Zamni Beni. ",
    "frBio":"James adores school and doing his homework. When he’s older, he would like to become a math teacher in an elementary school. On top of this, he likes to play soccer with his friends at Zamni Beni. "},

    {"name":"Laurent, 9",
    "enBio":"Laurent loves math and wants to become a buisnessman. He loves doing school work, or playing jump rope and dominos.",
    "frBio":"Laurent est passionné des mathématiques et veut devenir un homme d’affaires. Il aime travailler sur ses travaux scolaires, ainsi que jouer à la corde ou aux dominos."},
    
    {"name":"Lovely",
    "enBio":"Child's Bio... Some English stuff!",
    "frBio":"Child's Bio... Des choses Françaises!"},

    {"name":"Lucie",
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

    {"name":"Michaelle (Micha), 9",
    "enBio":"Michaëlle likes to play ball with her best friend Nicole. Her favorite meal is all-meat pizza. She says she loves to spend time with Nicole, even at meal time. ",
    "frBio":"Michaëlle adore jouer au ballon avec sa meilleure amie Nicole. Son repas préféré est de la pizza garnie de viande. Elle affirme qu’elle aime bien passer du temps avec Nicole, même pendant l’heure du repas."},

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

    {"name":"Samuel, 8",
    "enBio":"Samuel is super silly. He loves to laugh and to make others laugh. His favorite activity is drawing with his best friend Sébastien. When he grows up, Samuel wants to become a professional soccer player.",
    "frBio":"Samuel est très farfelu. Il aime bien rire et faire rire ses amis. Son activité préférée est de faire des dessins avec son ami Sébastien. Lorsqu’il sera grand, Samuel veut devenir un joueur de football professionnel. "},

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