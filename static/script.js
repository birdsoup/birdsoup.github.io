
function load_page(pageToLoad) {
    $('#content').load(pageToLoad,'', function() {
        var email = document.getElementById("email");

        if (email != null)
        {
            var part1 = "&#099;&#099;&#112;&#111;&#119;&#101;&#114;";
            var part2 = "&#115;&#064;&#098;&#117;&#046;&#101;&#100;&#117;";
            email.innerHTML = part1 + part2;
        }
        $(function() {
            $('.gallery_item').on('click', function(event) {
                $('.imagepreview').attr('src', $(this).find('img').attr('src'));
                $('#imagemodal').modal('show');   
            }); 
        });
        check_pdf();

    });    
}

function check_pdf() {
    if( $('.pdf-viewer').css('display')=='none') {
        document.location = "/static/resume.pdf";
    }
}

$(document).ready(function() {
    //if loading directly to a fragment, load that page
    if (document.location.href.indexOf("#") >= 0) {
        var url = document.location.href;
        var new_url = url.substring(url.lastIndexOf("#") + 1, url.length);
        load_page(new_url + " #content");
    }

    //set up link handler to load new content
    $('.link').click(function() {
        //if the href contains .com it's pointing to a different domain.
        if ($(this).attr('href').indexOf(".com") < 0) {
            var pageToLoad = $(this).attr('href') + ' #content';
            load_page(pageToLoad);

            //update the fragment to show which page is shown
            var tmp_url = document.location.href.split("#")[0];
            document.location = tmp_url + "#" + $(this).attr('href');

            return false;
        }
        return true;

    });
    check_pdf();
});