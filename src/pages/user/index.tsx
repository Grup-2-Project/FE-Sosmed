import StoryCard from "@/components/story-card";
import StorySkeleton from "@/components/story-skeleton";
import { Button } from "@/components/ui/button";
import { useToken } from "@/context/token-provider";

import { IStory } from "@/lib/apis/story/types";
import { getStoryByUsername, getUser } from "@/lib/apis/user/api";
import { Profile } from "@/lib/apis/user/types";
import { CalendarDays, UserCircle2 } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, ScrollRestoration, useParams } from "react-router-dom";

const ProfilePage = () => {
  const [storyData, setStoryData] = useState<IStory[]>();
  const [userData, setUserData] = useState<Profile>();

  const { username } = useParams();
  const { user } = useToken();

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true);
        const res = await getStoryByUsername(username);
        const resUser = await getUser(username);

        setStoryData(res?.data);
        setUserData(resUser.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [username]);

  return (
    <div className="container">
      <ScrollRestoration />
      <div className="flex flex-col items-center">
        <div className="flex w-full flex-col items-center rounded-xl border-b pb-4 lg:w-[700px]">
          <section className="flex h-[400px] w-full items-end bg-[url('https://source.unsplash.com/700x300?mountain')] bg-[length:700px_320px] bg-top bg-no-repeat">
            <div className="flex w-full items-center justify-between px-3">
              {userData?.foto_profil === "default" ? (
                <UserCircle2 className="h-[150px] w-[150px] rounded-full bg-white dark:bg-black" />
              ) : (
                <img
                  src={userData?.foto_profil}
                  alt={userData?.username}
                  className="h-[150px] w-[150px] rounded-full object-cover"
                />
              )}
              {user.username === username && (
                <Link to="/user/settings">
                  <Button className="rounded-3xl">Edit profile</Button>
                </Link>
              )}
            </div>
          </section>

          <div className="mt-4 w-full px-3 leading-6">
            <p className="text-[20px] font-bold">
              {userData?.nama_depan} {userData?.nama_belakang}
            </p>
            <p className="text-[14px] text-slate-400">@{userData?.username}</p>

            <div className="mt-2 flex items-center gap-1">
              <CalendarDays className="h-[16px] w-[16px]" />
              <p className="text-[14px] text-gray-500">Joined December 2023</p>
            </div>
          </div>
        </div>

        <div className="my-3 mb-6 mt-5 flex w-full flex-col justify-center lg:w-[700px]">
          {isLoading ? (
            <StorySkeleton />
          ) : (
            <>
              {storyData?.map((story) => (
                <StoryCard story={story} key={story.id} />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
