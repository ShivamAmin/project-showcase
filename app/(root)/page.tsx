import Image from "next/image";
import SearchForm from "@/components/SearchForm";

export default async function Home({ searchParams }: {
    searchParams: Promise<{ query?: string }>
}) {
    const query = (await searchParams).query;
  return (
    <>
        <section className="pink_container">
            <h1 className="heading">Turning ideas<br />into Functional Software</h1>
            <p className="sub-heading !max-w-3xl">
                Explore my projects and the technology behind them.
            </p>
            <SearchForm query={query} />
        </section>
    </>
  );
}
