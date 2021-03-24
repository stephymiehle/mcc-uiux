import * as React from 'react';
import { Button } from '../components/Button';
import { ContainerLayout } from '../components/Layout';

const NotFoundPage: React.FC = ({ location }) => {
  return (
    <ContainerLayout location={location} title="Page Not Found">
      <h1 className="text-6xl font-semibold text-black dark:text-white">404</h1>
      <p className="text-2xl font-light leading-normal md:text-3xl">
        Page Not Found
      </p>
      <p className="mb-8">
        Don't worry! You can find plenty of other things on our homepage.
      </p>

      <Button>Back to homepage</Button>
    </ContainerLayout>
  );
};

export default NotFoundPage;
