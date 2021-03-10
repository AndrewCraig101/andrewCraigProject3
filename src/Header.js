import Statue from './assets/statue.png'; 


const Header = () => {
    return (
        
        <header>
             <img src={Statue} alt="Oscar statue" />
             <div className='Header'>
            <h1>Welcome to Oscar Finder</h1>
            </div>
            <img src={Statue} alt="Oscar statue"/>
        </header>

        
        
        
    )
}

export default Header;
