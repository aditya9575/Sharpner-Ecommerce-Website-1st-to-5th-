import React from "react";
import Table from "react-bootstrap/esm/Table";

const Home = () => {

    const fetchMovieHandler = async () => { // Use async/await for cleaner syntax
        try {
          const response = await fetch("https://swapi.dev/api/films"); // Corrected URL
      
          if (!response.ok) { // Check for successful response
            throw new Error(`HTTP error! status: ${response.status}`);
          }
      
          const data = await response.json();
          console.log("Movies fetched successfully:", data); // Log the data
        } catch (error) {
          console.error("Error fetching movies:", error);
        }
      };

  return (
    <div>
      <h2 style={{ textAlign: "center", paddingTop: "20px" }}>TOURS</h2>
      <Table responsive style={{ width: "60%", margin: "auto"}}>
        <thead></thead>
        <tbody>
          <tr>
            <td>JUL16</td>
            <td>DETROIT, MI</td>
            <td>DTE ENERGY MUSIC THEATRE</td>
            <td>
              <button style={{background:"#56CCF2", border:"none", borderRadius:"5px"}}>Buy TICKETS</button>
            </td>
          </tr>
          <tr>
            <td>JUL19</td>
            <td>TORONTO,ON</td>
            <td>BUDWEISER STAGE</td>
            <td>
            <button style={{background:"#56CCF2", border:"none", borderRadius:"5px"}}>Buy TICKETS</button>
            </td>
          </tr>
          <tr>
            <td>JUL 22</td>
            <td>BRISTOW, VA</td>
            <td>JIGGY LUBE LIVE</td>
            <td>
            <button style={{background:"#56CCF2", border:"none", borderRadius:"5px"}}>Buy TICKETS</button>
            </td>
          </tr>
          <tr>
            <td>JUL 29</td>
            <td>PHOENIX, AZ</td>
            <td>AK-CHIN PAVILION</td>
            <td>
            <button style={{background:"#56CCF2", border:"none", borderRadius:"5px"}}>Buy TICKETS</button>
            </td>
          </tr>
          <tr>
            <td>AUG 2</td>
            <td>LAS VEGAS, NV</td>
            <td>T-MOBILE ARENA</td>
            <td>
            <button style={{background:"#56CCF2", border:"none", borderRadius:"5px"}}>Buy TICKETS</button>
            </td>
          </tr>
          <tr>
            <td>AUG 7</td>
            <td>CONCORD, CA</td>
            <td>CONCORD PAVILION</td>
            <td>
            <button style={{background:"#56CCF2", border:"none", borderRadius:"5px"}}>Buy TICKETS</button>
            </td>
          </tr>
        </tbody>
      </Table>
      <button onClick={fetchMovieHandler}>fetch</button>
    </div>
  );
};

export default Home;
