import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '../../components/Layout/Layout';
import Stage from '../../components/Stage/Stage';
import SectionHeadline from '../../components/Typo/SectionHeadline';
import EventsComponent from '../../components/Events/Events';

const Events = () => (
  <>
    <Helmet titleTemplate="Termine | %s" />

    <Layout>
      <Stage small />
      <section className="container__page mb">
        <div className="container center">
          <SectionHeadline>Termine</SectionHeadline>
        </div>
        <div className="container">
          <EventsComponent />
        </div>
      </section>
    </Layout>
  </>
)

export default Events;
