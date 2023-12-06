import { IComments } from "@/lib/apis/story/types";

interface IProps {
  comment: IComments;
}

const StoryComment = (props: IProps) => {
  const { comment } = props;

  return (
    <div className="mt-3 flex gap-3">
      <div className="max-h-[30px] max-w-[30px] overflow-clip rounded-full">
        <img
          src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="man smiling"
          className="h-full w-full object-cover"
        />
      </div>
      <div>
        <p className="text-[14px] font-medium">{comment.username}</p>
        <p className="text-[12px]">{comment.komentar}</p>
      </div>
    </div>
  );
};

export default StoryComment;
