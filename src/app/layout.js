import Footer from '@/components/footer/Footer';
import './globals.css';
import { Montserrat, Merriweather } from 'next/font/google';
import Navbar from '@/components/navbar/Navbar';
import { ThemeContextProvider } from '@/context/ThemeContext';
import ThemeProvider from '@/providers/ThemeProvider';
import AuthProvider from "@/providers/AuthProvider";


const montserrat = Montserrat({ subsets: ['latin'] });
const merriweather = Merriweather({ subsets: ['latin'], weight: '400' });

export const metadata = {
  title: 'Futurebound',
  description: 'The future uncharted!',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={merriweather.className}>
      <AuthProvider>
        <ThemeContextProvider>
          <ThemeProvider>
            <div className="container">
              <div className="wrapper">
                <Navbar />
                {children}
                <Footer />
              </div>
            </div>
          </ThemeProvider>
        </ThemeContextProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
