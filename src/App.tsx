import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Gallery from './components/Gallery';
//import About from './components/About';
import Footer from './components/Footer';
import Pattern from './components/Pattern';

function App() {
  return (
    <div className="App relative bg-background-light dark:bg-background transition-colors duration-300">
      {/* Background Pattern - only visible in dark mode */}
      <div className="fixed inset-0 z-0 dark:block hidden">
        <Pattern />
      </div>

      {/* Light mode background */}
      <div className="fixed inset-0 z-0 dark:hidden block bg-background-light"></div>

      {/* Content with higher z-index */}
      <div className="relative z-10">
        <Navbar />
        <main className="main-content">
          <Hero />
          <Gallery />
      {/* Light mode background
          <About />
      */}
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
