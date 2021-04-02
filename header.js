!(function($) {
    "use strict";
    $(document).ready(function () {
      addHeaderMenus();
    });
  })(jQuery);

function addHeaderMenus(){
    var URI = "";
    var BACK_DIR_INDEX = "../index.html";
    if(window.location.pathname.indexOf('index.html') !== -1 || window.location.pathname === "/"){
        URI = "pages/";
        BACK_DIR_INDEX = "index.html";
    }
    
    $("#header-div").html( `          
    <ul>
            <li class="active"><a href="${BACK_DIR_INDEX}">Home</a></li>
            <li class="drop-down">
                <a href="${URI}website_categories.html">Web Design</a>
                <ul>
                  <li><a href="${URI}website_categories.html#static_website">Static Website Development</a></li>
                  <li><a href="${URI}website_categories.html#dynamic_website">Dynamic Website Development</a></li>
                  <li><a href="${URI}website_categories.html#e-commerce_website">E-commerce Website Development</a></li>
                </ul>
            </li>
            <li class="drop-down">
                <a href="${URI}software_product_development.html">Software Development</a>
                <ul>
                  <a href="${URI}software_product_development.html"><i></i>Software Product Development</a>
                  <li><a href="${URI}custom_software_development.html">Custom  Software Development</a></li>
                  <li><a href="${URI}Enterprise_application_development.html">Enterprise Application Development</a></li>
                  <li><a href="${URI}desktop_application_development.html">Desktop Application Development</a></li>
                  <li><a href="${URI}web_application_development.html">Web Application Development</a></li>
                  <li><a href="${URI}cloud_application_development.html">Cloud Application Development</a></li>
                </ul>
            </li>
            <li class="drop-down">
                <a href="${URI}digital_marketing.html">Digital Marketing</a>
                <ul>
                  <li><a href="${URI}digital_marketing.html#searchEngineOptimization">Search Engine Optimization</a></li>
                  <li><a href="${URI}digital_marketing.html#searchEngineMarketing">Search Engine Marketing</a></li>
                  <li><a href="${URI}digital_marketing.html#socialMediaoptimization">Social Media Optimization</a></li>
                  <li><a href="${URI}digital_marketing.html#socialMediaMarketing">Social Media Marketing</a></li>
                  <li><a href="${URI}digital_marketing.html#googleAnalytics">Google Analytics</a></li>
                  <li><a href="${URI}digital_marketing.html#googleAds">Google Ads</a></li>
                  <li><a href="${URI}digital_marketing.html#emailMarketing">Email Marketing</a></li>
                </ul>
            </li>
            <li><a href="${URI}about.html">About</a></li>
            <!--<li><a href="#portfolio">Portfolio</a></li>-->
            <!--<<li><a href="#team">Team</a></li>-->
            <li><a href="${URI}contact.html">Contact</a></li>
          </ul>

`)
}