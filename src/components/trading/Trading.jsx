import React from "react";
import "./Trading.css";
import { Link } from "react-router-dom";

function Trading({ data  }) {
 
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      };
  return (
    <div className="container">
      <div className="trading_cards">
       {data?.map((item)=>{
        return <Link to={`/praduct/${item.id}`}  onClick={scrollToTop}>
        <div className="trading_card">
            
            <img src={item?.img} alt="" />
          <h2>{item?.titel?.slice(0, 15) || "Product Name"}...</h2>
          <p>{item?.deskrip?.slice(0,25) || "Variant"}...</p>
          <span>${item?.price || "55.00"}</span>
        </div>
        </Link>
       })}
      </div>
    </div>
  );
}

export default Trading;

