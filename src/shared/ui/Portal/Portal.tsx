import {
    FC, ReactNode,
} from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
    children: ReactNode,
    targetElement?: HTMLElement
}

const Portal: FC<PortalProps> = (props) => {
    const {
        children,
        targetElement = document.body,
    } = props;

    return createPortal(children, targetElement);
};

export default Portal;
