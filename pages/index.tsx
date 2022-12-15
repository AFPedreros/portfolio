import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Home() {
    return (
        <div className=" h-screen bg-zinc-800 text-white snap-y snap-mandatory overflow-scroll z-0">
            <Head>
                <title>Felipe's Portfolio</title>
                <meta name="description" content="Felipe's Portfolio" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <section id="hero" className=" snap-center">
                <Hero />
            </section>
        </div>
    );
}
