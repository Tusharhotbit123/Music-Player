import { ForwardPlay, BackwardPlay, Shuffle, Repeat } from '../icons';
import Play from '../atoms/Play';

const Controller = () => {
    return (
        <div className=' m-2 '>
            <div className='flex justify-around items-center'>
                <Shuffle />
                <div className='flex justify-around items-center w-1/2'>
                    <BackwardPlay />
                    <Play />
                    <ForwardPlay />
                </div>
                <Repeat />
            </div>
        </div>
    );
};

export default Controller;
