import React from 'react'
import Navbar from './components/Navbar';
import Main from './components/Main';
import logo from './img/logo.svg';


function App() {

  const [colorMode, setColorMode] = React.useState(true)

  function toggleDarkMode()
  {
    setColorMode(prevState => !prevState)
  }

  return (
    <div className="container">
      <Navbar
        darkMode={colorMode}
        toggleDarkMode={toggleDarkMode}
      />
      <Main
        darkMode={colorMode}
      />
    </div>
  );
}

export default App;
