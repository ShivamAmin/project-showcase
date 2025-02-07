import React from 'react'
import {client} from "@/sanity/lib/client";
import {PROJECTS_BY_AUTHOR_QUERY} from "@/sanity/lib/queries";
import ProjectCard, {ProjectCardType} from "@/components/ProjectCard";

const UserProjects = async ({ id }: { id: string }) => {
    const projects = await client.fetch(PROJECTS_BY_AUTHOR_QUERY, { id })
    return (
        <>
            {projects.length > 0 ? projects.map((project: ProjectCardType) => (
                <ProjectCard key={project._id} post={project} />
            )) : (
                <p className={"no-result"}>"No projects found."</p>
            )}
        </>
    )

}
export default UserProjects
