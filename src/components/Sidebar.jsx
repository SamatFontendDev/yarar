import {Link, useLocation} from 'react-router-dom'
import SvgIcon from './SvgIcon'
import {useSelector} from 'react-redux'

const Sidebar = () => {
    const mobileMenu = useSelector(state => state.mobileMenu)
    const location = useLocation()
    
    console.log(location.pathname);
    return(
        <div className={`sidebar ${mobileMenu ? 'sidebar-mobile' : ''}`}>
            <ul className="sidebar__list">
                <li className="sidebar__item">
                    <Link to='/' className='sidebar__link'>
                        <div className="sidebar__icon">
                            <SvgIcon width='40' height='40' id='home' fill='white' />
                        </div>
                        <div className={`sidebar__text ${location.pathname == '/' ? 'active' : ''}`}>Домой</div>
                    </Link>
                </li>
                <li className="sidebar__item">
                    <Link to='/offers' className='sidebar__link'>
                        <div className="sidebar__icon">
                            <SvgIcon width='40' height='40' id='globus' fill='white' />
                        </div>
                        <div className={`sidebar__text ${location.pathname == '/offers' ? 'active' : ''}`}>Предложения</div>
                    </Link>
                </li>
                <li className="sidebar__item">
                    <Link to='/mail' className='sidebar__link'>
                        <div className="sidebar__icon">
                            <SvgIcon width='40' height='40' id='mail' fill="white" />
                        </div>
                        <div className={`sidebar__text ${location.pathname == '/mail' ? 'active' : ''}`}>Заявки</div>
                    </Link>
                </li>
                <li className="sidebar__item">
                    <Link to='/calendar' className='sidebar__link'>
                        <div className="sidebar__icon">
                            <SvgIcon width='40' height='40' id='calendar' fill='white' />
                        </div>
                        <div className={`sidebar__text ${location.pathname == '/calendar' ? 'active' : ''}`}>Календарь</div>
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar