import Head from "next/head";
import Header from "../components/Header";
import Hero from "../components/Hero";

export default function Home() {
    return (
        <div className=" h-screen bg-zinc-800 text-white">
            <Head>
                <title>Felipe's Portfolio</title>
                <meta name="description" content="Felipe's Portfolio" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <section id="hero">
                <Hero />
            </section>
        </div>
    );
}
