import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProduct} from "../../redux/action/actions";

const ListEdit = (props) => {

    let productList = useSelector(state => state.DataMedicine1.dataListProduct);
    let dispatch = useDispatch();

    const editProduct = (id) => {
        props.editProduct(id);
    }

    useEffect(()=> {}, [productList]);

    return (
        <table className="table" border={1}>
                  <thead>
                          <tr>
                            <th>STT</th>
                            <th>Tên sản phẩm</th>
                            <th>Hình ảnh</th>
                            <th>Giá Tiền</th>
                            <th>Trạng thái</th>
                          </tr>
                        </thead>
                        <tbody>
                          {productList.map((item, index) => {
                            return (
                              <tr style={{ lineHeight: "80px" }} key={index}>
                                <td>{index + 1}</td>
                                <td>{item.title}</td>
                                <td>
                                  <img alt={item.title} style={{ width: "80px" }} src={item.img} />
                                </td>
                                <td>{item.price.toLocaleString()}</td>
                                <td>
                                  <button
                                    onClick={() => {editProduct(item)}}
                                    className="btn btn-outline-success"
                                  >
                                    Sửa
                                  </button>{" "}
                                  <button
                                    className="btn btn-outline-danger"
                                    onClick={() => {dispatch(deleteProduct(item.id))}}
                                  >
                                    Xóa
                                  </button>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
              </table>
    );
};

export default ListEdit;