import { useState, useRef } from 'react';

const Runtime = () => {
    const [value, setValue] = useState(50);

    return (
        <div className='m-2  p-2'>
            <div className='flex  justify-between items-center mb-2'>
                <h1>2:40</h1>
                <h1>-1:30</h1>
            </div>
            <div className='flex items-end justify-center w-full'>
                <input
                    type='range'
                    min='0'
                    max='100'
                    value={value}
                    onChange={(e) => setValue(Number(e.target.value))}
                    className='custom-slider custom-slider-runtime'
                    style={{
                        background: `linear-gradient(to right,green ${value}%,darkgrey ${value}%)`,
                        width: 'full',
                    }}
                />
            </div>
        </div>
    );
};

export default Runtime;
