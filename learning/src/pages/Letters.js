
import Header from '../Component/Header';
import LettersIsh from '../Component/LettersIsh';
// import { useEffect, useState } from "react";
import Footer from '../Component/Footer';



function Letters () {

  // const [letter, setLetter] = useState([]);
  // useEffect(() => {
  //  fetch('http://localhost:9000/letter')
  //  .then((res) => res.json())
  //  .then((data) => {
  //   console.log(data);
  //   setLetter(data);})
  // }, [])
  return (
    <>
    <Header />   
    
    <LettersIsh />
    {/* <table className='table table-striped mt-4'>
              <thead>
                 <tr>
                    <th>Letter</th>
                    <th>Word</th>
                    <th>Photo</th>
                    <th>Sentence</th>
                 </tr>
              </thead>
              <tbody>
                {letter.map((letters) => {
                  return (
                  <tr key={letters.id}>
                    <td>{letters.Letter}</td>
                    <td>{letters.Word}</td>
                    <td>{letters.Photo}</td>
                    <td>{letters.Sentence}</td>
                  </tr>
                  )
                })}
                  
              </tbody>
            </table> */}

    <Footer />
  </>
  );
}

export default Letters;


