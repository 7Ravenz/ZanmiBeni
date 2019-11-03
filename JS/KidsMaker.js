var createChildren = function()
{
var htmlreturn = "";

for(var i = 0 ; i < kids.length ; i++)
{
    htmlreturn += 
    `
    <div class="col s12 m4 l3 card-mh">
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
    "enBio":"Carl likes to play with his friends. Even with his mobility issues, he finds a way to keep up with his friends, and to participate in all activities. He says he loves to play ball. ", 
    "frBio":"Carl aime jouer avec ses amis. Malgré des difficultés de mobilité, Carl trouve moyen de suivre les autres et de participer aux activités avec ses pairs. Il dit adorer jouer au ballon. "},

    {"name":"Christopher",
    "enBio":"Christopher likes to play basketball or dominos with his best friend Michaëlle. He does not mind helping with chores; he says he likes working in the kitchen or sweeping. ",
    "frBio":"Christopher aime jouer au basketball ou aux dominos avec sa meilleure amie Michaëlle. Il trouve aussi du plaisir à faire des tâches ménagères comme travailler dans la cuisine ou balayer. "},

    {"name":"Claudia",
    "enBio":"Child's Bio... Some English stuff!",
    "frBio":"Child's Bio... Des choses Françaises!"},

    {"name":"David Moise",
    "enBio":"Child's Bio... Some English stuff!",
    "frBio":"Child's Bio... Des choses Françaises!"},

    {"name":"Davidson",
    "enBio":"Child's Bio... Some English stuff!",
    "frBio":"Child's Bio... Des choses Françaises!"},

    {"name":"Dieuverson",
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

    {"name":"Isabelle",
    "enBio":"Child's Bio... Some English stuff!",
    "frBio":"Child's Bio... Des choses Françaises!"},

    {"name":"James",
    "enBio":"James adores school and doing his homework. When he’s older, he would like to become a math teacher in an elementary school. On top of this, he likes to play soccer with his friends at Zamni Beni. ",
    "frBio":"James adore l’école et faire ses travaux scolaires. Lorsqu’il sera grand, il aimerait devenir professeur des mathématiques pour des petits enfants. De plus, il aime jouer au football avec les autres amis de Zamni beni. "},

    {"name":"Laurent",
    "enBio":"Laurent loves math and wants to become a buisnessman. He loves doing school work, or playing jump rope and dominos.",
    "frBio":"Laurent est passionné des mathématiques et veut devenir un homme d’affaires. Il aime travailler sur ses travaux scolaires, ainsi que jouer à la corde ou aux dominos."},
    
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

    {"name":"Michalle",
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
    "enBio":"Samuel is super silly. He loves to laugh and to make others laugh. His favorite activity is drawing with his best friend Sébastien. When he grows up, Samuel wants to become a professional soccer player.",
    "frBio":"Samuel est très farfelu. Il aime bien rire et faire rire ses amis. Son activité préférée est de faire des dessins avec son ami Sébastien. Lorsqu’il sera grand, Samuel veut devenir un joueur de football professionnel. "},

    {"name":"Sandy",
    "enBio":"Child's Bio... Some English stuff!",
    "frBio":"Child's Bio... Des choses Françaises!"},

    {"name":"Sebastien",
    "enBio":"Sebastian loves to play with his best friend Carl. His favourite school subject is math, and when he is older he wants to become a police officer.",
    "frBio":"Sebastian adore jouer avec son meilleur ami Carl. Les mathématiques sont son sujet scolaire préféré. Lorsqu’il sera plus grand, il aimerait devenir policier. "},

    {"name":"Sherika",
    "enBio":"Child's Bio... Some English stuff!",
    "frBio":"Child's Bio... Des choses Françaises!"},

    {"name":"Stanley",
    "enBio":"Child's Bio... Some English stuff!",
    "frBio":"Child's Bio... Des choses Françaises!"},

    {"name":"Steff",
    "enBio":"Steff dreams of becoming a soccer superstar. He says that he runs very fast and likes to have his team win when they play for fun at Zamni Beni. In addition, he loves to play cards. His competitive side shows. ",
    "frBio":"Steff rêve de devenir un grand footballeur. Il dit courir vite et aime que son équipe gagne lors des jeux de football à Zamni Beni. En ajoutant, il aime jouer aux cartes. Son côté compétitif est évident. "},

    {"name":"Stephane",
    "enBio":"Stéphane likes to go out of Zamni Beni, and to walk around the facility with his friend Chrisley. When he grows up, he would like to be an electrician because this job is interesting to him. He also likes to help with manual work and chores.",
    "frBio":"Stéphane aime faire des sorties et de marcher dans l’espace de Zamni Beni avec son ami Chrisley. Plus tard, il aimerait devenir électricien parce que le métier lui parait très intéressant. Il aime aussi faire des travaux manuels et d’aider aux tâches ménagères."},

    {"name":"Tommy",
    "enBio":"SChild's Bio... Some English stuff! ",
    "frBio":"Child's Bio... Des choses Françaises! "},

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