import { ReactNode, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { IStoryType, storySchema } from "@/lib/apis/story/types";

interface IProps {
  children: ReactNode;
}

const PostFormPopup = (props: IProps) => {
  const { children } = props;
  const [open, setOpen] = useState(false);
  const form = useForm<IStoryType>({
    resolver: zodResolver(storySchema),
    defaultValues: {
      article: "",
      picture: "",
    },
  });

  const submitStoryHandler = async (values: IStoryType) => {
    console.log(values);
    form.reset();
    setOpen(false);
  };

  const fileRef = form.register("picture", { required: false });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="w-full">{children}</DialogTrigger>
      <DialogContent className="min-w-[700px]">
        <DialogHeader>
          <DialogTitle>Create Status</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(submitStoryHandler)}
            className="mt-3"
          >
            <FormField
              control={form.control}
              name="article"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Textarea
                      rows={10}
                      placeholder="Post Your Story"
                      className="border-black dark:border-white"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="picture"
              render={() => (
                <FormItem>
                  <FormControl>
                    <Input
                      id="picture"
                      type="file"
                      accept="image/jpg, image/jpeg, image/png"
                      {...fileRef}
                      className="mt-2"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button type="submit" className="mt-2">
              Submit
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default PostFormPopup;
