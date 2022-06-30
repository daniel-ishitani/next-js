import { useRouter } from 'next/router';
import Link from 'next/link';

import data from '../../data.json';

export async function getStaticPaths() {
  return {
    paths: [],
    fallback: 'blocking' // false or 'blocking'
  };
}

export async function getStaticProps(context) {
  const post = data.posts.find(post => post.slug === context.params.slug);

  return {
    props: post,
    revalidate: 10,
  };
}

function Post(props) {
  const router = useRouter();

  if (router.isFallback) {
    return <p>Loading...</p>;
  };

  return (
    <div>
      <p>Post {props.slug}</p>
      <p>{props.content}</p>

      <Link href="/">
        <a>Home</a>
      </Link>
    </div>
  );
}

export default Post;
