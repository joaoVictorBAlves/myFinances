import './GridItem.css'
import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaTrash
} from 'react-icons/fa'

const GridItem = ({ item, onDelete }) => {
    return (
        <tr>
            <td>{item.desc}</td>
            <td>{item.amount}</td>
            <td className='center'>
                {item.expense ? (
                    <FaRegArrowAltCircleDown color='red' />
                ) : (
                    <FaRegArrowAltCircleUp color='green' />
                )}
            </td>
            <td className='center'>
                <FaTrash onClick={() => onDelete(item.id)} />
            </td>
        </tr>
    );
}

export default GridItem;