import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai'; //npm i axios react-icons
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';

const BookTable = ({ books }) => {
    return (
        <table className='w-full border-separate border-spacing-2'>
            <thead>
                <tr>
                    <th className='border border-slate-800 rounded-md'>No</th>
                    <th className='border border-slate-800 rounded-md'>Title</th>
                    <th className='border border-slate-800 rounded-md max-md:hidden'>Author</th>
                    <th className='border border-slate-800 rounded-md max-md:hidden'>Publish Year</th>
                    <th className='border border-slate-800 rounded-md'>Operations</th>
                </tr>
            </thead>
            <tbody>
                {books.map((book, index) => (
                    <tr key={book._id} className='h-8'>
                        <td className='border border-slate-700 rounded-md text-center'>{index + 1}</td>
                        <td className='border border-slate-700 rounded-md text-center'>{book.title}</td>
                        <td className='border border-slate-700 rounded-md text-center max-md:hidden'>{book.author}</td>
                        <td className='border border-slate-700 rounded-md text-center max-md:hidden'>{book.publishYear}</td>
                        <td className='border border-slate-700 rounded-md text-center'>
                            <div className='flex justify-center gap-x-4'>
                                <Link to={`book/details/${book._id}`}>
                                    <BsInfoCircle className='text-green-800' />
                                </Link>
                                <Link to={`book/edit/${book._id}`}>
                                    <AiOutlineEdit className='text-yellow-600' />
                                </Link>
                                <Link to={`book/delete/${book._id}`}>
                                    <MdOutlineDelete className='text-red-600' />
                                </Link>
                            </div>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default BookTable