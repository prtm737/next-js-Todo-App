import Todobox from "../components/Todobox";
import Head from "next/head";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Prtm ToDo App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="flex flex-col justify-center items-center h-screen mx-auto ">
        <Todobox />
      </div>
      <Footer/>
    </>
  );
}
