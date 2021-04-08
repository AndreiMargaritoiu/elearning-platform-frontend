import styled from 'styled-components';
import { color, device, font, queries } from '../theme';

export const Navigation = styled.nav`
  margin: 0;
  padding: 0 48px;
  height: 80px;
  display: flex;
  position: relative;
  align-items: center;
  font-weight: 600;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 1px;
  line-height: 24px;

  @media ${queries.tablet} {
    padding: 0 24px;
    height: 40px;
  }

  @media ${queries.mobile} {
    height: 40px;
    transition: margin-top 0.3s ease-out;
    padding: 0;

    &.scrolling-nav {
      margin-top: -40px;
    }
  }

  .svg-inline--fa {
    margin-left: 4px;
  }
`;

export const NavigationItem = styled.a`
  text-decoration: none;
  position: relative;
  cursor: pointer;
  text-align: left;
  margin-right: 24px;
  transition: color 0.4s ease-out;

  &:hover,
  &.active {
    color: ${color.other.primary};
  }

  @media ${queries.tablet} {
    font-size: 12px;
  }

  @media ${queries.mobile} {
    font-size: 16px;
    margin: 8px 0;
  }
`;

export const NavigationItemSpan = styled.span`
  display: inline-block;
  text-decoration: none;
  position: relative;
  cursor: pointer;
  text-align: left;
  margin-right: 24px;
  transition: color 0.4s ease-out;

  &:hover,
  &.active {
    color: ${color.other.primary};
  }

  @media ${queries.tablet} {
    font-size: 12px;
  }

  @media ${queries.mobile} {
    width: 100%;
    font-size: 16px;
    margin: 8px 0;
  }
`;

export const MenuButtonWrapper = styled.div`
  margin: 0 16px;
`;

export const MenuButton = styled.a`
  user-select: none;
  cursor: pointer;
  font-family: ${font.primary};
  font-weight: 600;
  color: ${color.dark.primary};
  font-size: 12px;
  letter-spacing: 1px;
  line-height: 24px;
  transition: color 0.2s ease-out;

  &:hover,
  &.active {
    color: ${color.other.primary};
  }
`;

export const LogMenu = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  text-align: right;
  align-items: center;
  white-space: nowrap;
  justify-content: flex-end;
  ${NavigationItem} {
    margin: 0;
    @media ${queries.mobile} {
      font-size: 12px;
    }
  }

  @media ${queries.mobile} {
    margin-right: 16px;
    position: unset;
  }
`;

export const Separator = styled.div`
  border-bottom: thin solid ${color.light.tertiary};
  margin: 8px 0;
`;

export const Dropdown = styled.div`
  position: absolute;
  left: 0;
  top: calc(100% + 1px);
  width: 204px;
  background: ${color.light.secondary};
  box-shadow: ${color.light.tertiary} 4px 4px 0px 0px;
  max-height: 0 !important;
  transition: max-height 0.3s ease-out;
  overflow: hidden;
  z-index: 1000;

  &.toggled {
    max-height: 200px !important;
    margin-bottom: 16px;

    @media ${queries.mobile} {
      width: 100%;
    }

    .logout {
      :hover {
        color: ${color.other.primary};
      }
    }
  }

  &.user-menu {
    right: 0;
    left: initial;

    @media ${queries.mobile} {
      position: absolute;
      top: calc(100% + 1px);
      width: 100%;
      margin: 0;
    }
  }

  @media ${queries.mobile} {
    position: relative;
    top: 16px;
    width: 0;
    margin-right: 16px;
    border: 0;
    box-shadow: none;
  }
`;

export const DropdownWrapper = styled.div`
  padding: 16px;
  text-align: left;
  display: flex;
  flex-direction: column;
`;

export const Logo = styled.img`
  height: 40px;
  width: auto;
  margin: 0 8px 8px 0;

  @media ${queries.tablet} {
    margin: 0;
    height: 24px;
  }

  @media ${queries.mobile} {
    height: 20px;
  }
`;

export const ContentDropdown = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  border: 1px solid ${color.dark.primary};
  background: white;
`;

export const NavButton = styled.span`
  line-height: 1.5rem;
  padding: 8px 14px;
  cursor: pointer;

  > * {
    user-select: none;
  }

  @media ${device.tablet} {
    display: none;
  }

  .svg-inline--fa {
    margin: 0;
  }
`;

export const NavList = styled.span`
  padding: 0;
  width: 100%;
  z-index: 1000;
  position: absolute;
  top: calc(100% + 1px);
  left: 0;
  background-color: ${color.light.primary};
  transition: all 0.3s ease-in-out;

  @media ${device.tablet} {
    position: static;
  }

  @media ${queries.mobile} {
    max-height: 0;
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 8px 8px;
  }

  &.toggled {
    @media ${queries.mobile} {
      max-height: 600px;
    }
  }
`;

export const NavItemContainer = styled.span`
  display: inline-block;
`;

export const NavListContent = styled.span`
  padding: 0 16px;
  flex-direction: row;
  box-shadow: none;
  position: static;
  order: unset;
  visibility: unset;
  height: unset;
  width: unset;
  flex: 1;
  background-color: ${color.light.primary};
  @media ${queries.mobile} {
    padding: 8px 16px;
    display: flex;
    flex-direction: column;
    order: 1;
    .svg-inline--fa {
      float: right;
    }
  }
`;
