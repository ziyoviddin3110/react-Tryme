import React from 'react'
import "./Medium.css"
function Medium() {
  return (
    <>
        

       <div className="medium_block">
       <div className="container">
            <div className="medium_box">
                <h1>Medium length heading goes here</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.</p>
                <div className="inputs_btn">
                    <input placeholder='Enter your email' type="email" />
                    <button>Sign Up</button>
                </div>
                <p>By clicking Sign Up you're confirming that you agree with our Terms and Conditions.</p>
            </div>
        </div>
       </div>
    </>
  )
}

export default Medium