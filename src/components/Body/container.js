import React from "react";
import './container.css'
function Container(){
    return(
        <div className="container2">
            <div className="title">
                <span>Choose favourite course from top cartegories</span>
                <a href="facebook.com">See all</a>
            </div>
            <div className="bar">
                <div className="cartegories">
                    <div className="cartegories-item">
                        <img src="https://i.imgur.com/zqdQ3rK.png" alt="Marketing" />
                        
                    </div>
                    <div className="cartegories-item">
                        <img src="https://i.imgur.com/ifbmlfb.png" alt="Design" />
                        
                    </div>
                    <div className="cartegories-item">
                        <img src="https://i.imgur.com/62h5NTs.png" alt="Programming" />
                        
                    </div>
                    <div className="cartegories-item">
                        <img src="https://i.imgur.com/rO4Szy2.png" alt="Technology" />
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Container;