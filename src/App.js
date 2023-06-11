import React,{useEffect, useState,} from 'react'
import axios from 'axios'

function App() {

  const [veri,setVeri] = useState("");
  const [tarih,setTarih] = useState();
  useEffect(()=>{

    axios.get("https://raw.githubusercontent.com/ozanerturk/covid19-turkey-api/master/dataset/timeline.json")
    .then(res=>setVeri(res.data[tarih]))
    .catch(err=>console.log(err))

  }, [veri,tarih])


  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-8 mx-auto mt-4">
            <h2 className="text-center text-white display-3">TURKEY COVID-19 SEARCH ENGINE
            </h2>
            <input type="text" placeholder="GG/AA/YY" className="form-control"
            onChange={(e)=>setTarih(e.target.value)}/>

            <table className="table table-striped">
                <thead>
                  <tr>
                    <th scope="col">Test Count</th>
                    <th scope="col">Infected Count</th>
                    <th scope="col">Number Of Death</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="text-white">
                    <td>{veri===undefined ? "Data is waiting" : veri.totalTests}</td>
                    <td >{veri===undefined ? "Data is waiting" : veri.totalPatients}</td>
                    <td>{veri===undefined ? "Data is waiting" : veri.totalDeaths}</td>
                  </tr>
                </tbody>
              </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
