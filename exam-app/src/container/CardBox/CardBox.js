import { Link } from 'react-router-dom'


import './CardBox.scss'

const CardBox = ({ id, imgLink, cardTitle, cardDate, cardPrice, cardtop}) => {
	return (
		<Link to={`/home/rec-name`} className={`card-box ${cardtop ? 'active' : ' ' }`} id={id}>
			<div className="card-box-top">
				<img src={imgLink} className="card-box-top__img"/>
				<span className="active-top">TOP</span>
			</div>

			<div className="card-box-text">
				<span className="card-box-text__name">{cardTitle}</span>
				<span className="card-box-text__date">{cardDate}</span>
				<span className="card-box-text__price">{cardPrice}</span>
			</div>

			

		</Link>
	)
}


export default CardBox;