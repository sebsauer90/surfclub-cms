import React from 'react';
import { Helmet } from 'react-helmet';
import { withPrefix } from 'gatsby';
import 'reset-css';
import 'slick-carousel/slick/slick.css'; 
import '../../styles/index.scss';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import useSiteMetadata from '../../hooks/SiteMetadata';

function TemplateWrapper({ children }) {
  const { title, description } = useSiteMetadata();

  return (
    <>
      <Helmet>
        <html lang="de" />
        <title>{title}</title>
        <meta name="description" content={description} />

        <link rel="apple-touch-icon" sizes="180x180" href={`${withPrefix('/')}img/apple-touch-icon.png`} />
        <link rel="icon" type="image/png" href={`${withPrefix('/')}img/favicon-32x32.png`} sizes="32x32" />
        <link rel="icon" type="image/png" href={`${withPrefix('/')}img/favicon-16x16.png`} sizes="16x16" />
        {/* <link rel="mask-icon" href={`${withPrefix('/')}img/safari-pinned-tab.svg`} color="#ff4400" /> */}
        <link href="https://fonts.googleapis.com/css2?family=Barlow+Semi+Condensed:wght@400;500;600&display=swap" rel="stylesheet" />

        <meta name="theme-color" content="#fff" />
        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:url" content="/" />
        {/* <meta property="og:image" content={`${withPrefix('/')}img/og-image.jpg`} /> */}
      </Helmet>

      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default TemplateWrapper;
