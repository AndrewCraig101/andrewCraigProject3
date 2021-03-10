const DisplayWinners = (props) => {
    const { allProfiles, yearChoice } = props;

    console.log(yearChoice)
    
    const filteredProfiles = allProfiles.filter((item) => {
        return (
            (item.year === yearChoice && item.winner)
            
        )
    })


    return (
        <section className="results">
            {
                filteredProfiles.length === 0 ?
                    <h2>No winners found! Check back later</h2>
                    :
                    <>
                        <h2>Winners!</h2>
                        <div className="winners">
                            {  
                            filteredProfiles.map((profile) => {                       
                                return (
                                    <div className="winner-container">
                                        <p>{profile.category}</p>
                                        <p>{profile.entity}</p>
                                        <p>{profile.year}</p>
                                    </div>
                                )

                              
                             }

                            )}

                        </div>
                    </>
            }
        </section>
    )
}
export default DisplayWinners;









// function DisplayMovies(props) {
//     return (


//         <>
//     <section>
//         <div className="profiles">
//             { props.profiles.map((profile) => {
//                 return (
//                     <div className="profile-container" key={profile.id}>
//                         <img src={profile.urls.small} alt={profile.alt_description} />
//                     </div>
//                     );
//                 })}
//         </div>

//     </section>
//     </>
//             )   
// }
// export default DisplayMovies;









    // DisplayMovies() = (pokemon) => {
    // const ul = document.querySelector('ul')
    // pokemon.forEach((profile) => {
    // const h2 = document.createElement('h2')
    // const li = document.createElement('li')
    // const image = document.createElement('img')
    // const p = document.createElement('p')

    // h2.innerText = profile.name
    // image.src = profile.image
    // image.alt = profile.type
    // p.innerText = profile.height

    // li.appendChild(h2)
    // li.appendChild(image)
    // li.appendChild(p)
    // ul.appendChild(li)
    // });
    // }
    // tinderApp();