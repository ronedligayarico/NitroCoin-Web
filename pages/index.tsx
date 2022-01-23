import Layouts from '../component/layout'
import SectionOne from '../component/sectionone'
import Metaverse from '../component/metaverse';

const Home = () => {
  return (
    <>
     <Layouts>

        <SectionOne/>
        
       <section id="metaverse" className="container mx-auto mb-32">
          <Metaverse/>
       </section>
       <section id="7layersmetaverse" className="container mx-auto mb-32">
          <div className="flex justify-between">
            <div className="w-6/12">
              1
            </div>
            <div  className="w-6/12 text-left">
              <h5>The seven layers of the Metaverse</h5>
            </div>
          </div>
       </section>
     </Layouts>
    </>
  )
}

export default Home;
