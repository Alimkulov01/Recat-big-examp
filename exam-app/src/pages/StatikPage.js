import { Link } from "react-router-dom"
import Footer from '../container/Footer/Footer'
import TempBIg from '../assets/images/tmpbig.svg'
import CardBox from '../container/CardBox/CardBox'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Temp1 from '../assets/images/tmp1.svg'
import Temp2 from '../assets/images/tmp2.svg'
import Temp3 from '../assets/images/tmp3.svg'
import Temp4 from '../assets/images/tmp4.svg'
import Temp5 from '../assets/images/tmp5.svg'


import ImgLink1 from '../assets/images/cardimg/recc-img1.png'
import ImgLink2 from '../assets/images/cardimg/recc-img2.png'
import ImgLink3 from '../assets/images/cardimg/recc-img3.png'
import ImgLink4 from '../assets/images/cardimg/recc-img4.png'

import HeaderWrapperBig from "../container/HeaderWrapperBig/HeaderWrapperBig";




const RecARR = [

	{
		imgLink: ImgLink1,
		rectitle: 'Овощная компания. Доставка свежих овощей и фруктов',
		recDate: 'Вчера 22:55',
		recPrice: '39 000 000 сум',
		cardTop: false,

	},
	{
		imgLink: ImgLink2,
		rectitle: 'Овощная компания. Доставка свежих овощей и фруктов',
		recDate: 'Вчера 22:55',
		recPrice: '39 000 000 сум',
		cardTop: true,

	},
	{
		imgLink: ImgLink3,
		rectitle: 'Овощная компания. Доставка свежих овощей и фруктов',
		recDate: 'Вчера 22:55',
		recPrice: '39 000 000 сум',
		cardTop: false,

	},
	{
		imgLink: ImgLink4,
		rectitle: 'Овощная компания. Доставка свежих овощей и фруктов',
		recDate: 'Вчера 22:55',
		recPrice: '39 000 000 сум',
		cardTop: false,

	},
	{
		imgLink: ImgLink1,
		rectitle: 'Овощная компания. Доставка свежих овощей и фруктов',
		recDate: 'Вчера 22:55',
		recPrice: '39 000 000 сум',
		cardTop: false,

	},
	{
		imgLink: ImgLink2,
		rectitle: 'Овощная компания. Доставка свежих овощей и фруктов',
		recDate: 'Вчера 22:55',
		recPrice: '39 000 000 сум',
		cardTop: true,

	},
	{
		imgLink: ImgLink3,
		rectitle: 'Овощная компания. Доставка свежих овощей и фруктов',
		recDate: 'Вчера 22:55',
		recPrice: '39 000 000 сум',
		cardTop: false,

	},
	{
		imgLink: ImgLink4,
		rectitle: 'Овощная компания. Доставка свежих овощей и фруктов',
		recDate: 'Вчера 22:55',
		recPrice: '39 000 000 сум',
		cardTop: false,

	},
	{
		imgLink: ImgLink1,
		rectitle: 'Овощная компания. Доставка свежих овощей и фруктов',
		recDate: 'Вчера 22:55',
		recPrice: '39 000 000 сум',
		cardTop: false,

	},
	{
		imgLink: ImgLink2,
		rectitle: 'Овощная компания. Доставка свежих овощей и фруктов',
		recDate: 'Вчера 22:55',
		recPrice: '39 000 000 сум',
		cardTop: true,

	},
	{
		imgLink: ImgLink3,
		rectitle: 'Овощная компания. Доставка свежих овощей и фруктов',
		recDate: 'Вчера 22:55',
		recPrice: '39 000 000 сум',
		cardTop: false,

	},
	{
		imgLink: ImgLink4,
		rectitle: 'Овощная компания. Доставка свежих овощей и фруктов',
		recDate: 'Вчера 22:55',
		recPrice: '39 000 000 сум',
		cardTop: false,

	},
]


function imgBigest() {
	document.getElementById('bigImg').classList.toggle('active')
	const body = document.querySelector('body').classList.toggle('noscroll')
}

