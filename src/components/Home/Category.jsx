





















// import React,{useState} from 'react'
// import useFetchData from'../../components/common/Menu/MenuItem/newData'
// import Menu from '../../components/common/Menu'
// function Category(list) {
//   const { id, itemName,itemDescription,itemPrice,imageUrl,itemCategory } = list;
//     var red = []
//     for (var idx in list){
//         var blah = list[idx]
//         red = (Object.values(blah).map((item) => item.itemCategory))
//     }
//     const allCategories = ["all", red];
//     const [menuItems, setMenuItems] = useState();

//     const [activeCategory, setActiveCategory] = useState();
//       const [categories, setCategories] = useState(allCategories);
    
//     console.log('sumanBC')
//     console.log(allCategories)


//     const filterItems = (category) => {
//         setActiveCategory(category);
//         if (category === "all") {
//           setMenuItems();
//           // return;
//         }
//         const newItems = Object.values(list).filter((x) => x.itemCategory === category);{
         
//     return (<>

  
//           <div className='item'>
//             <img src={imageUrl} alt='food' />
//             <div className='item-head_desc'>
//               <p className='head_desc-name'>{itemName}</p>
//               <p className='head_desc-info'>
//                 <small>{itemDescription}</small>
//               </p>
//             </div>
//             <div className='item-foot_desc'>
//               <span className='foot_desc-price'>${itemPrice}</span>
         
//             </div>
//           </div>
       
//           </>
//         );
        
       
//     }
//       };
  
//     //  const x = ()=>{ Object.values(list).map((item) =>(item.itemCategory),
//     //   console.log(item.itemCategory)
      
//     //   )

//     // console.log(list)


//     var listOfObjects = []
//     for (var idx in list){
//         var blah = list[idx]
//         listOfObjects = (Object.values(blah).map((item) => item.id))
//     }
 
    
  
   
//     //     if (category === "all") {
        
        
//     //     }
//     //     console.log('sumanBC')
//     //     const newItems = red.filter((x) => (console.log(x))
      
        
//     //     );
      
//     //     return(newItems);
//     //   };

//     // const { id, itemName,itemDescription,itemPrice,imageUrl,itemCategory } = item;
//     return (
      
//             <div className="btn-container">
//               {red.map((category, index) => {
            
//                 return (
//                   <button
//                     type="button"
//                     className={`${
//                       activeCategory === category ? "filter-btn active" : "filter-btn"
//                     }`}
//                     key={index}
//                     onClick={() => filterItems(category)}
//                   >
//                     {category}
//                   </button>
//                 );
//               })}
//             </div>
  
    
//     )
// }


// export default Category






// // import React, { useState } from "react";
// // import Menu from "../common/Menu";
// // import Categories from "../common/Menu/MenuItem";
// // // import items from "./data";
// // // import logo from "./logo.JPG";
// // import useFetchData from "../common/Menu/MenuItem/newData"
// // import MenuItem from "../common/Menu/MenuItem"


// // const Category = () => {

  
// //     const {
// //         data,
// //         loading,
// //       } = useFetchData();

// // const allCategories = ["all", ...new Set(Object.values(data).map((item) => item.itemCategory))];
// //   const [menuItems, setMenuItems] = useState("");
// //   const [activeCategory, setActiveCategory] = useState("");
// //   const [categories, setCategories] = useState(allCategories);

// //   const filterItems = (category) => {
// //     setActiveCategory(category);
// //     if (category === "all") {
// //       setMenuItems("suman");
// //       return;
// //     }
// //     const newItems = Object.values(data).filter((item) => item.itemCategory === category);
// //     setMenuItems(newItems);
// //   };
// //   return (<>
   
// // 
 
     
// //     </>
// //   );
// // };


