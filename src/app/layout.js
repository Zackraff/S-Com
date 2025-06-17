import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

import SessionProvider from './SessionWrapper';

export const metadata = {
    title: 'LearnNextJS',
    description: 'Sederhana App dengan Next.js + MVP',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="text-light">
                <SessionProvider>
                    <Header />
                    {children}
                    <Footer />
                </SessionProvider>
            </body>
        </html>
    );
}
