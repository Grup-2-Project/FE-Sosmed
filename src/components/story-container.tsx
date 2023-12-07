import { getStory } from "@/lib/apis/story/api";
import { useEffect, useState } from "react";
import { IStory } from "@/lib/apis/story/types";
import StorySkeleton from "./story-skeleton";
import StoryCard from "./story-card";

const StoryContainer = () => {
  const [data, setData] = useState<IStory[]>();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const res = await getStory();

        setData(res?.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, []);

  return (
    <div className="mb-6 flex w-full justify-center flex-col">
      {isLoading ? (
        <StorySkeleton />
      ) : (
        <>{data?.map((story) => <StoryCard story={story} key={story.id} />)}</>
      )}
    </div>
  );
};

export default StoryContainer;
