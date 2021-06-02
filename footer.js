!(function($) {
  "use strict";
  $(document).ready(function () {
    var URI = "";
    var DIR_BACK = "../";
    if(window.location.pathname.indexOf('index.html') !== -1 || window.location.pathname === "/"){
      URI = "pages/";
      DIR_BACK = "";
    }
    $("#footer-div").html( `
    <!-- ======= Footer ======= -->
  <footer id="footer">
    <div class="footer-top">
      <div class="container">
        <div class="row">
          <div class="col-lg-3 col-md-6">
            <div class="footer-info">
              <div class="d-flex align-items-center">
                <img src="${DIR_BACK}assets/img/appseonit_flower_32x32.png" class="img" alt="">
                <h3  class="appseonit">Appseonit Technologies <br>Private Limited</h3>
               
              </div>
              <p>
                Hyderabad, Telangana-500053, India<br>
                <strong>Phone:</strong> +91 9908388809<br>
                <strong>Email:</strong> support@appseonit.com<br>
              </p>
              <div class="social-links mt-3">
                <a href="#" class="twitter"><img src="${DIR_BACK}assets/img/socialmedia/twitter.png"/></a>
                <a href="#" class="facebook"><img src="${DIR_BACK}assets/img/socialmedia/facebook.png"/></a>
                <a href="#" class="instagram"><img src="${DIR_BACK}assets/img/socialmedia/instagram.png"/></a>
                <a href="#" class="linkedin"><img src="${DIR_BACK}assets/img/socialmedia/linkedin.png"/></a>
              </div>
            </div>
          </div>

          <div class="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><img src="${DIR_BACK}assets/img/socialmedia/chevron-right.png"/><a href="${DIR_BACK}index.html">Home</a></li>
              <li><img src="${DIR_BACK}assets/img/socialmedia/chevron-right.png"/><a href="${URI}about.html">About us</a></li>
              <li><img src="${DIR_BACK}assets/img/socialmedia/chevron-right.png"/><a href="${DIR_BACK}index.html#services">Services</a></li>
              <li><img src="${DIR_BACK}assets/img/socialmedia/chevron-right.png"/><a href="${URI}">Terms of service</a></li>
              <li><img src="${DIR_BACK}assets/img/socialmedia/chevron-right.png"/><a href="${URI}index.html#">Privacy policy</a></li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><img src="${DIR_BACK}assets/img/socialmedia/chevron-right.png"/><a href="${URI}software_product_development.html">Software Product Development</a></li>
              <li><img src="${DIR_BACK}assets/img/socialmedia/chevron-right.png"/><a href="${URI}custom_software_development.html">Custom Software Development</a></li>
              <li><img src="${DIR_BACK}assets/img/socialmedia/chevron-right.png"/><a href="${URI}Enterprise_application_development.html">Enterprise Application Development</a></li>
              <li><img src="${DIR_BACK}assets/img/socialmedia/chevron-right.png"/><a href="${URI}desktop_application_development.html">Desktop Application Development</a></li>
              <li><img src="${DIR_BACK}assets/img/socialmedia/chevron-right.png"/><a href="${URI}web_application_development.html">Web Application Development</a></li>
              <li><img src="${DIR_BACK}assets/img/socialmedia/chevron-right.png"/><a href="${URI}cloud_application_development.html">Cloud Application Development</a></li>
              <li><img src="${DIR_BACK}assets/img/socialmedia/chevron-right.png"/><a href="${URI}website_categories.html#static_website">Static Website Development</a></li>
              <li><img src="${DIR_BACK}assets/img/socialmedia/chevron-right.png"/><a href="${URI}website_categories.html#dynamic_website">Dynamic Website Development</a></li>
              <li><img src="${DIR_BACK}assets/img/socialmedia/chevron-right.png"/><a href="${URI}website_categories.html#e-commerce_website">E-commerce Website Development</a></li>
              <li><img src="${DIR_BACK}assets/img/socialmedia/chevron-right.png"/><a href="${URI}digital_marketing.html">Digital Marketing</a></li>
            </ul>
          </div>

          <div class="col-lg-4 col-md-6 footer-newsletter">
            <h4>Our Newsletter</h4>
            <p>Join our newsletter For the latest updates and promotions .</p>
            <form action="" method="post">
              <input type="email" name="email"><input type="submit" value="Subscribe">
            </form>
          </div>
        </div>
      </div>
    </div>

    <div class="container">
      <div class="copyright">
        &copy; Copyright <strong><span>Appseonit Technologies Private Limited</span></strong>. All Rights Reserved
      </div>
      <div class="credits">
        
        Designed by <a href="https://www.appseonit.com/"><span class="appseonit">Appseonit Technologies Private Limited</span></a>
      </div>
    </div>
  </footer>
  <!-- End Footer -->
     `)
  });
})(jQuery);