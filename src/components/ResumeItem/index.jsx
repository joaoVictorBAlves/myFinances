import './ResumeItem.css'

const ResumeItem = ({title, Icon, testValue}) => {
    return (
        <div className="resume-item">
            <div className="card-header">
                <p>{title}</p>
                <Icon />
            </div>
            <span>{testValue}</span>
        </div>
    );
}

export default ResumeItem;