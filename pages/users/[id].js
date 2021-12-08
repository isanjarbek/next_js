import { useRouter } from "next/router";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((user) => {
    return {
      params: { id: user.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const data = await res.json();

  return {
    props: { user: data },
  };
};

const User = ({ user }) => {
  const router = useRouter();
  const { params } = router.query;
  console.log(params);
  return (
    <div>
      <h1>User Detail Page</h1>
      <h2>{user.name}</h2>
      {params}
    </div>
  );
};

export default User;
