import MobileSeries from "../components/MobileSeries";
import BreadCrumbs from "../components/BreadCrumbs";
type LatestModelsProps={
  phoneModels:{
    id: number;
    name: string;
    image: string;
    specs: string[];
    price: string;
    route: string;
  }[],
  series : string
}
const LatestModels: React.FC<LatestModelsProps> = ({phoneModels, series}) => {
  return (
    <>
      <BreadCrumbs series={series} />
      <MobileSeries series={series} phoneModels={phoneModels} />
    </>
    
  )
}

export default LatestModels