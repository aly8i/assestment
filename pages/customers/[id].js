import styles from "../../styles/EditEquipment.module.scss";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from 'axios';
import { Alert } from 'react-bootstrap';


const EditUser = ({user}) => {
    const config = {
        headers: { apikey: `${process.env.NEXT_PUBLIC_API_KEY}` }
      };
      
    const [name, setName] = useState(user?.name||"");
    const [phonenumber, setPhonenumber] = useState(user?.phonenumber||"");
    const [address, setAddress] = useState(user?.address||"");
    const [loading,setLoading] = useState (false);
    const router = useRouter();
    const [error, setError] = useState("");
    const handleSave = async()=>{
      const validated = await validate();
      if(!validated) return;
        setLoading(true);
        const payload = {name,phonenumber,address};
        try{
          await postData(payload);
          setLoading(false);
          router.push("/customers");
        }catch(err){
          console.log(err);
        }      
    }
    const postData = async (pay) => {
        var res1 = {}
        const server = axios.create({
          baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
          headers: {'Content-Type':'application/json'},
          withCredentials: true
        });
        try{
          const res11 = await server.put(`api/users/${user._id}`, pay);
          res1=res11;
      }catch(err){
          return {
            redirect: {
              permanent: false,
              destination: "/"
            },
          };
      }
          return res1;
      }
    const validate = async () => {
        const phoneApi = `https://api.apilayer.com/number_verification/validate?number=${phonenumber}`;
        await axios.get(`${phoneApi}`, config)
        .then((response) => {
            if(response.data?.valid==false){
                setError("Please Enter a valid Phone Number");
                return false
            }else if(name==""){
                setError("Please add a name.")
                return false;
            }else if(name.length>20){
                setError("Please shorten your name.")
                return false;
            }else if(address.length<1){
                setError("Please add an address.")
                return false;
            }else if(phonenumber.length<1){
                setError("Please add a phonenumber.")
                return false;
            }
        })
        .catch((error) => {
            console.error(error);
        });
        return true;
    }

  return (
    <div className={styles.new}>
      <div className={styles.newContainer}>
        <div className={styles.top}>
          <h1>Add a Customer</h1>
        </div>
        <div className={styles.bottom}>
          <div className={styles.right}>
            <div className={styles.form}>
            <div className={styles.formInput}/> 
            <div className={styles.formInput}/> 
            <div className={styles.formInput}/>
            <div className={styles.formInput}/>
            <div className={styles.formInput}> 
                <div class="input-group mb-3">
                 <input type="text" class="form-control" placeholder="Name" aria-label="Name" value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
              </div>
              <div className={styles.formInput}>
                <div class="input-group mb-3">
                 <input type="text" class="form-control" placeholder="Phone Number" aria-label="Name" value={phonenumber} onChange={(e) => setPhonenumber(e.target.value)}/>
                </div>
              </div>
              <div className={styles.formInput}>
                <div class="input-group mb-3">
                 <input type="text" class="form-control" placeholder="Address" aria-label="Name"   value={address}   onChange={(e) => setAddress(e.target.value)}/>
                </div>
              </div>
              <div className={styles.saveSection}>
                {loading?
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                :<button className={styles.save} onClick={handleSave}>Save</button>}
                {error&& <Alert variant="danger">
                 {error}
                </Alert>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditUser;

export const getServerSideProps = async (context) => {
    var res1={};
    const server = axios.create({
      baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}/`,    
      headers: {'Content-Type':'application/json'},
      withCredentials: true
    });
    try{
      const res11 = await server.get(`api/users/${context.params.id}`);
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
        user: res1.data
      },
    };
  };
  