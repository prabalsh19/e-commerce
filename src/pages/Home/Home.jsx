import Footer from "../../components/footer/Footer";
import ProductCategory from "../../components/productCategory/ProductCategory";

function Home() {
  return (
    <>
      <div className="hero">
        <ProductCategory />
        <Footer />
      </div>
    </>
  );
}

export default Home;
