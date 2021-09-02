// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <nav className="nav-header">
    <Link to="/" className="nav-link">
      {' '}
      <p className="nav-text">Home</p>
    </Link>
    <Link to="/about" className="nav-link">
      {' '}
      <p className="nav-text">About</p>
    </Link>
  </nav>
)
export default Header
