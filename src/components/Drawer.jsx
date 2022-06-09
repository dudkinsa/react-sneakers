import React from "react";

const Drawer = ({onCloseCart, items =[]}) => {

    return (
        <div  className="overlay">
            <div className="drawer">
                <h2 className='d-flex justify-between mb-30'>
                    Корзина <img onClick={onCloseCart}  className='btnRemove cu-p' src='/img/button-remove.svg' alt='Remove'/>
                </h2>

                <div className="items">
                    {items.map((obj)=>(
                        <div className="cartItem d-flex align-center mb-20">

                            <div
                                style={{backgroundImage: `url(${obj.imgUrl})`}}
                                className="cartItemImg"></div>
                            <div className='mr-20 flex cu-p'>
                                <p className='m-5'>{obj.title}</p>
                                <b>{obj.price} руб.</b>
                            </div>
                            <img className='btnRemove' src='/img/button-remove.svg' alt='Remove'/>
                        </div>
                    ))}

                </div>


            </div>
        </div>
    );
}
export default Drawer;