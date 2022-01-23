import Layouts from '../component/layout'
import Sectionone from '../component/sectionOne'
import Metaverse from '../component/metaverse';
import SevenLayers from '../component/sevenLayers';
import NFT from '../component/nft';


const Home = () => {
  return (
    <>
     <Layouts>
       <section id="home" className="container mx-auto mb-32">
        <Sectionone/>
       </section>
       <section id="metaverse" className="container mx-auto mb-32">
          <Metaverse/>
       </section>
       <section id="7layersmetaverse" className="container mx-auto mb-32">
          <SevenLayers/>
       </section>
       <section id="nft" className="container mx-auto mb-32">
          <NFT/>
       </section>
     </Layouts>
    </>
  )
}

export default Home;
