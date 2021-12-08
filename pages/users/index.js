import Link from "next/link";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { users: data },
  };
};

const Users = ({ users }) => {
  return (
    <div>
      <h2>Users</h2>
      {users.map((user) => (
        <Link href={`/users/${user.id}`} key={user.id}>
          <h3>
            {user.id}. {user.name}
          </h3>
        </Link>
      ))}
    </div>
  );
};

export default Users;
