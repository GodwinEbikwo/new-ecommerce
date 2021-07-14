import Head from 'next/head';
import SignUp from '../components/auth/SignUp';

export default function SignUpPage() {
  return (
    <Animated>
      <Head>
        <title>Login page </title>
      </Head>
      <SignUp />
    </Animated>
  );
}
