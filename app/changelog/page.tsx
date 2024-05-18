// app/pages/changelog/page.tsx
'use client'
import React, { useState } from 'react';
import Banner from '../components/changelogpage/Banner/Banner';
import Change from '../components/changelogpage/Change/Change';
import Password from '../components/restrictedpage/Password/Password';

const Page: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (password: string) => {
    setIsLoggedIn(password === 'correctPassword');
  };

  return (
    <div>
      {!isLoggedIn ? (
        <Password handleLogin={handleLogin} />
      ) : (
        <div>
          <Banner />
          <Change />
        </div>
      )}
    </div>
  );
};

export default Page;
