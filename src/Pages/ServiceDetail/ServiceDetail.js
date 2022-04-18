import React from 'react';
import { Link, useParams } from 'react-router-dom';


const ServiceDetail = () => {
    const { serviceId } = useParams();

    return (
        <div>


            <div id="services" className='container'>
                <h1 className='text-dark text-center m-5'>Fill In the Requirement</h1>
            </div>

            <div className='container'>
            <form className="row g-3">
                <div className="col-md-4">
                    <label for="validationDefault01" className="form-label">First name</label>
                    <input type="text" className="form-control" id="validationDefault01" required />
                </div>
                <div className="col-md-4">
                    <label for="validationDefault02" className="form-label">Last name</label>
                    <input type="text" className="form-control" id="validationDefault02" required />
                </div>
                <div className="col-md-4">
                    <label for="validationDefaultUsername" className="form-label">Username</label>
                    <div className="input-group">
                        <span className="input-group-text" id="inputGroupPrepend2">@</span>
                        <input type="text" className="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required />
                    </div>
                </div>
                <div className="col-md-6">
                    <label for="validationDefault03" className="form-label">City</label>
                    <input type="text" className="form-control" id="validationDefault03" required />
                </div>
                <div className="col-md-3">
                    <label for="validationDefault04" className="form-label">State</label>
                    <select className="form-select" id="validationDefault04" required>
                        <option selected disabled value="">Choose...</option>
                        <option>Dhaka</option>
                        <option>Chittagong</option>
                        <option>Rajshahi</option>
                        <option>Khulna</option>
                        <option>Barisal</option>
                        <option>Rangpur</option>
                        <option>Shylhet</option>
                        <option>mymensingh</option>
                    </select>
                </div>
                <div className="col-md-3">
                    <label for="validationDefault05" className="form-label">Zip</label>
                    <input type="text" className="form-control" id="validationDefault05" required />
                </div>
                <div className="col-12">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="invalidCheck2" required />
                        <label className="form-check-label" for="invalidCheck2">
                            Agree to terms and conditions
                        </label>
                    </div>
                </div>
            </form>

            </div>

            <div className='text-center'>
                <Link to="/checkout">
                    <button className='btn btn-custom'>Proceed Checkout</button>
                </Link>

            </div>
        </div>
    );
};

export default ServiceDetail;