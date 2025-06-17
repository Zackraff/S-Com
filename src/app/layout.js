import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

import SessionProvider from './SessionWrapper';

export const metadata = {
    title: 'S-MoniCom',
    description: 'Aplikasi Monitoring Komentar Youtube',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link rel="icon" href="/Logo1.png" />
            </head>
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
