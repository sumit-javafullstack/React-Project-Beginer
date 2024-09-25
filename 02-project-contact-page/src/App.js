
import './App.css';
import ContactBody from './Components/ContactBody/ContactBody';
import ContactHeader from './Components/ContactHeader/ContactHeader';
import Navigation from './Components/Navigation/Navigation';

function App() {
  return (
    <div>
     <Navigation />
     <div className='bodyContainer'>
      <ContactHeader />
      <ContactBody />
     </div>
    </div>
  );
}

export default App;
