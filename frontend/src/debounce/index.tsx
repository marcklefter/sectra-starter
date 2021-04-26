import {
  useState,
  useEffect
} from 'react';

import _ from 'lodash';

// ...
// Styles.
const baseStyle: React.CSSProperties = {
  textAlign: 'center'
};

const inputStyle: React.CSSProperties = {
  ...baseStyle,
  marginBottom: 20
};

// ...
// Helpers.

const apiFetch = async (url: string) => {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('An occur occurred while fetching user data.');
  }

  return response.json();
}

const getUserResourceUrl = (userId: number) => `${process.env.REACT_APP_API_URL}/users/${userId}`;

// TODO: Create debounced function 'updateUserResource' that is called with an "updater" function; the updater will 
// update the component state tracking the current user resource URL.

// ...

export const App = () => {
  const [
    userId, 
    setUserId
  ] = useState(1);
  
  useEffect(() => {
    const fetchUser = async () => {
      // ...
    }

    fetchUser();
  }, [userId]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const userId = +event.target.value;

    setUserId(userId);
  };

  // ...

  return (
    <>
      <div style={inputStyle}>
        <input
          type="number"
          value={userId}
          onChange={handleChange}
        />
      </div>

      <div style={baseStyle}>
        {/* {loading && 'Loading...'} */}
        {/* {userData?.name} */}
        {/* {error?.message} */}
      </div>
    </>
  )
};