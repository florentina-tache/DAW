import React from 'react';
import ReactDOM from 'react-dom';
import { CSSTransition } from 'react-transition-group';

import './SideDrawer.css';

interface Props {
  show: boolean;
  onClick: React.MouseEventHandler<HTMLElement>;
  children: React.ReactNode;
}

const SideDrawer = ({ show, onClick, children }: Props) => {
  return (
    <CSSTransition
      in={show}
      timeout={200}
      classNames='slide-in-left'
      mountOnEnter
      unmountOnExit
    >
      <aside className='side-drawer' onClick={onClick}>
        {children}
      </aside>
    </CSSTransition>
  );
};

export default SideDrawer;
