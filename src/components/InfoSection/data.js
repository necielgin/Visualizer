import img1 from '../../images/svg-1.svg';
import img2 from '../../images/svg-2.png'; 
import img3 from '../../images/svg-3.png';

export const aboutObjOne={
	id: 'about',
	lightBg: false,
	lightText:true,
	lightTextDesc: true,
	topLine:'About',
	headline:'How to use Algo-Visualizer?',
	description:'Algo-Visualizer has two different visualizer (pathfinder and sorting) that are accessed by clicking the Visualize button or the Get Started button on the sections bellow. Once you are in one of the visualizer windows you can select different types of algorithms and different metrics like speed or size. After selecting the algorithm that you would like to learn more about you can click the visualize button and watch it work! ',
	buttonLabel:'Get Started',
	imgStart:true,
	img:img2,
	alt:'img2',
	dark:true,
	primary:true,
	darkText:false,
	link:"/sorting"
};
export const homeObjOne={
	id: 'sorting',
	lightBg: true,
	lightText:false,
	lightTextDesc:false,
	topLine:'Sorting Algorithms',
	headline:'What are Sorting Algorithms?',
	description: 'In computer science, Sorting Algorithms are methods of reorganizing a large number of items into some specific order such as lowest to highest, or vice-versa, or even in some alphabetical order. These algorithms take an input list, processes it (i.e, performs some operations on it) and produce the sorted list.',
	buttonLabel:'Visualize',
	imgStart:true,
	img:img1,
	alt:'img',
	dark:false,
	primary:false,
	darkText:true,
	link:"/sorting"
};


export const homeObjThree={
	id: 'pathfinder',
	lightBg: false,
	lightText:true,
	lightTextDesc:true,
	topLine:'Pathfinder Algorithms',
	headline:'What are Pathfinder Algorithms?',
	description: 'Pathfinding algorithms are methods used to find a path from a source to a destination avoiding obstacles and minimizing the costs (time, distance, risks, fuel, price, etc.). This is a common programming challenge which is mainly known from navigation and games.',
	buttonLabel:'Visualize',
	imgStart:true,
	img:img3,
	alt:'img',
	dark:true,
	primary:true,
	darkText:false,
	link:"/pathfinder"
};

