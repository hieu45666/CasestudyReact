import React, { useState, useEffect } from 'react'
import Modal from './Modal'
import { useDispatch, useSelector} from 'react-redux'
import { addToCart } from '../../redux/action/actions';

export default function Product(props) {
    
    let data = useSelector(state => state.DataMedicine.dataListProduct);
    let dispatch = useDispatch();
    let [product,setProduct] = useState({
        title: "",
        img: "",
        des: "",
        price: 0
    });
    
    const renderList = () => {
        return data.map((item, index) => {
            return <div key={index} className='col-4'>
                <div className="card text-left">
                    <img style={{width:"190px", margin:"auto"}} className="card-img-top mt-4 mb-3" src={item.img}  />
                    <div className="card-body">
                        <h5 className="card-title">{item.title.slice(0, 25)}...</h5>
                        <p style={{ fontSize: "20px" }} className="card-text">Đơn giá: <b className="text-danger">{item.price.toLocaleString()}</b></p>
                        <button onClick={()=>{ dispatch(addToCart(item))}} className='btn btn-outline-primary'> Thêm Giỏ Hàng</button>
                        <button data-toggle="modal" data-target="#modelId" className=' ml-2 btn btn-outline-danger' onClick={()=>{setProduct(item)}}>Xem chi tiết</button>
                    </div>
                </div>
            </div>
        })
    }

    return (
        <div className='container mt-2'>
            <h2 className='text-center p-3'>Danh sách sản phẩm</h2>
                <div className='row'>
                    {renderList()}
                    <Modal product={product} />
                </div>
            
        </div>
    )
}
