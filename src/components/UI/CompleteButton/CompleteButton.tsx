import React, {FC} from "react"
import "./CompleteButton.scss"

interface CompleteButtonProps{
    completeActive: () => void;
}

const CompleteButton: FC<CompleteButtonProps> = ({completeActive}) => {
    return (
        <button onClick={() => completeActive() } className="button-complete">
            <svg className="svg-icon" width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9.81776 25.7483C9.01457 25.7487 8.24427 25.4102 7.67681 24.8076L1.204 17.9474C0.507521 17.2087 0.507521 16.0113 1.204 15.2726C1.9007 14.5342 3.03005 14.5342 3.72675 15.2726L9.81776 21.7306L25.932 4.64562C26.6287 3.90719 27.758 3.90719 28.4547 4.64562C29.1512 5.38429 29.1512 6.58168 28.4547 7.32035L11.9587 24.8076C11.3912 25.4102 10.621 25.7487 9.81776 25.7483Z" fill="white"/>
            </svg>
            <span className="lable">Complete</span>
        </button>
    )
};

export default CompleteButton;