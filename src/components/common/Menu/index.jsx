 import React, { forwardRef,useState } from 'react';
  import MenuItem from './MenuItem';
  import './styles.css';
  import Category from '../../Home/Category'
  





  const Menu = forwardRef(({ list }, ref) => (
    
  
   <main ref={ref} >
   <>
   
   </>
    {Object.values(list).map((item) => (
     <MenuItem item={item} key={item.itemid} category = {item.itemCategory}
        
 />
 

      ))}


   </main>
  ));
  
  export default Menu;









// mport React, { useState, useEffect } from 'react';

// function App() {
//   
//   return (
//     <ul>
//       {data.map(item => (
//         <li key={item.ObjectId}>
//           <a href={item.url}>{item.title}</a>
//         </li>
//       ))}
//     </ul>
//   );
// }
