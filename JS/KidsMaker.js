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
    "enBio":"Alicia spent almost the entirety of her short life under the loving care of the Zanmi Beni Family. Alicia had hydrocephalus, was blind and she could not communicate verbally but she was treasured by everyone at Zanmi Beni. We were heartbroken when she passed away peacefully in early September of 2019. A beautiful funeral mass was held at the chapel where the other children and staff celebrated her life. We continue to pray for Alicia, and we are blessed to have had her as part of our family. ",
    "frBio":"Alicia a passé la majorité de sa vie sous la protection et l’amour de la famille Zanmi Beni. Alicia souffrait d’hydrocéphalie, était aveugle et ne pouvait pas communiquer verbalement, mais était adorée par tout le monde à Zanmi Beni. Nous avons eu le cœur brisé lorsqu’elle est décédée paisiblement au début du mois de septembre 2019. Nous avons tenu une magnifique messe funéraire dans la chapelle pour que les autres enfants et les employés puissent célébrer sa vie. Nous continuons de prier pour Alicia et nous sommes bénis de l’avoir eue parmi nous. "},

    {"name":"Anderson",
    "enBio":"Anderson is 13 years old, and he came to Zanmi Beni with his grandmother, Zanmi Beni cook Madame Marie. Anderson is in grade 7, and is a hardworking and sweet boy.  He is always pitching in to help others, and he enjoys his chores and playing soccer. Anderson is a responsible member of the Zanmi Beni family and a great role model for the younger children. ",
    "frBio":"Anderson est un garçon de 13 ans qui est arrivé à Zanmi Beni avec sa grand-mère, soit notre cuisinière, Madame Marie. Anderson est en 7e année et il est un garçon dévoué et gentil. Il est très serviable, accomplit ses tâches avec plaisir et aime jouer au soccer. Anderson est un membre responsable de la famille Zanmi Beni et un excellent modèle pour les plus jeunes. "},

    {"name":"Andrecia",
    "enBio":"Andrecia has been at Zanmi Beni from the beginning. A long time patient of Zanmi Lasante she is hardworking, bright and kind. Andrecia shows great leadership potential, and she models this for her peers every day. She has many responsibilities from preparing the children for school and bedtime, to tutoring and dishwashing. Her eyesight has been declining over the years, and she traveled to Miami in 2018 to be treated by an ophthalmologist. ",
    "frBio":"Andrecia est à la maison Zanmi Beni depuis le début. Patiente de longue date de Zanmi Lasante, elle est dévouée, brillante et aimable. Andrecia montre un énorme potentiel et est un modèle pour ses camarades tous les jours. Elle assume plusieurs responsabilités, que ce soit préparer les enfants pour l’école ou le coucher, offrir du tutorat et faire la vaisselle. Sa vue s’affaiblit depuis plusieurs années; elle a voyagé à Miami en 2018 pour voir un ophtalmologiste. "},

    {"name":"Betty",
    "enBio":"Betty is 11 years old and a sixth grade student.  Hardworking and diligent Betty sometimes finds her academic work challenging. She enjoys and excels at cooking though and she wants to follow in the footsteps of Stanley and Wendy and attend culinary school. Betty also likes to play basketball and board games. ",
    "frBio":"Betty est une jeune fille de 11 ans qui est en 6e année. Dévouée et assidue, Betty a parfois de la difficulté en classe. Par contre, elle adore faire la cuisine et aimerait suivre les traces de Stanley et Wendy en allant étudier l’art culinaire. Betty aime aussi jouer au basketball et aux jeux de société."},

    {"name":"Carl", 
    "enBio":"Carl is 9 years old and in the second grade. He loves school, Power Rangers, soccer and poutine. Carl traveled to Canada at the age of 4 to receive treatment at the Shriner’s Hospital for Children in Montreal. As a result he now runs, plays and dances with his crutches. Carl placed first in his grade last year, and he would like to become a doctor like Dr. Hamdy, Peter, Connor and Maggie.  Carl has a bright future in front of him. ", 
    "frBio":"Carl est un garçon de 9 ans qui est en 2e année. Il aime l’école, les Power Rangers, le soccer et la poutine. Carl a voyagé au Canada lorsqu’il avait 4 ans pour recevoir des traitements à l’Hôpital Shriners pour enfants de Montréal. Depuis, il est capable de courir, jouer et danser avec ses béquilles. L’année dernière, Carl était premier de classe; il aimerait devenir docteur comme Dr Hamdy, Peter, Connor et Maggie. L’avenir de Carl semble très prometteur. "},

    {"name":"Chrisley",
    "enBio":"Chrisley is 9 years old and is currently in grade 3.  His favorite color is blue and Chrisley has a smile that lights up any room he enters.  He enjoys music and dancing and also plays soccer. Chrisley always has a twinkle in his eye and he is known for being kind.",
    "frBio":"Chrisley est un garçon de 9 ans qui est en 3e année. Sa couleur préférée est le bleu et son sourire illumine n’importe quelle pièce. Il aime la musique, danser et jouer au soccer. Chrisley a une petite étincelle dans les yeux et il est reconnu pour sa générosité.  "},

    {"name":"Christopher",
    "enBio":"Christopher is 8 years old and is in grade 3. He likes to play basketball and dominos with his best friend Michaëlle. He does not mind helping with chores; he says he likes working in the kitchen and sweeping.  His favorite color is blue. Christopher has been a rough and tumble independent boy from a very young age, and he is very self –sufficient for his age. ",
    "frBio":"Chirstopher est un garçon de 8 ans qui est en 3e année. Il aime jouer au basketball et aux dominos avec sa meilleure amie Michaëlle. Il ne s’oppose pas à participer aux tâches ménagères – il dit qu’il aime bien travailler dans la cuisine et balayer. Sa couleur préférée est le bleu. Christopher est un petit robuste qui démontre son indépendance depuis longtemps; il est très autonome pour son âge. "},

    {"name":"Claudia",
    "enBio":"Claudia has physical and developmental disabilities and is unable to communicate verbally. Since arriving at Zanmi Beni she has learned how to walk with assistance and brings joy to everyone at ZB with her laughter. ",
    "frBio":"Claudia souffre d’incapacités physiques et de troubles du développement et n’est pas capable de communiquer verbalement. Depuis son arrivée à Zanmi Beni, elle a appris à marcher avec de l’aide et son rire apporte de la joie dans la vie de tous."},

    {"name":"David Moise",
    "enBio":"David Moise uses a wheelchair and has physical and developmental disabilities. While he is unable to communicate verbally, David Moise enjoys being around his caregivers and the other children and enjoys hugs. He is a very sweet natured boy.",
    "frBio":"David Moise se sert d’un fauteuil roulant et souffre d’incapacités physiques et de troubles du développement. Bien qu’il ne soit pas capable de communiquer verbalement, David Moise aime être entouré des fournisseurs de soins et des autres enfants et recevoir des câlins. C’est un garçon de nature très douce."},

    {"name":"Davidson",
    "enBio":"Davidson is 11 years old and is in grade 6.  His favorite color is maroon. Davidson enjoys school and playing soccer. Davidson loves all the Marvel superheroes but his favorite is Spiderman. ",
    "frBio":"Davidson est un garçon de 11 ans qui est en 6e année. Sa couleur préférée est le marron. Davidson aime l’école et jouer au soccer. Il aime tous les superhéros Marvel, mais son préféré est Spiderman."},

    {"name":"Dieuverson",
    "enBio":"Dieuverson is 9 years old and in grade 4 and his favorite color is blue.  Like most kids at Zanmi Beni he likes to play soccer especially when he gets to be the goaltender. He also likes to play jump rope with his friends.  While Dieuverson found school challenging at first, he has tried very hard and enjoys learning. ",
    "frBio":"Dieuverson est un garçon de 9 ans qui est en 4e année et sa couleur préférée est le bleu. Comme bien d’autres enfants à Zanmi Beni, il aime jouer au soccer, surtout lorsqu’il peut être gardien de but. Il aime aussi jouer à la corde à sauter avec ses amis. Bien que l’école ait été difficile au début, Dieuverson fait de gros efforts et aime apprendre.  "},

    {"name":"Dorestan",
    "enBio":"Dorestan is 17 years old. He has both physical and developmental disabilities and while he is not capable of speaking, he is able to communicate with sounds and gestures. He enjoys listening to music and the company of the staff and other children at Zanmi Beni. Every morning Dorestan insists on being parked beside the radio.  He can be very particular about the music he wants to listen to, and he is not shy about letting everyone know he wants the radio changed to a different station. ",
    "frBio":"Dorestan est un garçon de 17 ans. Il souffre d’incapacités physiques et de troubles du développement. Bien qu’il ne soit pas capable de parler, il peut communiquer avec des sons et des gestes. Il aime écouter de la musique et être en compagnie des employés et des autres enfants de Zanmi Beni. Tous les matins, Dorestan insiste à être placé à côté de la radio. Il peut se montrer sélectif dans son choix de musique et n’a pas peur de dire à tout le monde qu’il veut changer le poste de radio. "},

    {"name":"Esmane",
    "enBio":"Esmane came to live at Zanmi Beni when his father, who worked at the center, died unexpectedly leaving him without parents. Esmane attends school and loves to read, draw and play basketball. He enjoys keeping in touch with visitors on Facebook. ",
    "frBio":"Esmane est arrivé à Zanmi Beni lorsque son père, qui travaillait au centre, est mort subitement. Il est donc devenu orphelin. Esmane va à l’école et aime lire, dessiner et jouer au basketball. Il aime rester en contact avec les visiteurs sur Facebook."},

    {"name":"Frachette",
    "enBio":"Frachette first arrived at Zanmi Beni in 2012. She has both physical and developmental disabilities and uses a wheelchair. While she has faced several health challenges, she has thrived since arriving at Zanmi Beni.",
    "frBio":"Frachette est arrivée à Zanmi Beni en 2012. Elle souffre d’incapacités physiques et de troubles du développement et se sert d’un fauteuil roulant. Bien qu’elle ait été confrontée à plusieurs problèmes de santé, elle ne fait que s’épanouir depuis son arrivée à Zanmi Beni."},

    {"name":"Geraldine",
    "enBio":"Geraldine has physical and developmental disabilities and is non-verbal.  She enjoys spending time with the other children.",
    "frBio":"Geraldine souffre d’incapacités physiques et de troubles du développement et ne communique pas verbalement. Elle aime passer du temps avec les autres enfants."},

    {"name":"Gilbert",
    "enBio":"Gilbert has physical and developmental disabilities and while he uses a wheelchair, he is learning to walk with assistance.",
    "frBio":"Gilbert souffre d’incapacités physiques et de troubles du développement et bien qu’il se serve d’un fauteuil roulant, il a appris à marcher avec de l’aide. "},

    {"name":"Gisele",
    "enBio":"Gisele is 15 years old and is home schooled.  Her favorite color is yellow and she enjoys playing basketball and dancing. She also loves shoes, jewelry and having her nails painted.",
    "frBio":"Gisele a 15 ans et reçoit son éducation scolaire à la maison. Sa couleur préférée est le jaune et elle aime jouer au basketball et danser. Elle aime aussi les souliers et les bijoux et prend plaisir à se faire les ongles."},

    {"name":"Isabelle",
    "enBio":"Isabelle has both physical and developmental disabilities.  She uses a wheelchair and expresses herself through gestures and smiles.  ",
    "frBio":"Isabelle souffre d’incapacités physiques et de troubles du développement. Elle se sert d’un fauteuil roulant et s’exprime par ses gestes et ses sourires."},

    {"name":"James",
    "enBio":"James is 11 years old and is in grade 6.  He adores school and doing his homework. When he’s older, he would like to become a math teacher in an elementary school. On top of this, he likes to play soccer with his friends at Zanmi Beni.  His favourite colours are yellow and apricot. ",
    "frBio":"James est un garçon de 11 ans qui est en 6e année. Il adore l’école et faire ses devoirs. Lorsqu’il sera plus grand, il aimerait devenir professeur de mathématiques pour l’école primaire. De plus, il aime jouer au soccer avec ses amis de Zanmi Beni. Ses couleurs préférées sont le jaune et l’abricot. "},

    {"name":"Johny",
    "enBio":"Johny has epilepsy and is non-verbal.  He enjoys watching the other children run and play. ",
    "frBio":"Johny est épileptique et ne communique pas verbalement. Il aime regarder les autres enfants courir et jouer.  "},

    {"name":"Julien",
    "enBio":"Julien has epilepsy and developmental disabilities.  While he has used a wheelchair, he is also learning to walk with assistance.  He is a shy boy who prefers to spend time alone.  He is very cooperative with his caregivers and enjoys watching TV. ",
    "frBio":"Julien est épileptique et souffre de troubles du développement. Bien qu’il se sert d’un fauteuil roulant, il apprend à marcher avec de l’aide. Il est un garçon timide qui préfère être seul. Il est très coopératif avec ses fournisseurs de soins et aime regarder la télévision. "},

    {"name":"Laurent",
    "enBio":"Laurent is 10 years old and in grade 5.  He loves math and wants to work in the business world when he grows up. He loves doing schoolwork, and playing jump rope and dominos. His favourite colour is red and he is an amazing dancer.",
    "frBio":"Laurent est un garçon de 10 ans qui est en 5e année. Il aime les mathématiques et veut travailler dans le monde des affaires lorsqu’il sera plus grand. Il aime faires ses devoirs et jouer à la corde à sauter et aux dominos. Sa couleur préférée est le rouge et il est un excellent danseur."},
    
    {"name":"Lovely",
    "enBio":"Lovely has physical and developmental disabilities and uses a wheelchair.  While she is non-verbal, Lovely interacts with staff and the other children through gestures, facial expressions and her beautiful smile.",
    "frBio":"Lovely souffre d’incapacités physiques et de troubles du développement et se sert d’un fauteuil roulant. Bien qu’elle ne puisse pas communiquer verbalement, Lovely interagit avec les employés et les autres enfants par ses gestes, ses expressions faciales et son beau sourire."},

    {"name":"Lucie",
    "enBio":"Lucie has physical and developmental disabilities and uses a wheelchair.  While she is unable to communicate verbally, she often makes her views known through gestures, smiles and facial expressions.   She enjoys being with the other children and meeting new visitors to Zanmi Beni. ",
    "frBio":"Lucie souffre d’incapacités physiques et de troubles du développement et se sert d’un fauteuil roulant. Bien qu’elle ne soit pas capable de communiquer verbalement, elle s’exprime par ses gestes, ses sourires et ses expressions faciales. Elle aime être en présence des autres enfants et rencontrer les nouveaux visiteurs de Zanmi Beni."},

    {"name":"Marco",
    "enBio":"Marco is 9 years old and is in grade 4.  He loves soccer and would like to become a professional goaltender when he grows up. His favourite food is rice and he loves dogs. ",
    "frBio":"Marco est un garçon de 9 ans qui est en 4e année. Il aime jouer au soccer et aimerait devenir un gardien de but professionnel lorsqu’il sera plus grand. Sa nourriture préférée est le riz et il aime les chiens."},

    {"name":"Marcus",
    "enBio":"Marcus is 11 years old and is in grade 6.  He loves to play soccer with his friends at Zanmi Beni. When he’s older, he would like to become a pilot, because he often looks at airplanes in the sky and imagines himself flying. ",
    "frBio":"Marcus est un garçon de 11 ans qui est en 6e année. Il aime jouer au soccer avec ses amis de Zanmi Beni. Lorsqu’il sera plus grand, il aimerait devenir pilote parce qu’il regarde souvent les avions dans le ciel et s’imagine en train de voler."},

    {"name":"Marken",
    "enBio":"Marken has physical and developmental disabilities and does not communicate verbally.  Staff and the children communicate with him through gestures.  Marken uses a wheelchair. ",
    "frBio":"Marken souffre d’incapacités physiques et de troubles du développement et ne communique pas verbalement. Les employés et les enfants communiquent avec lui en faisant des gestes. Marken se sert d’un fauteuil roulant."},

    {"name":"Martine",
    "enBio":"Martine has physical and development developmental disabilities. While Martine uses a wheelchair, she is also learning to walk with assistance. Martine enjoys being around the other children and she has a great sense of humor. She is always enthusiastic when she sees old friends and when she meets new ones. ",
    "frBio":"Martine souffre d’incapacités physiques et de troubles du développement. Bien que Martine se serve d’un fauteuil roulant, elle apprend à marcher avec de l’aide. Martine aime être entourée des autres enfants et a un excellent sens de l’humour. Elle est toujours enthousiaste lorsqu’elle voit des amis de longue date et lorsqu’elle rencontre de nouvelles personnes. "},

    {"name":"Merline",
    "enBio":"Merline is 10 years old and is developmentally disabled.  She was born with bilateral clubbed feet and has undergone corrective surgery and continues to receive physical therapy. ",
    "frBio":"Merline est une fille de 10 ans qui a des troubles du développement. Elle est née avec deux pieds bots, a subi une opération corrective et fait toujours de la physiothérapie."},

    {"name":"Michara",
    "enBio":"Michara came to Zanmi Beni in 2012. Michara has physical and developmental disabilities and uses a wheelchair. She is quiet and is not able to communicate verbally.",
    "frBio":"Michara est arrivée à Zanmi Beni en 2012. Michara souffre d’incapacités physiques et de troubles du développement et se sert d’un fauteuil roulant. Elle est timide et n’est pas capable de communiquer verbalement."},

    {"name":"Micha",
    "enBio":"Micha is the baby girl of the original cohort of children at Zanmi Beni. Cute as a button, Micha is vivacious, bright and a gifted soccer player. 9 years old, fourth grade student Micha is sometimes known as the “shoe box” baby. In 2010 she was left outside the gates of Zanmi Beni in, you guessed it, a shoe box. With her soccer skills, maybe she will get her name on the box of her own brand of soccer shoes. Oh, and her favorite food is all meat pizza.",
    "frBio":"Micha est une petite fille faisant partie de la première cohorte d’enfants de Zanmi Beni. Absolument adorable, Micha est enjouée, intelligente et excellente joueuse de soccer. Âgée de 9 ans et maintenant en 4e année, Micha est connue comme le « bébé de la boîte à chaussure » parce qu’en 2010, elle a été abandonnée aux portes de Zanmi Beni dans une boîte à chaussure. Grâce à ses talents en soccer, elle verra peut-être son nom sur sa propre boîte à chaussures sport un jour. Sa nourriture préférée est la pizza à la viande."},

    {"name":"Milly",
    "enBio":"Milly has physical and developmental disabilities and while she is unable to communicate verbally her caregivers say that she has the biggest heart at Zanmi. She enjoys being hugged and spending time with others. ",
    "frBio":"Milly souffre d’incapacités physiques et de troubles du développement. Bien qu’elle ne soit pas capable de communiquer verbalement, ses fournisseurs de soins disent qu’elle a le plus grand cœur de Zanmi Beni. Elle aime recevoir des câlins et passer du temps avec les autres enfants."},

    {"name":"Michalle",
    "enBio":"Michaëlle likes to play ball with her best friend Nicole. Her favorite meal is all-meat pizza. She says she loves to spend time with Nicole, even at meal time. ",
    "frBio":"Michaëlle adore jouer au ballon avec sa meilleure amie Nicole. Son repas préféré est de la pizza garnie de viande. Elle affirme qu’elle aime bien passer du temps avec Nicole, même pendant l’heure du repas."},

    {"name":"Mishama",
    "enBio":"One-year-old Mishama came to Zanmi Beni in late 2018, after her mother became too ill to care for her. Mishama is bright animated and always seems to be in a terrific mood. She loves to follow all the comings and goings at Zanmi Beni, and she is always thrilled when her mom is well enough to visit with her.",
    "frBio":"Mishama a un an et est arrivée à Zanmi Beni à la fin de 2018 après que sa mère est devenue trop malade pour prendre soin d’elle. Mishama est pleine de vie et semble toujours de bonne humeur. Elle aime être témoin des allées et venues de Zanmi Beni et elle est toujours heureuse de voir sa mère lorsqu’elle est assez en forme pour la visiter. "
    },

    {"name":"Mona",
    "enBio":"Child's Bio... Some English stuff!",
    "frBio":"Child's Bio... Des choses Françaises!"},

    {"name":"Nephtalie",
    "enBio":"Poised, sophisticated and a talented artist, 18 year old Nephtalie in home schooled and loves to read. Her passion is being an artisan, and she now has her own shop on the Zanmi Beni Campus, Tatelye Beni Kay Nephtalie. Her shop employs 3 workers, and as her work becomes more known, sales of her jewelry and t-shirts will move on-line. Nephtalie Beni is an artist to keep your eye on; she will do great things.",
    "frBio":"Élégante, sophistiquée et talentueuse, Nephtalie est une jeune femme de 18 ans qui a reçu son éducation scolaire à la maison. Elle aime lire et est passionnée par l’artisanat. D’ailleurs, elle a son propre magasin sur le campus de Zanmi Beni nommée Tatelye Beni kay Nephtalie. Elle emploie trois travailleurs et au fur et à mesure que son entreprise prend de l’expansion, elle vendra des bijoux et des t-shirts en ligne. Nephtalie Beni est une artiste à surveiller; elle ira certainement loin. "},

    {"name":"Nicole",
    "enBio":"9-year-old Nicole is in the fourth grade and her favorite color is pink.  She loves to sing, dance and perform on stage, and she is always curious to know what is happening around the campus. Nicole also enjoys arts and crafts and she would like to be a professional dancer when she grows up. ",
    "frBio":"Nicole est une fille de 9 ans qui est en 4e année. Sa couleur préférée est le rose. Elle aime chanter, danser et se produire sur scène. Elle est toujours curieuse de savoir ce qui se déroule autour du campus. Nicole aime aussi l’artisanat et aimerait devenir danseuse professionnelle lorsqu’elle sera plus grande. "},

    {"name":"Ogeline",
    "enBio":"11 year old Ogeline is in the 6th grade and pink is her favorite color. A hardworking and dedicated student, Ogeline hasn’t decided whether she would like to be a doctor or a dentist when she grows up. Ogeline’s quiet, mature leadership skills are evident at home, school and on her competitive soccer team. ",
    "frBio":"Ogeline est une fille de 11 ans qui est en 6e année. Sa couleur préférée est le rose. Élève assidue et dévouée, Ogeline n’a pas encore décidé si elle veut devenir médecin ou dentiste lorsqu’elle sera plus grande. De tempérament timide et autonome, les compétences en leadership d’Ogeline ressortent à la maison, à l’école et au sein de son équipe compétitive de soccer."},

    {"name":"Pascal",
    "enBio":" Pascal has developmental and intellectual disabilities. He does not communicate verbally and uses a wheelchair. He is most comfortable reclining in bed.",
    "frBio":"Pascal souffre de troubles du développement et de déficience intellectuelle. Il ne communique pas verbalement et se sert d’un fauteuil roulant. Il est plus à l’aise dans son lit en position inclinée."},

    {"name":"Pascale",
    "enBio":"Pascale is intellectually and physically disabled and is unable to communicate verbally. He does not engage with or respond to others. He uses a wheelchair and caregivers assist Pascal with all his daily living needs.",
    "frBio":"Pascale souffre d’incapacités physiques et de déficience intellectuelle et ne peut pas communiquer verbalement. Il n’engage pas de dialogue et ne répond pas non plus. Il se sert d’un fauteuil roulant et les fournisseurs de soins s’assurent de répondre à tous ses besoins au quotidien."},

    {"name":"Patrick",
    "enBio":"Patrick is known as the “Mayor” of Zanmi Beni.  He has cerebral palsy and is deaf. While he is unable to communicate verbally, Patrick is very opinionated and makes his views known through gestures and some sign language which he has learned while at Zanmi Beni. Patrick participates in chores around the campus and enjoys helping in the various construction projects that have taken place.  While Patrick originally used a wheelchair, he has learned to walk and run going through many pairs of sneakers every year. He has also become a whiz on the computer.",
    "frBio":"Patrick est reconnu comme le « maire » de Zanmi Beni. Il est atteint d’une paralysie cérébrale et est sourd. Bien qu’il ne soit pas capable de communiquer verbalement, Patrick est borné et fait connaitre son point de vue en utilisant des gestes et le peu de langage des signes qu’il a appris ici, à Zanmi Beni. Patrick participe aux tâches ménagères du campus et aime contribuer aux différents projets de construction. Au départ, Patrick utilisait un fauteuil roulant, mais il a appris à marcher et courir. Durant le processus, il est passé à travers de plusieurs paires de chaussures par année. Il est aussi devenu un pro de l’informatique."},

    {"name":"Peter John",
    "enBio":"Peter is 20 years old and graduated with top honors from high school in 2019. He applied and was accepted to medical school in a highly competitive process. He will begin his medical studies in the fall of 2019.",
    "frBio":"Peter est un garçon de 20 ans, parmi les meilleures de sa classe, qui a obtenu son diplôme de l’école secondaire en 2019. Il a postulé pour faire ses études en médecine et a été accepté; il est passé par un processus très concurrentiel pour en arriver là. Il commencera ses études au cours de l’automne 2019."},

    {"name":"Peterson",
    "enBio":"Peterson is 9 years old and is in grade 4. He is Steff’s best friend, and they like to play soccer and basketball together. His favourite color is blue.",
    "frBio":"Peterson est un garçon de 9 ans qui est en 4e année. Il est le meilleur ami de Steff et les deux garçons aiment jouer au soccer et au basketball ensemble. Sa couleur préférée est le bleu. "},

    {"name":"Rene",
    "enBio":"Rene is 11 years old and in grade 7.  He likes to play basketball with the other kids at Zanmi Beni.  He enjoys school and his favorite subject is math.  He hopes to be a math teacher one day.  His favorite color is red.",
    "frBio":"Rene est un garçon de 11 ans qui est en 7e année. Il aime jouer au basketball avec les autres enfants de Zanmi Beni. Il aime l’école et sa matière préférée est les mathématiques. Il espère devenir professeur de mathématiques un jour. Sa couleur préférée est le rouge."},

    {"name":"Rosemarie",
    "enBio":"Rose Marie is a newcomer to Zanmi Beni. She is intellectually disabled and requires supports to address challenging behavioral issues. She loves music and will dance for hours on end.",
    "frBio":"Rose Marie est une nouvelle venue de Zanmi Beni. Elle a une déficience intellectuelle et a besoin de soutien pour corriger des troubles comportementaux complexes. Elle aime la musique et peut danser pendant des heures."},

    {"name":"Rosemercie",
    "enBio":"Rosemercie is 11 years old and arrived at Zanmi Beni in 2019 after being discovered sleeping at one of Zanmi Lasanté’s clinics. Yveline took Rosemercie under her wing, and the two are now the best of friends. Everyone was thrilled for Rosemercie when she was attended school for the very first time this past September.",
    "frBio":"Rosemercie est une fille de 11 ans qui est arrivée à Zanmi Beni en 2019 après avoir découvert qu’elle dormait dans l’une des cliniques de Zanmi Lasante. Yveline a pris Rosemercie sous son aile et elles sont devenues meilleures amies. Tout le monde était heureux pour Rosemercie lorsqu’elle a été à l’école pour la première fois en septembre dernier."},

    {"name":"Roudy",
    "enBio":"17 Roudy was referred to Zanmi Beni by Haiti’s social services department in 2013. Developmentally delayed, it is unknown how long Roudy had been fending for himself on the streets of Port- Au -Prince. Since joining the family, Roudy has taken on responsibility for feeding and caring for Médor and the other dogs, and he is always cheerful and willing to help out others. Roudy is kind and protective of the younger children and always pleasant and sweet to be around.",
    "frBio":"Roudy est un garçon de 17 ans qui a été référé à Zanmi Beni par le ministère des Services sociaux d’Haïti en 2013. Ayant un retard de développement, il est difficile de dire combien de temps Roudy a été laissé à son propre compte dans les rues de Port-au-Prince. Depuis qu’il fait partie de la famille, Roudy s’occupe de nourrir et prendre soin de Médor et des autres chiens. Il est toujours de bonne humeur et prêt à aider les autres. Roudy est gentil, protège les plus jeunes et est toujours facile à vivre."},

    {"name":"Samuel",
    "enBio":"Samuel is 9 years old and in grade 3.  He loves to laugh and also to make others laugh. His favourite activity is drawing with his best friend Sébastien. When he grows up, Samuel wants to become a professional soccer player. His favorite color is blue. ",
    "frBio":"Samuel est un garçon de 9 ans qui est en 3e année. Il aime rire et faire rire les autres. Son activité préférée est de dessiner avec son meilleur ami Sébastien. Lorsqu’il sera plus grand, Samuel veut devenir un joueur de soccer professionnel. Sa couleur préférée est le bleu. "},

    {"name":"Sandy",
    "enBio":"Sandy is an outgoing girl, in spite of her inability to communicate verbally. She uses a wheelchair and has physical and intellectual disabilities as well as alopecia, a condition that prevents hair growth. Sandy loves attention and enjoys playing with others.",
    "frBio":"Sandy est une jeune fille sociale, malgré son incapacité à communiquer verbalement. Elle se sert d’un fauteuil roulant et souffre d’incapacités physiques et de déficience intellectuelle, en plus d’être atteinte d’alopécie, une condition qui empêche la pousse de cheveux. Sandy aime être le centre de l’attention et jouer avec les autres."},

    {"name":"Sebastien",
    "enBio":"Sébastien is 10 years old and is in grade 5.  He enjoys playing soccer especially with his best friend, Samuel. His favorite color is pink.",
    "frBio":"Sébastien est un garçon de 10 ans qui est en 5e année. Il aime jouer au soccer, surtout avec son meilleur ami Samuel. Sa couleur préférée est le rose. "},

    {"name":"Sherika",
    "enBio":"Sherika is 13 years old and she is homeschooled. Although she is in a wheelchair and sometimes her speech can be difficult to understand, she is a favorite of staff and visitors alike. A girly girl, Sherika loves pink, nail polish, fancy shoes and cake.  Her favorite activities are swimming and chatting with visitors.",
    "frBio":"Sherika est une fille de 13 ans qui reçoit son éducation scolaire à la maison. Bien qu’elle soit en fauteuil roulant et qu’elle ait parfois de la difficulté à bien s’exprimer, elle fait partie des chouchous du personnel et des visiteurs. Petite fille féminine, Sherika aime le rose, le vernis à ongles, les belles chaussures et le gâteau. Ses activités préférées sont de nager et parler avec les visiteurs."},

    {"name":"Stanley",
    "enBio":"Stanley is 21 years old. Since the bakery at Zanmi Beni was built, Stanley has shown a real love of baking.  He woke up very early each day to bake bread not only for the children and staff but also enough for sale to the local community.  His love of baking resulted in his pursuing formal training at culinary school from where he recently graduated. He is also a very warm and dedicated caregiver to the younger children.",
    "frBio":"Stanley est un jeune homme de 21 ans. Depuis que la boulangerie de Zanmi Beni a été construite, Stanley s’est découvert une passion. Il se lève très tôt chaque matin pour non seulement faire cuire le pain pour les enfants et les employés, mais aussi pour en vendre dans sa communauté. Sa passion pour la boulangerie l’a mené à poursuivre ses études en art culinaire et il a récemment obtenu son diplôme. Il est aussi un fournisseur de soins chaleureux et attentionné pour les plus jeunes. "},

    {"name":"Steff",
    "enBio":"11-year-old Steff is in grade 6 and he dreams of becoming a soccer superstar some day. He says that he runs very fast and likes to have his team win when they play for fun at Zanmi Beni.  He also loves to play cards. Steff trains and plays with a competitive soccer team. ",
    "frBio":"Steff est un garçon de 11 ans qui est en 6e année. Il rêve de devenir un joueur vedette de soccer. Il dit qu’il court très vite et qu’il aime faire gagner son équipe lorsqu’il joue pour le plaisir avec les autres enfants de Zanmi Beni. Il aime aussi jouer aux cartes. Steff s’entraine et joue dans une équipe compétitive de soccer. "},

    {"name":"Stephane",
    "enBio":"Stephane is 11 years old and is in grade 6.  He enjoys playing dominoes with the other kids at Zanmi Beni and his favorite color is blue.  He is a hard working student who enjoys school. He also trains and plays on a competitive soccer team.",
    "frBio":"Stephane est un garçon de 11 ans qui est en 6e année. Il aime jouer aux dominos avec les autres enfants de Zanmi Beni et sa couleur préférée est le bleu. Il est un élève dévoué qui aime l’école. Il s’entraine et joue dans une équipe compétitive de soccer. "},

    {"name":"Tommy",
    "enBio":"Tommy is a sweet boy who has severe epilepsy, developmental disabilities, and uses a wheelchair. Caregivers help Tommy with all aspects of his life. He has an endearing smile and everyone loves him and looks out for him. ",
    "frBio":"Tommy est un gentil garçon qui souffre d’épilepsie sévère et de troubles du développement qui se sert d’un fauteuil roulant. Les fournisseurs de soins soutiennent Tommy dans tous les aspects de sa vie. Il a un sourire contagieux et tout le monde l’aime et veille sur lui.  "},

    {"name":"Wadley",
    "enBio":"Wadley is an adorable boy who has developmental disabilities. He uses a wheelchair and is unable to communicate with words, but his eyes and infectious laugh says it all. He literally lights up a room drawing people to him.",
    "frBio":"Wadley est un garçon adorable qui souffre de troubles du développement. Il se sert d’un fauteuil roulant et n’est pas capable de communiquer avec des mots, mais ses yeux et son rire contagieux parlent d’eux même. Il illumine n’importe quelle pièce et attire l’attention autour de lui."},

    {"name":"Wendy",
    "enBio":"Wendy is 21 years old and, like Stanley, recently completed his studies at culinary school.  Wendy enjoyed spending time at the Zanmi Beni bakery and canteen where he nurtured his interest in the hospitality industry. Wendy is also very handy with tools, and he has taught himself how to tinker with motorcycles and small appliances,",
    "frBio":"Wendy est un jeune homme de 21 ans qui, comme Stanley, a récemment terminé ses études en art culinaire. Wendy aime passer son temps dans la boulangerie et la cantine de Zanmi Beni, où il nourrit son intérêt pour l’industrie hospitalière. Wendy est aussi très habile avec des outils – il a appris par lui-même comment réparer des motocyclettes et des petits appareils ménagers."},

    {"name":"Yveline",
    "enBio":"11-year-old Yveline is feisty and sensitive. She is a dedicated student and is now in the fifth grade.  Yveline has been a great strength to new family member Rosemercie, and she has really blossomed with this new responsibility. She enjoys playing games and her favorite color is blue.",
    "frBio":"Yveline est une fille de 11 ans qui est fougueuse et sensible. Elle est une élève dévouée qui est maintenant en 5e année. Yveline a été une grande force pour Rosemercie, nouvelle membre de la famille. Elle s’est vraiment épanouie grâce à ses nouvelles responsabilités. Elle aime jouer à des jeux et sa couleur préférée est le bleu."},
];