const Comment = () => {
  return (
    <>
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
    </>
  );
};

export default Comment;
