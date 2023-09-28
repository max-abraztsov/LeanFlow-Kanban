import React, {FC, ChangeEvent} from 'react';
import "./Description.scss"

interface DescriptionProps{
    placeholder: string;
    value: string;
    getValue: (e: string) => void;
}

const Description: FC<DescriptionProps> = ({placeholder, getValue, value}) => {
    
    return (
        <div className="description__container">
            <textarea value={value} maxLength={200} onChange={(e: ChangeEvent<HTMLTextAreaElement>) => getValue(e.target.value)} className="description" placeholder={placeholder} />
            <div className="highlight"></div>
        </div>
    );
};

export default Description;