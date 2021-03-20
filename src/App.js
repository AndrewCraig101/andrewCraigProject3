import React, { Profiler } from 'react'
// import './index.css';
import firebase from './firebase';

// import Header from './Header.js';
// import Footer from './Footer.js';
import Selection from './Selection.js';
import Displaywinners from './Displaywinners.js'
import Statue from './assets/statue.png';

import { useEffect, useState } from 'react';
// import axios from 'axios';

function App() {

  const [allProfiles, setAllProfiles] = useState([]);

  const [yearChoice, setYearChoice] = useState('')

  const [userSelectedYear, setUserSelectedYear] = useState([])

  const [newState, setNewState] = useState([])

  useEffect(() => {
    // console.log('hello')
    const dbRef = firebase.database().ref();

    // your data homes is an array, so you would have to iterate over the array using Array.prototype.map() for it to work.

    // dbRef.on(handleSubmit, (data) => {
    //   console.log(data.val());
    // });
    const copyArray = []

    dbRef.on('value', (response) => {

      
      const data = response.val();
      


      for (let index in data) {
        copyArray.push(data[index])
        // setNewState(data[index]);
      }
      

    });
    
     setAllProfiles(copyArray);

    },[])

    
    
    console.log(allProfiles)

    // console.log(yearChoice)
    // console.log(allProfiles.year)

        
  const handleChange = (event) => {
    setYearChoice(event.target.value);
  }

  // if (profile.year === yearChoice) {
  //   setUserSelectedYear(profile)
  // }

 

  const temp = []

  for (let profile of allProfiles) {
    console.log(profile)
    temp.push(profile)
    
  }
 




  const handleSubmit = (e) => {
    e.preventDefault()
    // setUserSelection(yearChoice)

  //   setUserSelectedYear(temp)
  //  console.log(userSelectedYear, 'test test')
  }
    
  // console.log(userSelectedYear, 'user array')
  // console.log(userSelection, "User Selection")
  

  return (
    <div className='containerMain'>

      <img src={Statue} alt="Oscar statue" />
      <div className="containerData">
      <h1>Welcome To Oscar Finder</h1>
      <Selection handleSubmit={handleSubmit} yearChoice={yearChoice} handleChange={handleChange}/>
      <Displaywinners allProfiles={allProfiles}  />
      </div>

      <img src={Statue} alt="Oscar statue" />
    </div>
  )
};
  
    
export default App;













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


