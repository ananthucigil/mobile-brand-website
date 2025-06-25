import { Link } from 'react-router-dom';

type MobileSeriesProps ={
  phoneModels: {
    id: number;
    name: string;
    image: string;
    specs: string[];
    price: string;
    route: string;
  }[],
  series?: string;
}

const MobileSeries:React.FC<MobileSeriesProps> = ({phoneModels,series}) => {
    
  return (
    <>
       <main className="py-12 bg-gradient-to-br from-slate-50 to-slate-200">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-center text-4xl font-extrabold text-slate-800 mb-2 bg-gradient-to-br from-indigo-500 to-purple-600 bg-clip-text text-transparent">
            {series} Series 
          </h1>
          <p className="text-center text-lg text-slate-500 mb-12">
            Discover the latest innovations in mobile technology
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 mt-8">
            {phoneModels.map((phone) => (
              <div key={phone.id} className="bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-300 ease-in-out hover:-translate-y-2 hover:shadow-2xl group">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={phone.image} 
                    alt={phone.name} 
                    className="w-full h-full object-contain transition-transform duration-300 ease-in-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/80 to-purple-600/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
                    <Link to={phone.route}><button className="bg-white text-indigo-500 border-none py-3 px-6 rounded-full font-semibold cursor-pointer transform translate-y-5 group-hover:translate-y-0 transition-transform duration-300 ease-in-out hover:bg-slate-50 hover:scale-105">
                      Learn More
                    </button></Link>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-800 mb-4">{phone.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      </>
  )
}

export default MobileSeries