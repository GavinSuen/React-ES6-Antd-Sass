import React from "react";
import { Button } from "antd";
import "./test.scss";

class App extends React.Component{
    render(){
        return(
           <div className={"test"}>
            antd:<Button>antd</Button>
           </div>
        );
    }
}

export default App;