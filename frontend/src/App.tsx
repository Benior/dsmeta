import HeaderDsMeta from "./components/Header"
import SalesCard from "./components/SalesCard"


function App() {
  return (
    <>
      <HeaderDsMeta />

      <main>

        <section id="sales">
          <div className="dsmeta-container">

          <SalesCard />

          </div>
        </section>

      </main>

    </>
  )
}

export default App
