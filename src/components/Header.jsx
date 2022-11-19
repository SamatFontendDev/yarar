import {Link} from 'react-router-dom'
import SvgIcon from './SvgIcon'
import avatar from '../assets/imgs/user-avatar.png'
import { useState } from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { MOBILE_MENU } from '../store/types'

const Header = () => {
    const mobileMenu = useSelector(state => state.mobileMenu)
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch({type: MOBILE_MENU})
    }


    return(
        <div className="header">
            <div className="header__row">
                <div className="header__left">
                   <Link className='logo' to='/'>
                        <div className="logo-icon">
                            <SvgIcon id='logo'/>
                        </div>
                        <div>
                            <SvgIcon id='goodSerfing'/>
                        </div>
                   </Link>
                </div>
                <div className="header__right">
                    {mobileMenu ? 
                        <div className='close' onClick={handleClick}>
                            <SvgIcon id='close' width='24' height='24' />
                        </div>
                         :
                         <div onClick={handleClick} className="humburger">
                            <div className="line"></div>
                            <div className="line"></div>
                            <div className="line"></div>
                        </div>
                    }
                    
                    <div className="user">
                        <div className="user__name">Владислав</div>
                        <div className="user__avatar">
                            <img src={avatar} alt="аватар" />
                        </div>
                        <div className="user__icon">
                            <SvgIcon id='arrow-down' fill='black'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header