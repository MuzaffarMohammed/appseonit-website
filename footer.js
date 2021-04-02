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
              <h3  class="appseonit">Appseonit Technologies</h3>
              <p>
                Hyderabad, Telangana-500053, India<br><br>
                <strong>Phone:</strong> +91 9908388809<br>
                <strong>Email:</strong> support@appseonit.com<br>
              </p>
              <div class="social-links mt-3">
                <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
                <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
                <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
                <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
              </div>
            </div>
          </div>

          <div class="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="${DIR_BACK}index.html">Home</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="${URI}about.html">About us</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="${DIR_BACK}index.html#services">Services</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="${URI}">Terms of service</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="${URI}index.html#">Privacy policy</a></li>
            </ul>
          </div>

          <div class="col-lg-3 col-md-6 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li><i class="bx bx-chevron-right"></i> <a href="${URI}software_product_development.html">Software Product Development</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="${URI}custom_software_development.html">Custom Software Development</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="${URI}Enterprise_application_development.html">Enterprise Application Development</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="${URI}desktop_application_development.html">Desktop Application Development</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="${URI}web_application_development.html">Web Application Development</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="${URI}cloud_application_development.html">Cloud Application Development</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="${URI}e-commerce_application_development.html">E-commerce Development</a></li>
              <li><i class="bx bx-chevron-right"></i> <a href="${URI}digital_marketing.html">Digital Marketing</a></li>
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
        &copy; Copyright <strong><span>Appseonit Technologies</span></strong>. All Rights Reserved
      </div>
      <div class="credits">
        
        Designed by <a href="https://www.appseonit.com/"><span class="appseonit">Appseonit Technologies</span></a>
      </div>
    </div>
  </footer>
  <!-- End Footer -->
     `)
  });
})(jQuery);