import React from 'react'
import Ping from "@/components/Ping";
import {client} from "@/sanity/lib/client";
import {PROJECT_VIEWS_QUERY} from "@/sanity/lib/queries";

const View = async ({ id }: {id: string}) => {
    const { views: totalViews } = await client.withConfig({useCdn: false}).fetch(PROJECT_VIEWS_QUERY, {id});
    //TODO: Update views when post is seen.
    return (
        <div className={"view-container"}>
            <div className={"absolute -top-2 -right-2"}>
                <Ping />
            </div>
            <p className={"view-text"}>
            <span className={"font-black"}>View{totalViews !== 1 && 's'}: {totalViews}</span>
            </p>
        </div>
    )
}
export default View
