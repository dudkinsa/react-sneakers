import React from "react";
import cardCss from './Card.module.scss';

const Card = ({title, price, imgUrl,onPlus, onFavorite}) => {

    const [isAdded, setIsAdded] = React.useState(false);

    const onClickPlus =()=>{
        onPlus({title, imgUrl, price})
        setIsAdded(!isAdded);
    };


    return (
        <div className={cardCss.card}>
            <div className={cardCss.favorite} >
                    <img src='/img/heart-unliked.svg' alt='Unliked' onClick={onFavorite}/>
            </div>
            <img width={133} height={112} src={imgUrl} alt=''/>
            <h5>{title}</h5>
            <div className='d-flex justify-between align-center'>
                <div className='d-flex flex-column '>
                    <span>Цена:</span>
                    <b>{price} руб.</b>
                </div>
                    <img className={cardCss.plus}
                         onClick={onClickPlus}
                         width={32}
                         height={32}
                         src={isAdded ?'/img/button-checked.svg': '/img/plus.svg'} alt='plus'/>
            </div>
        </div>
    );
            }
            export default Card;