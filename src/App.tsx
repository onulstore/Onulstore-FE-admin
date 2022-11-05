import { Routes, Route } from 'react-router-dom';
import GlobalStyles from './style/global';
import theme from '../src/style/theme';
import { ThemeProvider } from 'styled-components';
//PAGES
import Home from './pages/Home';
import HomeConfig from 'pages/HomeConfig';
import BannerConfig from 'components/BannerConfig';
import CurationConfig from 'components/CurationConfig';
import ReviewConfig from 'components/ReviewConfig';
import TodayConfig from 'components/TodayConfig';
import MagazineConfig from 'components/MagazineConfig';
import MdConfig from 'components/MdConfig';
import ItemRegister from 'pages/ItemRegister';
import ItemManagement from 'pages/ItemManagement';
import MagazineRegister from 'components/MagazineRegister';
import MagazineEdit from 'components/MagazineEdit';
import SignIn from 'pages/SignIn';
import ItemEdit from 'pages/ItemEdit';
import FakeLeftNav from 'components/LeftNavBar';
import FakeLayout from 'components/FakeLayout';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes>
        <Route index element={<Home />} />
        <Route path="home-config" element={<HomeConfig />}>
          <Route path="banner" element={<BannerConfig />} />
          <Route path="curation" element={<CurationConfig />} />
          <Route path="review" element={<ReviewConfig />} />
          <Route path="today" element={<TodayConfig />} />
          <Route path="magazine" element={<MagazineConfig />} />
          <Route path="magazine/register" element={<MagazineRegister />} />
          <Route path="magazine/:magazineId" element={<MagazineEdit />} />

          <Route path="md" element={<MdConfig />} />
        </Route>

        <Route element={<FakeLayout />}>
          <Route path="item-management" element={<ItemManagement />} />
          <Route path="item-management/register" element={<ItemRegister />} />
          <Route path="item-management/:itemId" element={<ItemEdit />} />
        </Route>

        <Route path="signin" element={<SignIn />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
