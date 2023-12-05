import { MessageCircle, ThumbsUp } from "lucide-react";
import StoryComment from "./story-comment";
import { IStory } from "@/lib/apis/story/types";
import { Link } from "react-router-dom";

interface IProps {
  story: IStory;
}

const StoryCard = (props: IProps) => {
  const { story } = props;

  return (
    <div className="w-full rounded-xl border p-3">
      <div className="mb-2 flex w-full items-center gap-4">
        <div className="h-[30px] w-[30px] overflow-clip rounded-full">
          <img
            src="https://images.tokopedia.net/img/JFrBQq/2022/9/6/652515bf-d1ca-4462-830b-b4c10302d481.jpg"
            alt="harry maguire clown"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="leading-5">
          <p className="font-semibold">{story.user.username}</p>
          <p className="text-[12px] text-slate-400">2 hours ago</p>
        </div>
      </div>
      <div className="w-full">
        <Link to={`/story/${story.id}`}>
          <img
            src="https://images.unsplash.com/photo-1683009427041-d810728a7cb6?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="man climbing"
            className="aspect-[3/3] rounded-xl object-cover"
          />
        </Link>
      </div>
      <div className="mt-5 flex w-full gap-2 border-b pb-4">
        <span className="flex gap-1">
          <ThumbsUp className="fill-rose-500" />
          <p className="font-medium tracking-wide">122</p>
        </span>
        <span className="flex gap-1">
          <MessageCircle className="fill-blue-500" />
          <p className="font-medium tracking-wider">20</p>
        </span>
      </div>

      {story.comments.map((comment) => (
        <StoryComment key={comment.comment_id} comment={comment} />
      ))}
    </div>
  );
};

export default StoryCard;
