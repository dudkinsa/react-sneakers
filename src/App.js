import React from "react";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import Card from "./components/Card/Card";

/*const array = [
    {
        "name": "Мужские Кроссовки Nike Blazer Mid Suede",
        "price": 1299,
        "imgUrl": "/img/sneakers/1.jpg"
    },
    {
        "name": "Мужские Кроссовки Nike Air Max 270",
        "price": 985,
        "imgUrl": "/img/sneakers/2.jpg"
    },
    {
        "name": "Мужские Кроссовки Nike Blazer Mid Suede",
        "price": 849,
        "imgUrl": "/img/sneakers/3.jpg"
    },
    {
        "name": "Кроссовки Puma X Aka Boku Future Rider",
        "price": 899,
        "imgUrl": "/img/sneakers/4.jpg"
    },
    {
        "name": "Мужские Кроссовки Under Armour Curry 8",
        "price": 1519,
        "imgUrl": "/img/sneakers/5.jpg"
    },
    {
        "name": "Мужские Кроссовки Nike Kyrie 7",
        "price": 1129,
        "imgUrl": "/img/sneakers/6.jpg"
    },
    {
        "name": "Мужские Кроссовки Nike Kyrie 7",
        "price": 1129,
        "imgUrl": "/img/sneakers/7.jpg"
    },
    {
        "name": "Мужские Кроссовки Jordan Air Jordan 11",
        "price": 10799,
        "imgUrl": "/img/sneakers/8.jpg"
    },
    {
        "name": "Мужские Кроссовки Nike Lebron XVIII Low",
        "price": 1399,
        "imgUrl": "/img/sneakers/9.jpg"
    },
    {
        "name": "Мужские Кроссовки Nike Blazer Mid Suede",
        "price": 849,
        "imgUrl": "/img/sneakers/1.jpg"
    },
    {
        "name": "Кроссовки Puma X Aka Boku Future Rider",
        "price": 899,
        "imgUrl": "/img/sneakers/4.jpg"
    },
    {
        "name": "Мужские Кроссовки Nike Kyrie Flytrap IV",
        "price": 11299,
        "imgUrl": "/img/sneakers/9.jpg"
    }

]*/

const App = () => {

    const [items, setItems] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([])
    const [searchValue, setSearchValue] = React.useState('')
    const [cartOpened, setCartOpened] = React.useState(false);
    React.useEffect(() => {
        fetch('https://628da3f0a339dfef879dbb52.mockapi.io/items').then((response) => {
            return response.json();
        }).then(json => {
            setItems(json);
        });
    }, []);

    const onAddToCart = (obj) => {
        setCartItems(prev => [...prev, obj]);
    }
    const onChangeInput = (event) => {
        /*console.log(event.target.value)*/
        setSearchValue(event.target.value);
    }

    return (
        <div className='wrapper clear'>
            {cartOpened ? <Drawer items={cartItems} onCloseCart={() => setCartOpened(false)}/> : null}
            <Header onClickCart={() => setCartOpened(true)}/>
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
                        <input  onChange={onChangeInput} value={searchValue} placeholder='Поиск...'/>
                    </div>
                </div>
                <div className='d-flex flex-wrap'>
                    { items
                        .filter((item) => item.title.toLowerCase().includes(searchValue))
                        .map((item, index) => (

                        <Card
                            key={index}
                            title={item.name}
                            price={item.price}
                            imgUrl={item.imgUrl}
                            onPlus={onAddToCart}
                            onFavorite={() => {
                                console.log('Нажали на "Сердечко"')

                            }}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}


export default App;
