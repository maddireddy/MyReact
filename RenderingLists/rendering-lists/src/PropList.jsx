import PropTypes from 'prop-types'

function PropList(props){

    const itemList = props.items;
    const category = props.category;

    const listItems = itemList.map((item) => (
        <li key={item.id}>
          {item.name} &nbsp; {item.calories}
        </li>
      ));

    return(<><h3 className="category-name">{category}</h3> <ol className="item-name">{listItems}</ol></>);

}
PropList.propTypes = {

    category: PropTypes.string,
    items: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number, name: PropTypes.string, calories: PropTypes.number}))

}

PropList.defaultProps = {

    category: "Category",
    items: []

}
export default PropList