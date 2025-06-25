import { Link } from 'react-router-dom';

type BreadCrumbsProps = {
  series?: string;
  modelName?: string;  

}

const BreadCrumbs:React.FC<BreadCrumbsProps> = ({series, modelName}) => {
  return (
  
      <div className="bg-slate-50 py-4 border-b border-slate-200 mt-20">
        <div className="max-w-6xl mx-auto px-4 text-slate-500 text-sm">
          <Link to="/"><span>Home</span></Link> / <span>Mobile Series</span> / <span className="text-blue-500 font-semibold">{series}</span> { modelName && "/" && <span className="text-blue-500 font-semibold"> {modelName}</span>}
        </div>
      </div>
  )
}

export default BreadCrumbs