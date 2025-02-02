import React from "react";
import { client } from "@/app/sanity/lib/client";
import { STARTUPS_BY_AUTHOR_QUERY } from "@/app/sanity/lib/queries";
import StartupCard, { StartupTypeCard } from "@/app/components/StartupCard";

const UserStartups = async ({ id }: { id: string }) => {
  const startups = await client.fetch(STARTUPS_BY_AUTHOR_QUERY, { id });
  // const startups = [{}]
  return (
    <>
      {startups.length > 0 ? (
        startups.map((startup: StartupTypeCard) => (
          <StartupCard key={startup._id} post={startup} />
        ))
      ) : (
        <p className="no-result">No posts yet</p>
      )}
    </>
  );
};
export default UserStartups;