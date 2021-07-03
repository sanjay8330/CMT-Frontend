import React from "react";
import '../../css/style.css';
import { MDBCol} from "mdbreact";

const FooterPagePro = () => {
  return (
    <div>
      <footer id="footer">
        <div class="footer-top">
          <div class="container">
            <div class="row"></div>
            <div class="col-lg-3 col-md-6 footer-info">
              <div id="logo" class="me-auto">
                <h3><a href="index.html">CMT-<span>2021</span></a></h3>
              </div>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            </div>

            <MDBCol md="3" lg="3" xl="3" className="mx-auto mt-3">
              <div class="col-lg-12 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><i class="bi bi-chevron-right"></i> <a href="/">Home</a></li>
                  <li><i class="bi bi-chevron-right"></i> <a href="#">Conferenece</a></li>
                  <br />
                </ul>
              </div>
            </MDBCol>


            <MDBCol md="3" lg="3" xl="3" className="mx-auto mt-3">
              <div class="col-lg-12 col-md-6 footer-contact">
                <h4>Contact Us</h4>
                <p>
                  111/7 <br />
                  Malabe Rd<br />
                  Colombo 5 <br />
                  <strong>Phone:</strong> 011 456 9994<br />
                  <strong>Email:</strong> CMT@gmail.com<br />
                </p>
              </div>
            </MDBCol>

          </div>
        </div>

        <div class="container">
          <div class="copyright">
            &copy; Copyright <strong>CMT - 2021</strong>. All Rights Reserved
          </div>
          <div class="credits">
            Designed by: <a href="/">Group - 2021S1_REG_WE_28</a>
          </div>
        </div>
      </footer>
    </div>
  );
}


export default FooterPagePro;