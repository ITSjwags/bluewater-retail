import React, { Component } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Loader from '../components/loader';
import Content from '../components/content';

if (typeof window !== 'undefined') {
  require('fullpage.js/vendors/scrolloverflow'); // eslint-disable-line global-require
}

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    this.setViewportHeight();
    window.addEventListener('resize', () => this.setViewportHeight());
    setTimeout(() => this.setState({ isLoading: false }), 15000);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () => this.setViewportHeight());
  }

  setViewportHeight = () => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  render() {
    const { isLoading } = this.state;

    return (
      <Layout>
        <SEO title="Bluewater" keywords={['bluewater', 'retail']} />
        {isLoading
          ? <Loader />
          : (
            <ReactFullpage
              scrollOverflow
              scrollOverflowReset
              // onLeave={(origin, destination, direction) => {
              //   // after leaving section 2
              //   if (origin.index === 0 && direction === 'down') {
              //     do something?
              //   } if (origin.index === 1 && direction === 'up') {
              //     do something?
              //   } else {
              //     do something?
              //   }
              // }}
              // afterLoad={(origin, destination, direction) => {
              //   // do something?
              // }}
              render={({ state, fullpageApi }) => {
                console.info('state: ', state);
                console.info('fullpageApi: ', fullpageApi);
                return (
                  <ReactFullpage.Wrapper>
                    <Content />
                  </ReactFullpage.Wrapper>
                );
              }}
            />
          )
        }
      </Layout>
    );
  }
}

export default IndexPage;
