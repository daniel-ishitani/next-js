import { useRouter } from 'next/router';
import nookies from 'nookies';

function Authorized({ content }) {
  const router = useRouter();

  const handleEndSession = () => {
    nookies.destroy(null, 'pass');
    router.push('/');
  };

  return (
    <>
      <h1>Authorized</h1>
      <p>{content}</p>
      <button onClick={handleEndSession}>End session</button>
    </>
  );
}

const PASS = 'asd';

export async function getServerSideProps(context) {
  const cookies = nookies.get(context);

  if (!(cookies.pass === PASS)) {
    return {
      redirect: {
        permanent: false,
        destination: '/',
      },
    };
  }

  return { props: { content: PASS } };
}

export default Authorized;
