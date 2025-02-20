import { Discover, Listening, LovedSongs, Libraries } from '../icons';

const Navigation = () => {
    return (
        <div className='flex items-center justify-around  m-2'>
            <Discover />
            <Listening />
            <LovedSongs />
            <Libraries />
        </div>
    );
};

export default Navigation;
