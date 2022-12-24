import About from './pages/about.js';
import Donate from './pages/donate.js';
import Faq from './pages/faq.js';
import Footer from './pages/footer.js';
import Gallery from './pages/gallery.js';
import Header from './pages/header.js';
import Information from './pages/information.js';
import Slider from './pages/slider.js';

function App() {
    return (
        <>
            {/* Header */}
            <Header />

            {/* Slider */}
            <Slider />

            {/* about us */}
            <About />

            {/* donate now */}
            <Donate />

            {/* do's and don'ts */}
            <Information />

            {/* gallery */}
            <Gallery />

            {/* faq */}
            <Faq />
            
            {/* Footer */}
            <Footer />
        </>
    );
}

export default App;
