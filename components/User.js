import {useSession,signIn,signOut} from 'next-auth/react'
function User() {
  const {data:session}=useSession();
  if(session){
    return(
      <>
      <img onClick={signOut} src={session.user.image} className="w-10 h-10 rounded-full p-1 cursor-pointer hover:bg-gray-200"></img>
      </>
    )
  }
  return (
    <>
      <button onClick={signIn} className='btn'>Sign In</button>
    </>
  );
}

export default User;