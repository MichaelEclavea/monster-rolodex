import './App.css'
import React, { Component } from 'react'
import CardList from './components/card-list/CardList'
import SearchBox from './components/search-box/SearchBox'

export default class App extends Component{
  constructor() {
    super ();
    this.state = {
      monsters: [],
      searchField: '',
      filteredMonsters: [],
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }))
  }

  render(){
    const {monsters, searchField}  = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
  
    return (
      <div className="App">
      <h1>Monster Rolodex</h1>
      <SearchBox
        placeholder={'search monsters'}
        handleChange={(e) => this.setState({ searchField: e.target.value })}
      />
      <div className='cards-container'>
      <CardList monsters={!filteredMonsters ? monsters : filteredMonsters} />
      </div>
    </div>
    )
  }
}

// function App() {
//   const [monsters, setMonsters] = useState([])
//   const [searchField, setSearchField] = useState('')
//   const [filteredMonsters, setFilteredMonsters] = useState()

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) => setMonsters(users))
//   }, [filteredMonsters, searchField])

//   const renderFilter = () => {
//     console.log(searchField)
//     setFilteredMonsters(
//       monsters.filter((monster) =>
//         monster.name.toLowerCase().includes(searchField.toLowerCase())
//       )
//     )
//   }

//   return (
//     <div className="App">
//       <h1>Monster Rolodex</h1>
//       <SearchBox
//         placeholder={'search monsters'}
//         handleChange={(e) => setSearchField(e.target.value, renderFilter())}
//       />
//       <CardList monsters={!filteredMonsters ? monsters : filteredMonsters} />
//     </div>
//   )
// }

// export default App