function List() {
  const fruits = [
    { id: 1, name: "Apple", calories: 35 },
    { id: 2, name: "Banana", calories: 50 },
    { id: 3, name: "Orange", calories: 75 },
    { id: 4, name: "Dragon", calories: 100 },
    { id: 5, name: "Mapple", calories: 125 },
  ];

  // fruits.sort((a,b) => a.name.localeCompare(b.name)); // ALPHABETICAL

  // fruits.sort((a,b) => b.name.localeCompare(a.name)); // REVERSE ALPHABETICAL

  // fruits.sort((a,b) => a.calories - b.calories); // Sort by Calories(NUMERIC)

  // fruits.sort((a,b) => b.calories - a.calories); // Sort by Calories Reverse(NUMERIC)

  const lowcalfruits = fruits.filter( fruit => fruit.calories < 100); // Try with >= 100

  const listItems = lowcalfruits.map((lowcalfruit) => (
    <li key={lowcalfruit.id}>
      {lowcalfruit.name} &nbsp; {lowcalfruit.calories}
    </li>
  ));


 // const listItems = fruits.map((fruit) => (
 //   <li key={fruit.id}>
 //     {fruit.name} &nbsp; {fruit.calories}
 //   </li>
 // ));

  return <ol>{listItems}</ol>;
}
export default List;
