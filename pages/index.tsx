import { useSession, signOut, getSession } from "next-auth/react";
import Image from "next/image";

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (!session || null) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      session,
    },
  };
}

export default function Home() {
  const { data: session } = useSession();

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="h-52 flex flex-col justify-around items-center">
        <Image
          width={84}
          height={84}
          src={`${session?.user?.image}`}
          alt="Imagem do avatar do usuário no Github"
          className="rounded-lg shadow-md shadow-blue-400"
        />

        <h1>{`Seja Bem-Vindo ${session?.user?.name}`}</h1>

        <button
          onClick={() => signOut()}
          className="transition duration-200 w-14 bg-red-400 hover:bg-red-500 p-1 rounded-md shadow"
        >
          Sair
        </button>
      </div>
    </div>
  );
}
