/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "../../ui/button";
import { ReactNode, useState } from "react";
import { toast } from "../../ui/use-toast";
import { deleteUser } from "@/lib/apis/user/api";
import { useNavigate } from "react-router-dom";

interface ModalProps {
  children: ReactNode;
}

const ModalDelete = ({ children }: ModalProps) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const handleDeleteUser = async () => {
    try {
      setOpen(false);
      const result = await deleteUser();
      localStorage.removeItem("username");
      localStorage.removeItem("token");
      toast({
        description: result.message,
      });
      navigate("/login");
    } catch (error: any) {
      toast({
        description: error.toString(),
        variant: "destructive",
      });
    }
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Delete Account</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button
            type="submit"
            className="h-8 w-1/2"
            onClick={() => setOpen(false)}
          >
            No
          </Button>
          <Button
            type="submit"
            className="h-8 w-1/2 bg-rose-500 text-sm text-white hover:bg-rose-600"
            onClick={handleDeleteUser}
          >
            Yes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default ModalDelete;
