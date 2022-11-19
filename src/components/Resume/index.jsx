import ResumeItem from '../ResumeItem';
import './Resume.css'
import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign
} from 'react-icons/fa';

const Resume = ({income, expense, total}) => {
    return (
        <div className="resume">
            <ResumeItem title="Additions" testValue={income} Icon={FaRegArrowAltCircleUp} />
            <ResumeItem title="Subtraction" testValue={expense} Icon={FaRegArrowAltCircleDown} />
            <ResumeItem title="Amount" testValue={total} Icon={FaDollarSign} />
        </div>
    );
}

export default Resume;