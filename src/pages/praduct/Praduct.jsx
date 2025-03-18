import React, { useState } from "react";
import "./Praduct.css";
import { FaChevronRight, FaRegStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";

function Praduct({ data }) {
  const { id } = useParams();
  const [produks] = useState(data.filter((item) => item.id == id));
  const [selectedImage, setSelectedImage] = useState(produks[0].img);
  const [prevImage, setPrevImage] = useState(null);
  const [isChanging, setIsChanging] = useState(false);

  const handleImageClick = (img) => {
    if (img !== selectedImage) {
      setPrevImage(selectedImage);
      setIsChanging(true);
      setTimeout(() => {
        setSelectedImage(img);
        setPrevImage(null);
        setIsChanging(false);
      }, 500);
    }
  };
    const [btn, setBtn]= useState(1)
  return (
    <div className="cotegore">
      <div className="container">
        <div className="cotegor">
          <h3>Category</h3>
          <FaChevronRight />
          <h3>Product name</h3>
        </div>

        <div className="cotegori_cards">
          <div className="cotegori_card">
            {produks[0].imgs?.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Product Image ${index + 1}`}
                onClick={() => handleImageClick(img)}
                className="small-image"
              />
            ))}
          </div>

          <div className="cotegor_card1">
            <div className="image-container">
              {prevImage && (
                <motion.img
                  src={prevImage}
                  alt="Old Image"
                  className="main-image old-image"
                  initial={{ x: 0, opacity: 1 }}
                  animate={{ x: "100%", opacity: 0 }}
                  transition={{ duration: 0.4 }}
                />
              )}

              {!isChanging && (
                <motion.img
                  src={selectedImage}
                  alt="Main Product"
                  className="main-image new-image"
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.4 }}
                />
              )}
            </div>
          </div>

          <div className="cotegor_card2">
            <h1>{produks[0].titel}</h1>
            <h2>${produks[0].price}</h2>
            <div className="star1">
              <div className="start2">
                <FaRegStar /> <FaRegStar /> <FaRegStar /> <FaRegStar />{" "}
                <FaRegStar />
              </div>
              <p>(3.5 stars) • 10 reviews</p>
            </div>
            <p>{produks[0].deskrip}</p>
            <h3>Variant</h3>
            <div className="Variant1">
              <span>Option One</span>
              <span>Option Two</span>
              <span>Option Three</span>
            </div>
            <div className="Quantity">
              <p>Quantity</p>
              <div className="quat_btn">
                <button onClick={()=>{
                  if(btn > 1){

                    setBtn(btn -1)
                  }
                }}>-</button>
                <span>{btn}</span>
                <button onClick={()=>{
                  setBtn(btn +1)
                }}>+</button>
              </div>
            </div>
            <div className="btn">
              <button>Add To Cart</button>
              <button>Buy Now</button>
            </div>
            <h4>Free shipping over $50</h4>
            <div className="desil_block">
              <div className="desalis">
                <h5></h5>
                <select className="desaliss">
                  <option value="option1"> Details</option>
                  <option value="option2"> Select</option>
                  <option value="option3"> Select</option>
                  <option value="option4"> Select</option>
                </select>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat. Aenean faucibus nibh et justo
                  cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                  tristique posuere.
                </p>
              </div>
              <div className="desalis">
                <h5></h5>
                <select className="desaliss">
                  <option value="option1"> Shipping</option>
                  <option value="option2"> Select</option>
                  <option value="option3"> Select</option>
                  <option value="option4"> Select</option>
                </select>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat. Aenean faucibus nibh et justo
                  cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                  tristique posuere.
                </p>
              </div>
              <div className="desalis">
                <h5></h5>
                <select className="desaliss">
                  <option value="option1"> Returns</option>
                  <option value="option2"> Select</option>
                  <option value="option3"> Select</option>
                  <option value="option4"> Select</option>
                </select>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla, ut
                  commodo diam libero vitae erat. Aenean faucibus nibh et justo
                  cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus
                  tristique posuere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Praduct;
