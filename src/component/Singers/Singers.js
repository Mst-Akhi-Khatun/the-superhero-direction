import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import Singer from '../Singer/Singer';

const Singers = () => {
    // declare useState
    const [singers, setSinger] = useState([]);
    const [cart, setCart] = useState([]);

    // load data
    useEffect( () => {
        fetch('/singer.json')
        .then(res => res.json())
        .then(data => setSinger(data))
    },[])

    // event handler
    const handleAddToCart = (singer) => {
        const newCart = [...cart, singer];
        setCart(newCart);
    }
    return (
        <div>
            <div className="row">
                <div className="col-md-9">
                <div className="row gy-5">
                    {
                       singers.map(singer => <Singer 
                        singer={singer}
                        handleAddToCart={handleAddToCart}
                        ></Singer>) 
                    }
                    </div>
                </div>
                <div className="col-md-3">
                <Cart cart={cart}></Cart>
                </div>
            </div>
            <div className="footer text-center p-3">
            <p>&copy; Copyright 2022 || All rights reserved by <span className="text-primary">Best Singer Club</span></p>
            </div>
        </div>
    );
};

export default Singers;