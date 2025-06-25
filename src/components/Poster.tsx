
type PosterProps = {
  data: {
    title: string;
    description: string;
    imageUrl: string;
  };
};
const Poster : React.FC<PosterProps> = ({data}) => {
  return (
    <section>
      <div className="h-screen relative bg-gradient-to-b lg:bg-gradient-to-r from-black to-white">
        <div className="absolute  flex flex-col lg:flex lg:flex-row justify-between items-center inset-10 rounded-3xl bg-gradient-to-b lg:bg-gradient-to-r from-white via-black to-black text-black shadow-lg">
         <div className="mt-10 lg:ml-20">
            <h2 className="text-6xl font-semibold">{data.title}</h2>
         </div>
         <div className="bg-contain bg-no-repeat bg-center mt-28 lg:mt-0 h-5/6 w-1/2" style={{backgroundImage: `url(${data.imageUrl})`}} />
         
        </div> 
      </div> 
    </section>
  )
}

export default Poster