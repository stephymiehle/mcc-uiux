import React from 'react';
import { Footer } from '../Footer';
import { Nav } from '../Nav';
import { SEO } from '../SEO';

interface IContainerLayoutProps {
  location: Location;
  title?: string;
}

export const ContainerLayout: React.FC<IContainerLayoutProps> = ({
  location,
  title,
  children,
}) => (
  <>
    <SEO pathName={location.pathname} title={title} />
    <Nav />
    <main className="flex-grow site-container text-grey-800 dark:bg-grey-900 dark:text-grey-400">
      <section className="container px-4 mx-auto">
        <div className="pb-12 mx-auto max-w-prose md:text-lg">{children}</div>
      </section>
    </main>
    <Footer />
  </>
);
