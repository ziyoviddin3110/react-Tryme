import React from 'react'
import "./Home.css"
import Trading from '../../components/trading/Trading'
import { FaCube } from 'react-icons/fa'
import Medium from '../../components/medium/Medium'
import { data } from 'react-router-dom'
function Home({data}) {
  return (
    <>
        
        <div className="home_bg">
        <div className="home_bonImgs">

            <div className="container">
                <div className="home_block">
                    <div className="home_box">
                        <h1>Medium length hero headline goes here</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
                        <button>Start Looking</button>
                    </div>
                        
                </div>
            </div>
                    </div>
        </div>



                <main>
                    <section className="TRANDINg">
                       <div className="container">
                      <div className="tradin_block">
                      <div className="tradin_box">
                            <span>TRANDING</span>
                            <h1>Tranding Products</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                        </div>
                        <button>View all</button>
                      </div>
                 
                      <Trading data={data} />
                       </div>
                    </section>

                    <section className='long'>
                    <div className="container">
                        <div className="log_cards">
                            <div className="log_card_imgs">
                                <img src="/public/imgs/long.png" alt="" />
                            </div>
                            <div className="log_card">
                                <h1>Long heading is what you see here in this feature section</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.</p>
                                <div className="log_boxIcons">
                                <div className="log_icons">
                                <FaCube/><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                </div>
                                <div className="log_icons">
                                <FaCube/><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                </div>
                                <div className="log_icons">
                                <FaCube/><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                                </div>
                                </div>


                            </div>
                        </div>
                    </div>
                    </section>
                    <section className="medium">
                        <Medium/>
                    </section>
                </main>

    </>
  )
}

export default Home