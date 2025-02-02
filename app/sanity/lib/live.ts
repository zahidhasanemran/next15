import "server-only";

import { defineLive } from "next-sanity";
import { client } from "@/app/sanity/lib/client";

export const { sanityFetch, SanityLive } = defineLive({ client });