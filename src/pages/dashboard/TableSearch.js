// material-ui
import { Box, FormControl, InputAdornment, OutlinedInput } from '@mui/material';

// assets
import { SearchOutlined } from '@ant-design/icons';

// ==============================|| HEADER CONTENT - SEARCH ||============================== //

const TableSearch = () => (
    <Box sx={{ ml: { xs: 0, md: 1 } }}>
        <FormControl sx={{ width: { xs: '100%', md: 500 } }}>
            <OutlinedInput
                size="Normal"
                id="header-search"
                startAdornment={
                    <InputAdornment position="start" sx={{ mr: -0.5 }}>
                        <SearchOutlined />
                    </InputAdornment>
                }
                aria-describedby="header-search-text"
                inputProps={{
                    'aria-label': 'weight'
                }}
                placeholder="Search"
            />
        </FormControl>
    </Box>
);

export default TableSearch;
