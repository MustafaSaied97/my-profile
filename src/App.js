import {Header,Footer,NavBar,About,Contact,Banner,Services,Work} from 'src/components'

function App() {

  return (
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
      <Header className=""/>
      <NavBar/>
      <Banner/>
      <div className="min-h-[--body-height]  app-container">
          <About/>
          <Services/>
          <Work/>
          <Contact/>
      </div>
      <Footer className=""/>
    </div>
  );
}

export default App;
