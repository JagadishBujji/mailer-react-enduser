import { useState } from 'react';

// material-ui
import {
    Avatar,
    AvatarGroup,
    Box,
    Button,
    Grid,
    List,
    ListItemAvatar,
    ListItemButton,
    ListItemSecondaryAction,
    ListItemText,
    MenuItem,
    Stack,
    TextField,
    Typography
} from '@mui/material';
import AnalyticEcommerce from 'components/cards/statistics/AnalyticEcommerce';
import OrdersTable from '../dashboard/OrdersTable';
import MainCard from 'components/MainCard';
import MyCalender from '../dashboard/MyCalender';
import TableSearch from '../dashboard/TableSearch';

const index = () => {
    return (
        <>
            <Grid container rowSpacing={4.5} columnSpacing={2.75}>
                {/* row 1 */}
                <Grid item xs={12} sx={{ mb: -2.25 }}>
                    <Typography variant="h5">Users</Typography>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <AnalyticEcommerce title="Batches" count="05" />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <AnalyticEcommerce title="Users" count="10" />
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={4}>
                    <AnalyticEcommerce title="Location" count="15" />
                </Grid>

                {/* <Search /> */}
                <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />

                {/* row 3 */}
                <Grid item xs={12} md={7} lg={12}>
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                            <Typography variant="h5">Recent Orders</Typography>
                            <div className="schedule" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <TableSearch />
                                <Button variant="contained" sx={{ ml: 2, width: '100%' }}>
                                    + Import
                                </Button>
                            </div>
                        </Grid>
                        <Grid item />
                    </Grid>
                    <MainCard sx={{ mt: 2 }} content={false}>
                        <OrdersTable />
                    </MainCard>
                </Grid>

                {/* row 4 */}
            </Grid>
        </>
    );
};

export default index;
