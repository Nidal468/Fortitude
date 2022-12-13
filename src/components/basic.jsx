import {useState, useEffect} from 'react';

export function Nav(){
	const[isActive, setIsActive] = useState(false)
	function Hamburger() {
	   setIsActive(current => !current);
	}
	
	return(
		<nav className={isActive? "close":""}>
			<img src="fortitude-logo.png"/>
			<button type="button"><a href="#">Order now</a></button>
			<span onClick={Hamburger}  className="hamburger"></span>
		</nav>
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
						 <li style={{'border-bottom':"1px solid #555"}}><h6>{props.design_name}</h6></li>
						 <li><small>{props.word}</small></li>
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
		 <div className="card-body">
		 <div className="user">
		 <img className="logo" src={props.userimg} />
			 <h2>{props.name}</h2>
			 <p>{props.title}</p>
			 <ul>
			 <li><img src={props.skill_icon_1}/></li>
			 <li><img src={props.skill_icon_2}/></li>
			 <li><img src={props.skill_icon_3}/></li>
			 <li><img src={props.skill_icon_4}/></li>
			 </ul>
			 <div className="bottom-box">
			 <a href={props.contact}>Contact</a>
			 <a href="">Hire Now</a>
			 </div>
			 </div>
		 </div> 
	 )
}