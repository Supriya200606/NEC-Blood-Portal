// Use environment variable when available (REACT_APP_API_URL) with a sensible fallback.
// Note: place .env with REACT_APP_API_URL at the frontend project root (not inside src) so Create React App picks it up.
const API_BASE = process.env.REACT_APP_API_URL || 'http://127.0.0.1:5000';

const REGISTER_URL = `${API_BASE}/api/register`;
const LOGIN_URL = `${API_BASE}/api/login`;
const PROFILE_URL = `${API_BASE}/api/profile`;
const GET_URL = `${API_BASE}/api/getform`;
const UPLOAD_URL = `${API_BASE}/api/uploadform`;
const SHOWFORM_URL = `${API_BASE}/api/myforms/:id`;
const UPDATEPASSWORD_URL = `${API_BASE}/api/updatepassword`;


export const register = async (fullname, contact,DOB,bloodType ,email, password) => {
  const token = localStorage.getItem('token');

  try {
    const res = await fetch(REGISTER_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json','Authorization': `Bearer ${token}` },
      body: JSON.stringify({ fullname, contact ,DOB,bloodType ,email, password})
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

export const login = async (email, password) => {
  try {
    const res = await fetch(LOGIN_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    if (!res.ok) {
      // Try to parse JSON error response first
      try {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Login failed');
      } catch (jsonError) {
        // If JSON parsing fails, use status text
        throw new Error(`Login failed: ${res.status} ${res.statusText}`);
      }
    }

    const data = await res.json();
    return data;
  } catch (error) {
    // If it's a network error or other fetch error
    if (error.name === 'TypeError' && error.message.includes('fetch')) {
      throw new Error('Network error. Please check your connection.');
    }
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


 export const setFormData = async(fullname,contactnumber,email,tag,bloodType,age,weight,gender,address,userId)=>{
  const token = localStorage.getItem('token');
  try {

    const res = await fetch(UPLOAD_URL,{
      method: "POST",
      credentials: 'include',
      headers: { "Content-Type": "application/json",'Authorization': `Bearer ${token}` },
      body: JSON.stringify({ fullname,contactnumber,email,tag, bloodType,age,weight,gender,address,userId}),
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
  const token = localStorage.getItem('token');

  const url = new URL(GET_URL);  
  const params = new URLSearchParams({
    tag: tag,
  });
  url.search = params.toString();  

  try {
    const res =  await fetch(url ,{
      method: "GET",
      credentials: "include",
     
      headers: { "Content-Type": "application/json",'Authorization': `Bearer ${token}` },
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



export const getFormById = async (id) => {
  const token = localStorage.getItem('token');
  const url =SHOWFORM_URL.replace(':id', id);


  try {
    const res = await fetch(url,{
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`

      },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    return await res.json(); // Ensure JSON is returned here
  } catch (error) {
    console.error("API Error:", error);
    return null;
  }
};

export const updatePassword = async ({ email, password }) => {
  const token = localStorage.getItem('token');
  
  try {
    const response = await fetch(UPDATEPASSWORD_URL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ email, password })
    });

    if (!response.ok) {
      const errorMessage = await response.text();
      throw new Error(errorMessage || 'Failed to update profile');
    }

    return await response.json();
  } catch (error) {
    console.error('Update profile error:', error);
    throw error;
  }
};
