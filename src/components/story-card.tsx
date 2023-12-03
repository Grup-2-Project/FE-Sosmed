import { MessageCircle, ThumbsUp } from "lucide-react";

const StoryCard = () => {
  return (
    <>
      <div className="flex w-full justify-center">
        <div className="w-[600px] rounded-xl border p-3">
          <div className="mb-2 flex w-full items-center gap-4">
            <div className="h-[30px] w-[30px] overflow-clip rounded-full">
              <img
                src="https://images.tokopedia.net/img/JFrBQq/2022/9/6/652515bf-d1ca-4462-830b-b4c10302d481.jpg"
                alt="harry maguire clown"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="leading-4">
              <p className="font-semibold">harry_maguire_the_clown</p>
              <p className="text-[12px] text-slate-400">2 hours ago</p>
            </div>
          </div>
          <div className="w-full">
            <img
              src="https://images.unsplash.com/photo-1683009427041-d810728a7cb6?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="man climbing"
              className="aspect-[3/3] rounded-xl object-cover"
            />
          </div>
          <div className="mt-5 flex w-full gap-2 border-b pb-4">
            <span className="flex gap-1">
              <ThumbsUp className="fill-rose-500" />
              <p className="font-medium tracking-wide">122</p>
            </span>
            <span className="flex gap-1">
              <MessageCircle className="fill-blue-500" />
              <p className="font-medium tracking-wider">20</p>
            </span>
          </div>

          <div className="mt-3 flex gap-3">
            <div className="max-h-[30px] max-w-[30px] overflow-clip rounded-full">
              <img
                src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="man smiling"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="text-[14px] font-medium">_arifrahmawan</p>
              <p className="text-[12px]">Adrenaline Rush bro, Love it !</p>
            </div>
          </div>
          <div className="mt-3 flex gap-3">
            <div className="max-h-[30px] max-w-[30px] overflow-clip rounded-full">
              <img
                src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRxo7nKYEJOeiTYvss1iUeAfFo16nYTb-DLrfEUBFISQIzbjuj7"
                alt="jennie"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="text-[14px] font-medium">jennie_blackpink</p>
              <p className="text-[12px]">So Cool Dude !!</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex w-full justify-center">
        <div className="w-[600px] rounded-xl border p-3">
          <div className="mb-2 flex w-full items-center gap-4">
            <div className="h-[30px] w-[30px] overflow-clip rounded-full">
              <img
                src="https://images.tokopedia.net/img/JFrBQq/2022/9/6/652515bf-d1ca-4462-830b-b4c10302d481.jpg"
                alt="harry maguire clown"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="leading-4">
              <p className="font-semibold">harry_maguire_the_clown</p>
              <p className="text-[12px] text-slate-400">2 hours ago</p>
            </div>
          </div>
          <div className="w-full">
            <img
              src="https://images.unsplash.com/photo-1683009427041-d810728a7cb6?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="man climbing"
              className="aspect-[3/3] rounded-xl object-cover"
            />
          </div>
          <div className="mt-5 flex w-full gap-2 border-b pb-4">
            <span className="flex gap-1">
              <ThumbsUp className="fill-rose-500" />
              <p className="font-medium tracking-wide">122</p>
            </span>
            <span className="flex gap-1">
              <MessageCircle className="fill-blue-500" />
              <p className="font-medium tracking-wider">20</p>
            </span>
          </div>

          <div className="mt-3 flex gap-3">
            <div className="max-h-[30px] max-w-[30px] overflow-clip rounded-full">
              <img
                src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="man smiling"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="text-[14px] font-medium">_arifrahmawan</p>
              <p className="text-[12px]">Adrenaline Rush bro, Love it !</p>
            </div>
          </div>
          <div className="mt-3 flex gap-3">
            <div className="max-h-[30px] max-w-[30px] overflow-clip rounded-full">
              <img
                src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRxo7nKYEJOeiTYvss1iUeAfFo16nYTb-DLrfEUBFISQIzbjuj7"
                alt="jennie"
                className="h-full w-full object-cover"
              />
            </div>
            <div>
              <p className="text-[14px] font-medium">jennie_blackpink</p>
              <p className="text-[12px]">So Cool Dude !!</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StoryCard;
