import React from 'react'
import Header from '../../components/Header';
import {getProviders ,signIn} from 'next-auth/react'

function signin({providers}) {
  return (
    <>
      <Header></Header>
      <div className=' grid sm :grid-cols-1'>
        {Object.values(providers).map(provider=>(
          <div key={provider.name} className="text-center grid sm :grid-cols-1"> 
          <p className=' text-blue-500 font-bold'><span className='text-orange-700'>Hey Jaber</span> , How are you ???</p>
            <img className='mx-auto' src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png' alt='logo' />
          <p className='capitalize my-10'>NB: This website is created for Learning purposes</p>
          <button onClick={()=>signIn(provider.id,{callbackUrl:"/"})} className="btn w-54  mx-auto ">Continue With {provider.name} </button>
          </div>
        ))}
      </div>
    </>
  );
}

export async function getStaticProps(){
const providers=await getProviders();

  return {
    props:{
      providers
    },
  }
}
export default signin;