import {useState, useEffect} from 'react';

export function Nav(){
	
	return(
		<nav >
			<img src="fortitude-logo.png"/>
			<button type="button"><a href="#">Order now</a></button>
		</nav>
	)
}
export function Menu() {
	const[isActive, setIsActive] = useState(false)
	function Hamburger() {
	   setIsActive(current => !current);
	}
   return(
		 <div className={isActive? "close":""}>
			 <span onClick={Hamburger}  className="hamburger"></span>
			 <div className="menu-body">
				 <h3>Menu</h3>
				 <ul>
					 <li><a href="/">Lobby</a></li>
					 <li><a href="/designs">Designs</a></li>
					 <li><a href="/members">Members</a></li>
					 <li><a href="#">Contact Us</a></li>
				 </ul>
		 </div>
		 </div>
	 )
}
export function Designs(props) {
   return(
		 <div className="design-cards">
			 <img src={props.image}/>
				 <div className="design-info">
					 <img src={props.logo}/>
					 <ul>
						 <li><h5>{props.name}</h5></li>
						 <li><h6>{props.design_name}</h6></li>
					 </ul>
				 </div>
		 </div>
	 )
}
export function Box(props){
	return(
		<div className="box2">
			<img src={props.image}/>
			<ul>
				<li><h3>{props.name}</h3></li>
				<li><p>{props.info}</p></li>
			</ul>
		</div>
	)
}
export function MemberCard(props) {
   return(
		<div className="member-body">
		<div className="skill-body">
		<div className="member-nav"></div>
		<div className="member-skill">
		<div className="skill-box"></div>
		<div className="member-info"></div>
		</div>
		</div>
		<div className="member-price">
		<div className="member-offer">
			<h4><i class="fi fi-rr-gift" style={{"margin-right":"5px"}}></i>Available Offer</h4>
			<div className="offer">
			<div className="offer-text">
				<h2>Buy 1 get 1</h2>
				<p>For up to 3 orders! </p>
				<div className="price"><h2 style={{"font-weight":"400"}}>Just 80$</h2></div>
				<div className="offer-info">
					<h5><i className="fi fi-rr-clock-three" style={{"margin-right":"6px"}}></i>Time Left- 2days</h5>
				</div>
			</div>
			</div>
			<div className="offer-btn"><h3><i class="fi fi-rr-shopping-cart" style={{"margin-right":"10px"}}></i>Purchase Now</h3></div>
		</div>
		<div className="member-list"></div>
		</div>
		</div>
	 )
}