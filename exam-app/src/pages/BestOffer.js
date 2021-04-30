import { Link } from 'react-router-dom'



import CaruselHeader from "../container/CaruselHeader/CaruselHeader"
import Footer from "../container/Footer/Footer"
import CardBox from "../container/CardBox/CardBox"
import BigCarusel from '../container/BigCarusel/BigCarusel'

import ImgLinkItem from '../assets/images/cardimg/card1.png'
import ImgLinkItem2 from '../assets/images/cardimg/card2.png'
import ImgLinkItem3 from '../assets/images/cardimg/card3.png'
import ImgLinkItem4 from '../assets/images/cardimg/card4.png'
import ImgLinkItem5 from '../assets/images/cardimg/card5.png'
import ImgLinkItem6 from '../assets/images/cardimg/card6.png'
import ImgLinkItem7 from '../assets/images/cardimg/card7.png'
import ImgLinkItem8 from '../assets/images/cardimg/card8.png'
import ImgLinkItem9 from '../assets/images/cardimg/card9.png'
import ImgLinkItem10 from '../assets/images/cardimg/card10.png'
import ImgLinkItem11 from '../assets/images/cardimg/card11.png'
import ImgLinkItem12 from '../assets/images/cardimg/card12.png'
import ImgLinkItem13 from '../assets/images/cardimg/card13.png'
import ImgLinkItem14 from '../assets/images/cardimg/card14.png'
import ImgLinkItem15 from '../assets/images/cardimg/card15.png'
import ImgLinkItem16 from '../assets/images/cardimg/card16.png'



import ImgLink1 from '../assets/images/cardimg/recc-img1.png'
import ImgLink2 from '../assets/images/cardimg/recc-img2.png'
import ImgLink3 from '../assets/images/cardimg/recc-img3.png'
import ImgLink4 from '../assets/images/cardimg/recc-img4.png'

const RecArr = [


	{
		imgLink: ImgLinkItem14,
		rectitle: 'Плиточник',
		recDate: 'Вчера 22:55',
		recPrice: '39 000 000 сум',
		cardTop: true

	},
	{
		imgLink: ImgLinkItem11,
		rectitle: 'Toyota Camry, 2002',
		recDate: 'Вчера 22:55',
		recPrice: '39 000 000 сум',
		cardTop: true

	},
	{
		imgLink: ImgLinkItem2,
		rectitle: 'Маркетолог. Консультирование. Настройка рекламы',
		recDate: 'Вчера 22:55',
		recPrice: '39 000 000 сум',
		cardTop: true,

	},
	{
		imgLink: ImgLinkItem3,
		rectitle: 'Требуется администратор в Отел',
		recDate: 'Вчера 22:55',
		recPrice: '39 000 000 сум',
		cardTop: true,

	},
	{
		imgLink: ImgLinkItem4,
		rectitle: 'Велосипед Merida Big Seven 70 D',
		recDate: 'Вчера 22:55',
		recPrice: '39 000 000 сум',
		cardTop: false

	},
	{
		imgLink: ImgLinkItem5,
		rectitle: 'Женский, комфортный велосипед из Германии',
		recDate: 'Вчера 22:55',
		recPrice: '39 000 000 сум',
		cardTop: false

	},
	{
		imgLink: ImgLinkItem6,
		rectitle: 'Коньки раздвижные Galaxy р-р 36-39',
		recDate: 'Вчера 22:55',
		recPrice: '39 000 000 сум',
		cardTop: false

	},
	{
		imgLink: ImgLinkItem7,
		rectitle: 'Продам свою гоночный байк Mongoose',
		recDate: 'Вчера 22:55',
		recPrice: '39 000 000 сум',
		cardTop: false

	},
	{
		imgLink: ImgLinkItem8,
		rectitle: '1-к квартира, 47 м², 7/18 эт.',
		recDate: 'Вчера 22:55',
		recPrice: '39 000 000 сум',
		cardTop: false

	},
	{
		imgLink: ImgLinkItem9,
		rectitle: 'Торговое помещение, 10 м²',
		recDate: 'Вчера 22:55',
		recPrice: '39 000 000 сум',
		cardTop: false

	},
	{
		imgLink: ImgLinkItem10,
		rectitle: 'Двигатели моторы головки кпп турбины тнвд гарантия',
		recDate: 'Вчера 22:55',
		recPrice: '39 000 000 сум',
		cardTop: false
	},

	{
		imgLink: ImgLinkItem12,
		rectitle: 'Сборочный комплект камаз 43118',
		recDate: 'Вчера 22:55',
		recPrice: '39 000 000 сум',
		cardTop: false

	},
	{
		imgLink: ImgLinkItem13,
		rectitle: 'Продам легендарный BMW K1200S',
		recDate: 'Вчера 22:55',
		recPrice: '39 000 000 сум',
		cardTop: false

	},

	{
		imgLink: ImgLinkItem15,
		rectitle: 'Мастер регулировка дверей замена замков',
		recDate: 'Вчера 22:55',
		recPrice: '39 000 000 сум',
		cardTop: false

	},
	{
		imgLink: ImgLinkItem16,
		rectitle: 'Овощная компания. Доставка свежих овощей и фруктов',
		recDate: 'Вчера 22:55',
		recPrice: '39 000 000 сум',
		cardTop: false


	},
	{
		imgLink: ImgLinkItem,
		rectitle: 'iPhone 6/6+ 16/64/128 Гб (Магазин 1 год гарантии)',
		recDate: 'Вчера 22:55',
		recPrice: '39 000 000 сум',
		cardTop: false,

	},


]

