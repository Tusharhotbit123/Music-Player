import { Listening } from '../icons';

const SongPoster = () => {
    return (
        <div className=' m-2 flex flex-col items-center justify-around'>
            <h1 className='font-bold text-xl'>Now Playing</h1>
            <div className='my-4'>
                <img
                    className='h-64 w-64 rounded-2xl'
                    src='https://petapixel.com/assets/uploads/2018/10/1-1-534x800.jpg'
                    alt='poster'
                />
            </div>
            <div className='w-3/5 mb-6'>
                <h1 className='bg-green-100 text-gray-600 font-semibold flex justify-around items-center px-2 py-1 rounded-3xl'>
                    <Listening />
                    device connected
                </h1>
            </div>
        </div>
    );
};

export default SongPoster;
