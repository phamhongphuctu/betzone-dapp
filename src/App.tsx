import React, { useState } from 'react';
import Landing from './pages/Landing';
import Casino from './pages/Casino'; // Giữ nguyên nếu đã có file này

interface PiUser {
  uid: string;
  username: string;
  accessToken: string;
}

function App() {
  const [user, setUser] = useState<PiUser | null>(null);

  return (
    <>
      {!user ? (
        <Landing onLoginSuccess={setUser} />
      ) : (
        <Casino />
      )}
    </>
  );
}

export default App;
