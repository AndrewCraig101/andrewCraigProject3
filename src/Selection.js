
import { useState } from 'react';

     
const Selection = ({handleSubmit, handleChange, yearChoice}) => {    

        
       

        // setUserSelection(yearChoice)

        // console.log(userSelection)

        return (

                <form onSubmit={handleSubmit}>
                        <label htmlFor="movieYears">Give me winners from this year:</label>
                        
                        <select
                                name="movieYears"
                                id="movieYears"
                                value={yearChoice}
                                onChange={handleChange}>
                                
                                <option value="placeholder" disabled>Choose one:</option>
                                <option value="2014">2014</option>
                                <option value="2015">2015</option>
                                <option value="2016">2016</option>
                                <option value="2017">2017</option>
                        </select>
                                               
                                <button>Give me winners!</button>
                </form>
                
        )
}

export default Selection;


// import { useEffect, useState } from 'react';

// const Selection = () => {
//     return (
//         <>
        //  <form>
        //     <label for="movies">Choose winners by year</label>
        //     <select name="movieYears" id="movieYears" className='select'>
        //          <option value="2000">2000</option>
        //          <option value="2001">2001</option>
        //          <option value="2002">2002</option>
        //          <option value="2003">2003</option>
        //          <option value="2004">2004</option>
        //          <option value="2005">2005</option>
        //          <option value="2006">2006</option>
        //          <option value="2007">2007</option>
        //          <option value="2008">2008</option>
        //          <option value="2009">2009</option>
        //          <option value="2010">2010</option>
        //          <option value="2011">2011</option>
        //          <option value="2012">2012</option>
        //          <option value="2013">2013</option>
        //          <option value="2014">2014</option>
        //          <option value="2015">2015</option>
        //         <option value="2016">2016</option>
        //          <option value="2017">2017</option>
        //          <option value="2018">2018</option>
        //          <option value="2019">2019</option>
        //          <option value="2020">2020</option>
        //          <option value="2021">2021</option>
        //      </select> 
        //  </form> 

             /* getUserInput = () => {
        const selection = document.getElementsById('#movieYears');
        selection.addEventListener('click', (event) => {
        --store selected year in variable;
        })
        } */
        // </>
//     )
// }

// const Selection = React.createClass({
//     getInitialState: function () {
//         return {
//             value: 'select'
//         }
//     },
//     change: function (event) {
//         this.setState({ value: event.target.value });
//     },
//     render: function () {






// const Selection = () => {
//         return (
            
//                 <form>
//                     <label for="movies">Choose winners by year</label>
//                     <select class="select" id="lang" onChange={this.change} value={this.state.value}>

// Selection = () => {


//         const selectMenu = () => {
//                 const handleChange = () => {
//                         console.log('change')
//                 }
//         }

//         return (
//                 <>
//                         <form>
//                         <label for="movies">Choose winners by year</label>
//                         <select onChange={handleChange} class="select" id="select">
//                         <option value="2000">2000</option>
//                         <option value="2001">2001</option>
//                         <option value="2002">2002</option>
//                         <option value="2003">2003</option>
//                         <option value="2004">2004</option>
//                         <option value="2005">2005</option>
//                         <option value="2006">2006</option>
//                         <option value="2007">2007</option>
//                         <option value="2008">2008</option>
//                         <option value="2009">2009</option>
//                         <option value="2010">2010</option>
//                         <option value="2011">2011</option>
//                         <option value="2012">2012</option>
//                         <option value="2015">2015</option>
//                         <option value="2016">2016</option>
//                         <option value="2017">2017</option>
//                         <option value="2018">2018</option>
//                         <option value="2019">2019</option>
//                         <option value="2020">2020</option>
//                         <option value="2021">2021</option>
//                 </select>
//                 <p>{this.state.value}</p>
//         </form>
//         </>



//         )
// }


// React.render(<Selection />, document.body);

// export default Selection