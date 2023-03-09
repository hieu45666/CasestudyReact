import React from 'react'
import Modal from './Modal'
import { useDispatch } from 'react-redux'
import { dataListProduct } from '../../data/data'
import { addToCart } from '../../redux/action/action';
import { ADD_CART } from '../../redux/type/type';
export default function ListProduct(props) {
    let dispatch=useDispatch();

    const renderList = () => {
        return dataListProduct.map((item, index) => {
            return <div key={index} className='col-4'>
                <div className="card text-left">
                    <img style={{width:"190px", margin:"auto"}} className="card-img-top mt-4 mb-3" src={item.img}  />
                    <div className="card-body">
                        <h5 className="card-title">{item.name.slice(0, 25)}...</h5>
                        <p style={{ fontSize: "20px" }} className="card-text">Đơn giá: <b className="text-danger">{item.price.toLocaleString()}</b></p>
                        <button onClick={()=>{ dispatch(addToCart(item))}} className='btn btn-outline-primary'> Thêm Giỏ Hàng</button>
                        <button data-toggle="modal" data-target="#modelId" className=' ml-2 btn btn-outline-danger'>Xem chi tiết</button>
                    </div>
                    <Modal item={item} />
                   
                </div>

            </div>

        })
    }

    return (
        <div className='container mt-2'>
            <h2 className='text-center p-3'>Danh sách sản phẩm</h2>
                <div className='row'>
                    {renderList()}
                </div>
            
        </div>
    )
}
