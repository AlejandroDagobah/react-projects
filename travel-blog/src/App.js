import logo from './logo.svg';
import data from './data';
import Navbar from './components/Navbar';
import Entry from './components/Entry';


export default function App() {
  
  let entries = data.map(item =>{
    return <Entry key={item.id} {...item}/>
  })

  return (
    <div className="App">
      <Navbar/>
      <div className='entries-container'>
        {entries}
      </div>
      
    </div>
  );
}


