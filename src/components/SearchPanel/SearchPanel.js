import React from 'react';
import { useState } from 'react/cjs/react.development';

const SearchPanel = ({ hadleInputChange }) => {
    const [value, SetValue] = useState('')

    const changeInput = (e) => {

        SetValue(e.target.value)
        hadleInputChange(e.target.value)


    }

    return (
        <div>
            <input
                className="inp"
                type='text'
                value={value}
                onChange={changeInput}
                placeholder='What test are you looking for?' />
        </div>
    );
};

export default SearchPanel;