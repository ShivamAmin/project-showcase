import SearchForm from "@/components/SearchForm";
import ProjectCard, { ProjectCardType } from "@/components/ProjectCard";
import { PROJECTS_QUERY } from "@/sanity/lib/queries";
import { sanityFetch, SanityLive} from "@/sanity/lib/live";

export default async function Home({ searchParams }: {
    searchParams: Promise<{ query?: string }>
}) {
    const query = (await searchParams).query;
    const { data: posts } = await sanityFetch({ query: PROJECTS_QUERY});
  return (
    <>
        <section className="pink_container">
            <h1 className="heading">Turning ideas<br />into Functional Software</h1>
            <p className="sub-heading !max-w-3xl">
                Explore my projects and the technology behind them.
            </p>
            <SearchForm query={query} />
        </section>
        <section className="section_container">
            <p className="text-30-semibold">
                {query ? `Search results for "${query}"` : "All projects"}
            </p>
            <ul className="mt-7 card_grid">
                {posts?.length > 0 ? (
                    posts.map((post: ProjectCardType) => (
                        <ProjectCard key={post?._id} post={post} />
                    ))
                ) : (
                    <p className="no-results">No projects found</p>
                )}
            </ul>
        </section>
        <SanityLive />
    </>
  );
}
