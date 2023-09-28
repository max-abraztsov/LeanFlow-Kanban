import React, {FC} from "react"
import "./CancelButton.scss"

interface CancelButtonProps{
    cancelActive: () => void;
}

const CancelButton: FC<CancelButtonProps> = ({cancelActive}) => {
    return (
        <button className="button-cancel" onClick={() => cancelActive()}>
            <svg className="svg-icon" width="20" height="20" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_81_14)">
            <path d="M22.9553 4.3934L15.0003 12.3483L7.04536 4.3934C6.31313 3.66117 5.12594 3.66117 4.39371 4.3934C3.66148 5.12563 3.66148 6.31282 4.39371 7.04505L12.3487 15L4.39371 22.955C3.66148 23.6872 3.66148 24.8744 4.39371 25.6066C5.12594 26.3388 6.31313 26.3388 7.04536 25.6066L15.0003 17.6517L22.9553 25.6066C23.6875 26.3388 24.8747 26.3388 25.6069 25.6066C26.3391 24.8744 26.3391 23.6872 25.6069 22.955L17.652 15L25.6069 7.04505C26.3391 6.31282 26.3391 5.12563 25.6069 4.3934C24.8747 3.66117 23.6875 3.66117 22.9553 4.3934Z" fill="white"/>
            </g>
            <defs>
            <rect width="30" height="30" fill="white"/>
            </defs>
            </svg>
            <span className="lable">Cancel</span>
        </button>
    )
};

export default CancelButton;