import React from "react";
import Card from "../components/Card/Card";

const Home = ({
                  items,
                  cartItems,
                  searchValue,
                  setSearchValue,
                  onChangeInput,
                  onAddToCart,
                  onAddToFavorite
              }) => {

    return (
        <div className="content p-40">
            <div className='d-flex align-center m-40 justify-between'>
                <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}</h1>
                <div className="search-block d-flex">
                    <img src='/img/search.svg' alt='Search'/>

                    {searchValue && (
                        <img
                            onClick={() => setSearchValue('')}
                            className='clear cu-p'
                            src='/img/button-remove.svg'
                            alt='Clear'
                        />
                    )}
                    <input onChange={onChangeInput} value={searchValue} placeholder='Поиск...'/>
                </div>
            </div>
            {console.log(cartItems,items)}
            <div className='d-flex flex-wrap'>
                {items
                    .filter((item) => item.title.toLowerCase().includes(searchValue))
                    .map((item, index) => (

                        <Card
                            key={index}
                            onPlus={onAddToCart}
                            onFavorite={onAddToFavorite}
                            added = {cartItems.some(obj => Number(obj.id) === Number(item.id))}
                            {...item}


                        />
                    ))}
            </div>
        </div>
    );
}
export default Home;