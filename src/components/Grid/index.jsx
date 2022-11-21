import GridItem from '../GridItem';
import './Grid.css'

const Grid = ({ items, setItems }) => {
    const onDelete = (ID) => {
        const newArray = items.filter((transaction) => transaction.id !== ID);
        setItems(newArray);
        localStorage.setItem("transactions", JSON.stringify(newArray));
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Description</th>
                    <th>Value</th>
                    <th>Type</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {items?.map((item, index) => {
                    console.log(item)
                    // <GridItem key={index} item={item} onDelete={onDelete} />
                })}
            </tbody>
        </table>
    );
}

export default Grid
