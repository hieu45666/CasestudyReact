import React from 'react'

export default function Modal(props) {
    return (
        <div>
            <div>
                <div className="modal fade mt-5" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog modal-lg" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">{props.item.name}</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body d-flex flex-column align-items-center">
                                <img src={props.item.img}/>
                                <span className="mt-2" style={{color:"black", fontWeight:"normal"}}>{props.item.des}</span>
                                <p style={{fontSize:"25px"}} className="text-danger mt-3">Giá niêm yết: {props.item.price.toLocaleString()}</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button className='btn btn-success'> Thêm Giỏ Hàng</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
