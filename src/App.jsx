import { useEffect, useState } from 'react';
import About from './components/About/about';
import Conatact from './components/Contact/contact';
import Educations from './components/Educations/Educations';
import Experience from './components/Experiences/Experience';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';
import Porojects from './components/Projects/Porojects';
import Skills from './components/Skills/Skills';

import DotGrid from './components/animation/Dotgrid';

function App() {
    const [mount, setMount] = useState(false);
    useEffect(() => {
        if (!mount) {
            setMount(true);
        }
    }, [mount]);
    if(!mount){
        return null;
    }

    return (
        <div className="bg-[#e2f6ff] dark:bg-[#06010f]  transition-colors duration-300">
            {/* <div style={{ width: '100%', height: '600px', position: 'relative' }}>
                <DotGrid dotSize={3} gap={10} baseColor="#5227FF" activeColor="#5227FF" proximity={120} shockRadius={250} shockStrength={5} resistance={750} returnDuration={1.5} />
            </div> */}
            {/* <div className="absolute inset-0 bg-gradient-to-br from-[#cceafdbc] dark:from-[#4f4f4f2e] to-transparent-[1px] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_70%,transparent_100%)]"></div> */}
            <div className="py-15">
                <Navbar />
                <About />
                <Skills />
                <Experience />
                <Porojects />
                <Educations />
                <Conatact />
                <Footer />
            </div>
        </div>
    );
}

export default App;
