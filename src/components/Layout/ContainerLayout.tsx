import React from 'react';
import classNames from 'classnames';
import { Footer } from '../Footer';
import { Nav } from '../Nav';
import { SEO } from '../SEO';

interface IContainerLayoutProps {
  location: Location;
  title?: string;
  defaultPadding?: boolean;
  defaultMargin?: boolean;
  className?: string;
}

export const ContainerLayout: React.FC<IContainerLayoutProps> = ({
  location,
  title,
  children,
  defaultPadding = true,
  defaultMargin = true,
  className,
}) => {
  const contentClasses = classNames(
    'max-w-prose md:text-lg',
    { 'pb-12': defaultPadding },
    { 'mt-6 mx-auto': defaultMargin },
    className,
  );
  return (
    <>
      <SEO pathName={location.pathname} title={title} />
      <Nav />
      <main className="site-container">
        <section className="container px-4 mx-auto">
          <div className={contentClasses}>{children}</div>
        </section>
      </main>
      <Footer />
    </>
  );
};
