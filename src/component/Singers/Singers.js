import React, { useEffect } from 'react';

const Singers = () => {
    useEffect( () => {
        fetch('/singer.json')
        .then(res => res.json())
        .then(data => console.log(data))
    },[])
    return (
        <div>
            <div className="row">
                <div className="col-md-9">

                </div>
                <div className="col-md-3">

                </div>
            </div>
        </div>
    );
};

export default Singers;