import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
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
import { Dispatch, SetStateAction } from "react";

interface IProps {
  open: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const EditFormPopup = (props: IProps) => {
  const { open, setIsOpen } = props;

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
  };

  const fileRef = form.register("picture", { required: false });

  return (
    <Dialog open={open} onOpenChange={setIsOpen}>
      <DialogContent className="min-w-[700px]">
        <DialogHeader>
          <DialogTitle>Edit Status</DialogTitle>
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
                      placeholder="Edit Your Story"
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

export default EditFormPopup;
