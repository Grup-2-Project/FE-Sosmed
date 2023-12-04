import { Skeleton } from "./ui/skeleton";

const StorySkeleton = () => {
  return (
    <div className="w-[600px] rounded-xl border p-3">
      <div className="mb-2 flex w-full items-center gap-4">
        <div className="h-[30px] w-[30px] overflow-clip rounded-full">
          <Skeleton className="h-full w-full object-cover" />
        </div>
        <div>
          <Skeleton className="mb-1 h-4 w-[200px]" />
          <Skeleton className="h-4 w-[100px]" />
        </div>
      </div>
      <div className="w-full">
        <Skeleton className="aspect-[3/3] rounded-xl object-cover" />
      </div>

      <div className="mt-5 flex w-full gap-2 border-b pb-4">
        <span className="flex items-center gap-1">
          <Skeleton className="h-[20px] w-[20px] rounded-full" />
          <Skeleton className="h-[15px] w-[35px]" />
        </span>
        <span className="flex items-center gap-1">
          <Skeleton className="h-[20px] w-[20px] rounded-full" />
          <Skeleton className="h-[15px] w-[35px]" />
        </span>
      </div>

      <div className="mt-3 flex gap-3">
        <div className="h-[30px] w-[30px] overflow-clip rounded-full">
          <Skeleton className="h-full w-full object-cover" />
        </div>
        <div>
          <Skeleton className="mb-1 h-4 w-[200px]" />
          <Skeleton className="h-4 w-[100px]" />
        </div>
      </div>
    </div>
  );
};

export default StorySkeleton;
