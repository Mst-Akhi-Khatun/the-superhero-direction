import React from 'react';
import './Singer.css';

const Singer = (props) => {
    // destructuring
    const {name, age, img, born, salary, awards} = props.singer;
    return (
        <div className="col-md-4">
            <div className="card-container">
                <div className="card-image">
                    <img src={img} alt="" />
                </div>
                <div className="card-body">
                    <h5>Name: {name}</h5>
                    <h6 className="fw-normal">Age:{age}</h6>
                    <h6 className="fw-normal">Salary: {salary}</h6>
                    <h6 className="fw-normal">Born: {born}</h6>
                    <h6 className="fw-normal">Awards: {awards}</h6>                    
                    <button className="btn w-100 btn-warning" onClick={()=> props.handleAddToCart(props.singer)}> <i class="far fa-check-circle"></i> Select</button>
                </div>
            </div>
            
        </div>
    );
};

export default Singer;