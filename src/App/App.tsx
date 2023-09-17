import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';

import { Home, Success, Auth, ForgotPassword, ResetPassword, VerifyEmail } from 'pages';

import { BaseLayout, AuthLayout } from 'components';

import { IAppProps } from './types';

const App: FC<IAppProps> = ({ theme }) => {
  return (
    <div className={`App ${theme}`}>
      <Routes>
        <Route element={<BaseLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/success" element={<Success />} />
        </Route>
        <Route element={<AuthLayout />}>
          <Route path="/auth" element={<Auth />} />
          <Route path="/forgot" element={<ForgotPassword />} />
          <Route path="/reset/:token" element={<ResetPassword />} />
          <Route path="/verify/:token" element={<VerifyEmail />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
