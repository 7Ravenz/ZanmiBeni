var snip_header_html = `
<header> 

<!-- Navigation Bar --> 
<div class="navbar-fixed">
    <nav>
        <!-- Top Border -->
        <div class="nav-wrapper red">

            <a class="btn waves-effect white grey-text darken-text-4 " id="English_btn"> English </a>
            <a class="btn waves-effect white grey-text darken-text-4" id="French_btn"> Français </a>

            <!-- MOBILE NAVBAR -->
            <a href="#" data-target="mobile-demo" class="sidenav-trigger"><i class="material-icons">menu</i></a>

            <!-- DESKTOP NAVBAR -->
            <ul id="nav-mobile" class="left hide-on-med-and-down">

                <!-- Logo Button -->
                <li>
                    <a href="index.html"> <img src="../IMAGES/ZanmiBeni-HEADER-LOGO.jpg" height="100"> </a>
                </li>

                <!-- Dropdown Button -->
                <li> <a class="dropdown-trigger" href="#1" data-target="dropdown1">Zanmi Beni<i class="material-icons right"> arrow_drop_down</i></a> </li>
                <ul id="dropdown1" class="dropdown-content">
                    <li>
                        <a href="../index.html">
                            <span class="en" lang="en"> Our Story </span>
                            <span class="fr" lang="fr"> Notre Histoire </span>
                        </a>
                    </li>

                    <li>
                        <a href="../HTML/OurKids.html">
                            <span class="en" lang="en"> Meet the Kids </span>
                            <span class="fr" lang="fr"> Rencontrez les Enfants </span>
                        </a>
                    </li>

                    <li>
                        <a href="../HTML/WhatsHappening.html">
                            <span class="en" lang="en"> What's Happening </span>
                            <span class="fr" lang="fr"> Qu'est ce qui se passe </span>
                        </a>
                    </li>

                    <li>
                        <a href="../HTML/CurrentProjects.html">
                            <span class="en" lang="en"> Current Projects </span>
                            <span class="fr" lang="fr"> Projects Actuel </span>
                        </a>
                    </li>
                </ul>

                <li>
                    <a href="#">
                        <span class="en" lang="en"> Club Carl </span>
                        <span class="fr" lang="fr"> Club Carl </span>
                    </a>
                </li>

                <li>
                    <a href="#">
                        <span class="en" lang="en"> Tour Our Campus </span>
                        <span class="fr" lang="fr"> Visitez Notre Campus </span>
                       
                    </a>
                </li>

                <li>
                    <a href="#">
                        <span class="en" lang="en"> Donation </span>
                        <span class="fr" lang="fr"> Faire un don </span>
                    </a>
                </li>
            </ul>
        </div>
    </nav>
</div>

<!-- Side navigation bar for mobile menu -->
<ul class="sidenav" id="mobile-demo">
    <li>
        <div class="user-view">
            <div class="background">
                <img src="../IMAGES/ZanmiBeniPicture1.JPG">
            </div>
            <a href="../index.html"><img src="../IMAGES/ZanmiBeni-HEADER-LOGO.jpg" height="100"></a>
        </div>
    </li>
    <li>
        <a href="../index.html">
            <span class="en" lang="en"> Our Story </span>
            <span class="fr" lang="fr"> Notre Histoire </span>
        </a>
    </li>

    <li>
        <a href="../HTML/OurKids.html">
            <span class="en" lang="en"> Meet the Kids </span>
            <span class="fr" lang="fr"> Rencontrez les Enfants </span>
        </a>
    </li>

    <li>
        <a href="../HTML/WhatsHappening.html">
            <span class="en" lang="en"> What's Happening </span>
            <span class="fr" lang="fr"> Qu'est ce qui se passe </span>
        </a>
    </li>

    <li>
        <a href="../HTML/CurrentProjects.html">
            <span class="en" lang="en"> Current Projects </span>
            <span class="fr" lang="fr"> Projects Actuel </span>
        </a>
    </li>

    <li>
        <a href="#">
            <span class="en" lang="en"> Club Carl </span>
            <span class="fr" lang="fr"> Club Carl </span>
        </a>
    </li>

    <li>
        <a href="#">
            <span class="en" lang="en"> Tour Our Campus </span>
            <span class="fr" lang="fr"> Visitez Notre Campus </span>
        </a>
    </li>

    <li>
        <a href="#">
            <span class="en" lang="en"> Donation </span>
            <span class="fr" lang="fr"> Faire un don </span>
        </a>
    </li>
</ul>

<!-- Code for the side nav -->
<ul class="sidenav" id="mobile-demo">
    <li>
        <div class="user-view">
            <div class="background">
                <img src="../IMAGES/ZanmiBeniPicture1.JPG">
            </div>
            <a href="../HTML/index.html"><img src="../IMAGES/ZanmiBeni-HEADER-LOGO.jpg" height="100"></a>
        </div>
    </li>
    <li> <a href="#!" class="waves-effect"> About Us </a> </li>
    <li> <a href="#!" class="waves-effect"> Our Kids </a></li>
    <li> <a href="/HTML/Contact.html" class="waves-effect"> Contact </a> </li>
    <li> <a href="/HTML/Donate.html" class="waves-effect"> Donate </a></li>
</ul>

</header>
`; 


// call this from the page after including snip_header_html.js
var init_header = function() {
    $("#header_target").html(snip_header_html);
};