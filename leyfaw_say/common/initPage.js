var Page = (function(){
"use strict";

    (function(){
        init();
    }());

    function init(){
        var footer = document.getElementById('footer');

        var jq = document.createElement('script');
        jq.async = false;
        jq.src = "common/js/jquery-3.1.1.min.js";
        footer.appendChild(jq);

        var mainJs = document.createElement('script');
        mainJs.async = false;
        mainJs.src = "common/loader.js";
        footer.appendChild(mainJs);
    }

}());
