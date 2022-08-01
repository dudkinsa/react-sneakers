import React from "react";

const Drawer = ({onCloseCart, onRemove, items = []}) => {

    return (
        <div className="overlay">
            <div className="drawer">
                <h2 className='d-flex justify-between mb-30'>
                    Корзина <img onClick={onCloseCart} className='btnRemove cu-p' src='/img/button-remove.svg'
                                 alt='Remove'/>
                </h2>
                {
                    items.length > 0 ? (
                        <div className="items">
                            {items.map((obj) => (
                                <div key={obj.id} className="cartItem d-flex align-center mb-20">
                                    <div
                                        style={{backgroundImage: `url(${obj.imgUrl})`}}
                                        className="cartItemImg"></div>
                                    <div className='mr-20 flex cu-p'>
                                        <p className='m-5'>{obj.title}</p>
                                        <b>{obj.price} руб.</b>
                                    </div>
                                    <img onClick={() => onRemove(obj.id)} className='btnRemove'
                                         src='/img/button-remove.svg' alt='Remove'/>
                                </div>
                            ))}
                            <div className='cartTotalBlock'>
                                <ul>
                                    <li>
                                        <span>Итого</span>
                                        <div></div>
                                        <b>2 145 руб.</b>
                                    </li>
                                    <li>
                                        <span>Налог 5%</span>
                                        <div></div>
                                        <b>107 руб и 40 копеек</b>
                                    </li>
                                    <button className='greenButton'>
                                        <img src='/img/arrow.svg' alt='Arrow'/>
                                        Оформить заказ
                                    </button>
                                </ul>
                            </div>
                        </div>
                    ) : (
                        <div className='cartEmpty d-flex align-center justify-center flex-column flex'>
                            <img className='mb-20' width='120px' height='120px' src='/img/empty-cart.jpg'
                                 align='Empty cart'/>
                            <h2>Корзина пустая</h2>
                            <p className='opacity-6'>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказа.</p>
                            <button onClick={onCloseCart} className='greenButton'>
                                <img src='/img/arrow.svg' alt='Arrow'/>
                                Вернуться назад
                            </button>
                        </div>
                    )}
            </div>
        </div>
    );
}
export default Drawer;