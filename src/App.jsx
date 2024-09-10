import Blogs from "./Components/Blogs/Blogs"
import Bookmarks from "./Components/Bookmarks/Bookmarks"
import Footer from "./Layout/Footer";
import Navbar from "./Layout/Navbar"


function App() {


  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="md:flex gap-10 flex-grow w-[90%] mx-auto">
        <div className="md:w-2/3">
          <Blogs />
        </div>
        <div className="md:w-1/3">
          <Bookmarks />
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App
