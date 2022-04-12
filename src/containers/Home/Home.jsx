import Navigation from '../../components/Navigation/Navigation'
import Button from '../../components/Button/Button'

const Home = () => {


    
        return (
            <div class="mainHome" style={{backgroundColor: "purple"}}>
            <Button type="button" path="/news" destination="News"/>

            <Navigation tittle="Hola, esto es título jajajaj">
            </Navigation>
                
            </div>
        )

    }

export default Home;