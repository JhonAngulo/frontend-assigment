import News from "../components/News"
import NewsRelatedCard from "../components/NewsRelatedCard"

const App = () => (
  <div className='home__container'>
    <News />
    <div className='newsrelatedcard__container'>
      <div>
        <p className='newsrelatedcard__container-title'>
          Noticias relacionadas
        </p>
        <div className='newsrelatedcard__container-divider'></div>
      </div>
      <NewsRelatedCard />
      <NewsRelatedCard />
      <NewsRelatedCard />
      <NewsRelatedCard />
      <NewsRelatedCard />
    </div>
  </div>
)

export default App