const StatikPage = () => {

	const settings = {
		dots: true,
		infinite: true,
		speed: 190,
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: true,
		speed: 500,

	};



	return (
		<>
		<HeaderWrapperBig/>
			<main className="statik-page">
				<div className="brend-cramp container">
					<Link className="brend-cramp__link" to={`/`}>Объявления </Link>
					<Link className="brend-cramp__link">/ Ташкент Недвижимость </Link>
					<Link className="brend-cramp__link">/ Ташкент Квартиры</Link>
					<Link className="brend-cramp__link">/ Ташкент Продажа </Link>
					<Link className="brend-cramp__link active" to={`/home/rec-name`}> / Новостройки Ташкент</Link>
				</div>
				<h1 className="statik-page__title container">Срочно Голден Хаус Етти Чинор Новостройка 4х ком на 1 этаже юнусабад 5</h1>
				<div className="statik-page-inner container">

					<div className="statik-page-inner-left">

						<div className="statik-page-inner-left-column">
							<img src={Temp1} alt="" className="statik-page-inner-left-column__img" />
							<img src={Temp2} alt="" className="statik-page-inner-left-column__img" />
							<img src={Temp3} alt="" className="statik-page-inner-left-column__img" />
							<img src={Temp4} alt="" className="statik-page-inner-left-column__img" />
							<img src={Temp5} alt="" className="statik-page-inner-left-column__img" />
						</div>
						<div className="statik-page-inner-left-bigImg" onClick={imgBigest} id="bigImg">
							<img src={TempBIg} alt="img" />

						</div>
					</div>


					<div className="statik-page-inner-right">

						<div className="statik-page-inner-right-top">
							<span className="statik-page-inner-right-top__text">Артикул: 4418970</span>
							<span className="statik-page-inner-right-top__text">обновлено: 28.04.17 добавлено: 28.04.17</span>
						</div>

						<h3 className="statik-page-inner-right__price">
							70 000 у.е.
					</h3>

						<Link className="statik-page-inner-right__region">
							Ташкент, Ташкентская область, Юнусабадский район
					</Link>

						<div className="statik-page-inner-right-number">
							<div className="statik-page-inner-right-number-inner">
								<div className="statik-page-inner-right-number-inner-left">
									<span className="statik-page-inner-right-number-inner-left__number">
										99891 166</span>
									<span className="" id="view-number">
										<svg width="38" height="7" viewBox="0 0 38 7" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M4.355 2.379L6.266 2.211V3.891L4.355 3.744L5.51 5.214L4.082 6.096L3.179 4.332L2.276 6.096L0.869 5.214L2.003 3.744L0.113 3.891V2.211L2.003 2.379L0.869 0.887999L2.276 0.00599903L3.179 1.77L4.082 0.00599903L5.51 0.887999L4.355 2.379ZM14.8222 2.379L16.7332 2.211V3.891L14.8222 3.744L15.9772 5.214L14.5492 6.096L13.6462 4.332L12.7432 6.096L11.3362 5.214L12.4702 3.744L10.5802 3.891V2.211L12.4702 2.379L11.3362 0.887999L12.7432 0.00599903L13.6462 1.77L14.5492 0.00599903L15.9772 0.887999L14.8222 2.379ZM25.2894 2.379L27.2004 2.211V3.891L25.2894 3.744L26.4444 5.214L25.0164 6.096L24.1134 4.332L23.2104 6.096L21.8034 5.214L22.9374 3.744L21.0474 3.891V2.211L22.9374 2.379L21.8034 0.887999L23.2104 0.00599903L24.1134 1.77L25.0164 0.00599903L26.4444 0.887999L25.2894 2.379ZM35.7566 2.379L37.6676 2.211V3.891L35.7566 3.744L36.9116 5.214L35.4836 6.096L34.5806 4.332L33.6776 6.096L32.2706 5.214L33.4046 3.744L31.5146 3.891V2.211L33.4046 2.379L32.2706 0.887999L33.6776 0.00599903L34.5806 1.77L35.4836 0.00599903L36.9116 0.887999L35.7566 2.379Z" fill="black" />
										</svg>
									</span>
								</div>
								<span className="statik-page-inner-right-number-inner-right" id="number-view">
									Покозать польностю
							</span>
							</div>
							<div className="statik-page-inner-right-number-inner">
								<div className="statik-page-inner-right-number-inner-left">
									<span className="statik-page-inner-right-number-inner-left__number">99891 166</span>
									<span className="" id="view-number">
										<svg width="38" height="7" viewBox="0 0 38 7" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M4.355 2.379L6.266 2.211V3.891L4.355 3.744L5.51 5.214L4.082 6.096L3.179 4.332L2.276 6.096L0.869 5.214L2.003 3.744L0.113 3.891V2.211L2.003 2.379L0.869 0.887999L2.276 0.00599903L3.179 1.77L4.082 0.00599903L5.51 0.887999L4.355 2.379ZM14.8222 2.379L16.7332 2.211V3.891L14.8222 3.744L15.9772 5.214L14.5492 6.096L13.6462 4.332L12.7432 6.096L11.3362 5.214L12.4702 3.744L10.5802 3.891V2.211L12.4702 2.379L11.3362 0.887999L12.7432 0.00599903L13.6462 1.77L14.5492 0.00599903L15.9772 0.887999L14.8222 2.379ZM25.2894 2.379L27.2004 2.211V3.891L25.2894 3.744L26.4444 5.214L25.0164 6.096L24.1134 4.332L23.2104 6.096L21.8034 5.214L22.9374 3.744L21.0474 3.891V2.211L22.9374 2.379L21.8034 0.887999L23.2104 0.00599903L24.1134 1.77L25.0164 0.00599903L26.4444 0.887999L25.2894 2.379ZM35.7566 2.379L37.6676 2.211V3.891L35.7566 3.744L36.9116 5.214L35.4836 6.096L34.5806 4.332L33.6776 6.096L32.2706 5.214L33.4046 3.744L31.5146 3.891V2.211L33.4046 2.379L32.2706 0.887999L33.6776 0.00599903L34.5806 1.77L35.4836 0.00599903L36.9116 0.887999L35.7566 2.379Z" fill="black" />
										</svg>
									</span>
								</div>
								<span className="statik-page-inner-right-number-inner-right" id="number-view">
									Покозать польностю
							</span>
							</div>

						</div>

						<div className="rec-author">
							<span className="rec-author__title">Автор обьявлении: </span>
							<Link className="rec-author__name">Зухриддин Темиров</Link>
						</div>

						<div className="message">
							<Link className="message__link" to={`/message`}>Написать автору</Link>
							<Link className="message__link">Предложить свою цену</Link>
						</div>

						<div className="rec-info">

							<div className="rec-info-card">
								<span className="rec-info-card__text">Количество комнат: <br />6</span>
								<span className="rec-info-card__text center">Общая площадь: <br />40 м2</span>
								<span className="rec-info-card__text">Этаж: <br /> 32 </span>
							</div>
							<div className="rec-info-card">
								<span className="rec-info-card__text">Этажность дома: <br /> 6</span>
								<span className="rec-info-card__text center">Состояние квартиры: <br />Первая сдача </span>
								<span className="rec-info-card__text">Этаж: <br /> 32</span>
							</div>
							<div className="rec-info-card">
								<span className="rec-info-card__text">
									Планировка	<br />
									<Link className="rec-info-card__link">Раздельная</Link>
								</span>
								<span className="rec-info-card__text center">
									Год постройки/сдачи <br />
									<Link className="rec-info-card__link">Сдача в 2017</Link>
								</span>
								<span className="rec-info-card__text">Ремонт <br />Авторский проект</span>
							</div>
							<div className="rec-info-card">
								<span className="rec-info-card__text">
									Санузел <br />
									<Link className="rec-info-card__link">2 санузла и более</Link>
								</span>
								<span className="rec-info-card__text center">
									Меблирована <br />
									<Link className="rec-info-card__link">Да</Link>
								</span>
								<span className="rec-info-card__text">Высота потолков  <br /> 32</span>
							</div>

							<div className="rec-info-card-big">
								<span className="rec-info-card-big__text">Рядом есть</span>
								<br />
								<Link className="rec-info-card__link">Больница, поликлиника, Детская, площадка, Детский сад, Остановки, Парк, зелёная зона, Развлекательные заведения, Рестораны, кафе	</Link>
							</div>
							<p className="rec-info-card__item firs" style={{ marginBottom: 30 + 'px' }}>
								Срочно продаётся 3х ком на 1 этоже 7 этажном кирпичном доме. Новостройка Голден Хаус жылой комплекс Етти Чинор Очень качественный и дорогой ремонт. Комнаты полнастю разделные болшые. 2 сан узла. Для лишних вещей есть кладовка.Ремонт шыкарный обсалютно новый.
						</p>
							<p className="rec-info-card__item">
								Ремонт делолся из очень дорогова материяла. Дорогая класическая кухонная мебель. Джаккузи,Тёплые полы в каждой комнате. Дорогие люстры вовсех комнатах решодки на окнах. Теретория охранается. Всё предусмотренно для детей деские площядки качели итд. Торг наместе. Торопитесь продаю нужны денги. Первый золотой этаж и паследний в этом коплексе. Торопитесь.
						</p>

							<div className="rec-view">
								<span className="rec-view__text">Просмотры:10958</span>
								<Link className="rec-view__link">Пожаловатся</Link>
							</div>

						</div>



					</div>

				</div>

				<div className="bottom-link container">
					<Link className="bottom-link__item active">Похожие объявления</Link>
					<Link className="bottom-link__item">Обьявление автора</Link>
				</div>

				<div className="carusel-rec container">
					<Slider {...settings} className="silder-box">
						{
							RecARR.map((item, index) => (

								<CardBox

									imgLink={item.imgLink}
									cardTitle={item.rectitle}
									cardDate={item.recDate}
									cardPrice={item.recPrice}
									key={index}
									id={index}

								/>
							))
						}
					</Slider>
				</div>
			</main>Ï


			<Footer />
		</>
	)
}

export default StatikPage;