const RecARR = [

	{
		imgLink: ImgLink1,
		rectitle: 'Светодиодная лампа с фронтальным стеклом 10шт',
		recDate: 'Вчера 22:55',
		recPrice: '39 000 000 сум',
		cardTop: false,

	},
	{
		imgLink: ImgLink2,
		rectitle: 'Коттедж 424 м² на участке 22.6 сот.',
		recDate: 'Вчера 22:55',
		recPrice: '39 000 000 сум',
		cardTop: true,

	},
	{
		imgLink: ImgLink3,
		rectitle: '2-к квартира, 55 м², 3/5 эт.',
		recDate: 'Вчера 22:55',
		recPrice: '39 000 000 сум',
		cardTop: false,

	},
	{
		imgLink: ImgLink4,
		rectitle: 'Кровать с закроватным модулем+ матрас Вита 160',
		recDate: 'Вчера 22:55',
		recPrice: '39 000 000 сум',
		cardTop: false,

	},
]

function cardView() {
	document.getElementById('card-add').classList.toggle('active')
}

const BestOffer = () => {
	return (
		<div className="best-offer">
			<CaruselHeader />

			<div className="home-center-top container">
				<Link to="/" className="home-center-top__link">
					Новые объявления
					</Link>
				<Link to="/Лучщие-предложение" className="home-center-top__link active">
					Лучщие предложение
				</Link>
			</div>

			<main className="best-offer-main container">
				<div className="best-offer-main-rec">
					{
						RecArr.map((item, index) => (
							<CardBox

								imgLink={item.imgLink}
								cardTitle={item.rectitle}
								cardDate={item.recDate}
								cardPrice={item.recPrice}
								key={index}
								id={index}
								cardtop={item.cardTop}
							/>
						))
					}
				</div>



				<div className="card-add" id="card-add" onClick={cardView}>
					<span className="card-add__text">
						Покозать еще
					</span>

				</div>



			</main>
			<BigCarusel/>

			<div className="home-bottom container">
				<div className="home-bottom-top">
					<Link to="/" id="0" className="home-bottom-top__link active">Просмотренные</Link>
					<Link to="/" id="1" className="home-bottom-top__link">Выбор редакции</Link>
					<Link to="/" id="2" className="home-bottom-top__link">Сниженные цены</Link>
				</div>

				<div className="card-rec">
					{
						RecARR.map((item, index) => (
							<CardBox
								imgLink={item.imgLink}
								cardTitle={item.rectitle}
								cardDate={item.recDate}
								cardPrice={item.recPrice}
								key={index}
							/>

						))
					}
				</div>
			</div>


			<Footer />
		</div>
	)
}

export default BestOffer