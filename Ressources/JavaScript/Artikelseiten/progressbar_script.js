addEventListener("scroll", function () {
        var viewport = window.innerHeight;
        var offset = window.pageYOffset;
        var site_length = document.body.offsetHeight;
        var footer = document.getElementsByTagName("footer")[0].offsetHeight;

        var progress = (offset*100)/(site_length-footer-viewport);
        document.getElementsByClassName("inner_bar")[0].style.width=progress+"%";
})