import PostFormPopup from "@/components/post-form-popup";
import StoryContainer from "@/components/story-container";
import { ImagePlusIcon } from "lucide-react";

const Index = () => {
  return (
    <div className="container flex justify-center">
      <div className="flex w-[700px] flex-col gap-2">
        <PostFormPopup>
          <div className="flex w-full items-center rounded-md mt-3 mb-4">
            <div className="flex w-full rounded-full border py-3 px-5 font-semibold justify-between">
              What do you have in mind ?
              <ImagePlusIcon />
            </div>
          </div>
        </PostFormPopup>
        <StoryContainer />
      </div>
    </div>
  );
};

export default Index;
