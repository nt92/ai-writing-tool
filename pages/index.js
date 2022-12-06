import Head from 'next/head';

const Home = () => {
  return (
    <div className="root">
      <Head>
        <title>AI Writing Tool</title>
      </Head>
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>title</h1>
          </div>
          <div className="header-subtitle">
            <h2>subtitle</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
