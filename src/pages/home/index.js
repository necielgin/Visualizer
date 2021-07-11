import React,{useState} from 'react'
import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import HeroSection from '../../components/HeroSection'
import InfoSection from '../../components/InfoSection';
import {homeObjOne,homeObjThree,aboutObjOne} from '../../components/InfoSection/data'

const Home = () => {
const [isOpen,setIsOpen]=useState(false);

const toggle=()=>{
	setIsOpen(!isOpen);
}

	return (
		<>
			<Sidebar isOpen={isOpen} toggle={toggle}></Sidebar>
			<Navbar toggle={toggle}></Navbar>
			<HeroSection />
			<InfoSection {...aboutObjOne}/>
    			<InfoSection {...homeObjOne}/>
    			<InfoSection {...homeObjThree}/>
		</>
	)
}

export default Home
