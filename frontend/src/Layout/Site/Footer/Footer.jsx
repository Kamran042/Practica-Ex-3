import React from 'react'
import "./Footer.scss"

const Footer = () => {
  return (
    <footer class="footer">
      <div class="container">



        <div class="footer_content">
          <div class="row">

            <div class="col-lg-3 footer_col">

              <div class="logo_container">
                <div class="logo">
                  <img src="https://preview.colorlib.com/theme/course/images/logo.png.webp" alt="" />
                    <span>course</span>
                </div>
              </div>
              <p class="footer_about_text">In aliquam, augue a gravida rutrum, ante nisl fermentum nulla, vitae tempor nisl ligula vel nunc. Proin quis mi malesuada, finibus tortor fermentum, tempor lacus.</p>
            </div>

            <div class="col-lg-3 footer_col">
              <div class="footer_column_title">Menu</div>
              <div class="footer_column_content">
                <ul>
                  <li class="footer_list_item"><a href="#">Home</a></li>
                  <li class="footer_list_item"><a href="#">About Us</a></li>
                  <li class="footer_list_item"><a href="courses.html">Courses</a></li>
                  <li class="footer_list_item"><a href="news.html">News</a></li>
                  <li class="footer_list_item"><a href="contact.html">Contact</a></li>
                </ul>
              </div>
            </div>

            <div class="col-lg-3 footer_col">
              <div class="footer_column_title">Usefull Links</div>
              <div class="footer_column_content">
                <ul>
                  <li class="footer_list_item"><a href="#">Testimonials</a></li>
                  <li class="footer_list_item"><a href="#">FAQ</a></li>
                  <li class="footer_list_item"><a href="#">Community</a></li>
                  <li class="footer_list_item"><a href="#">Campus Pictures</a></li>
                  <li class="footer_list_item"><a href="#">Tuitions</a></li>
                </ul>
              </div>
            </div>

            <div class="col-lg-3 footer_col">
              <div class="footer_column_title">Contact</div>
              <div class="footer_column_content">
                <ul>
                  <li class="footer_contact_item">
                    <div class="footer_contact_icon">
                      <img src="https://preview.colorlib.com/theme/course/images/placeholder.svg" alt="https://www.flaticon.com/authors/lucy-g" />
                    </div>
                    Blvd Libertad, 34 m05200 Arévalo
                  </li>
                  <li class="footer_contact_item">
                    <div class="footer_contact_icon">
                      <img src="https://preview.colorlib.com/theme/course/images/smartphone.svg" alt="https://www.flaticon.com/authors/lucy-g" />
                    </div>
0034 37483 2445 322
                  </li>
                  <li class="footer_contact_item">
                    <div class="footer_contact_icon">
                      <img src="https://preview.colorlib.com/theme/course/images/envelope.svg" alt="https://www.flaticon.com/authors/lucy-g" />
                    </div>hello@company.com
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="footer_bar d-flex flex-column flex-sm-row align-items-center">
          <div class="footer_copyright">
            <span>
              Copyright ©<script type="text/javascript" async="" src="https://www.google-analytics.com/analytics.js"></script><script>document.write(new Date().getFullYear());</script>2024 All rights reserved | This template is made with <i class="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
            </span>
          </div>
          <div class="footer_social ml-sm-auto">
            <ul class="menu_social">
              <li class="menu_social_item"><a href="#"><i class="fab fa-pinterest"></i></a></li>
              <li class="menu_social_item"><a href="#"><i class="fab fa-linkedin-in"></i></a></li>
              <li class="menu_social_item"><a href="#"><i class="fab fa-instagram"></i></a></li>
              <li class="menu_social_item"><a href="#"><i class="fab fa-facebook-f"></i></a></li>
              <li class="menu_social_item"><a href="#"><i class="fab fa-twitter"></i></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
