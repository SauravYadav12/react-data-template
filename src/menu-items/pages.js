// assets
import { ApartmentOutlined, ProfileOutlined } from '@ant-design/icons';

// icons
const icons = {
  ApartmentOutlined,
  ProfileOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
  id: 'Records',
  title: 'Records',
  type: 'group',
  children: [
    {
      id: 'clients',
      title: 'Clients',
      type: 'item',
      url: '/clients',
      icon: icons.ApartmentOutlined,
      target: false
    },
    {
      id: 'vendors',
      title: 'Vendors',
      type: 'item',
      url: '/vendors',
      icon: icons.ProfileOutlined,
      target: false
    }
  ]
};

export default pages;
