import NavBar from './layouts/NavBar';
import ListingJumboltron from './layouts/ListingJumboltron';
import AllArticles from './components/AllArticles';
import Footer from './layouts/Footer';

function App() {
  const title = "Here are something you should know regarding how we work";
  const articles = [
    {
      img: "https://blog.lingoda.com/wp-content/uploads/2021/07/mexican-traditions-scaled-e1627035111698.jpg",
      title: title
    },
    {
      img: "https://d2jx2rerrg6sh3.cloudfront.net/images/Article_Images/ImageForArticle_22572_16533781526443229.jpg",
      title: title
    },
    {
      img: "https://images.squarespace-cdn.com/content/v1/5aa96c579772aea9adaa2ef7/62728ff0-bf16-4bcf-b5b4-c9b1bb0d152d/AIinHealthcare_723+%281%29.png",
      title: title
    },
    {
      img: "https://i.insider.com/5fd8ea51dc030c001aab6bae?width=700",
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
