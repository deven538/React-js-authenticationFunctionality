// Write your JS code here
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'
import './index.css'

const LogoutButton = props => {
  const onClickButton = () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <div className="logout-button-container">
      <button type="button" className="logout-button" onClick={onClickButton}>
        Logout
      </button>
    </div>
  )
}
export default withRouter(LogoutButton)
