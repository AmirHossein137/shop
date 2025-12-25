const PreLoading = () => {
  return (
    <div className="fixed w-full inset-0 h-screen flex flex-col gap-4 items-center justify-center bg-black/50 z-20 backdrop-blur-[0.5px]">
      <span className="loader"></span>
      <span className="text-white text-lg"> در حال بازگزاری ... </span>
    </div>
  );
};

export default PreLoading;
