import React from "react";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import axios from "axios";
import {Route, Routes} from 'react-router-dom';
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";


const App = () => {

    const [items, setItems] = React.useState([]);
    const [cartItems, setCartItems] = React.useState([])
    const [favorites, setFavorites] = React.useState([])
    const [searchValue, setSearchValue] = React.useState('')
    const [cartOpened, setCartOpened] = React.useState(false);
    React.useEffect(() => {
        axios.get('https://628da3f0a339dfef879dbb52.mockapi.io/items').then((response) => {
            setItems(response.data);
        });
        axios.get('https://628da3f0a339dfef879dbb52.mockapi.io/cart').then((response) => {
            setCartItems(response.data);
        });
        axios.get('https://628da3f0a339dfef879dbb52.mockapi.io/favorites').then((response) => {
            setFavorites(response.data);
        });

    }, []);

    const onAddToCart = (obj) => {
        console.log(obj)
        try {
            if (cartItems.find(item => Number(item.id) === Number(obj.id))) {
                axios.delete(`https://628da3f0a339dfef879dbb52.mockapi.io/cart/${obj.id}`);
                setCartItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
            }else {
                axios.post('https://628da3f0a339dfef879dbb52.mockapi.io/cart', obj);
                setCartItems(prev => [...prev, obj]);
            }
        }catch (error) {

        }
    }
    const onAddToFavorite = async (obj) => {
        try{
            if (favorites.find(favObj => favObj.id === obj.id)) {
                axios.delete(`https://628da3f0a339dfef879dbb52.mockapi.io/favorites/${obj.id}`);
                setFavorites(prev => prev.filter(item => item.id !== obj.id));
            } else {
                const {data} = await axios.post('https://628da3f0a339dfef879dbb52.mockapi.io/favorites', obj);
                setFavorites(prev => [...prev, data]);
            }
        }catch (error) {
            alert('Не удалось добавить в фавориты')
        }
    };


const onRemoveItem = (id) => {
    axios.delete(`https://628da3f0a339dfef879dbb52.mockapi.io/cart/${id}`);
    setCartItems(prev => prev.filter(item => item.id !== id))
}
const onChangeInput = (event) => {
    setSearchValue(event.target.value);
}


return (

    <div className='wrapper clear'>
        {cartOpened ?
            <Drawer items={cartItems} onCloseCart={() => setCartOpened(false)} onRemove={onRemoveItem}/> : null}
        <Header onClickCart={() => setCartOpened(true)}/>
        <Routes>
            <Route path='/' element=
                {
                    <Home
                        items={items}
                        cartItems = {cartItems}
                        searchValue={searchValue}
                        setSearchValue={setSearchValue}
                        onChangeInput={onChangeInput}
                        onAddToCart={onAddToCart}
                        onAddToFavorite={onAddToFavorite}
                    />
                }
            />
            <Route path='/favorites' element=
                {
                    <Favorites
                        items={favorites}
                        onAddToFavorite={onAddToFavorite}
                    />
                }
            />
        </Routes>


    </div>
)
}


export default App;
