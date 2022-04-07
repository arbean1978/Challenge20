
import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About'
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume'
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [ currentTab, setCurrentTab ] = useState('About');

  const renderTab = () => {
    switch ( currentTab ) {
      case 'About':
        return <About/>;
      case 'Portfolio':
        return <Portfolio/>;
      case 'Contact':
        return <Contact/>;
      case 'Resume':
        return <Resume/>
      default:
        return null;
    }
  };
  return (
		<div>
			<div className="mobile-header">
				<Header currentTab={currentTab} setCurrentTab={setCurrentTab}></Header>
			</div>
			<div>
				<main>{renderTab()}</main>
			</div>
			<div>
				<Footer></Footer>
			</div>
		</div>
	);
}

export default App;