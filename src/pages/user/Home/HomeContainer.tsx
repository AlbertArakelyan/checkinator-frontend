import Home from './Home';

import useHomeContainer from './useHomeContainer';

const HomeContainer = () => {
  const { plansListContent } = useHomeContainer();

  return <Home plansListContent={plansListContent} />;
};

export default HomeContainer;
