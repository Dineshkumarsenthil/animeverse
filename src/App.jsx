import { Routes, Route, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Anime from "./pages/Anime";
import AnimeDetails from "./pages/AnimeDetails";
import Watchlist from "./pages/Watchlist";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Overview from "./pages/animeDetails/Overview";
import Characters from "./pages/animeDetails/Characters";
import Reviews from "./pages/animeDetails/Reviews";

function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/anime" element={<Anime />} />
        <Route path="/watchlist" element={<Watchlist />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/anime/:id" element={<AnimeDetails />}>
          <Route index element={<Overview />} />
          <Route path="characters" element={<Characters />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
