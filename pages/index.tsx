<<<<<<< Updated upstream
import Layout from '../components/Layout'

const IndexPage = () => (
  <Layout title="Nitro Coin">
  </Layout>
)
=======
import Layouts from '../component/layout'
import SectionOne from '../component/sectionone'

const Home = () => {
  return (
    <>
     <Layouts>
       <div className="main-div">
         <SectionOne></SectionOne>
       </div>

    </Layouts>
    </>
  )
}
>>>>>>> Stashed changes

export default IndexPage
