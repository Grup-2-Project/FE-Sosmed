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
import { editStoryById } from "@/lib/apis/story/api";
import { useToast } from "./ui/use-toast";
import { ToastAction } from "./ui/toast";
import { Loader2 } from "lucide-react";

interface IProps {
  open: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  id: number;
  artikel: string;
  gambar: string;
}

const EditFormPopup = (props: IProps) => {
  const { toast } = useToast();
  const { open, setIsOpen, id, artikel, gambar } = props;

  const form = useForm<IStoryType>({
    resolver: zodResolver(storySchema),
    defaultValues: {
      artikel: artikel,
      gambar: gambar,
    },
    values: {
      artikel: artikel,
      gambar: "",
    },
  });

  const submitStoryHandler = async (values: IStoryType) => {
    try {
      const formData = new FormData();
      formData.append("artikel", values.artikel as string);
      formData.append("gambar", values.gambar[0]);

      const res = await editStoryById(formData as any, id);

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
    } finally {
      form.reset();
    }
  };

  const fileRef = form.register("gambar", { required: false });

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
              name="artikel"
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
              name="gambar"
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

            <Button
              type="submit"
              className="mt-2"
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

export default EditFormPopup;
