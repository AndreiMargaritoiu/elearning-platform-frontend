import {
  faAngleDown,
  faAngleUp,
  faBars,
  faPlusCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

import { Context } from '../../Context';
import {
  LogMenu,
  Navigation as StyledNavigation,
  NavigationItem,
  Logo,
  MenuButton,
  Separator,
  DropdownWrapper,
  Dropdown,
  NavButton,
  NavList,
  NavListContent,
  NavigationItemSpan,
  NavItemContainer,
} from './NavigationBarStyles';

import Media from 'react-media';
import { User } from '../../domain/User';
import { useRouter } from 'next/router';

interface NavigationProps {
  appUser: User;
  logout(user: User): void;
}

export const navItems = [
  {
    label: 'Content',
    childLinks: [
      {
        label: 'Playlists',
        link: `${Context.BASE_PATH}/playlists`,
        linkAs: `${Context.BASE_PATH}/playlists`,
      },
      {
        label: 'Videos',
        link: `${Context.BASE_PATH}/dashboard`,
        linkAs: `${Context.BASE_PATH}/dashboard`,
      },
    ],
  },
  {
    label: 'Discover',
    link: `${Context.BASE_PATH}/discover`,
    linkAs: `${Context.BASE_PATH}/discover`,
  },
  {
    label: 'Mentoring',
    link: `${Context.BASE_PATH}/mentoring`,
    linkAs: `${Context.BASE_PATH}/mentoring`,
  },
];

// export const logout = (
//   setUserPianoInfo: (user: PianoUserAuthorization) => void,
// ) => {
//   Context.cookieService.removeCookie('uatr');
//   Context.cookieService.removeCookie('uat');
//   setUserPianoInfo({});

//   // to support logging out from all windows
//   window.localStorage.setItem('logout', Date.now().toString());
//   Context.routerService.push('/');
// };

export const useOnClickOutside = (ref: any, handler: any, exclude: any) => {
  useEffect(() => {
    const listener = (event: Event) => {
      if (
        !ref.current ||
        ref.current.contains(event.target) ||
        (exclude && exclude.current && exclude.current.contains(event.target))
      ) {
        return;
      }
      handler();
    };
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchend', listener);
    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchend', listener);
    };
  }, [ref, handler]);
};

export const NavigationBar: React.FC<NavigationProps> = (props) => {
  const { appUser, logout } = props;

  const navNode = useRef<HTMLDivElement>(null);

  const [loginToggle, setLoginToggle] = useState<boolean>(false);
  const [contentToggle, setContentToggle] = useState<boolean>(false);
  const [menuToggle, setMenuToggle] = useState<boolean>(false);

  const router = useRouter();

  let isMobile: boolean = false;

  useEffect(() => {
    isMobile = window.innerWidth < 768;
  });

  useOnClickOutside(
    navNode,
    () => {
      setLoginToggle(false);
      setContentToggle(false);
      setMenuToggle(false);
    },
    null,
  );

  const onSetMenuToggleClick = () => {
    if (isMobile) {
      setLoginToggle(false);
    }
    setMenuToggle(!menuToggle);
  };

  const onSetLoginToggle = () => {
    if (isMobile) {
      setMenuToggle(false);
    }
    setLoginToggle(!loginToggle);
  };

  return (
    <StyledNavigation ref={navNode}>
      <NavButton onClick={() => onSetMenuToggleClick()}>
        <FontAwesomeIcon icon={faBars} size="1x" />
      </NavButton>
      <Link href="/dashboard" as="/dashboard">
        <a>
          <Logo src="/images/connect_logo.png" />
        </a>
      </Link>
      <NavList
        onMouseDown={(e) => {
          e.preventDefault();
          e.stopPropagation();
          e.nativeEvent.stopImmediatePropagation();
        }}
        className={menuToggle ? 'toggled' : undefined}
      >
        <NavListContent>
          {navItems.map((item) =>
            item.childLinks ? (
              <NavItemContainer
                key={`${item.label.toLowerCase()}-navigation-bar`}
              >
                <NavigationItemSpan
                  onMouseDown={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    e.nativeEvent.stopImmediatePropagation();
                  }}
                  onClick={() => setContentToggle(!contentToggle)}
                >
                  {item.label}
                  <FontAwesomeIcon
                    icon={contentToggle ? faAngleUp : faAngleDown}
                    size="1x"
                  />
                  <Dropdown className={contentToggle ? 'toggled' : undefined}>
                    <DropdownWrapper>
                      {item.childLinks.map((childLink, index) => (
                        <span
                          key={`${childLink.label.toLowerCase()}-navigation-bar`}
                        >
                          <Link
                            key={`${childLink.label.toLowerCase()}-navigation-bar`}
                            href={childLink.link}
                            as={childLink.linkAs}
                          >
                            <MenuButton
                              className={
                                router.asPath.includes(
                                  childLink.linkAs.toLowerCase(),
                                )
                                  ? 'active'
                                  : ''
                              }
                            >
                              {childLink.label}
                            </MenuButton>
                          </Link>
                          {item.childLinks.length !== index + 1 && (
                            <Separator />
                          )}
                        </span>
                      ))}
                    </DropdownWrapper>
                  </Dropdown>
                </NavigationItemSpan>
                <Media
                  queries={{
                    mobile: `(max-width: 767px)`,
                    tablet: `(min-width: 768px)`,
                  }}
                >
                  {(matches) =>
                    matches.mobile &&
                    !matches.tablet &&
                    !contentToggle && <Separator />
                  }
                </Media>
              </NavItemContainer>
            ) : (
              <Link
                href={item.link}
                as={item.linkAs}
                key={`${item.label.toLowerCase()}-navigation-bar`}
              >
                <NavigationItem
                  className={
                    router.asPath.includes(item.linkAs.toLowerCase())
                      ? 'active'
                      : ''
                  }
                >
                  {item.label}
                </NavigationItem>
              </Link>
            ),
          )}
        </NavListContent>
      </NavList>
      <LogMenu>
        <>
          <Link
            href={`${Context.BASE_PATH}/create`}
            as={`${Context.BASE_PATH}/create`}
          >
            <NavigationItem
              className={
                router.asPath.includes('create')
                  ? 'active add-content'
                  : 'add-content'
              }
            >
              ADD CONTENT
              <FontAwesomeIcon icon={faPlusCircle} size="1x" />
            </NavigationItem>
          </Link>
          <NavigationItem
            onMouseDown={(e) => {
              e.preventDefault();
              e.stopPropagation();
              e.nativeEvent.stopImmediatePropagation();
            }}
            onClick={() => {
              onSetLoginToggle();
            }}
          >
            {appUser.username}
            <FontAwesomeIcon
              icon={loginToggle ? faAngleUp : faAngleDown}
              size="1x"
            />
          </NavigationItem>
          <Dropdown className={loginToggle ? 'toggled user-menu' : 'user-menu'}>
            <DropdownWrapper>
              <Link href="/me" as="/me">
                <MenuButton className="logout">VIEW PROFILE</MenuButton>
              </Link>
              <Separator></Separator>
              <MenuButton
                className="logout"
                onClick={() => {
                  // logout(setUserPianoInfo);
                  console.log('hello');
                }}
              >
                LOGOUT
              </MenuButton>
            </DropdownWrapper>
          </Dropdown>
        </>
      </LogMenu>
    </StyledNavigation>
  );
};
