import { ADD_CART, CHANGE_QUANLITY } from "../type/type"

const initialState = {
    Cart:[
        { id: "01", img: "https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com.vn/images/product/2022/05/00021197-danospan-danapha-100ml-3275-6282_large.", name: "Dung dịch Danospan Danapha", des: "Danospan Danapha 100 ml là sản phẩm của công ty cổ phần dược Danapha, thành phần chính là cao khô lá thường xuân. Thuốc được dùng điều trị viêm đường hô hấp cấp tính có kèm ho, điều trị triệu chứng trong bệnh lý viêm phế quản mạn tính.Danospan Danapha 100 ml được bào chế dưới siro. Một chai 100 ml chứa 0, 7 g cao khô lá thường xuân (tương ứng với 4, 55 g lá thường xuân).", price: 6000, sl:1 },
        { id: "02", img: "https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com.vn/images/product/2021/06/00030907-bo-phe-chi-khai-lo-truong-tho-125ml-9605-60d2_large.jpg", name: "Thuốc Bổ Phế Chỉ Khái Lộ Trường Thọ", des: " Bổ phế chỉ khái lộ của Công ty cổ phần dược phẩm Trường Thọ, thành phần chính là bạch linh, cát cánh, tỳ bà diệp, tang bạch bì, ma hoàng, thiên môn đông, bạc hà, bán hạ (chế), cam thảo, bách bộ, mơ muối, tinh dầu bạc hà, phèn chua.Bổ phế chỉ khái lộ là thuốc chữa ho tiêu đờm, chuyên trị ho cảm, ho gió, ho khan, viêm phế quản.Bổ phế chỉ khái lộ được bào chế dưới dạng chất lỏng sánh, màu nâu vàng, mùi thơm của tinh dầu bạc hà, vị ngọt cay; đóng gói theo quy cách hộp 1 chai 125ml.", price: 70000, sl:1},
    ]

}

export const DataMedicine= (state = initialState,  action) => {

    switch (action.type) {
        case ADD_CART:{
            let newCart=[...state.Cart]
            let index=newCart.findIndex((item)=>{return item.id==action.addData.id})
            let newItem={...action.addData,sl:1}
            if(index==-1){
                newCart.push(newItem)
            }
            else{
                newCart[index].sl+=1
            }
            state.Cart=newCart
            return{...state}
        }break;
        case CHANGE_QUANLITY:{
            let newCart=[...state.Cart]
            let index=newCart.findIndex((item)=>{return item.id==action.id})
            if(newCart[index].sl==1&&action.value==-1){
                newCart.splice(index,1)
            }
            else{
            newCart[index].sl+=action.value
            }
            state.Cart=newCart
            return{...state}
        }

    }
    return { ...state }
}
