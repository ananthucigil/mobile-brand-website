import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from 'react-router-dom';
import LatestModels from './pages/LatestModels';
import Homepage from './pages/Homepage';
import ModelDescription from './pages/ModelDescription';
import { MainLayout } from './layout/MainLayout';
import NotFoundPage from './pages/NotFoundPage';
function App() {
  const phoneModels1 = [
    {
      id: 1,
      name: 'Cosmo A12 Pro',
      image: 'images/cosmo-a_model1.png',
      specs: ['6.7" AMOLED Display', '108MP Triple Camera', '8GB RAM', '256GB Storage'],
      price: '$899',
      route: '/cosmo-a/model-1'
    },
    {
      id: 2,
      name: 'Cosmo A11',
      image: 'images/cosmo-a_model2.png',
      specs: ['6.5" Super Retina', '64MP Dual Camera', '6GB RAM', '128GB Storage'],
      price: '$699',
      route: '/cosmo-a/model-2'
    },
    {
      id: 3,
      name: 'Cosmo A10',
      image: 'images/cosmo-a_model3.png',
      specs: ['6.4" FHD+ Display', '50MP Main Camera', '4GB RAM', '64GB Storage'],
      price: '$499',
      route: '/cosmo-a/model-3'
    },
    {
      id: 4,
      name: 'Cosmo A9',
      image: 'images/cosmo-a_model4.png',
      specs: ['6.1" HD+ Display', '32MP Camera', '3GB RAM', '32GB Storage'],
      price: '$299',
      route: '/cosmo-a/model-4'
    }
  ]
  const phoneModels2 = [
    {
      id: 1,
      name: 'Cosmo B8 Elite',
      image: 'images/cosmo-b_model1.png',
      specs: ['6.7" AMOLED Display', '108MP Triple Camera', '8GB RAM', '256GB Storage'],
      price: '$899',
      route: '/cosmo-b/model-1'
    },
    {
      id: 2,
      name: 'Cosmo B7',
      image: 'images/cosmo-b_model2.png',
      specs: ['6.5" Super Retina', '64MP Dual Camera', '6GB RAM', '128GB Storage'],
      price: '$699',
      route: '/cosmo-b/model-2'
    },
    {
      id: 3,
      name: 'Cosmo B6',
      image: 'images/cosmo-b_model3.png',
      specs: ['6.4" FHD+ Display', '50MP Main Camera', '4GB RAM', '64GB Storage'],
      price: '$499',
      route: '/cosmo-b/model-3'
    },
    {
      id: 4,
      name: 'Cosmo B5',
      image: 'images/cosmo-b_model4.png',
      specs: ['6.1" HD+ Display', '32MP Camera', '3GB RAM', '32GB Storage'],
      price: '$299',
      route: '/cosmo-b/model-4'
    }
  ]
  
const phoneModels3 = [
    {
      id: 1,
      name: 'Cosmo C13 Max',
      image: 'images/cosmo-c_model1.png',
      specs: ['6.7" AMOLED Display', '108MP Triple Camera', '8GB RAM', '256GB Storage'],
      price: '$899',
      route: '/cosmo-c/model-1'
    },
    {
      id: 2,
      name: 'Cosmo C12',
      image: 'images/cosmo-c_model2.png',
      specs: ['6.5" Super Retina', '64MP Dual Camera', '6GB RAM', '128GB Storage'],
      price: '$699',
      route: '/cosmo-c/model-2'
    },
    {
      id: 3,
      name: 'Cosmo C11',
      image:'images/cosmo-c_model3.png',
      specs: ['6.4" FHD+ Display', '50MP Main Camera', '4GB RAM', '64GB Storage'],
      price: '$499',
      route: '/cosmo-c/model-3'
    },
    {
      id: 4,
      name: 'Cosmo C10',
      image:'images/cosmo-c_model4.png',
      specs: ['6.1" HD+ Display', '32MP Camera', '3GB RAM', '32GB Storage'],
      price: '$299',
      route: '/cosmo-c/model-4'
    }
  ]
  const phoneModels4 = [
    {
      id: 1,
      name: 'Cosmo D5 Gaming',
      image: 'images/cosmo-d_model1.png',
      specs: ['6.7" AMOLED Display', '108MP Triple Camera', '8GB RAM', '256GB Storage'],
      price: '$899',
      route: '/cosmo-d/model-1'
    },
    {
      id: 2,
      name: 'Cosmo D4',
      image: 'images/cosmo-d_model2.png',
      specs: ['6.5" Super Retina', '64MP Dual Camera', '6GB RAM', '128GB Storage'],
      price: '$699',
      route: '/cosmo-d/model-2'
    },
    {
      id: 3,
      name: 'Cosmo D3',
      image: 'images/cosmo-d_model3.png',
      specs: ['6.4" FHD+ Display', '50MP Main Camera', '4GB RAM', '64GB Storage'],
      price: '$499',
      route: '/cosmo-d/model-3'
    },
    {
      id: 4,
      name: 'Cosmo D2',
      image: 'images/cosmo-d_model4.png',
      specs: ['6.1" HD+ Display', '32MP Camera', '3GB RAM', '32GB Storage'],
      price: '$299',
      route: '/cosmo-d/model-4'
    }
  ]

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Homepage />} />
        <Route path="cosmo-a" element={<LatestModels series="Cosmo A" phoneModels={phoneModels1} />} />
        <Route path="cosmo-b" element={<LatestModels series="Cosmo B" phoneModels={phoneModels2}/>} />
        <Route path="cosmo-c" element={<LatestModels series="Cosmo C" phoneModels={phoneModels3}/>} />
        <Route path="cosmo-d" element={<LatestModels series="Cosmo D" phoneModels={phoneModels4}/>} />
        <Route path="cosmo-a/model-1" element={<ModelDescription modelName="Cosmo A12 Pro"/>}/>
        <Route path="cosmo-a/model-2" element={<ModelDescription modelName="Cosmo A11" />}/>
        <Route path="cosmo-a/model-3" element={<ModelDescription modelName="Cosmo A10" />}/>
        <Route path="cosmo-a/model-4" element={<ModelDescription modelName="Cosmo A9" />}/>
        <Route path="cosmo-b/model-1" element={<ModelDescription modelName="Cosmo B8 Elite" />}/>
        <Route path="cosmo-b/model-2" element={<ModelDescription modelName="Cosmo B7" />}/>
        <Route path="cosmo-b/model-3" element={<ModelDescription modelName="Cosmo B6" />}/>
        <Route path="cosmo-b/model-4" element={<ModelDescription modelName="Cosmo B5" />}/>
        <Route path="cosmo-c/model-1" element={<ModelDescription modelName="Cosmo C13 Max" />}/>
        <Route path="cosmo-c/model-2" element={<ModelDescription modelName="Cosmo C12" />}/>
        <Route path="cosmo-c/model-3" element={<ModelDescription modelName="Cosmo C11" />}/>
        <Route path="cosmo-c/model-4" element={<ModelDescription modelName="Cosmo C10" />}/>
        <Route path="cosmo-d/model-1" element={<ModelDescription modelName="Cosmo D5 Gaming" />}/>
        <Route path="cosmo-d/model-2" element={<ModelDescription modelName="Cosmo D4" />}/>
        <Route path="cosmo-d/model-3" element={<ModelDescription modelName="Cosmo D3" />}/>
        <Route path="cosmo-d/model-4" element={<ModelDescription modelName="Cosmo D2" />}/>
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  )
  return (
  <>
   <RouterProvider router={router} />
  </>
  );
}

export default App;