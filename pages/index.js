import { useEffect } from 'react';
import nookies from 'nookies';

function HomePage() {
  useEffect(() => {
    nookies.set(null, 'pass', 'asd', {
      maxAge: 30 * 24 * 60 * 60,
      path: '/',
    });
  }, []);

  return <div>Welcome to Next.js!</div>;
}

export default HomePage;
