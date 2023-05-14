export const ResultCard = ({children, category, arrPosition, backgroundProps, textProps}) => {
  return (
    <article className={`flex items-center justify-between rounded-lg w-full p-4 ${backgroundProps} bg-opacity-5`}>
      <div className='flex items-center justify-around gap-2 font-extrabold'>
        {children}
        <p className={textProps}>{category[arrPosition].category}</p>
      </div>
      <div className='font-extrabold'><span className='text-black'>{category[arrPosition].score}</span><span className='text-slate-400'> / 100</span></div>
    </article>
  );
};
