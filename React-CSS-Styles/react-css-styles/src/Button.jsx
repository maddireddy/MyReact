// External - Inside the index.css file
// Module - Create a Button folder and place the Button component and corresponding Button.module.css file 
// Inline - create a const styles with K/V pair and import in the button with styles tag

// First two uses className attribute to import the styles

function Button(){

    const styles = {

        backgroundColour: "hsl(200,100%,50%)",
        colour: "white",
        padding: "10px 20px",
        borderRadius: "5px",
        border: "none",
        cursor: "pointer"
    }

    return(
        <button style={styles}>Click Me</button>
    );

}
export default Button