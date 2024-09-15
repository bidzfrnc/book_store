import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AiOutlineEdit } from 'react-icons/ai'; //npm i axios react-icons
import { BsInfoCircle } from 'react-icons/bs';
import { MdOutlineAddBox, MdOutlineDelete } from 'react-icons/md';
import Spinner from '../components/Spinner';
import BookCard from '../components/home/BookCard';
import BookTable from '../components/home/BookTable';


const Home = () => {

    const [books, setBook] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showType, setShowType] = useState('table');

    useEffect(() => {
        setLoading(true);
        axios
            .get('http://localhost:3000/book')
            .then((response) => {
                setBook(response.data.foundedBooks);
                console.log(response.data); // Check the type and structure

                setLoading(false);
            }).catch((error) => {
                console.log(error);
                setLoading(false);
                alert('An error occurred while fetching the data. Please try again later.');
            })
    }, []);

    return (
        <div className='p-4'>
            <div className='flex justify-center items-center gap-x-4'>
                <button className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
                    onClick={() => setShowType('table')}>Table</button>

                <button className='bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg'
                    onClick={() => setShowType('card')}>Card</button>
            </div>
            <div className='flex justify-between items-center'>
                <h1 className='text-3xl my-8'>Book List</h1>
                <Link to='/book/create'>
                    <MdOutlineAddBox className='text-sky-800 text-4xl' />
                </Link>
            </div>

            {loading ? (
                <Spinner /> //after loading
            ) : showType === 'table' ? (<BookTable books={books} /> //if show type is equal to table display books in table

            ) : (<BookCard books={books} /> //else display books in card

            )}

        </div>
    )
}

export default Home