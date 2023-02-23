import {Stack, Typography} from '@mui/material';
import { Link } from 'react-router-dom';

import {logo} from '../utils/constants'
import SearchBar from './SearchBar';

const Navbar = () =>  (
    <Stack direction="row" alignItems="center" p={2} sx={{ position: 'sticky', background: '#C04000', top: 0, justifyContent: 'space-between'}}>
        <Link to="/" style={{display: 'flex', alignItems: 'center'}}>
            <img src={logo} alt="logo" height={45} width={50} />
            <Typography variant="h4" fontWeight="bold" ml={1} sx={{ display: { xs: 'none', md: 'block' }}}>
                <span style={ {color:'white'}}>my</span><span style={ {color:'#36454F'}}>Tube</span>
            </Typography>

        </Link>
        <SearchBar/>
    </Stack>
)


export default Navbar