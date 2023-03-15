import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { send } from "../../redux/action/actions";
import ListEdit from './ListEdit';
import AddProduct from './AddProduct';

const EditProduct = () => {
  let productList = useSelector((state) => state.DataMedicine.dataListProduct);
  let dispatch = useDispatch();

  const editProduct = (item) => {
    dispatch(send(item));
  }

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
                  <ListEdit productList={productList} editProduct={editProduct}/>
                </div>
                <div
                  className="col-md-4"
                  style={{ margin: "auto", textAlign: "center" }}
                >
                  <AddProduct />
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
