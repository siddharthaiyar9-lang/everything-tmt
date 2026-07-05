import { Instrument_Serif, Newsreader, Inter } from "next/font/google";
import { ThemeProvider } from "@/lib/ThemeContext";
import { getSearchIndex } from "@/lib/searchIndex";
import Navbar from "@/components/Navbar/Navbar";
import Footer from "@/components/Footer/Footer";
import "../styles/globals.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "Everything TMT",
  description: "Technology Law. Explained.",
};

export default function RootLayout({ children }) {
  // Built once per request on the server. For a site this size the
  // cost is negligible; if the index grows into the thousands of
  // entries later, this is the point where caching or a build-time
  // step would get introduced — not a concern yet.
  const searchIndex = getSearchIndex();

  return (
    <html
      lang="en"
      className={`${instrumentSerif.variable} ${newsreader.variable} ${inter.variable}`}
    >
      <body>
        <ThemeProvider>
          <Navbar searchIndex={searchIndex} />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
