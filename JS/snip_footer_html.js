var snip_footer_html = `
<footer class="page-footer red darken">
<div class="container">
    <div class="row">
        <div class="col s12">
            <h5 class="white-text"><b>
              <span class="en" lang="en"> CONTACT US </span> 
              <span class="fr" lang="fr"> CONTACTEZ NOUS </span>
            </b>
            </h5>
            <p class="grey-text text-lighten-4">

                <span class="en" lang="en"> For more information about The Zanmi Beni Foundation, you can follow us on </span>
                <span class="fr" lang="fr"> Pour plus d'informations sur la Fondation Zanmi Beni, vous pouvez nous suivre sur </span>

                <a href="https://www.facebook.com/FriendsofZB/" class="link"> Facebook </a>

                <span class="en" lang="en"> and </span>
                <span class="fr" lang="fr"> et </span>

                <a href="#" class="link"> Twitter </a> </p>
        </div>
    </div>
</div>

<div class="footer-copyright red darken-4">
    <div class="container">
        © 2019 The Zanmi Beni Foundation. All rights reserved.
    </div>
</div>

</footer>

`; 

// call this from the page after including snip_header_html.js
var init_footer = function() {
    $("#footer_target").html(snip_footer_html);
};