import styles from './NavigationMenu.module.scss';
import { AiOutlineHome, AiOutlineFundProjectionScreen, AiOutlineUser } from 'react-icons/ai';
import { CgFileDocument } from 'react-icons/cg';
import { NavHashLink } from 'react-router-hash-link';
import { routes } from '../../configs/routes';
import { useState } from 'react';

const menus = {
  home: 'home',
  about: 'about',
  projects: 'projects',
  resume: 'resume'
};

const NavLinks = () => {
  const [currentMenu, setCurrentMenu] = useState<string>(menus.home);

  const ifCurrentMenu = (menu: string) => {
    if (currentMenu === (menus as any)[menu]) return true;
    return false;
  };
  return (
    <ul className={styles.navBar}>
      <li>
        <NavHashLink
          smooth
          to={routes.HOMESECTION}
          onClick={() => setCurrentMenu(menus.home)}
          className={ifCurrentMenu(menus.home) ? styles.active : ''}>
          <AiOutlineHome />
          Home
        </NavHashLink>
      </li>
      <li>
        <NavHashLink
          to={routes.ABOUT}
          smooth
          scroll={(el) => {
            setCurrentMenu(menus.about);
            el.scrollIntoView({ behavior: 'smooth', block: 'end' });
          }}
          className={ifCurrentMenu(menus.about) ? styles.active : ''}>
          <AiOutlineUser />
          About
        </NavHashLink>
      </li>
      <li>
        <NavHashLink
          to={routes.PROJECTS}
          scroll={(el) => {
            setCurrentMenu(menus.projects);
            el.scrollIntoView({ behavior: 'smooth', block: 'end' });
          }}
          className={ifCurrentMenu(menus.projects) ? styles.active : ''}>
          <AiOutlineFundProjectionScreen />
          Projects
        </NavHashLink>
      </li>
      <li>
        <NavHashLink
          scroll={(el) => {
            setCurrentMenu(menus.resume);
            el.scrollIntoView({ behavior: 'smooth', block: 'end' });
          }}
          to={routes.RESUME}
          className={ifCurrentMenu(menus.resume) ? styles.active : ''}>
          <CgFileDocument />
          Resume
        </NavHashLink>
      </li>
    </ul>
  );
};

export default NavLinks;
