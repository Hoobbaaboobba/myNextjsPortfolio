import About from "./components/aboutme/About";
import Feedback from "./components/feedback/Feedback";
import Footer from "./components/footer/Footer";
import MySkills from "./components/myskills/MySkills";
import Navbar from "./components/navbar/Navbar";
import OrderingProcess from "./components/orderingprocess/OrderingProcess";
import Portfolio from "./components/portfolio/Portfolio";
import "./globals.css";
import Providers from "./provides";

export const metadata = {
  title: "Alexey Matveev",
  description: "Created by Lexus Inc.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body>
        <Providers>
          <Navbar />
          <About />
          <MySkills />
          <Portfolio />
          <OrderingProcess />
          {children}
          <Feedback />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
