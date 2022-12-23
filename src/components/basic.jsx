import {useState} from 'react';

import { CircularProgressbar, buildStyles} from 'react-circular-progressbar';

import ProgressProvider from "./ProgressProvider";

import 'react-circular-progressbar/dist/styles.css';

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
export function MemberCard(){
	const [first, setFirst] = useState(0);
	const [second, setSecond] = useState(0);
	const [third, setThird] = useState(0);
	const [fourth, setFourth] = useState(0);
   return(
		<div className="member-body">
		<div className="member-nav">
			<p>Welcome To my Profile!</p>
		</div>
		<div className="skill-body">
		<div className="member-info">
		<div className="profile-box">
				<div className="profile">
					<img src="fate-logo.png"/>
					<ul>
					<li><h4>Fate</h4></li>
					<li><p>Frontend Developer</p></li>
					</ul>
				</div>
				<i class="fi fi-rr-menu-dots"></i>
			</div>
		</div>
		<div className="member-box">
				<div className="box-body">
					<ul>
						<li><img src="Fiverr-Logo.png"/></li>
						<li><h6>Fiverr</h6></li>
					</ul>
					<div className="review">
						<ul>
							<li><h6>4.34</h6></li>
							<li><p>Review</p></li>
						</ul>
						<ul>
							<li><h6>4.34</h6></li>
							<li><p>Review</p></li>
						</ul>
						<ul>
							<li><h6>4.34</h6></li>
							<li><p>Review</p></li>
						</ul>
					</div>
				</div>
				<div className="box-body">
					<ul>
						<li><img src="Fiverr-Logo.png"/></li>
						<li><h6>Fiverr</h6></li>
					</ul>
					<div className="review">
						<ul>
							<li><h6>4.34</h6></li>
							<li><p>Review</p></li>
						</ul>
						<ul>
							<li><h6>4.34</h6></li>
							<li><p>Review</p></li>
						</ul>
						<ul>
							<li><h6>4.34</h6></li>
							<li><p>Review</p></li>
						</ul>
					</div>
				</div>
				<div className="box-body">
					<ul>
						<li><img src="Fiverr-Logo.png"/></li>
						<li><h6>Fiverr</h6></li>
					</ul>
					<div className="review">
						<ul>
							<li><h6>4.34</h6></li>
							<li><p>Review</p></li>
						</ul>
						<ul>
							<li><h6>4.34</h6></li>
							<li><p>Review</p></li>
						</ul>
						<ul>
							<li><h6>4.34</h6></li>
							<li><p>Review</p></li>
						</ul>
					</div>
				</div>
			</div>
		<div className="skill-box">
			<div><p>Member skill level</p><i class="fi fi-rr-menu-dots"></i></div>
			<div className="skill-bar">
				<ul>
					<li onClick={() => setFirst(50)}><ProgressProvider valueStart={100} valueEnd={first}>
          {value => <CircularProgressbar value={value} text={`${value}%`} styles={buildStyles({rotation: 0.25, strokeLinecap: 'butt', textSize: '16px', pathTransitionDuration: 0.5, pathColor: `rgba(250, 0, 0, ${first / 100})`,
    textColor: '#333',
    trailColor: '#e3edf7',
    backgroundColor: '#3e98c7',})} />}
        </ProgressProvider><p>React JS</p></li>
					<li onClick={() => setSecond(80)}><ProgressProvider valueStart={100} valueEnd={second}>
          {value => <CircularProgressbar value={value} text={`${value}%`} styles={buildStyles({rotation: 0.25, strokeLinecap: 'butt', textSize: '16px', pathTransitionDuration: 0.5, pathColor: `rgba(0, 250, 0, ${second / 100})`,
    textColor: '#333',
    trailColor: '#e3edf7',
    backgroundColor: '#3e98c7',})} />}
        </ProgressProvider><p>ES6</p></li>
					<li onClick={() => setThird(60)}><ProgressProvider valueStart={100} valueEnd={third}>
          {value => <CircularProgressbar value={value} text={`${value}%`} styles={buildStyles({rotation: 0.25, strokeLinecap: 'butt', textSize: '16px', pathTransitionDuration: 0.5, pathColor: `rgba(0, 0, 250, ${third / 100})`,
    textColor: '#333',
    trailColor: '#e3edf7',
    backgroundColor: '#3e98c7',})} />}
        </ProgressProvider><p>TailWind</p></li>
					<li onClick={() => setFourth(85)}><ProgressProvider valueStart={100} valueEnd={fourth}>
          {value => <CircularProgressbar value={value} text={`${value}%`} styles={buildStyles({rotation: 0.25, strokeLinecap: 'butt', textSize: '16px', pathTransitionDuration: 0.5, pathColor: `rgba(50, 50, 50, ${fourth / 100})`,
    textColor: '#333',
    trailColor: '#e3edf7',
    backgroundColor: '#3e98c7',})} />}
        </ProgressProvider><p>UI/UX</p></li>
				</ul>
			</div>
		</div>
		</div>
		<div className="member-price">
		<div className="member-list">
		<div className="member-list-info">
		<h5>Member List</h5>
		<i class="fi fi-rr-menu-dots"></i>
		</div>
			<div className="member-list-container">
				<div className="member-profile">
				<img src="fate-logo.png"/>
					<ul>
					<li><h4 style={{"font-weight":"500"}}>Fate</h4></li>
						<li><h6 style={{"font-weight":"300"}}>React Developer</h6></li>
					</ul>
					<a href="#"><i class="fi fi-rr-angle-right"></i></a>
				</div>
				<div className="member-profile">
				<img src="fate-logo.png"/>
					<ul>
					<li><h4 style={{"font-weight":"500"}}>Fate</h4></li>
						<li><h6 style={{"font-weight":"300"}}>React Developer</h6></li>
					</ul>
					<a href="#"><i class="fi fi-rr-angle-right"></i></a>
				</div>
				<div className="member-profile">
				<img src="fate-logo.png"/>
					<ul>
					<li><h4 style={{"font-weight":"500"}}>Fate</h4></li>
						<li><h6 style={{"font-weight":"300"}}>React Developer</h6></li>
					</ul>
					<a href="#"><i class="fi fi-rr-angle-right"></i></a>
				</div>
				<div className="member-profile">
				<img src="fate-logo.png"/>
					<ul>
					<li><h4 style={{"font-weight":"500"}}>Fate</h4></li>
						<li><h6 style={{"font-weight":"300"}}>React Developer</h6></li>
					</ul>
					<a href="#"><i class="fi fi-rr-angle-right"></i></a>
				</div>
				<div className="member-profile">
				<img src="fate-logo.png"/>
					<ul>
					<li><h4 style={{"font-weight":"500"}}>Fate</h4></li>
						<li><h6 style={{"font-weight":"300"}}>React Developer</h6></li>
					</ul>
					<a href="#"><i class="fi fi-rr-angle-right"></i></a>
				</div>
				<div className="member-profile">
				<img src="fate-logo.png"/>
					<ul>
					<li><h4 style={{"font-weight":"500"}}>Fate</h4></li>
						<li><h6 style={{"font-weight":"300"}}>React Developer</h6></li>
					</ul>
					<a href="#"><i class="fi fi-rr-angle-right"></i></a>
				</div>
			</div>
		</div>
			<div className="work">
				<h5 style={{"margin-bottom":"10px"}}>Contact me in</h5>
				<div>
					<ul>
						<li>
							<div style={{"background":"transparent"}}>
								<p>
									<i class="fa-brands fa-linkedin" style={{color:"#009", "padding-right":"5px"}}></i>LinkedIn</p>
							</div>
							<a href="#"><i class="fi fi-rr-angle-right"></i></a>
						</li>
						<li>
							<div style={{"background":"transparent"}}>
								<p>
									<i class="fa-brands fa-linkedin" style={{color:"#009", "padding-right":"5px"}}></i>LinkedIn</p>
							</div>
							<a href="#"><i class="fi fi-rr-angle-right"></i></a>
						</li>
						<li>
							<div style={{"background":"transparent"}}>
								<p>
									<i class="fa-brands fa-linkedin" style={{color:"#009", "padding-right":"5px"}}></i>LinkedIn</p>
							</div>
							<a href="#"><i class="fi fi-rr-angle-right"></i></a>
						</li>
					</ul>
					<h5 style={{"padding":"10px 5px", "text-align":"center"}}>Please message me only when your placing an order or want advise on something related to my field of work</h5>
				</div>
			</div>
		</div>
		</div>
	 )
}