import "./globals.css";
import HeaderView from "./view/HeaderView";

export const metadata = {
  title: "LearnNextJS",
  description: "Sederhana App dengan Next.js + MVP",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="text-light">
        <HeaderView />
        {children}
      </body>
    </html>
  );
}
