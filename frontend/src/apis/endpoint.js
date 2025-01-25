const REGISTER_URL = 'http://localhost:5000/api/register';
const LOGIN_URL = 'http://localhost:5000/api/login';
const PROFILE_URL = 'http://localhost:5000/api/profile';
const GET_URL = 'https://https://healthnet-rose.vercel.app//api/getform';
const UPLOAD_URL = 'http://localhost:5000/api/uploadform';

export const register = async (fname, lname, contact ,email, password,DOB,district,bloodType,gender) => {
  try {
    const res = await fetch(REGISTER_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fname, lname, contact ,email, password,DOB,district,bloodType,gender })
    });

    if (!res.ok) {
      const errorMessage = await res.text();
      throw new Error(`Failed to register: ${errorMessage}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const login = async (email,password) => {

  try {
    const res = await fetch(LOGIN_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({email,password})
    });

    if (!res.ok) {
      const errorMessage = await res.text();
      throw new Error(`Failed to login: ${errorMessage}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getProfile = async () => {
  const token = localStorage.getItem('token');
  try {
    const res = await fetch(PROFILE_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    });

    if (!res.ok) {
      const errorMessage = await res.text();
      throw new Error(`Failed to get profile: ${errorMessage}`);
    }

    return await res.json();
  } catch (error) {
    throw error;
  }
};


 export const setFormData = async(fullname,contactnumber,email,tag,bloodType,age,weight,gender,address)=>{
  const token = localStorage.getItem('token');
  try {

    const res = await fetch(UPLOAD_URL,{
      method: "POST",
      credentials: 'include',
      headers: { "Content-Type": "application/json",'Authorization': `Bearer ${token}` },
      body: JSON.stringify({ fullname,contactnumber,email,tag, bloodType,age,weight,gender,address}),
    });
    if (!res.ok) {
      const errorMessage = await res.text();
      throw new Error(`Failed to set form data: ${errorMessage}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export const showBloodRequestData = async(tag)=>{
  try {
    const res = await fetch(`${GET_URL}?tag=${tag}`, {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
        
      }
    });

    if (!res.ok) {
      const errorMessage = await res.text();
      throw new Error(`Failed to get profile: ${errorMessage}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    throw error;
  }
}

