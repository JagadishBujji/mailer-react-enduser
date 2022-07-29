// material-ui
import { Box, FormControl, TextField, InputAdornment, SvgIcon, OutlinedInput } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

// assets
import { SearchOutlined } from '@ant-design/icons';

// ==============================|| HEADER CONTENT - SEARCH ||============================== //

const TableSearchUser = () => (
    <Box sx={{ ml: { xs: 0, md: 1 } }}>
        {/* <FormControl sx={{ width: '100%' }}>
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
        </FormControl> */}
        <TextField
            size="normal"
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <SvgIcon color="action" fontSize="small">
                            <SearchIcon />
                        </SvgIcon>
                    </InputAdornment>
                )
            }}
            placeholder="Search"
            variant="outlined"
            className="input-field"
            sx={{
                width: { sm: 500, md: 800 }
                // '& .MuiInputBase-root': {
                //     width: 100
                // }
            }}
        />
    </Box>
);

export default TableSearchUser;
