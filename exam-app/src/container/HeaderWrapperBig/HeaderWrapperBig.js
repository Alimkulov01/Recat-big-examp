import HeaderBottom from "../../components/HeaderBottom/HeaderBottom"
import HeaderTop from "../../components/HeaderTop/HeaderTop"



import './BigHeader.scss'

const HeaderWrapperBig = () => {
	return (
		<div className="big-header">
			<div className="big-header-top">
				<HeaderTop />
			</div>

			<HeaderBottom />
		</div>
	)
}

export default HeaderWrapperBig