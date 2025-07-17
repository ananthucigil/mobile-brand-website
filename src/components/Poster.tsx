import {Link} from "react-router-dom";
type PosterProps = {
  data: {
    title: string;
    description: string;
    imageUrl: string;
    ctaButton: string; 
  };
};
const Poster : React.FC<PosterProps> = ({data}) => {
  return (
    <section>
      <div className="h-screen relative bg-gradient-to-b lg:bg-gradient-to-r from-black to-white">
        <div className="poster-section absolute flex flex-col lg:flex lg:flex-row justify-between items-center inset-10 rounded-3xl bg-gradient-to-b lg:bg-gradient-to-r from-white via-black to-black text-black shadow-lg">
          <div className="flex flex-col justify-center items-center">
          <div className="mt-10 lg:ml-20 lg:mb-6">
            <h2 className="text-6xl font-semibold">{data.title}</h2>
          </div>
          <Link to={data.ctaButton} className="mt-6">
          <button className={`bg-gradient-to-r from-gray-600 to-slate-800 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:shadow-lg transform hover:scale-105 transition-all duration-300 shadow-md border border-white/20 hover:border-white/40 w-auto sm:w-auto md:w-auto lg:w-auto`}>
            Learn More
          </button>
          </Link>
          </div>
         <div className="bg-contain bg-no-repeat bg-center mt-28 lg:mt-0 h-5/6 w-1/2" style={{backgroundImage: `url(${data.imageUrl})`}} />
         
        </div> 
      </div> 
    </section>
  )
}

export default Poster