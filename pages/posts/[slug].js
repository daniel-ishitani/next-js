import { useRouter } from 'next/router';
import Link from 'next/link';

function Post() {
  const router = useRouter();

  return (
    <div>
      <p>Post!</p>

      <Link href="/">
        <a>Home</a>
      </Link>
    </div>
  );
}

export default Post;
