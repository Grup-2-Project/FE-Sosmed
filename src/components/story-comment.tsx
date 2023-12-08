import { IComments } from "@/lib/apis/story/types";
import { UserCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

interface IProps {
  comment: IComments;
}

const StoryComment = (props: IProps) => {
  const { comment } = props;

  return (
    <div className="mt-3 flex gap-3">
      <div className="flex max-h-[30px] max-w-[30px] items-center justify-center overflow-clip rounded-full border">
        {comment.foto_profil === "default" ? (
          <UserCircle2 />
        ) : (
          <img
            src={comment.foto_profil}
            alt={comment.username}
            className="h-full w-full object-cover"
          />
        )}
      </div>
      <div>
        <Link to={`/user/${comment.username}`} className="hover:underline">
          <p className="text-[14px] font-medium">{comment.username}</p>
        </Link>
        <p className="text-[12px]">{comment.komentar}</p>
      </div>
    </div>
  );
};

export default StoryComment;
