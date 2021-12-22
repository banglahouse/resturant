import React, { useRef,useState ,useCallback} from 'react';
import ButtonCartCount from '../../components/common/ButtonCartCount';
import Footer from '../../components/common/Footer';
import Banner from '../../components/Home/Banner';
import Menu from '../../components/common/Menu';
import { menuItemsData } from '../../components/common/Menu/data';
import useFetchData from '../../components/common/Menu/MenuItem/newData'
import Category from '../../components/Home/Category'
import Categories from '../../components/common/Menu/Categories/categories'

const Home = () => {
  const {
    data,
    loading,
  } = useFetchData();

  const [name,setName] = useState('')
 
  const menuRef = useRef();
  
  const handleScrollMenu = () => {
    menuRef.current.scrollIntoView({ behavior: 'smooth' });


  };
  
  const handleCallback = useCallback((name)=>{
  
  setName(name);
  console.log(name)
  },[])

  return (
    <>
      <Banner handleScrollMenu={handleScrollMenu} />
      {/* {[data].map(item => (<span>{item.itemName}</span>))} */}
   
      <Menu list={data} ref={menuRef}  />
      {/* {console.log(data)} */}
      {/* <GetMenu/> */}
      <Footer />
      <ButtonCartCount />
    </>
  );
};

export default Home;
