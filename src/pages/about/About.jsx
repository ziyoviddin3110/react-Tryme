import React from "react";
import "./About.css";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
function About() {
  return (
    <>
      <div className="about_bg">
        <div className="container">
          <div className="text_about">
            <h1>Describe what makes your company unique</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique.{" "}
            </p>
          </div>
        </div>
      </div>

      <main>
        <section>
          <div className="container">
            <div className="about_cards">
              <div className="about_card">
                <h1>TRYME Tradings FZC</h1>
                <p>
                  TRYME Tradings FZC Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Fusce varius faucibus massa sollicitudin amet
                  augue. Nibh metus a semper purus mauris duis. Lorem eu neque,
                  tristique quis duis. Nibh scelerisque ac adipiscing velit non
                  nulla in amet pellentesque. Sit turpis pretium eget maecenas.
                  Vestibulum dolor mattis consectetur eget commodo vitae.
                </p>
                <p>
                  Amet pellentesque sit pulvinar lorem mi a, euismod risus
                  rhoncus. Elementum ullamcorper nec, habitasse vulputate. Eget
                  dictum quis est sed egestas tellus, a lectus. Quam ullamcorper
                  in fringilla arcu aliquet fames arcu.Lacinia eget faucibus
                  urna, nam risus nec elementum cras porta. Sed elementum, sed
                  dolor purus dolor dui. Ut dictum nulla pulvinar vulputate sit
                  sagittis in eleifend dignissim. Natoque mauris cras molestie
                  velit. Maecenas eget adipiscing quisque viverra lectus arcu,
                  tincidunt ultrices pellentesque.{" "}
                </p>
              </div>
              <div className="about_imgs">
                <img src="/imgs/Image.png" alt="" />
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="teom_text">
              <h4>Our team</h4>
              <h1>Introduce your team</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
            </div>

            <div className="teom_cards">
              <div className="teom_card">
                <img src="/imgs/Image.svg" alt="" />
                <h2>Full name</h2>
                <h3>Job title</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </p>
                <div className="team_icons">
                  <img src="/imgs/LinkedIn.png" alt="" />
                  <img src="/imgs/Twitter.png" alt="" />
                  <img src="/imgs/Dribble.png" alt="" />
                </div>
              </div>
              <div className="teom_card">
                <img src="//imgs/Image1.png" alt="" />
                <h2>Full name</h2>
                <h3>Job title</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </p>
                <div className="team_icons">
                  <img src="/imgs/LinkedIn.png" alt="" />
                  <img src="/imgs/Twitter.png" alt="" />
                  <img src="/imgs/Dribble.png" alt="" />
                </div>
              </div>
              <div className="teom_card">
                <img src="/imgs/Image2.png" alt="" />
                <h2>Full name</h2>
                <h3>Job title</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </p>
                <div className="team_icons">
                  <img src="/imgs/LinkedIn.png" alt="" />
                  <img src="/imgs/Twitter.png" alt="" />
                  <img src="/imgs/Dribble.png" alt="" />
                </div>
              </div>
              <div className="teom_card">
                <img src="/imgs/Image3.png" alt="" />
                <h2>Full name</h2>
                <h3>Job title</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </p>
                <div className="team_icons">
                  <img src="/imgs/LinkedIn.png" alt="" />
                  <img src="/imgs/Twitter.png" alt="" />
                  <img src="/imgs/Dribble.png" alt="" />
                </div>
              </div>
            </div>
            <div className="teom_leftt">
              <div className="radiuss">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="rigtx_left">
             <div className="left">
             <FaArrowLeftLong/>
             </div>
             <div className="rigtx">
             <FaArrowRightLong/>
             </div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container">
            <div className="currstrome">
              <img src="/imgs/Stars.svg" alt="" />
              <p>
                "A customer testimonial that highlights features and answers
                potential customer doubts about your product or service.
                Showcase testimonials from a similar demographic to your
                customers."
              </p>
              <div className="name_about">
                <div className="imgs_aboutt">
                  <div className="imgssss">
                    <img src="//imgs/Image1.png" alt="" />
                    <div className="imgs_textt">
                      <h2>Name Surname</h2>
                      <p>Position, Company name</p>
                    </div>
                  </div>
                </div>
                <span></span>
                <img src="/imgs/Logo PNG 1.svg" alt="" />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default About;
