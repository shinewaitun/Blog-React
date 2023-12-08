import NavBar from './layouts/NavBar';
import ListingJumboltron from './layouts/ListingJumboltron';
import AllArticles from './components/AllArticles';
import img from "./images/image_1.png";
import Footer from './layouts/Footer';

function App() {
  const title = "Here are something you should know regarding how we work";
  const articles = [
    {
      img: img,
      title: title
    },
    {
      img: img,
      title: title
    },
    {
      img: img,
      title: title
    },
    {
      img: img,
      title: title
    }
  ];
  return (
    <div className="App">
      < NavBar />
      <ListingJumboltron />
      <h1 className='text-center text-black fw-bold'>All Articles</h1>
      <AllArticles articles={articles}/>
      <Footer/>
    </div>
  );
}

export default App;
