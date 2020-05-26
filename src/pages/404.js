import React from 'react';
import Layout from '../components/Layout/Layout';
import Stage from '../components/Stage/Stage';

const NotFoundPage = () => (
  <Layout>
    <Stage small />
    <section className="container__page container center mb">
      <h1>Hang Loose <span role="img" aria-label="Hang Loose Emoji">🤙🏼</span></h1>
      <p>Die Seite die du suchst, gibt's leider nicht.</p>
    </section>
  </Layout>
);

export default NotFoundPage;
