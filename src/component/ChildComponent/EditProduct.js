import { useFormik } from "formik";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteProduct, editProduct } from "../../redux/action/actions";

const EditProduct = () => {
  const [product, setProduct] = useState();
  let productList = useSelector((state) => state.DataMedicine1.dataListProduct);
  let dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      title: '',
      img: '',
      des : '',
      price: null
    }
  })

  const changeValue = (event) => {
    setProduct({
      ...product,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {}, [productList]);

  let renderList = () => {
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
                  <img
                    alt={item.title}
                    style={{ width: "80px" }}
                    src={item.img}
                  />
                </td>
                <td>{item.price.toLocaleString()}</td>
                <td>
                  <button
                    onClick={() => {setProduct({...item})}}
                    className="btn btn-outline-success"
                  >
                    Sửa
                  </button>{" "}
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => {console.log(item.id);dispatch(deleteProduct(item.id))}}
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

  let addProduct = () => {
    return (
      <fieldset className="border">
        <legend className="scheduler-border">Thông tin sản phẩm</legend>
        <form id="productForm">
          <div className="form-group row">
            <div className="col-md-6">
              <label id="lblTenSanPham">Tên sản phẩm:</label>
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                value={product ? product.title : ""}
                name="title"
                id="productName"
                placeholder="Nhập tên sản phẩm ..."
                onChange={changeValue}
              />
            </div>
          </div>

          <div className="form-group row">
            <div className="col-md-6">
              <label id="lblLinkSanPham">Link hình ảnh:</label>
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                value={product ? product.img : ""}
                name="img"
                id="productLink"
                placeholder="Nhập link hình ảnh sản phẩm ..."
                onChange={changeValue}
              />
            </div>
          </div>

          <div className="form-group row">
            <div className="col-md-6">
              <label id="lblMoTaSanPham">Mô tả sản phẩm:</label>
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                value={product ? product.des : ""}
                name="des"
                id="productDesc"
                placeholder="Nhập mô tả sản phẩm ..."
                onChange={changeValue}
              />
            </div>
          </div>

          <div className="form-group row">
            <div className="col-md-6">
              <label id="lblGiaSanPham">Giá sản phẩm:</label>
            </div>
            <div className="col-md-6">
              <input
                type="text"
                className="form-control"
                value={product ? product.price : ""}
                name="price"
                id="productPrice"
                placeholder="Nhập giá sản phẩm ..."
                onChange={changeValue}
              />
            </div>
          </div>

          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {dispatch(editProduct(product));}}
          >
            Cập nhật
          </button>
        </form>
      </fieldset>
    );
  };

  return (
    <div>
      <div>
        <div
          className="modal fade "
          id="modelId1"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId1"
          aria-hidden="true"
        >
          <div
            style={{ margin: "auto", textAlign: "center" }}
            className=" mt-5 pb-4 modal-dialog modal-xl modal-dialog-scrollable"
            role="document"
          >
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Chỉnh sửa sản phẩm</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body row">
                <div className="col-md-8">
                  {renderList()}
                </div>
                <div
                  className="col-md-4"
                  style={{ margin: "auto", textAlign: "center" }}
                >
                  {addProduct()};
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EditProduct;
