import dynamic from 'next/dynamic';
import axios from "axios";
const UserList = dynamic(
  () => import("../../components/UserList"),
  {ssr: false}
)
const page = ({users}) => {
  return (
    <div className='container'>
      <UserList users={users}/>
    </div>
    
  );
};

export default page;

export const getServerSideProps = async () => {
  var res1={};
  const server = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
    headers: {'Content-Type':'application/json'}
  });
  try{
    const res11 = await server.get("api/users/");
    res1=res11;
}catch(err){
    return {
      redirect: {
        permanent: false,
        destination: "/"
      },
    };
}
  return {
    props: {
      users: res1.data,
    },
  };
};