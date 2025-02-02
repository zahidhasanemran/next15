import { type SchemaTypeDefinition } from "sanity";

import { author } from "@/app/sanity/schemaTypes/author";
import { startup } from "@/app/sanity/schemaTypes/startup";
import { playlist } from "@/app/sanity/schemaTypes/playlist";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, startup, playlist],
};