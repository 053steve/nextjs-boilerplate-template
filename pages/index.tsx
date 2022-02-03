import type {NextPage} from 'next'
import {FormEvent} from "react";
import {useSelector, useDispatch} from 'react-redux';
import {signIn} from '../redux/actions/auth';
import {AppState} from "../interfaces/data.interface";
import MainLayout from '../components/main-layout';


const Home = () => {


  const dispatch = useDispatch();

  const onSignin = (e: FormEvent): void => {
    e.preventDefault();
    dispatch(signIn({username: '053steve', password: 'hello1234!'}));
  };

  return (

    <div className="w-full sm:max-w-md p-5 mx-auto">
      <h2 className="mb-12 text-center text-5xl font-extrabold">Welcome.</h2>
      <form onSubmit={onSignin}>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="username">Username</label>
          <input id="username" type="text" name="username"
                 className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"/>
        </div>
        <div className="mb-4">
          <label className="block mb-1" htmlFor="password">Password</label>
          <input id="password" type="password" name="password"
                 className="py-2 px-3 border border-gray-300 focus:border-red-300 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 rounded-md shadow-sm disabled:bg-gray-100 mt-1 block w-full"/>
        </div>

        <div className="mt-6">
          <button
            className="w-full inline-flex items-center justify-center px-4 py-2 bg-red-600 border border-transparent rounded-md font-semibold capitalize text-white hover:bg-red-700 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-200 disabled:opacity-25 transition">Sign
            In
          </button>
        </div>
        <div className="mt-6 text-center">
          <button type="button" className="underline">Sign up for an account</button>
        </div>
      </form>
    </div>

  )
}

Home.getLayout = function getLayout(page) {
  return (
    <MainLayout>
      {page}
    </MainLayout>

  )
}

export default Home
