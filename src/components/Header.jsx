import React from "react";
import {Link} from 'react-router-dom'


const Header = ({onClickCart}) =>{
    return(
        <header className='d-flex justify-between align-center p-40'>
            <Link to='/'>
                <div className='d-flex align-center'>
                    <img width={40} height={40} src='/img/logo.png' alt='Logotip'/>
                    <div>
                        <h3 className='text-uppercase'>React Sneakers</h3>
                        <p className='opacity-5'>Магазин лучших кросовок</p>
                    </div>
                </div>
            </Link>
            <ul className='d-flex'>
                <li  onClick={onClickCart} className='mr-30 cu-p'>
                        <img width={20} height={20} src={'/img/cart.svg'} alt='Cart'/>
                        <span>1205 руб.</span>
                </li>
                    <li className='mr-30 cu-p'>
                        <Link to = '/favorites'>
                            <img width={20} height={20} src={'/img/favorite.svg'} alt ='Favorite'/>
                        </Link>
                    </li>

                    <li>
                        <img width={20} height={20} src={'/img/user.svg'} alt='User'/>
                    </li>

            </ul>
        </header>
    );
}
export  default Header;