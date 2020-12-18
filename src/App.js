import React, { useState } from 'react'
import Search from './components/Search'
import Table from './components/Table'
import Cards from "./components/Cards"
import AppContext from './utils/AppContext'

function App() {
  const [criteria, setCriteria] = useState("First Name")
  const [search, setSearch] = useState("")
  const [sort, setSort] = useState("1")
  const [display, setDisplay] = useState("Table")



  return (
    <>
      <div className="container">
        <AppContext.Provider value={{ criteria, setCriteria, search, setSearch, sort, setSort, display, setDisplay }}>
          <Search />
          {display === "Table" ? <Table /> : <Cards />}
        </AppContext.Provider>
      </div>
    </>
  );
}

export default App;
