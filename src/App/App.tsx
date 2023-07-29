import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home } from 'pages';

import { BaseLayout } from 'components';

import { IAppProps } from './types';

const App: FC<IAppProps> = ({ theme }) => {
  return (
    <div className={`App ${theme}`}>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
