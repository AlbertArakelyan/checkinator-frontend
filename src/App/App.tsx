import { Routes, Route } from 'react-router-dom';

import { Home } from 'pages';
import { BaseLayout } from 'components';

const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<BaseLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
