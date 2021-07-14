import { useUser } from '../components/auth/User';
import Login from '../components/auth/Login';

export default function PleaseSignIn({ children }) {
  const user = useUser();
  if (!user) return <Login />;
  return children;
}
