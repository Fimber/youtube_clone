import { useState, useEffect} from 'react';
import { Box,  Typography} from '@mui/material';
import { useParams } from 'react-router-dom';

import { fetchFromAPI } from '../utils/fetchFromAPI';
import { Videos} from './';


const SearchFeed = () => {

  
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=`)
    .then((data) => setVideos(data.items) )
  }, []);


  return (
    <Box p={2} sx={{overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography variant='h4' fontWeight="bold" mb={2} ml={2} sx={{color: 'white'}}>
          Results for <span style={ {color:'#36454F'}}>videos</span>
        </Typography>
        <Videos videos={videos}/>
      </Box>
  )
}

export default SearchFeed