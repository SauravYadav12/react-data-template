// project import
import Routes from 'routes';
import ThemeCustomization from 'themes';
import ScrollTop from 'components/ScrollTop';
import { ToastContainer } from 'react-toastify';

// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

const App = () => (
  <ThemeCustomization>
    <ScrollTop>
      <ToastContainer></ToastContainer>
      <Routes />
    </ScrollTop>
  </ThemeCustomization>
);

export default App;
