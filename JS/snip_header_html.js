var snip_header_html = '<header> <h1> this is a test 1 </h1> </header>'; 


// call this from the page after including snip_header_html.js
var init_header = function() {
    $("#header_target").html(snip_header_html);
};