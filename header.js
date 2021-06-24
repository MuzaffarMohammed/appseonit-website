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
                  <li><a href="${URI}static_website_development.html">Static Website Development</a></li>
                  <li><a href="${URI}dynamic_website_development.html">Dynamic Website Development</a></li>
                  <li><a href="${URI}e-commerce_website_development.html">E-commerce Website Development</a></li>
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
                  <li><a href="${URI}search_engine_optimization.html">Search Engine Optimization</a></li>
                  <li><a href="${URI}search_engine_marketing.html">Search Engine Marketing</a></li>
                  <li><a href="${URI}social_media_optimization.html">Social Media Optimization</a></li>
                  <li><a href="${URI}social_media_marketing.html">Social Media Marketing</a></li>
                  <li><a href="${URI}google_analytics.html">Google Analytics</a></li>
                  <li><a href="${URI}google_ads.html">Google Ads</a></li>
                  <li><a href="${URI}email_marketing.html">Email Marketing</a></li>
                </ul>
            </li>
            <li><a href="${URI}about.html">About</a></li>
            <!--<li><a href="#portfolio">Portfolio</a></li>-->
            <!--<<li><a href="#team">Team</a></li>-->
            <li><a href="${URI}contact.html">Contact</a></li>
          </ul>

`)
}