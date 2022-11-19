import ResumeItem from '../ResumeItem';
import './Resume.css'
import {
    FaRegArrowAltCircleUp,
    FaRegArrowAltCircleDown,
    FaDollarSign
} from 'react-icons/fa';

const Resume = () => {
    return (
        <div className="resume">
            <ResumeItem title="Additions" testValue={100} Icon={FaRegArrowAltCircleUp} />
            <ResumeItem title="Subtraction" testValue={100} Icon={FaRegArrowAltCircleDown} />
            <ResumeItem title="Amount" testValue={0} Icon={FaDollarSign} />
        </div>
    );
}

export default Resume;