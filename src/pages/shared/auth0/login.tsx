import { FC, ReactElement } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface Props {
    title: string,
    icon: IconProp,
    className?: string,
}

const LoginButton: FC<Props> = ({title, icon, className}) : ReactElement => {
  const { loginWithRedirect } = useAuth0();

  return <Button type="button" variant="primary" className={className} onClick={() => loginWithRedirect()}><FontAwesomeIcon icon={icon} /> {title}</Button>;
};

export default LoginButton;