import List from "./List";
import PropList from "./PropList";

function App() {
  const fruits = [
    { id: 1, name: "Apple", calories: 35 },
    { id: 2, name: "Banana", calories: 50 },
    { id: 3, name: "Orange", calories: 75 },
    { id: 4, name: "Dragon", calories: 100 },
    { id: 5, name: "Mapple", calories: 125 },
  ];

  const vegitables = [
    { id: 1, name: "Potatos", calories: 110 },
    { id: 2, name: "Ladyfinger", calories: 20 },
    { id: 3, name: "Carrot", calories: 35 },
    { id: 4, name: "Beetroot", calories: 70 },
    { id: 5, name: "Corn", calories: 26 },
  ];

  return (
    //   <>
    //     <List></List>
    //     {fruits.length > 0 ? <PropList items={fruits} category="Fruits"></PropList> : null }
    //    {vegitables.length > 0 ? <PropList items={vegitables} category="Vegitables"></PropList> : null}
    //   </>

    <>
      <List></List>
      {fruits.length > 0 && (
        <PropList items={fruits} category="Fruits"></PropList>
      )}
      {vegitables.length > 0 && (
        <PropList items={vegitables} category="Vegitables"></PropList>
      )}
    </>
  );
}

export default App;
