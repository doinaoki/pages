import Sidebar from './Sidebar';


export default function Header(){
    return (
        <div className='bg-blue-800 flex'>
            <div className='flex-none content-center pl-2'>
                <Sidebar />     
            </div>
            <div className='shrink pl-3 content-center justify-items-center py-4 font-mono'>
                <div className="text-white font-bold text-4xl">Doi</div>
            </div>
        </div>
    )
}