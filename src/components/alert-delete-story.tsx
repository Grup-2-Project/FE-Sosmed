import { ReactNode, useState } from "react";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { deleteStoryById } from "@/lib/apis/story/api";
import { useToast } from "./ui/use-toast";
import { ToastAction } from "./ui/toast";
import { Loader2 } from "lucide-react";

type Props = {
  children: ReactNode;
  id: number;
};

const AlertDeleteStory = (props: Props) => {
  const { children, id } = props;
  const [isLoading, setIsLoading] = useState(false);

  const { toast } = useToast();

  const deleteStoryHandler = async () => {
    try {
      setIsLoading(true);

      const res = await deleteStoryById(id);

      toast({
        title: "Success",
        description: res?.message,
      });
    } catch (error) {
      if (error instanceof Error) {
        toast({
          variant: "destructive",
          title: "Uh oh!, Something went wrong.",
          description: error.message,
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
      }
    }
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger className="w-full rounded-sm px-2 outline-none transition-colors hover:bg-accent hover:text-accent-foreground">
        {children}
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Delete Story ?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            className="hover:bg-red-500"
            onClick={deleteStoryHandler}
            disabled={isLoading}
            aria-disabled={isLoading}
          >
            {isLoading ? <Loader2 className="animate-spin" /> : "Continue"}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AlertDeleteStory;
