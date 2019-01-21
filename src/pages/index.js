import React, { Component } from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Loader from '../components/loader';
import Content from '../components/content';

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
        {isLoading ? <Loader /> : <Content />}
      </Layout>
    );
  }
}

export default IndexPage;
