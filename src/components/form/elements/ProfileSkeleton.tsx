import { Skeleton } from "@/components/ui/skeleton";

const ProfileSkeleton = () => {
  return (
    <div className=" flex items-center justify-around py-8">
      <div className="flex items-center gap-x-8">
        <Skeleton className="h-24 w-24 rounded-full" />
        <div className="flex flex-col gap-y-4">
          <Skeleton className="h-8 w-40 rounded-full" />
          <Skeleton className="h-4 w-28 rounded-full " />
        </div>
      </div>
      <Skeleton className="h-8 w-28 rounded-full" />
    </div>
  );
};

export default ProfileSkeleton;
