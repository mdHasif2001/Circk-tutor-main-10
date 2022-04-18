import React from 'react';
import { useNavigate } from 'react-router-dom'
import './Service.css'

const Service = ({ service }) => {
    const { id, name, img, description, price } = service;
    const navigate = useNavigate();

    const navigateToServiceDetail = id => {
        navigate(`/service/${id}`)
    }
    return (
        <div className='g-3 col-sm-12 col-md-6 col-lg-4 shadow border-0 p-3'>
            <img src={img} className='w-100' alt="" />
            <h2>{name}</h2>
            <p>Price: {price}$</p>
            <p><small>{description}</small></p>
            <button onClick={() => navigateToServiceDetail(id)} className='btn btn-custom d-block mx-auto'>Checkout</button>
        </div>
    );
};

export default Service;