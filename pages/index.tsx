import styles from "@/styles/Home.module.css";
import { useSession, signOut, getSession } from "next-auth/react";
// import useRequireAuth from "../lib/useRequireAuth";

// export async function getServerSideProps(context) {
//   const session = await getSession(context);

//   if (!session) {
//     return {
//       redirect: {
//         destination: "/login",
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: {
//       session,
//     },
//   };
// }

export default function Home() {
  const { data: session } = useSession();

  // const session = useRequireAuth();
  // if (!session) return <div>loading...</div>;

  return (
    <div className={styles.content}>
      <h1>{`Seja Bem-Vindo ${session?.user?.name}`}</h1>
      <button onClick={() => signOut()}>Sair</button>
    </div>
  );
}
