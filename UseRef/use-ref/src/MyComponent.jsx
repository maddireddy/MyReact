/*
The useRef hook in React is a powerful tool that allows you to create a mutable 
reference to a DOM element or any other value that persists across renders. 
Here’s a breakdown of how it works and some common use cases:
What is useRef?
The useRef hook returns a mutable object with a .current property. 
This object persists for the lifetime of the component and does not cause a re-render when updated.
*/

import { useState,useEffect,useRef } from "react";
function MyComponent(){


    //let {number,setNumber} = useState(0);

    const ref = useRef(0);

    console.log(ref);

    useEffect( () =>  {
        console.log("COMPONENT RENDERED");
    });

    function handleClick(){
        //setNumber( n => n + 1);
        ref.current++;
        console.log(ref.current);
    }

    return(<button onClick={handleClick} >Click Me</button>);

}
export default MyComponent;