import React from "react";
import './header.scss'

const Header=()=>{
    return(
        <div className="header">
            <div className="img">
            <svg xmlns="http://www.w3.org/2000/svg" width="139.825" height="43.416" viewBox="0 0 139.825 43.416">
                <g id="logo" transform="translate(-1.175)">
                    <text id="Agency" transform="translate(62 32)" fill="#fff" font-size="24" font-family="SegoeUI, Segoe UI"><tspan x="0" y="0">Agency</tspan></text>
                    <g id="Polygon" fill="none" stroke-miterlimit="10">
                    <path d="M24,0,46.825,16.584,38.107,43.416H9.893L1.175,16.584Z" stroke="none"/>
                    <path d="M 23.99999809265137 6.180351257324219 L 7.052497863769531 18.49341773986816 L 13.5258674621582 38.41640472412109 L 34.47411346435547 38.41640472412109 L 40.94748306274414 18.49341583251953 L 23.99999809265137 6.180351257324219 M 24 3.814697265625e-06 L 46.82534408569336 16.58358573913574 L 38.10683441162109 43.41640472412109 L 9.893146514892578 43.41640472412109 L 1.174636840820313 16.58358573913574 L 24 3.814697265625e-06 Z" stroke="none" fill="#ef6d58"/>
                    </g>
                    <path id="Polygon-2" data-name="Polygon" d="M9.5,0l9.035,6.564L15.084,17.186H3.916L.465,6.564Z" transform="translate(14 14)" fill="#ef6d58"/>
                </g>
                </svg>
            </div>
                <div className="link">
                    <div className="color_link">About</div>
                    <div className="color_link">Services</div>
                    <div className="color_link">Pricing</div>
                    <div className="color_link">Blog</div>
                </div>
                <button className="btn">
                    CONTACT
                </button>

                <div className="header_title">Portfolio</div>
                <div className="description">
                Agency provides a full service range including technical skills, design, business understanding.
                </div>
        </div>
    )
}

export default Header