import { useState } from "react";
import ChildComponent from "./ChildComponent";
import { colorContext } from "../context";
const ParentComponent = (props) => {
    const [color, setColor] = useState("#000000");
    return (
        <>
            <h1>Pick a Color</h1>
            <input 
                type="color"
                onChange={(e) => {
                    setColor(e.target.value);
                }} 
                value = {color}   
            />
            <colorContext.Provider value= "red">
               <ChildComponent/>
            </colorContext.Provider >
        </>
        
    )
}
export default ParentComponent;