import { ADD_CART, CHANGE_QUANLITY, DELETE_PRODUCT, EDIT_PRODUCT, SEND } from "../type/type";

const initialState = {
  Cart: [],
  dataListProduct: [ 
    {
    id: 1,
    img: "https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com.vn/images/product/2022/05/00021197-danospan-danapha-100ml-3275-6282_large.",
    title: "Dung dịch Danospan Danapha",
    des: "Danospan Danapha 100 ml là sản phẩm của công ty cổ phần dược Danapha, thành phần chính là cao khô lá thường xuân. Thuốc được dùng điều trị viêm đường hô hấp cấp tính có kèm ho, điều trị triệu chứng trong bệnh lý viêm phế quản mạn tính.Danospan Danapha 100 ml được bào chế dưới siro. Một chai 100 ml chứa 0, 7 g cao khô lá thường xuân (tương ứng với 4, 55 g lá thường xuân).",
    price: 6000,
  },
  {
    id: 2,
    img: "https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com.vn/images/product/2021/06/00030907-bo-phe-chi-khai-lo-truong-tho-125ml-9605-60d2_large.jpg",
    title: "Thuốc Bổ Phế Chỉ Khái Lộ Trường Thọ",
    des: " Bổ phế chỉ khái lộ của Công ty cổ phần dược phẩm Trường Thọ, thành phần chính là bạch linh, cát cánh, tỳ bà diệp, tang bạch bì, ma hoàng, thiên môn đông, bạc hà, bán hạ (chế), cam thảo, bách bộ, mơ muối, tinh dầu bạc hà, phèn chua.Bổ phế chỉ khái lộ là thuốc chữa ho tiêu đờm, chuyên trị ho cảm, ho gió, ho khan, viêm phế quản.Bổ phế chỉ khái lộ được bào chế dưới dạng chất lỏng sánh, màu nâu vàng, mùi thơm của tinh dầu bạc hà, vị ngọt cay; đóng gói theo quy cách hộp 1 chai 125ml.",
    price: 70000,
  },
  {
    id: 3,
    img: "https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com.vn/images/product/2021/11/00017015-ong-hit-sao-vang-danapha-15g-6956-6189_large.jpg",
    title: "Ống hít Sao Vàng Danapha",
    des: "Ống hít sao vàng của Công ty cổ phần dược Danapha, thành phần chính là menthol, camphor, tinh dầu đinh hương, tinh dầu quế, tinh dầu tràm.Thuốc dùng điều trị: Nghẹt mũi, sổ mũi, ho, cảm lạnh, làm thông mũi và sát trùng đường hô hấp.Uruso 200mg được bào chế dưới dạng ống nhựa trụ tròn màu trắng, nắp xoáy kín bên ngoài, bên trong có lõi xốp hình trụ màu trắng ngà tẩm hoạt chất. Hộp 1 ống.",
    price: 120000,
  },
  {
    id: 4,
    img: "https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com.vn/images/product/2021/07/00002814-enterogemina-5ml-sanofi-20-ong-5650-60fb_large.jpg",
    title: "Thuốc Enterogermina điều trị ",
    des: "Enterogermina 5ml của nhà sản xuất Sanofi (Italia), có thành phần chính bào tử kháng đa kháng sinh Bacillus clausii.Thuốc được dùng để điều trị và phòng ngừa rối loạn hệ vi khuẩn đường ruột và bệnh lý kém hấp thu vitamin nội sinh, điều trị hỗ trợ để phục hồi hệ vi khuẩn đường ruột bị ảnh hưởng khi dùng thuốc kháng sinh hoặc hóa trị liệu, rối loạn tiêu hóa cấp và mạn tính ở trẻ em do nhiễm độc hoặc rối loạn hệ vi khuẩn đường ruột và kém hấp thu vitamin.",
    price: 125000,
  },
  {
    id: 5,
    img: "https://cdn.nhathuoclongchau.com.vn/unsafe/fit-in/600x600/filters:quality(90):fill(white)/nhathuoclongchau.com.vn/images/product/2018/09/00010256-vien-xong-huong-tram-vim-bao-gam-9543-5b98_large.JPG",
    title: "Viên Xông Hương Tràm Vim Báo Gấm",
    des: "Viên xông hương tràm Vim Báo Gấm của Công ty Cổ phần Y dược phẩm Vimedimex ủy quyền cho công ty cổ phần Dược Nature Việt Nam đăng ký, sản xuất và phân phối, thành phần chính menthol (trong lá bạc hà), eucalyptol (trong lá tràm), camphor (trong lá cây long não), khi cho vào nước sôi 100°C thuốc sẽ tan ngay và bốc lên mùi thơm dễ chịu, thuốc dùng để xông cảm và xông sát trùng mũi họng rất tiện lợi.",
    price: 25000,
  },
],
product:{}
};

export const DataMedicine = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART: { 
      let newCart = [...state.Cart];
      let index = newCart.findIndex((item) => {
        return item.id === action.addData.id;
      });
      let newItem = { ...action.addData, sl: 1 };
      if (index === -1) {
        newCart.push(newItem);
      } else {
        newCart[index].sl += 1;
      }
      state.Cart = newCart;
      return { ...state };
    }
    case CHANGE_QUANLITY: {
      let newCart = [...state.Cart];
      let index = newCart.findIndex((item) => {
        return item.id === action.id;
      });
      if (newCart[index].sl === 1 && action.value === -1) {
        newCart.splice(index, 1);
      } else {
        newCart[index].sl += action.value;
      }
      state.Cart = newCart;
      return { ...state };
    }
    case EDIT_PRODUCT:
            {
              console.log(action.product.title);
            let newList = [...state.dataListProduct];
            let add = true;let x = null;
            for (let i = 0; i < newList.length; i++){
                console.log(newList[i].title + " " + action.product.title);
                if (newList[i].title === action.product.title) {add = false; x = i;break;}
            }
            if (add) {
              const maxId = newList.length === 0 ? 0 : Math.max(...newList.map(x => x.id));
              action.product.id = maxId  + 1;
              newList.push(action.product);
            }
            else {
                newList[x] = action.product;
            }
            state.dataListProduct = newList;
            return {...state};}
        case DELETE_PRODUCT:
            {let newList = [...state.dataListProduct];
            let newList1 = [];
            for (let i = 0; i < newList.length; i++) {
              if (newList[i].id !== action.payload.id) newList1.push(newList[i]);
            }
            state.dataListProduct = newList1;
            console.log(newList1);
            return {...state};}
        case SEND:
          {
            state.product = action.product;
            return {...state};
          }
    default:
      return state;
  }
};
