import { Link , useHistory } from 'react-router-dom';
import RegistrationBgk from '../../components/RegistrationBgk/RegistrationBgk';
import './registration.scss';
import Footer from '../Footer/Footer'
import Header from '../Header/Header';
import HeaderWrapperBig from '../HeaderWrapperBig/HeaderWrapperBig';


const Registration = () => {

	const Histry = useHistory()


	function focusInput() {
		document.getElementById('form-inputt').classList.remove('danger')
		
	}

	function OnBlurInput() {
		if(document.getElementById('form-inputt').value <= 1){
			document.getElementById('form-inputt').classList.add('danger')
		}
	}

	function FormSubmit() {
		Histry.push(`/`)
	}




	return (
		<>
		<HeaderWrapperBig/>
		
			<div className="registration container">
			<div className="registration-left">
				<h2 className="registration-left__title">Бесплатная регистрация</h2>
				<form  className="registration-left-form" >
					<input type="text" id="form-inputt" onFocus={focusInput} onBlur={OnBlurInput} placeholder="Темиров Зухриддин" className="registration-left-form__input" required/>
					<button className="registration-left-form__button" id="form-buton" onSubmit={FormSubmit}>Далее</button>
				</form>
			</div>

			<div className="registration-right">
				<RegistrationBgk />
			</div>

		</div>
		<Footer/>
		</>
	)
}


export default Registration;