// import * as types from './../constants/ActionType';
var initialState = [
    {
        id: 1,
        name : "Iphone 8",
        image:'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone8-gold-select-2018?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1550795416637',
        description:'Apple ngon',
        price: 500,
        inventory: 15,
        rating: 3
    },
    {
        id: 2,
        name : 'Iphone',
        image:'https://images.samsung.com/vn/smartphones/galaxy-note10/images/galaxy-note10_highlights_mobile_kv.jpg',
        description:'SamSung Note 10',
        price: 500,
        inventory: 15,
        rating: 5
    },
];

var products = (state = initialState,action)=>{
    switch(action.types){
        default:
            return state;
    }
}
export default products;