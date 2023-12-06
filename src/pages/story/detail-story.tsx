import StoryCard from "@/components/story-card";
import StorySkeleton from "@/components/story-skeleton";
import { getStoryById } from "@/lib/apis/story/api";
import { IStory } from "@/lib/apis/story/types";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const DetailStory = () => {
  const [data, setData] = useState<IStory>();
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const res = await getStoryById(id);

        setData(res?.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [id]);
  return (
    <div className="container mt-5 flex justify-center ">
      <div className="w-[700px]">
        {isLoading ? <StorySkeleton /> : <StoryCard story={data!} />}
      </div>
    </div>
  );
};

export default DetailStory;
