import HeroCarousel from '../components/HeroCarousel';
import Poster from '../components/Poster';
const Homepage = () => {
  const posterDetails=[
    {
      title: "Cosmo A Series",
      description: "The latest in the Cosmo series, featuring advanced AI capabilities.",
      imageUrl: "images/series-a.jpeg",
      ctaButton: "/cosmo-a"
    },
    {
      title: "Cosmo B Series",
      description: "A powerful device with enhanced performance and sleek design.",
      imageUrl: "images/series-b.jpeg",
      ctaButton: "/cosmo-b"
    },
    {
      title: "Cosmo C Series",
      description: "Combining style and functionality for the modern user.",
      imageUrl: "images/series-c.jpeg",
      ctaButton: "/cosmo-c"
    },
    {
      title: "Cosmo D Series",
      description: "The ultimate device for tech enthusiasts, packed with features.",
      imageUrl: "images/series-d.png",
      ctaButton: "/cosmo-d"
    }
  ]
  return (
    <>
      <HeroCarousel />
      {posterDetails.map((poster, index)=><Poster key={index} data={poster}/>)}
       
    </>
  )
}

export default Homepage