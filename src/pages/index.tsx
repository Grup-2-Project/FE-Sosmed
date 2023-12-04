import PostFormPopup from "@/components/post-form-popup";
import StoryCard from "@/components/story-card";
import { ImagePlusIcon } from "lucide-react";

const Index = () => {
  return (
    <div className="container flex justify-center">
      <div className="flex w-[700px] flex-col gap-2">
        <PostFormPopup>
          <div className="flex w-full items-center rounded-md p-2">
            <div className="flex w-full rounded-full border py-3 px-5 font-semibold justify-between">
              What do you have in mind ?
              <ImagePlusIcon />
            </div>
          </div>
        </PostFormPopup>
        <StoryCard />
      </div>
    </div>
  );
};

export default Index;
