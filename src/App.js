import React from "react";
import Cards from "./Cards";
import Header from "./Header";
import Cardlist from "./Cardlist";
function App() {
  return (
    <div >
      <Header/>
      <button className="butt">Topic1</button>  
      <button className="butt">Topic2</button>
      <button className="butt">Topic3</button>  
      <button className="butt">Topic4</button>
      <button className="butt">Topic5</button>  
      <button className="butt">Topic6</button>
      <button className="butt2">Topic5</button>  
      <button className="butt2">Topic6</button>
      <button className="butt2">Topic5</button>  
      <button className="butt2">Topic6</button>
      <button className="butt2">Topic5</button>  
      <button className="butt2">Topic5</button> 
      <Cards 
      title={Cardlist[0].title}
      content={Cardlist[0].content}
      />
      <Cards 
      title={Cardlist[0].title}
      content={Cardlist[0].content}
      />
     <h5>Thank You!</h5>
      
      
      
      
    </div>
  );
}

export default App;
