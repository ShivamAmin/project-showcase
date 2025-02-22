import { type SchemaTypeDefinition } from 'sanity'
import {author} from "@/sanity/schemaTypes/author";
import {project} from "@/sanity/schemaTypes/project";
import {playlist} from "@/sanity/schemaTypes/playlist";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, project, playlist],
}
