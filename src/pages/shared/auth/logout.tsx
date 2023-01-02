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

const LogoutButton: FC<Props> = ({ title, icon, className }): ReactElement => {
    const { logout } = useAuth0();
    return <Button type="button" size="sm" variant="danger" className={className} onClick={() => logout({ returnTo: window.location.origin })}><FontAwesomeIcon icon={icon} /> {title}</Button>;
};

export default LogoutButton;