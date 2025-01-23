
import React, { useEffect, useState } from 'react';
import { showBloodRequestData } from '../apis/endpoint';
import { useNavigate } from 'react-router-dom';

const Repo = () => {
const navigate= useNavigate();

  const [recepientData,setRecepientData ] = useState([{
    fullname:"",
    contactnumber:"",
    email:"",
    bloodType:"",
    age:'',
    weight:'',
    gender:'',
    address:'',
  }]);
    
    useEffect(()=>{
      const getRecepient = async()=>{
        const res = await showBloodRequestData("recepient");
        if(res.status === 400){
          throw new Error('Failed to get profile');
        }
        setRecepientData(res);
      }
      getRecepient();
    },[]);





  return (
  
    <div className="min-h-screen bg-gray-100  p-6">
    
          <pre className="text-2xl font-bold text-gray-900 text-center  p-4 rounded-lg shadow-md">
             Here you can find people in need of blood donations.
        </pre>
        <p className='text-center font-semibold mb-8'>                     Your contribution can save lives.
        </p>
      <div className="max-w-4xl items-center mx-auto bg-white rounded-lg shadow-lg p-8">

      <div className='justify-items-center'>
      <h1 className="text-3xl font-bold shadow-md text-center border-black shadow-black w-1/3 rounded-2xl border-b-2 text-red-600 mb-8">
          Blood Requests
        </h1>
        
      </div>
       
       
       


        

        <div className="mt-12">
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {recepientData.map((recepient, index) => (
              <div
                key={index}
                className="bg-red-50 border-2 border-red-300 rounded-lg p-6 flex flex-col items-center shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                 <div className="text-4xl font-extrabold text-red-600 mb-4">
              {recepient.bloodType}
                </div>
                <div>
                  {recepient.fullname}
                </div>
                
               
                <button onClick={()=>navigate("/contactuser", { state: { user: recepient } })}
                  className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg text-sm hover:bg-red-700 transition-colors"
                >
                  Contact Recepient
                </button>
              </div>
            ))}
          </div>
          
          
        
        </div>
      </div>
    </div>
  );
};

export default Repo;
