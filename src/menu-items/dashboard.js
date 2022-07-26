// assets
import {
    DashboardOutlined,
    UserOutlined,
    HistoryOutlined,
    AppstoreAddOutlined,
    ImportOutlined,
    UsergroupAddOutlined,
    WindowsOutlined
} from '@ant-design/icons';

// icons
const icons = {
    DashboardOutlined,
    UserOutlined,
    HistoryOutlined,
    AppstoreAddOutlined,
    ImportOutlined,
    UsergroupAddOutlined,
    WindowsOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
    id: 'group-dashboard',
    title: 'Navigation',
    type: 'group',
    children: [
        {
            id: 'dashboard',
            title: 'Dashboard',
            type: 'item',
            url: '/dashboard/default',
            icon: icons.DashboardOutlined,
            breadcrumbs: false
        },
        {
            id: 'user',
            title: 'Users',
            type: 'item',
            url: '/users',
            icon: icons.UsergroupAddOutlined,
            breadcrumbs: false
        },
        {
            id: 'batches',
            title: 'Batches',
            type: 'item',
            url: '/batches',
            icon: icons.AppstoreAddOutlined,
            breadcrumbs: false
        },
        {
            id: 'templates',
            title: 'Templates',
            type: 'item',
            url: '/templates/default',
            icon: icons.WindowsOutlined,
            breadcrumbs: false
        },
        {
            id: 'history&report',
            title: 'history & Report',
            type: 'item',
            url: '/history&report/default',
            icon: icons.HistoryOutlined,
            breadcrumbs: false
        },
        {
            id: 'imports',
            title: 'Imports',
            type: 'item',
            url: '/imports/default',
            icon: icons.ImportOutlined,
            breadcrumbs: false
        },
        {
            id: 'profile',
            title: 'Profile',
            type: 'item',
            url: '/profile/default',
            icon: icons.UserOutlined,
            breadcrumbs: false
        }
    ]
};

export default dashboard;
