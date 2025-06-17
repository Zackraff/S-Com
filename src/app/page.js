import HomeSection from './components/HomeSection';
import AboutSection from './components/AboutSection';
import ServiceSection from './components/ServiceSection';
import TestimoniSection from './components/TestimoniSection';
import FaqSection from './components/FaqSection';

export default function HomePage() {
    return (
        <main className="flex min-h-screen bg-black flex-col items-center justify-center px-4 md:px-10 lg:px-24">
            <HomeSection />
            <AboutSection />
            <ServiceSection />
            <TestimoniSection />
            <FaqSection />
        </main>
    );
}
