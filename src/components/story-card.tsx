import { useState } from "react";
import { format, parseISO } from "date-fns";

import {
  Heart,
  MessageCircle,
  MoreHorizontal,
  Pencil,
  Trash,
} from "lucide-react";

import { Link } from "react-router-dom";

import StoryComment from "./story-comment";
import EditFormPopup from "./edit-form-popup";
import AlertDeleteStory from "./alert-delete-story";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { IStory } from "@/lib/apis/story/types";
import { createComment } from "@/lib/apis/comment/api";
import { IComment, commentSchema } from "@/lib/apis/comment/type";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useToast } from "./ui/use-toast";
import { ToastAction } from "./ui/toast";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

import { useToken } from "@/context/token-provider";

interface IProps {
  story: IStory;
}

const StoryCard = (props: IProps) => {
  const { story } = props;
  const { toast } = useToast();

  const { user, token } = useToken();

  const [open, setIsOpen] = useState(false);

  const form = useForm<IComment>({
    resolver: zodResolver(commentSchema),
    defaultValues: {
      post_id: story.id,
      komentar: "",
    },
  });

  const commentHandler = async (values: IComment) => {
    try {
      const res = await createComment(values);

      toast({
        title: "Success",
        description: res?.message,
      });
    } catch (error) {
      if (error instanceof Error) {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: error.toString(),
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
      }
    }
  };

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
            <section className="w-fit">
              <Link to={`/user/${story.username}`}>
                <p className="font-semibold hover:underline">
                  {story.username}
                </p>
              </Link>
            </section>
            <p className="text-[12px] text-slate-400">
              {format(parseISO(story.created_at), "PPP").toString()}
            </p>
          </div>
        </div>

        {user.Username === story.username && (
          <>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <MoreHorizontal />
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem
                  onClick={() => setIsOpen(true)}
                  className="hover:cursor-pointer"
                >
                  <div className="flex gap-2">
                    <Pencil className="h-5 w-5 stroke-blue-500" />
                    Edit
                  </div>
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="hover:cursor-pointer">
                  <AlertDeleteStory id={story.id}>
                    <div className="mt-2 flex gap-2">
                      <Trash className="h-5 w-5 stroke-red-500" />
                      <p className="text-[14px]">Delete</p>
                    </div>
                  </AlertDeleteStory>
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

      {story.gambar !== "undefined" && (
        <div className="aspect-[3/3] w-full">
          <Link to={`/story/${story.id}`}>
            <img
              src={story.gambar}
              alt={story.artikel}
              className="h-full w-full rounded-xl object-cover"
            />
          </Link>
        </div>
      )}
      
      <Link to={`/story/${story.id}`}>
        <p className="w-full pt-2">{story.artikel}</p>
      </Link>
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

      {token && (
        <div className="w-full">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(commentHandler)}>
              <div className="mt-5 flex w-full items-center rounded-3xl border p-3">
                <FormField
                  control={form.control}
                  name="komentar"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormControl>
                        <Textarea
                          placeholder="Post Your Story"
                          className="min-h-[40px] w-full resize-none border-none p-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button className="rounded-3xl">Submit</Button>
              </div>
            </form>
          </Form>
        </div>
      )}
    </div>
  );
};

export default StoryCard;
