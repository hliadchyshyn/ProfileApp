import { ReactElement } from 'react';
import { Helmet } from 'react-helmet-async';

const Home = (): ReactElement => (
  <>
    <Helmet>
      <title>Home Page</title>
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta content="Welcome to Hliadchyshyn's Profile" name="description" />
    </Helmet>
    <div></div>
  </>
);

export default Home;
