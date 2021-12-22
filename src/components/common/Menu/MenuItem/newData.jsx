import { useEffect, useState} from 'react';
import axios from 'axios';

const useFetchData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get("http://hikebackend.herokuapp.com/api/menu/"  ,{
          header: {
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        }
      });
        setData(response);

      } catch (error) {
        console.error(error)
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return {
    
    data,
    loading,
  }  
};

export default useFetchData;