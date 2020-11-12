import React, { useState, useEffect } from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import $ from 'jquery'
import AddList from '../common/AddProduct'
import Login from './Login'

function Dashboard(props) {
    const [data, setData] = useState([]);
    const [nameSerch, setNameSerch] = useState('');
    const [price, setPrice] = useState('');
    const [quantity, setQuantity] = useState('');

    const openAddListModal = () => {
        $('#addProduct').modal('show');
    }
    useEffect(() => {
        setData(props.data)
    }, [props.data])

    useEffect(() => {
        let newData = props.data.filter((item) => {
            debugger
            let p=true,q=true;
            if(price>0)
                p=item.price<=price;
            if(quantity>0)
                q=item.quantity<=quantity;
            debugger
            return item.name.toLowerCase().includes(nameSerch.toLowerCase()) && p && q;
        })
        setData(newData)
    }, [nameSerch,price,quantity])

    return (
        <div>
            {props.isLogin ? <div>
                <div className="split left">
                    <div className="centered">
                        <img className="avatarImg" src={'images/pic.jpg'} alt="Profile Img" />
                        <h2>{props.userData.email}</h2>
                        <div className="info">
                            <span >{`Total List ${data.length}`}</span>
                        </div>
                    </div>
                    <div className="mt-2">
                        <button onClick={() => openAddListModal()} >Add Product</button>
                    </div>
                    <div className="mt-2">
                        <input type="text" placeholder="Search by name..." onChange={e => setNameSerch(e.target.value)} />
                    </div>
                    <div className="ml-5 text-left">
                        <div className="mt-2">
                            <span className="mr-1">Price:</span>
                            <input type="number" placeholder="Filter by price" onChange={e=>setPrice(parseInt(e.target.value))} />
                        </div>
                        <div className="mt-2">
                            <span className="mr-1">Quantity:</span>
                            <input type="number" placeholder="Filter by quantity" onChange={e=>setQuantity(parseInt(e.target.value))} />
                        </div>
                    </div>
                </div>
                <div className="split right">
                    <Header />
                    <div>
                        {data.length!==0?
                        <ul className="pl-0">
                        {data.map((item, i) => {
                            return <li key={i} className="col-12 d-flex width-full py-4 border-bottom public source">
                                <div className="col-10 col-lg-9 d-inline-block">
                                    <div className="d-inline-block mb-1">
                                        <h3 className="wb-break-all ">
                                            <span href="/aman06it/freeCharge" className="fontWeight" itemProp="name codeRepository">
                                                {item.name}</span>
                                        </h3>
                                        <div>
                                            <p className="col-9 d-inline-block text-gray mb-2 pr-4" itemProp="description">
                                                {item.description}
                                            </p>
                                        </div>
                                        <div className="f6 text-gray mt-2">
                                            <span className="ml-0 mr-3">
                                                <img className="userImage" src={item.image} alt="product Logo" />
                                            </span>
                                    Price: <samp className="mr-4 no-wrap">{item.price}</samp>
                                    Quantity: <samp className="no-wrap">{item.quantity}</samp>
                                        </div>
                                    </div>
                                </div>
                            </li>
                        })}
                    </ul>:<span>No Data Found</span>
                }    
                    </div>
                </div>
                <AddList />
            </div> : <div><Login /></div>
            }
        </div>
    )
}
const mapStateToProps = state => ({
    isLogin: state.reducer.login,
    data: state.reducer.data,
    userData: state.reducer.userData
})

export default connect(mapStateToProps, {})(Dashboard);
