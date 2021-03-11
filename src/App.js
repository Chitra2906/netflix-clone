import logo from './logo.svg';
import './App.css';
import Row from './Row'
import requests from './requests'
import Banner from './Banner'
import Nav from './Nav'

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflix} isLargeRow />
      <Row title="Trending" fetchUrl={requests.fetchTrending} />
      <Row title="Popular" fetchUrl={requests.fetchPopular} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Upcoming" fetchUrl={requests.fetchUpcoming} />
      <Row title="History" fetchUrl={requests.fetchHistoryMovies} />
      <Row title="War" fetchUrl={requests.fetchWarMovies} />
      <Row title="Family" fetchUrl={requests.fetchFamilyMovies} />
      <Row title="Music" fetchUrl={requests.fetchMusicMovies} />
      <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />

    </div>
  );
}

export default App;
