import styled from 'styled-components';
import { color, font, queries } from '../../theme';

export const FollowingModalContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FollowingModalHeaderContainer = styled.div`
  font-size: 24px;
  font-weight: 600;
  font-family: ${font.primary};
  border-bottom: 1px solid black;
  padding: 16px;

  @media ${queries.tablet} {
    padding: 12px;
    font-size: 24px;
  }
`;

export const FollowingModalBodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 16px;
  overflow: auto;

  @media ${queries.mobile} {
    padding: 4px 8px;
  }
`;

export const FollowingCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 12px;

  @media ${queries.tablet} {
    margin-bottom: 8px;
    min-width: 300px;
  }

  @media ${queries.mobile} {
    margin-bottom: 4px;
    min-width: 240px;
  }

  .follow-button {
    margin-right: 0;
    margin-left: auto;
    background: ${color.dark.secondary};
    color: ${color.light.primary};
    font-size: 10px;
    width: 80px;

    &:hover {
      color: ${color.dark.primary};
    }

    @media ${queries.tablet} {
      width: 72px;
      font-size: 9px;
    }

    @media ${queries.mobile} {
      font-size: 8px;
      width: 64px;
    }
  }
`;

export const StyledFollowingProfileImage = styled.div<{
  imgSrc: string;
}>`
  background: url(${(props) => props.imgSrc}) no-repeat center center;
  background-size: cover;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  margin-right: 16px;

  @media ${queries.tablet} {
    height: 35px;
    width: 35px;
    margin-right: 12px;
  }

  @media ${queries.mobile} {
    height: 30px;
    width: 30px;
    margin-right: 8px;
  }
`;

export const modalStyles = {
  content: {
    overflow: 'auto',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    padding: 0,
    borderRadius: 0,
    borderColor: 'black',
    boxShadow: '4px 4px 0 0 #000000',
    minWidth: '30%',
    maxHeight: '50%',
  },
};
