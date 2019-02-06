import React, { Component } from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Loader from '../components/loader';
import MainContent from '../components/main-content';

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
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () => this.setViewportHeight());
  }

  setLoadingStatus = (loadingState) => {
    this.setState({ isLoading: loadingState });
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
          ? <Loader isLoading={this.setLoadingStatus} />
          : <MainContent />
        }
      </Layout>
    );
  }
}

export default IndexPage;
