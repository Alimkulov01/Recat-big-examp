import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './BigCarusel.scss'


import Imgcard from '../../assets/images/card-1.png'
import Imgcard2 from '../../assets/images/card-2.png'
import Imgcard3 from '../../assets/images/card-3.png'

function CaruselFoocus() {


	
}


const BigCarusel = () => {

	const settings = {
		dots: true,
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		
	};

	return (


		<div className="big-carusel">
			<Slider {...settings} className="container">
				<div className="big-carusel-inner-item" >
					<img src={Imgcard} alt="card" />
				</div>
				<div className="big-carusel-inner-item" >
					<img src={Imgcard2} alt="card" />
				</div>
				<div className="big-carusel-inner-item" >
					<img src={Imgcard3} alt="acrd" />
				</div>
				<div className="big-carusel-inner-item" >
					<img src={Imgcard2} alt="card" />
				</div>
			</Slider>
			
		</div>
	)
}

export default BigCarusel