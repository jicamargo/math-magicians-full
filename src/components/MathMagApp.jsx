import { Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';

import Home from '@/routes/Home';
import Calc from '@/routes/Calc';
import Quote from '@/routes/Quote';
import NotMatch from '@/routes/NotMatch';

const MathMagApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="Home" element={<Home />} />
        <Route path="Calc" element={<Calc />} />
        <Route path="Quote" element={<Quote />} />
        <Route path="*" element={<NotMatch />} />
      </Route>
    </Routes>
  );
};
export default MathMagApp;
