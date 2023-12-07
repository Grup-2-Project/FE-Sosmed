import { Heart, MessageCircle, MoreHorizontal, Pencil } from "lucide-react";
import StoryComment from "./story-comment";
import { IStory } from "@/lib/apis/story/types";
import { Link } from "react-router-dom";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
import EditFormPopup from "./edit-form-popup";
import { useToken } from "@/context/token-provider";

interface IProps {
  story: IStory;
}

const StoryCard = (props: IProps) => {
  const { story } = props;

  const { user } = useToken();

  const [open, setIsOpen] = useState(false);

  return (
    <div className="my-4 w-full rounded-xl border p-3">
      <div className="flex justify-between">
        <div className="mb-2 flex w-full items-center gap-4">
          <div className="h-[30px] w-[30px] overflow-clip rounded-full">
            <img
              src="https://images.tokopedia.net/img/JFrBQq/2022/9/6/652515bf-d1ca-4462-830b-b4c10302d481.jpg"
              alt="harry maguire clown"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="leading-5">
            <Link to={`/user/${story.username}`}>
              <p className="font-semibold hover:underline">{story.username}</p>
            </Link>
            <p className="text-[12px] text-slate-400">2 hours ago</p>
          </div>
        </div>

        {user.Username === story.username && (
          <>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <MoreHorizontal />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => setIsOpen(true)}>
                  <div className="flex gap-2">
                    <Pencil className="h-5 w-5 stroke-blue-500" />
                    Edit
                  </div>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            <EditFormPopup
              open={open}
              setIsOpen={setIsOpen}
              id={story.id}
              artikel={story.artikel}
              gambar={story.gambar}
            />
          </>
        )}
      </div>
      <div className="w-full">
        {story.gambar && (
          <Link to={`/story/${story.id}`}>
            <img
              src={story.gambar}
              alt={story.artikel}
              className="aspect-[3/3] rounded-xl object-cover"
            />
          </Link>
        )}

        <p className="pt-2">{story.artikel}</p>
      </div>
      <div className="mt-5 flex w-full gap-2 border-b pb-4">
        <span className="flex gap-1">
          <Heart className="fill-rose-500" />
          <p className="font-medium tracking-wide">{story.likes}</p>
        </span>
        <span className="flex gap-1">
          <MessageCircle className="fill-blue-500" />
          <p className="font-medium tracking-wider">{story.comments.length}</p>
        </span>
      </div>

      {story.comments.map((comment) => (
        <StoryComment key={comment.comment_id} comment={comment} />
      ))}
    </div>
  );
};

export default StoryCard;
