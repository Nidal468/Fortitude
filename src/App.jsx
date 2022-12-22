import {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";

import {Nav, Designs, Box, MemberCard, Menu} from './components/basic.jsx';
import {Autoplay, A11y} from "swiper";

import './App.css'
import './App2.css'
import './App3.css'
import '../style/nav.css';
import '../style/designs.css';
import '../style/box.css';
import '../style/membercard.css';
import '../style/menu.css';
import "swiper/css";
import "swiper/css/zoom";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";


export function App() { 
         return( 
        <Router>
					<Routes>
						<Route path="/" element={<App1/>}/> 
						<Route path="/designs" element={<App2/>}/> 
						<Route path="/members" element={<App3/>}/> 
					</Routes>
				</Router>
				 ) 
 }
export function App1(){
  return (
		<div className="body1">
			<Menu/>
		<Nav/>
		<div className="home">
			<ul>
			<li><h1>Fortitude designs and develops websites for you at a low cost</h1></li>
			<li><p>Designs.Frontend.Responsive</p></li>
			<li><a href="https://www.fiverr.com/s2/96fa0c1cfc">Order Now At Fiverr</a></li>
			<li><small>We would advise you to contact us before you place an order</small></li>
				</ul>
		</div>
		<div className="body1-items">
		<div className="box1">
			<ul>
			<li><h2>What We Work on</h2></li>
			<li><p>We mainly develope websites with React JS and it's different libraries such as MUI which is famous for its mobile first components, Swiper JS, Bootstrap etc. Other then Frontend development we also design different types of designs.</p></li>
			<li><a>Check Designs</a></li>
		</ul>
		</div>
		<div className="box1">
			<ul>
			<li><h2>Our Work Process</h2></li>
			<li>
				<ul>
				<li><h3>Briefing</h3></li>
				<li><p>In this stage we will listen to your idea and also share some of ours. We will take any samples ,designs ,old code etc that you can kindly provide us.</p></li>
				<li><h3>UI Design</h3></li>
				<li><p>In this stage We will discuss the design for your website. You can provide us with information on how you want your website to look and We will also provide some critical info to help make your website stand out</p></li>
				<li><h3>Start</h3></li>
				<li><p>In this stage We will start developing your website. It will take few days to complete the projects and it might take longer depending on the package. We will inform you of the progress every day and also show you how much is developed and ask you if you want any changes done or not</p></li>
				<li><h3>Revision</h3></li>
				<li><p>After completing the project We will ask you for the final time if you want any changes or not and if you think your fine with how it turn out then we will move on to the next stage</p></li>
				<li><h3>Cleaning</h3></li>
				<li><p>We will try to make the files size shorter and the code more cleaner so you can understand it clearly.</p></li>
				<li><h3>Completion</h3></li>
					<li><p>Your product is completed and We will package your product and send it to you</p></li>
			</ul>
			</li>
				<li><h2>Why You should, Hire Us</h2></li>
				<li>
					<ul>
					<li><h4>We Work Hard</h4></li>
					<li><h4>Creative UI and UX designs</h4></li>
					<li><h4>We are good at Frontend Development</h4></li>
					<li><h4>We are always active and available so you can contact us anytime</h4></li>
				</ul>
				</li>
				<li><h3>We receive orders on Fiverr and You can Contact us with Fiverr, LinkedIn or Disocrd</h3></li>
			<li><a style={{background:"#00D100"}}>Order Now</a></li>
		</ul>
		</div>
		</div>
	  </div>
  )
}
export function App2() {
  return (
		<div className="body2">
		<Menu/>
		<Nav/>
			<div className="body2-text">
			<h1>Nothing great is made alone</h1>
			<p>We take clients ideas, samples, designs and our own ideas, suggestions to your product.We also discuss with our Frontend Developers so it doesn't cause any problems in the time of development</p>
			</div>
		<Swiper
			style={{
          "--swiper-navigation-color": "#333",
          "--swiper-pagination-color": "#333",
        }}
        spaceBetween={10}
        centeredSlides={true}
			  effect={"coverflow"}
			  slidesPerView={"1"}
        grabCursor={true}
			  loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: false,
        }}
        navigation={false}
        modules={[Autoplay, Navigation, A11y]}
        className="design-swiper"
      >
		<SwiperSlide><Designs
			image="mockup.png"
			logo="gojo.png"
			name="Clyde/Graphic Designer"
			design_name="Black Minimalist Design"
			word="Day 1 of posting Minimalist web designs"
			/></SwiperSlide>
			<SwiperSlide><Designs
			image="002.png"
			logo="gojo.png"
			name="Clyde/Graphic Designer"
			design_name="Black Minimalist Design"
			word="Day 1 of posting Minimalist web designs"
			/></SwiperSlide>
			<SwiperSlide><Designs
			image="003.png"
			logo="gojo.png"
			name="Clyde/Graphic Designer"
			design_name="Black Minimalist Design"
			word="Day 1 of posting Minimalist web designs"
			/></SwiperSlide>
			<SwiperSlide><Designs
			image="004.png"
			logo="gojo.png"
			name="Clyde/Graphic Designer"
			design_name="Black Minimalist Design"
			word="Day 1 of posting Minimalist web designs"
			/></SwiperSlide>
			<SwiperSlide><Designs
			image="005.png"
			logo="gojo.png"
			name="Clyde/Graphic Designer"
			design_name="Black Minimalist Design"
			word="Day 1 of posting Minimalist web designs"
			/></SwiperSlide>
		</Swiper>
			<div className="box2-body">
				<h1 style={{margin:"60px 0px"}}>What we will use to Design your website</h1>
				<Box
					image="Figma-logo.png"
					name="Figma"
					info="We are extremely efficient in using Figma and it's various tools"
					/>
				<Box
					image="adobe-xd.png"
					name="Adobe XD"
					info="We are extremely efficient in using Figma and it's various tools"
					/>
				<Box
					image="adobe-ilu.png"
					name="Adobe Illustrator"
					info="We are extremely efficient in using Figma and it's various tools"
					/>
			</div>
			<div className="box2-body">
				<h1 style={{margin:"60px 0px"}}>What we will use to Develop your website</h1>
				<Box
					image="react-logo.png"
					name="React JS"
					info="We are extremely efficient in using Figma and it's various tools"
					/>
				<Box
					image="tailwind-logo.png"
					name="TailWind"
					info="We are extremely efficient in using Figma and it's various tools"
					/>
				<Box
					image="wordpress-logo.png"
					name="WordPress"
					info="We are extremely efficient in using Figma and it's various tools"
					/>
			</div>
	  </div>
  )
}
export function App3() {
  return (
		<div className="body3">
		<Menu/>
			<MemberCard/>
	  </div>
  )
}
