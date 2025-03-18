import React from "react";
import "./Contact.css";
function Contact() {
  return (
    <>
      <div className="contact">
        <div className="container">
          <div className="contact_cards">
            <div className="contact_card">
              <h1>Contact us</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
              <div className="inputs">
                <div className="input1">
                  <p>Name</p>
                  <input type="text" />
                </div>
                <div className="input1">
                  <p>Email</p>
                  <input type="email" />
                </div>
                <div className="input1">
                  <p>Message</p>
                  <textarea name="" id=""></textarea>
                </div>
                <div class="checkbox-container">
                  <input type="checkbox" id="terms" />
                  <label for="terms">I accept the Terms</label>
                </div>
              </div>
              <button className="contact_btn">Submit</button>
            </div>
            <div className="contact_imgs">
              <img src="/public/imgs/Image-contact.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="contact_poors">
        <div className="container">
          <div className="porlos_cards">
            <div className="porlos_card">
              <p>
                Trusted by the world's best companies [social proof to build
                credibility]
              </p>
            </div>
            <div className="pors_img">
                <img src="/public/imgs/Vector.png" alt="" />
                <img src="/public/imgs/Black.png" alt="" />
                <img src="/public/imgs/Vector.png" alt="" />
                <img src="/public/imgs/Black.png" alt="" />
                <img src="/public/imgs/Vector.png" alt="" />



            </div>
          </div>
        </div>
      </div>
      <div className="oficce">
        <div className="container">
            <div className="oficce_cards">
                <div className="oficce_card">
                    <img src="/public/imgs/Vector1.svg" alt="" />
                    <h1>Email</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.</p>
                    <a href="#">hello@relume.io</a>
                </div>
                <div className="oficce_card">
                    <img src="/public/imgs/Vector.svg" alt="" />
                    <h1>Live chat</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.</p>
                    <a href="#">Start new chat</a>
                </div>
                <div className="oficce_card">
                    <img src="/public/imgs/Vector2.svg" alt="" />
                    <h1>
                        Phone
                    </h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.</p>
                    <a href="#">+1 (555) 000-0000</a>
                </div>
                <div className="oficce_card">
                    <img src="/public/imgs/Vector3.svg" alt="" />
                    <h1>Office</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in ero.</p>
                    <a href="#">123 Sample St, Sydney NSW 2000 AU</a>
                </div>
            </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
