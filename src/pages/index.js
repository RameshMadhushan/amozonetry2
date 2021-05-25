import Head from "next/head";
import Banner from "../components/Banner";
import Navigation from "../components/Navigation";
import ProductFeed from "../components/ProductFeed";






export default function Home({products}) {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>My amzone || clone</title>
      </Head>


      <Navigation />



      <main className="max-w-screen-2xl mx-auto">


        <Banner />

        <ProductFeed products={products} />


      </main>





     
    </div>
  );
}



export async function getServerSideProps(context) {
  const products = await fetch('https://fakestoreapi.com/products')
  .then((res) => res.json())


  return {
      props : {
          products
      }
  }
}
