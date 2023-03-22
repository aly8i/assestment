import React from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { useState } from "react";
const config = {
  headers: { apikey: `${process.env.NEXT_PUBLIC_API_KEY}` }
};


export default function Page() {
  const [phonenumber,setPhonenumber]= useState("");
  const [phoneinfo,setPhoneinfo] = useState(null);
  const [loading,setLoading] = useState("no");
  const validate = () =>{
    setLoading("yes");
    const phoneApi = `https://api.apilayer.com/number_verification/validate?number=${phonenumber}`;
    axios.get(`${phoneApi}`, config)
      .then((response) => {
        setPhoneinfo(response.data);
      })
      .then(() => {
        setLoading("finished");
      })
      .catch((error) => {
        console.error(error);
      });
  }
  return (
    <div className="container">
      <div className="phoneCon">
        <div class="input-group input-group-sm mb-3 mt-3">
          <span class="input-group-text" id="inputGroup-sizing-sm">Phone Number</span>
          <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" onChange={(e)=>{setPhonenumber(e.target.value)}}/>
        </div>
        <button type="button" class="btn btn-light mb-3 mt-3" data-bs-toggle="popover" data-bs-title="Popover title" aria-describedby="inputGroup-sizing-sm" data-bs-content="And here's some amazing content. It's very engaging. Right?" onClick={()=>{validate()}}>Check</button>
        {loading=="finished"?
        <div className="response">
          {phoneinfo?.valid==true?
            <>
              <p>Valid: Yes</p>
              <p>Country Prefix: {phoneinfo?.country_prefix||null}</p>
              <p>Country Code: {phoneinfo?.country_code||null}</p>
              <p>Country Name: {phoneinfo?.country_name||null}</p>
              <p>Carrier: {phoneinfo?.carrier||null}</p>
              <p>Line Type: {phoneinfo?.line_type||null}</p>
            </>
            :<p>
              You provided an invalid phone number.
             </p>
          }
          
        </div>
        :loading=="yes"?
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
        :<></>}
      </div>
    </div>
  );
}
