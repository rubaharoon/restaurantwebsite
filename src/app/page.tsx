import Header from "../components/header";
import Hero from "../components/hero";
import AboutSection from "../components/aboutfood";
import CategoryCarousel from "../components/category";
import MenuSection from "../components/menu";
import Banner from "../components/banner";
import BlogSection from "../components/blog";
import ExpertsSection from "../components/expertsection";
import Gallery from "../components/gallery";
import Newsletter from "../components/newsletter";
import Footer from "../components/footer";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <AboutSection />
      <CategoryCarousel />
      <MenuSection />
      <Banner />
      <BlogSection />
      <ExpertsSection />
      <Gallery />
      <Newsletter />
      <Footer />
      <Link href="/about"></Link>
      <Link href="/menu"></Link>
      <Link href="/reservation"></Link>
      <Link href="/contact"></Link>
      <Link href="/login"></Link>

    </>
  );
}
         