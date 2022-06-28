// import { useRouter } from 'next/router';
import Link from 'next/link';

import data from '../../data.json';

export async function getStaticPaths() {
  const paths = data.posts.map(post => ({
    params: { slug: post.slug },
  }));

  return {
    paths,
    fallback: false // false or 'blocking'
  };
}

export async function getStaticProps(context) {
  const post = data.posts.find(post => post.slug === context.params.slug);

  return {
    props: post,
  }
}

function Post(props) {
  // const router = useRouter();

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
