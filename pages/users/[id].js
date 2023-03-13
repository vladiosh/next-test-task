import { useRouter } from "next/router";
import MainContainer from "../../components/mainContainer";

export default function User({ user }) {
  const { query } = useRouter();

  return (
    <MainContainer keywords={user.name}>
      <h1>Пользователь c id {query.id}</h1>
      <div> Имя пользователя - {user.name}</div>
    </MainContainer>
  );
}

export async function getServerSideProps({ params }) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.id}`
  );
  const user = await response.json();

  return {
    props: { user }, // will be passed to the page component as props
  };
}
