import StoryCard from "@/components/story-card";
import StorySkeleton from "@/components/story-skeleton";
import { Button } from "@/components/ui/button";
import { getStory } from "@/lib/apis/story/api";
import { IStory } from "@/lib/apis/story/types";
import { CalendarDays } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Profile = () => {
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
    <div className="container">
      <div className="flex flex-col items-center">
        <div className="flex w-[800px] flex-col items-center rounded-xl border-b pb-4">
          <section className="flex h-[400px] w-full items-end bg-[url('https://source.unsplash.com/800x300?mountain')] bg-[length:800px_320px] bg-top bg-no-repeat">
            <div className="flex w-full items-center justify-between px-3">
              <img
                src="https://source.unsplash.com/150x150?women"
                alt="woman"
                className="rounded-full"
              />
              <Link to="/user/settings">
                <Button className="rounded-3xl">Edit profile</Button>
              </Link>
            </div>
          </section>

          <div className="mt-4 w-full px-3 leading-6">
            <p className="text-[20px] font-bold">John Doe</p>
            <p className="text-[14px] text-slate-400">@john_doe</p>

            <div className="mt-2 flex items-center gap-1">
              <CalendarDays className="h-[16px] w-[16px]" />
              <p className="text-[14px] text-gray-500">Joined December 2023</p>
            </div>
          </div>
        </div>

        <div className="mb-6 flex w-full justify-center mt-5">
          {isLoading ? (
            <StorySkeleton />
          ) : (
            <>
              {data?.map((story) => <StoryCard story={story} key={story.id} />)}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
