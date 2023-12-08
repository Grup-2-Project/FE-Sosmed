/* eslint-disable @typescript-eslint/no-explicit-any */
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
import { useToast } from "./ui/use-toast";
import { ToastAction } from "./ui/toast";
import { createStory } from "@/lib/apis/story/api";
import { Loader2 } from "lucide-react";

interface IProps {
  children: ReactNode;
}

const PostFormPopup = (props: IProps) => {
  const { children } = props;
  const { toast } = useToast();
  const [open, setOpen] = useState(false);

  const form = useForm<IStoryType>({
    resolver: zodResolver(storySchema),
    defaultValues: {
      artikel: "",
      gambar: "",
    },
  });

  const submitStoryHandler = async (values: IStoryType) => {
    try {
      const formValue: IStoryType = {
        artikel: values.artikel,
        gambar: values.gambar[0],
      };
      const res = await createStory(formValue);

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
    form.reset();
    setOpen(false);
  };

  const fileRef = form.register("gambar", { required: false });

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className="w-full">{children}</DialogTrigger>
      <DialogContent className="w-[380px] lg:min-w-[700px] rounded-xl">
        <DialogHeader>
          <DialogTitle className="text-left">Create Status</DialogTitle>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(submitStoryHandler)}
            className="mt-3"
            encType="multipart/form-data"
          >
            <FormField
              control={form.control}
              name="artikel"
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
              name="gambar"
              render={() => (
                <FormItem>
                  <FormControl>
                    <Input
                      id="gambar"
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

            <Button
              type="submit"
              className="mt-2 min-w-[150px]"
              disabled={form.formState.isSubmitting}
              aria-disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? (
                <Loader2 className="animate-spin" />
              ) : (
                "Submit"
              )}
            </Button>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default PostFormPopup;
