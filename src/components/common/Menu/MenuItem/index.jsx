import React,{useState,useEffect} from 'react';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  cartAddItem,
  cartRemoveItem,
} from '../../../../redux/cart/cart.action';
import {
  selectCartItems,
  selectCartItemsCount,
} from '../../../../redux/cart/cart.selector';

import ButtonAddRemoveItem from '../../ButtonAddRemoveItem';
import './styles.css';
import Accordion from 'react-bootstrap/Accordion'


const MenuItem = ({
  item,
  cartCount,
  cartList,
  cartAddItem,
  cartRemoveItem,
}) => {

  const { itemid, itemName,itemDescription,itemPrice,itemCategory } = item;

  // console.log(cartCount)
  const handleQuantity = () => {
    let quantity = 0;
    if (cartCount !== 0) {
      const foundItemInCart = cartList.find((item) => item.itemid === itemid);
      if (foundItemInCart) {
        quantity = foundItemInCart.quantity;
      }
    }
    return quantity;
  };







  return (

    <>




 <div className ='container-menu' >

    
<div className ='item-contents'>
{itemName}
 <p  className ='item-contents' style={{float: "right"}}>{itemPrice}</p>
 <div>
{itemDescription}

</div>


</div>
<ButtonAddRemoveItem
          quantity={handleQuantity()}
          handleRemoveItem={() => cartRemoveItem(item)}
          handleAddItem={() => cartAddItem(item)}
        />


    {/* <div className='item'> */}
       {/* <img src={imageUrl} alt='food' />  */}
      {/* <div className='item-head_desc'> */}
        {/* <p className='head_desc-name'>{itemName}</p>
        <p className='head_desc-info'>
          <small>{itemDescription}</small>
        </p>
      </div>
      <div className='item-foot_desc'>
        <span className='foot_desc-price'>${itemPrice}</span>
        <ButtonAddRemoveItem
          quantity={handleQuantity()}
          handleRemoveItem={() => cartRemoveItem(item)}
          handleAddItem={() => cartAddItem(item)}
        />
      </div>
    </div>
    </div> */}

    </div>

    </>
    
  );
};

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
  cartList: selectCartItems,
});

const mapDispatchToProps = (dispatch) => ({
  cartAddItem: (item) => dispatch(cartAddItem(item)),
  cartRemoveItem: (item) => dispatch(cartRemoveItem(item)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MenuItem);




// const NewMap = new Map()


// {Object.values(list).map((k) => {
//   if (NewMap.has(k.itemCategory)){
//     const itemList = NewMap.get(k.itemCategory);
//     const newItemList = [...itemList, k];
//     NewMap.set(k.itemCategory, newItemList);
//   }else{
//     NewMap.set(k.itemCategory , [k]);
//   }
// })}