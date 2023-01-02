import { User, useAuth0 } from "@auth0/auth0-react";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useLocalStorage } from "usehooks-ts";

interface AuthProps {
  children?: React.ReactElement;
}

const Auth0Protected: React.FC<AuthProps> = (props): any => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [userAuth0, setUserAuth0] = useLocalStorage<User | undefined>("userAuth0", undefined);

  useEffect(() => {
    setUserAuth0(user);
  }, [user, setUserAuth0]);

  if (isLoading)
    return <div>Loading ...</div>;

  if (!isAuthenticated)
    return <Navigate to="/"></Navigate>;

  if (!user?.email_verified && window.location.pathname !== "/onboarding")
    return <Navigate to="/onboarding"></Navigate>;

  console.log(userAuth0);

  return isAuthenticated && props.children;
};

export default Auth0Protected;