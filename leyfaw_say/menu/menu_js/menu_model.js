/*
 * Menu application model holds all the urls to the files utilized in the project.
 */
var Menu_model = function(){
    "use strict";
    var pageFileUrls = [];

    (function init(){
        initPage();
    }());

    function initPage(){

        var koylaFiles = {
            name:"koyla",
            htmlUrl:"koyla/koyla.html",
            jsFiles:[
                "koyla/koyla_js/koyla_model.js",
                "koyla/koyla_js/koyla_view.js",
                "koyla/koyla_js/koyla_ctrl.js",
                "koyla/koyla_js/koylaApp.js"
            ]
        };

        var latayFiles = {
            name:"latay",
            htmlUrl:"latay/latay.html",
            jsFiles:[
                "latay/latay_js/latay_model.js",
                "latay/latay_js/latay_view.js",
                "latay/latay_js/latay_ctrl.js",
                "latay/latay_js/latayApp.js"
            ]
        };

        pageFileUrls.push(koylaFiles,latayFiles);
    }

    /* Public method.
     * Returns all the name properties of every object containing urls,
     * this method is used to create buttons to call the files,
     * also it gives base for the getPageFileUrls(pageName) function.
     */
    function getAllPagesNames(){
        var names = [];
        for (var i = 0, len = pageFileUrls.length;i<len;i++){
            names.push(pageFileUrls[i].name);
        }
        return names;
    }

    /*
     * Public method.
     * Returns all the urls of the page according to the pageName.
     */
    function getPageFileUrls(pageName){
        for (var i = 0, len = pageFileUrls.length;i<len;i++){
            if (pageFileUrls[i].name === pageName){
                return pageFileUrls[i];
            }
        }
    }

    function getAllPagesUrls(){
        return pageFileUrls;
    }

    return({
        getAllPagesNames:getAllPagesNames,
        getPageFileUrls:getPageFileUrls,
        getAllPagesUrls:getAllPagesUrls
    });

};
