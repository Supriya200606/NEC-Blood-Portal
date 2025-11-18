// =============================
// API BASE URL SETUP
// =============================
// Uses environment variable when available (REACT_APP_API_URL) with a sensible fallback.
// Place `.env` at the project root (NOT inside src) for CRA to load it.
const API_BASE = process.env.REACT_APP_API_URL || 'http://127.0.0.1:5000';

// =============================
// API ENDPOINTS
// =============================
const REGISTER_URL = `${API_BASE}/api/register`;
const LOGIN_URL = `${API_BASE}/api/login`;
const PROFILE_URL = `${API_BASE}/api/profile`;
const GET_URL = `${API_BASE}/api/getform`;
const UPLOAD_URL = `${API_BASE}/api/uploadform`;
const SHOWFORM_URL = `${API_BASE}/api/myforms`;
const UPDATEPASSWORD_URL = `${API_BASE}/api/update-password`;
const FORGOT_PASSWORD_URL = `${API_BASE}/api/forgot-password`; // 👈 NEW endpoint

// =============================
// AUTHENTICATION
// =============================

// Register new user
export const register = async (fullname, contact, DOB, bloodType, email, password) => {
  const token = localStorage.getItem('token');

  try {
    const res = await fetch(REGISTER_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ fullname, contact, DOB, bloodType, email, password }),
    });

    if (!res.ok) {
      const errorMessage = await res.text();
      throw new Error(`Failed to register: ${errorMessage}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Register error:", error);
    throw error;
  }
};

// Login existing user
export const login = async (email, password) => {
  try {
    const res = await fetch(LOGIN_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    if (!res.ok) {
      try {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Login failed');
      } catch {
        throw new Error(`Login failed: ${res.status} ${res.statusText}`);
      }
    }

    return await res.json();
  } catch (error) {
    if (error.name === 'TypeError' && error.message.includes('fetch')) {
      throw new Error('Network error. Please check your connection.');
    }
    throw error;
  }
};

// Forgot Password (Send Reset Link)
export const forgotPassword = async (email) => {
  try {
    const res = await fetch(FORGOT_PASSWORD_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });

    if (!res.ok) {
      const errorMessage = await res.text();
      throw new Error(`Failed to send reset email: ${errorMessage}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Forgot password error:", error);
    throw error;
  }
};

// =============================
// PROFILE MANAGEMENT
// =============================
export const getProfile = async () => {
  const token = localStorage.getItem('token');

  try {
    const res = await fetch(PROFILE_URL, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      const errorMessage = await res.text();
      throw new Error(`Failed to get profile: ${errorMessage}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Profile fetch error:", error);
    throw error;
  }
};

// Update Password
export const updatePassword = async ({ password }) => {
  const token = localStorage.getItem('token');

  const res = await fetch(UPDATEPASSWORD_URL, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    },
    body: JSON.stringify({ password }),
  });

  if (!res.ok) {
    const msg = await res.text();
    throw new Error(msg || 'Failed to update password');
  }

  return await res.json();
};



// =============================
// FORM MANAGEMENT
// =============================

// Upload Form Data
export const setFormData = async (fullname, contactnumber, email, tag, bloodType, age, weight, gender, address, userId) => {
  const token = localStorage.getItem('token');

  try {
    const res = await fetch(UPLOAD_URL, {
      method: "POST",
      credentials: 'include',
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ fullname, contactnumber, email, tag, bloodType, age, weight, gender, address, userId }),
    });

    if (!res.ok) {
      const errorMessage = await res.text();
      throw new Error(`Failed to upload form: ${errorMessage}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Form upload error:", error);
    throw error;
  }
};

// Show Blood Request Data
export const showBloodRequestData = async (tag) => {
  const token = localStorage.getItem('token');

  const url = new URL(GET_URL);
  url.search = new URLSearchParams({ tag }).toString();

  try {
    const res = await fetch(url, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      const errorMessage = await res.text();
      throw new Error(`Failed to get requests: ${errorMessage}`);
    }

    return await res.json();
  } catch (error) {
    console.error("Fetch blood request error:", error);
    throw error;
  }
};

// Get Form By ID
export const getFormById = async (id) => {
  if (!id) return [];
  const token = localStorage.getItem('token');
  const url = `${SHOWFORM_URL}/${id}`;

  try {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        'Authorization': `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    return await res.json();
  } catch (error) {
    console.error("API Error:", error);
    return [];
  }
};
