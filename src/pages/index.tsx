import PostFormPopup from "@/components/post-form-popup";
import StoryContainer from "@/components/story-container";
import { useToken } from "@/context/token-provider";
import { ImagePlusIcon } from "lucide-react";

const Index = () => {
  const { user, token } = useToken();
  console.log("User : " + user.FirstName);
  console.log("token : " + token);
  return (
    <div className="container flex justify-center">
      <div className="flex w-[700px] flex-col gap-2">
        <PostFormPopup>
          <div className="mb-4 mt-3 flex w-full items-center rounded-md">
            <div className="flex w-full justify-between rounded-full border px-5 py-3 font-semibold">
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
