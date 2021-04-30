import { Link } from 'react-router-dom'
import { useState } from 'react'




const HeaderBottom = () => {

	const [token, setToken] = useState(window.localStorage.getItem('sessionToken'))

	function DropDown() {
		document.getElementById('kategore-box').classList.toggle('active');
		document.getElementById('regions').classList.remove('active');
	}

	function SearchMaps() {
		document.getElementById('regions').classList.toggle('active');
		document.getElementById('kategore-box').classList.remove('active');
	}
	

	function CloseSelect() {
		document.getElementById('kategore-box').classList.remove('active');
	}
	function CenterSearch() {
		const CenterInputSearch = document.querySelector('#inputSearch');
		document.getElementById('kategore-box').classList.remove('active');
		document.getElementById('regions').classList.remove('active');
		CenterInputSearch.classList.add('active')
		CenterInputSearch.focus()

		CenterInputSearch.addEventListener('blur', ()=>{

			CenterInputSearch.classList.remove('active')
			CenterInputSearch.value = ''
		})
	}


	return (
		<div className="header-inner-bottom container">
			<div className="header-inner-bottom-left">

				<div className="header-inner-bottom-left-select kategorya" onClick={DropDown}>
					<span className="header-inner-bottom-left-select__span">Любая категория</span>
				</div>

				<div className="kategore-item" id="kategore-box">
					<button className="kategore-item__text" onClick={CloseSelect}>Автомобили</button>
					<button className="kategore-item__text" onClick={CloseSelect}> Недвижимость</button>
					<button className="kategore-item__text" onClick={CloseSelect}> Электроника</button>
					<button className="kategore-item__text" onClick={CloseSelect}> Работа</button>
					<button className="kategore-item__text" onClick={CloseSelect}> Личные вещи</button>
					<button className="kategore-item__text" onClick={CloseSelect}>  Дом и Сад</button>
					<button className="kategore-item__text" onClick={CloseSelect}> Стройка и ремонт</button>
					<button className="kategore-item__text" onClick={CloseSelect}>  Хобби и Спорт</button>
					<button className="kategore-item__text" onClick={CloseSelect}>  Бизнес и услуги</button>
				</div>

				<div className="header-inner-bottom-left-select iskatt" onClick={CenterSearch}>
					<span className="header-inner-bottom-left-select__span">Что будем искать ?</span>
					<input type="search" id="inputSearch" className="header-inner-bottom-left-select__search" placeholder="Search" />
				</div>

				<div className="header-inner-bottom-left-select mapss" id="mapss" onClick={SearchMaps}>
					<span className="header-inner-bottom-left-select__span">По всей Узбекистану</span>
				</div>

				<div className="region" id="regions">
					<div className="card">
						<button className="region__text">Андижанская область</button>
						<button className="region__text">Бухарская область</button>
						<button className="region__text">Джизакская область</button>
						<button className="region__text">Каракалпакстан</button>
					</div>
					<div className="card">
						<button className="region__text">Кашкадарьинская область</button>
						<button className="region__text">Навоийская область</button>
						<button className="region__text">Наманганская область</button>
						<button className="region__text">Самаркандская область</button>
					</div>
					<div className="card">
						<button className="region__text">Сурхандарьинская область</button>
						<button className="region__text">Сырдарьинская область</button>
						<button className="region__text">Ташкентская область</button>
						<button className="region__text">Ферганская область</button>
					</div>
					<div className="card">
						<button className="region__text">Хорезмская область</button>
					</div>
				</div>

				<Link to={`/search-pages`} className="header-inner-bottom-left-search">Найти</Link>
			</div>
			<div className="header-inner-bottom-right">
				{
					token ? (
						<Link to={`add-ads`} className="right-link">
							<div className="header-inner-bottom-right-item">
								<span className="header-inner-bottom-right-item__span1">+</span>
								<span className="header-inner-bottom-right-item__span2">Добавить обьявления</span>
							</div>
						</Link>
					) : (
						<div className="header-inner-bottom-right-item">
							<span className="header-inner-bottom-right-item__span1">+</span>
							<span className="header-inner-bottom-right-item__span2">Добавить обьявления</span>
						</div>
					)
				}
			</div>
		</div>
	)
}


export default HeaderBottom;