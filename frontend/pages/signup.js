import Head from 'next/head';
import SignUp from '../components/auth/SignUp';

export default function LoginPage() {
  return (
    <Animated>
      <Head>
        <title>Login page </title>
      </Head>
      <SignUp />
    </Animated>
  );
}
