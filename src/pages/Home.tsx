import Controller from '../components/molecules/Controller';
import Navigation from '../components/molecules/Navigation';
import Sound from '../components/molecules/Sound';
import { Add, LikedSongs } from '../components/icons';
import SongPoster from '../components/molecules/SongPoster';
import Runtime from '../components/molecules/Runtime';

const Home = () => {
    return (
        <div className='lg:hidden'>
            <div>
                <SongPoster />
            </div>

            <div className='m-2  flex items-center justify-around'>
                <Add />
                <div>
                    <h1 className='font-semibold text-xl  [text-shadow:2px_2px_4px_rgba(0,0,0,0.5)]'>
                        Money Machine
                    </h1>
                    <h4 className='text-gray-600 flex justify-center'>
                        1000 Gecks
                    </h4>
                </div>
                <LikedSongs />
            </div>
            <div>
                <Runtime />
            </div>
            <div>
                <Controller />
            </div>
            <div>
                <Sound />
            </div>
            <div>
                <Navigation />
            </div>
        </div>
    );
};

export default Home;
