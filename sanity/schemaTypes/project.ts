import {defineField, defineType} from 'sanity';
import {UserIcon} from "lucide-react";

export const project = defineType({
    name: "project",
    title: 'Project',
    type: "document",
    icon: UserIcon,
    fields: [
        defineField({
            name: "title",
            type: "string",
        }),
        defineField({
            name: "slug",
            type: "slug",
            options: {
                source: 'title'
            }
        }),
        defineField({
            name: "author",
            type: "reference",
            to: {type: "author"},
        }),
        defineField({
            name: "views",
            type: "number",
        }),
        defineField({
            name: "description",
            type: "text",
        }),
        defineField({
            name: "category",
            type: "string",
            validation: (Rule) => Rule.min(1).max(20).required().error('Category is required'),
        }),
        defineField({
            name: "image",
            type: "url", //Optimization: Save an image here, instead of an url
            validation: (Rule) => Rule.required().error('Image is required'),
        }),
        defineField({
            name: "pitch",
            type: "markdown",
        }),
    ],
})