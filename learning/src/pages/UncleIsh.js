import Header from "../Component/Header";
import Sidebar from "../Component/Sidebar";
import Footer from "../Component/Footer";

const UncleIsh = () => {
  return (
    <>
      <Header />
      
        <div className="row section">
          <div className="col-2 sidebar m-2">
            <Sidebar />
          </div>

          <div className="col">        
              <div className="section bg-secondary m-2">
              
                <h1 className="m-3  text-white">Sentence structure</h1>
                
                <img className="my-img ms-4" src={require("../Image/UncleIshImg.jpg")} alt="We're learning" /> 
              
              </div>
              
              <div className="col m-3">        
              
                <h2>A sentence is a group of words.<span> The word is a noun, verb, or letter</span></h2>   
              </div>

              <div className="section">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Simple sentence</th>
                      <th>Compound sentence</th>
                      <th>Complex sentence</th>
                      <th>Compound complex</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>الجملة البسيطة</td>
                      <td>الجملة المركبة</td>
                      <td>الجملة المجمعة</td>
                      <td>الجملة المجمعة المركبة</td>
                    </tr>
                    <tr>
                      <td>
                        تحتوي علي فقرة واحدة وتعبر عن فكرة كاملة وتتكون من فعل
                        أو أكثر وفاعل أو أكثر
                      </td>
                      <td>
                        تحتوي علي فقرتين أو أكثر ويكون لهم نفس القيمة ويربط
                        بينهم حروف العطف المتناسقة
                      </td>
                      <td>
                        تحتوي علي فقرتين أو أكثر ويربط بينهم أدوات الربط لعرض
                        الوقت أو المكان أو الشرط أو سبب ونتيجة
                      </td>
                      <td>هي جملة مجمعة + جملة مركبةأو جملة بسيطة</td>
                    </tr>
                  </tbody>
                </table>
              </div>
         </div>
      </div>

      <Footer />
    </>
  );
};

export default UncleIsh;
