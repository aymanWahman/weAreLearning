const LettersIsh = () => {
  return (
    <>
    
     <div>  
        <h3>A sentence is a group of words</h3>
        
        <p className='ms-5 ani '>The word is a noun, verb, or letter</p>

        <div className='section'>
          
            <table className='table '>
              <thead>
                 <tr>
                    <th>Letter</th>
                    <th>Word</th>
                    <th>Photo</th>
                    <th>Sentence</th>
                 </tr>
              </thead>
              <tbody>
                  <tr>
                    <td>Aa</td>
                    <td>Apple</td>
                    <td><img src={require('../Image/apple.jpg')} width="50px" alt="apple"/></td>
                    <td>I want an apple</td>
                  </tr>
                  <tr>
                    <td>Bb</td>
                    <td>Book</td>
                    <td><img src={require('../Image/bookB.jpg')} width="30px" alt="book"/></td>
                    <td>I read my book</td>
                  </tr>
                  <tr>
                    <td>Cc</td>
                    <td>Cat</td>
                    <td><img src={require('../Image/cat.jpg')} width="40px" alt="cat"/></td>
                    <td>I like your cat</td>
                  </tr>
                  <tr>
                    <td>Dd</td>
                    <td>Dog</td>
                    <td><img src={require('../Image/dog.jpg')} width="70px" alt="dog"/></td>
                    <td>This is a cute dog</td>
                  </tr>
                  <tr>
                    <td>Ee</td>
                    <td>Egg</td>
                    <td><img src={require('../Image/egg.png')} width="40px" alt="egg"/></td>
                    <td>This is an egg</td>
                  </tr>
                  <tr>
                    <td>Ff</td>
                    <td>Fish</td>
                    <td><img src={require('../Image/fish.jpg')} width="50px" alt="fish"/></td>
                    <td>This is a fish</td>
                  </tr>
              </tbody>
            </table>
          </div>
    </div>
    
    </>
  )}

  export default LettersIsh;