import '../App.css';

import React from "react";
import './card.css'

function card(){
    return(
        <div class="card">
                <div className="img">
                    <img src="https://scontent.fsgn2-8.fna.fbcdn.net/v/t1.15752-9/378347289_1290299814863355_5120448483321738088_n.png?_nc_cat=102&ccb=1-7&_nc_sid=ae9488&_nc_ohc=NpVVkbe192MAX9kWurT&_nc_ht=scontent.fsgn2-8.fna&oh=03_AdQqSwmR3jgcMjbzWaFctdiyB7tLjnepD_AhpxXkJjaCyA&oe=6530EE55" alt="" />
                </div>
                <div className='content'>
                    <div className="header">
                        <h1>Learn Marketing from Top Instructors.</h1>
                        <span>4.5</span>
                    </div>  
                        <div className="infor">
                        <p>6 Weeks</p>
                        <p>1.5k Students</p>              
                        <p>30.5$</p>
                        </div>  
                        
                </div>
            </div>
    )
}
export default card;
