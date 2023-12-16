import {
  Header,
  Footer,
  NavBar,
  About,
  Contact,
  Banner,
  Services,
  Work,
  Alert
} from 'src/components'
import {AlertProvider}from "src/context/alertContext";
function App() {

  return (
    <AlertProvider>
      <Alert/>
      <main className='bg-site bg-no-repeat bg-cover overflow-hidden'>
        <Header className=""/>
        <Banner/>
        <div className="min-h-[--body-height]  app-container">
            <About/>
            <Services/>
            <Work/>
            <Contact/>
        </div>
        <NavBar/>
        <Footer className=""/>
      </main>
    </AlertProvider>
  );
}

export default App;
