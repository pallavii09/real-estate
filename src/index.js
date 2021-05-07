import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Navbar from './components/Navbar';
//import HomeBanner from './components/HomeBanner';
import ContentSection from './components/ContentSection';
import About from './components/About';
import Amenities from './components/Amenities';
import CustomizedTables from './components/CustomizedTables';
import Contact from './components/Contact';
import Location from './components/Location';
import Disclaimer from './components/Disclaimer';
import './components/style.css';
import IMAGES from './components/Image';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
  
    <Navbar />
    <HomeBanner />
    <ContentSection   heading='Shapoorji BKC 28' description='BKC 28 is the most awaited project in Bandra East, Mumbai by Shapoorji Pallonji and Vakratunda Group. The project offers lavish 2 BHK apartments in varied sizes with state of art amenities. The project is situated at a 5 Minutes distance from Kalanagar junction and BKC.' />
    <About src={IMAGES.ABOUT}  heading='BKC 28 Project Key Highlights' span='Overview' description='22 storied tower# Double heighted entrance lobby Premium Vastu compliant* homes 4 high speed elevators French windows for maximum views 4 units to a core Car charging facility. Roof top amenities with sea view Why Khernagar- Bandra East: Bandra East’s property market has beneﬁted tremendously from the many infrastructural upgrades taking place around it as well as its proximity to Mumbai’s biggest and most prominent CBD - BKC. It has brought to prominence smaller realty micro markets like Khernagar- Bandra East,  thus unlocking real estate opportunities and value. The upcoming underground metro line will boost this market further. Khernagar- Bandra East  offers an opportunity to own a home at a fairly lower capital value compared to other projects in the vicinity while enjoying the advantages of a similar geographical location.' />
<div class="Amenities-Section">
<h2>BKC 28 <span>Amenities</span></h2><br />
    <Amenities />
    </div>
    <div class="PricingTable">
    <h2>BKC 28 Pricing</h2>
    <CustomizedTables/>   
    </div>
    <Contact />
    <Location />
    <Disclaimer heading='Disclaimer' description='MahaRERA Number: P51800028474 available at website: http://maharera.mahaonline.gov.in.' description1='The content is for information purposes only and does not constitute an offer to avail of any service. Prices mentioned are subject to change without notice and properties mentioned are subject to availability. Images for representation purpose only. We may share data with rera registered sub brokers/companies/projects for further processing. We may also send updates to the mobile number/email id registered with us. All Rights Reserved.' />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
