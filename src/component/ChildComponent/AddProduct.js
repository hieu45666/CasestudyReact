import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { editProduct} from '../../redux/action/actions';

const AddProduct = (props) => {
    let dispatch = useDispatch();
    const product = useSelector(state => state.DataMedicine1.product);
    let [data, setData] = useState({
        title: "",
        img: '',
        des: '',
        price: null
    });
    let changeValue = (event) => {
        setData({
            ...data,
            [event.target.name] : event.target.value
        });
        console.log(data);
}
useEffect(()=>{
    setData(product);
},[product])
    return (
        <fieldset className="border">
                  <legend className="scheduler-border">Thông tin sản phẩm</legend>
                  <form id="productForm">
                      <div className="form-group row">
                          <div className="col-md-6">
                              <label id="lblTenSanPham">Tên sản phẩm:</label>
                          </div>
                          <div className="col-md-6">
                              <input type="text" className="form-control" value={data.title} name= "title" id="productName"
                                  placeholder="Nhập tên sản phẩm ..." onChange={changeValue}/>
                          </div>
                      </div>
  
                      <div className="form-group row">
                          <div className="col-md-6">
                              <label id="lblLinkSanPham">Link hình ảnh:</label>
                          </div>
                          <div className="col-md-6">
                              <input type="text" className="form-control" value={data.img} name="img" id="productLink"
                                  placeholder="Nhập link hình ảnh sản phẩm ..." onChange={changeValue}/>
                          </div>
                      </div>
  
                      <div className="form-group row">
                          <div className="col-md-6">
                              <label id="lblMoTaSanPham">Mô tả sản phẩm:</label>
                          </div>
                          <div className="col-md-6">
                              <input type="text" className="form-control" value={data.des} name="des" id="productDesc"
                                  placeholder="Nhập mô tả sản phẩm ..." onChange={changeValue}/>
                          </div>
                      </div>
  
                      <div className="form-group row">
                          <div className="col-md-6">
                              <label id="lblGiaSanPham">Giá sản phẩm:</label>
                          </div>
                          <div className="col-md-6">
                              <input type="text" className="form-control" value={data.price} name="price" id="productPrice"
                                  placeholder="Nhập giá sản phẩm ..." onChange={changeValue}/>
                          </div>
                      </div>

                      <button type="button" className="btn btn-primary" onClick={()=>{dispatch(editProduct(data))}}>
                      Cập nhật
                    </button>
                  </form>
              </fieldset>
    );
};

export default AddProduct;