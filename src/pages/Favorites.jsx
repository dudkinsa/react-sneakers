import React from "react";
import Card from "../components/Card/Card";
const  Favorites = ({items, onAddToFavorite}) =>{
    return(
        <div className="content p-40">
                <h1>Моя закдадка</h1>
            <div className='d-flex flex-wrap'>
                {items.map((item, index) => (

                        <Card
                            key={index}
                            favorited={true}
                            onFavorite={onAddToFavorite}
                            {...item}

                        />
                    ))}
            </div>
        </div>
    );
}
export default Favorites;