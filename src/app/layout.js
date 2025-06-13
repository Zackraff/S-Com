import './globals.css';
import HeaderView from './components/HeaderView';
import SessionProvider from './SessionWrapper';

export const metadata = {
    title: 'LearnNextJS',
    description: 'Sederhana App dengan Next.js + MVP',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="text-light">
                <HeaderView />
                <SessionProvider>{children}</SessionProvider>
            </body>
        </html>
    );
}
