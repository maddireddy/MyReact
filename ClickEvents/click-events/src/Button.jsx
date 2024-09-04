function Button(){

    const buttonClick = () => console.log("Ufff");

    let count = 0;

    const handleCount = (name) => {

        if(count < 3){
            console.log(`You ${name} clicked me ${count} times`);
            count++;
        }else{
            console.log(`${name} Stop Clicking me`);
        }

    };

    //const evendBased = (e) => console.log(e);

    const evendBased = (e) => e.target.textContent = "Offooo";

    const handleClick = (name) => console.log(`${name} Stop yaaar`); 

    //return(<button onClick={(e) => evendBased(e)}>Click Me:</button>);

    return(<button onDoubleClick={(e) => evendBased(e)}>Click Me:</button>);

}
export default Button