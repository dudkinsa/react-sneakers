import React from "react";
import cardCss from './Card.module.scss';

const Card = ({
                  id, title, price, imgUrl,
                  onPlus, onFavorite, favorited = false, added = false}) => {

    const [isAdded, setIsAdded] = React.useState(added);
    const [isFavorite, setIsFavorite] = React.useState(favorited);

    const onClickPlus =()=>{
        onPlus({id, title, imgUrl, price})
        setIsAdded(!isAdded);
    };
    const onClickFavorite = () => {
        onFavorite({id, title, imgUrl, price})
        setIsFavorite(!isFavorite);
    }

    return (
        <div className={cardCss.card}>
            <div className={cardCss.favorite} onClick={onClickFavorite}>
                    <img src={isFavorite ?'/img/heart-liked.svg': '/img/heart-unliked.jpg'} alt='Unliked' onClick={onFavorite}/>
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