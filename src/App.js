import React from 'react'
import './index.css';
import firebase from './firebase';

// import Header from './Header.js';
// import Footer from './Footer.js';
import Selection from './Selection.js';
import DisplayWinners from './DisplayWinners.js'
import Statue from './assets/statue.png';

import { useEffect, useState } from 'react';
// import axios from 'axios';

function App() {
  const [allProfiles, setAllProfiles] = useState([]);
  
  useEffect(() => {
    // console.log('hello')
    const dbRef = firebase.database().ref();

    // your data homes is an array, so you would have to iterate over the array using Array.prototype.map() for it to work.
   

    dbRef.on('value', (response) => {

      const newState = [];
      const data = response.val();

      for (let index in data) {
        newState.push(data[index]);
      }
      

      setAllProfiles(newState);

      console.log(newState)
    });

    },[])

  return (
    <div className='containerMain'>

      <img src={Statue} alt="Oscar statue" />
      <div className="containerData">
      <h1>Welcome To Oscar Finder</h1>
        <Selection yearChoice={yearChoice} />
      <DisplayWinners allProfiles={allProfiles}  />
      </div>

      <img src={Statue} alt="Oscar statue" />
    </div>
  )
};
  
    
export default App;

//  <div className="App">
//               <img src={Statue} alt="Oscar statue" />
//               <div className="Interface">
//                 <h1>Welcome to Oscar Finder</h1>
//                 <DisplayWinners />
//                 {/* <Selection /> */}
//               </div>
//               <img src={Statue} alt="Oscar statue" />
//             </div>












// function App() {
//  const [allProfiles, setAllProfiles] = useState([]);
//   useEffect(() => {
//     axios({
//       url: "https://api.unsplash.com/search/photos",
//       method: "GET",
//       dataResponse: "json",
//       params: {
//         client_id: "SPWoYE3TRrK7rkvIR2uFqa0RuCJ-tfaeJvWqFzdyd-w",
//         // query: 
//         per_page: 30,
//       },
//     }).then((res) => {
//     const profiles = res.data.results.map((profile) => {
//       // let photo = img
//       // let title = title
//       // let category = category

//     return {...profile};

//       console.log(profile);
//       })

//     setAllProfiles() 
//     }
//   )}, [])

//   return (
//     <div className="App">
//       <div className='HeaderDiv'>
//         <Header />
//         <Selection />
//       </div>
      
//       <DisplayMovies profiles={allProfiles} />   
//       <Footer />
//     </div>
//   );
// }


