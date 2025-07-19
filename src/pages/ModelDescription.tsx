import FeatureSections from "../components/FeatureSection";
type ModelDescriptionProps = {
  modelName: string;  
}
const ModelDescription:React.FC<ModelDescriptionProps> = ({modelName}) => {
  return (
   <FeatureSections modelName={modelName} />
  )
}

export default ModelDescription