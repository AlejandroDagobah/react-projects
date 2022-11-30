function Header() {

    return (
        <header>
            <nav className="main-nav">
                <img src="img/react-logo.png" className="imgClass"/>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>    
        </header>
    )
    
}


function Footer() {
    return(
        <footer className="footer">
            <small>Copyright 2022 Dagobah development. All rights reserved</small>
        </footer>
    )
    
}

function ComponentBox() {
    return (
        <div>

            <Header/>
            <div className="content">

                <h1>Things i like about learning React</h1>

                <ul>
                    <li>Is a hirable skill xD</li>
                    <li>Is one of the most used libraries currently</li>
                    <li>I have listen is very fast to make websites and so on</li>
                </ul>
            </div>

            <Footer/>
        </div>

    )
    
}



ReactDOM.createRoot(document.getElementById('root')).render(<ComponentBox/>)

