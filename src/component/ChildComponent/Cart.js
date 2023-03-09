import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ChangeQuanlity } from '../../redux/action/action';
export default function Cart() {
    let dataCart = useSelector(state => state.DataMedicine.Cart)
    let dispatch=useDispatch();
    let rederCart = () => {
        return dataCart.map((item, index) => {
            return <tr style={{ lineHeight: "80px" }} key={index}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td><img style={{ width: "80px" }} src={item.img} /></td>
                <td>{item.price.toLocaleString()}</td>
                <td>{item.sl}</td>
                <td>{(item.sl * item.price).toLocaleString()}</td>
                <td><button onClick={()=>{dispatch(ChangeQuanlity(item.id,1))}} className="btn btn-outline-danger">+</button> <button onClick={()=>{dispatch(ChangeQuanlity(item.id,-1))}} className="btn btn-outline-success">-</button></td>
            </tr>
        })
    }
    let sumTotal=()=>{
        return dataCart.reduce((save,curent,index)=>{
            return save+=curent.sl*curent.price
        },0)
    }
    return (
        <div>
            <div>
                <div className="modal fade " id="modelId2" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div style={{ margin:"auto", textAlign:"center"}} className=" mt-5 pb-4 modal-dialog modal-xl modal-dialog-scrollable" role="document">
                        <div  className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">Giỏ hàng của bạn </h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <table className="table" border={1}>
                                    <thead>
                                        <tr>
                                            <th>STT</th>
                                            <th>Tên sản phẩm</th>
                                            <th>Hình ảnh</th>
                                            <th>Giá Tiền</th>
                                            <th>Số lượng</th>
                                            <th>Thành tiền</th>
                                            <th>Trạng thái</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                       {rederCart()}
                                       <tr>
                                        <th colspan={5}>Tổng Tiền</th>
                                        <th>{sumTotal().toLocaleString()}</th>
                                       </tr>
                                    </tbody>
                                </table>

                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary">Save</button>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>

        </div>
    )
}
