import { useState } from 'react';
import { IncreaseVol, DecreaseVol } from '../icons';

const Sound = () => {
    const [value, setValue] = useState(50);

    return (
        <div className='flex items-center justify-center  m-2'>
            <IncreaseVol />
            <div className='flex items-end justify-center w-full'>
                <input
                    type='range'
                    min='0'
                    max='100'
                    value={value}
                    onChange={(e) => setValue(Number(e.target.value))}
                    className='custom-slider custom-slider-sound'
                    style={{
                        background: `linear-gradient(to right,green ${value}%,darkgrey ${value}%)`,
                    }}
                />
            </div>
            <DecreaseVol />
        </div>
    );
};

export default Sound;
