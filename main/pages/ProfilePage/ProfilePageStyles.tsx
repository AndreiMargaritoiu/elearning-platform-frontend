import styled from 'styled-components';
import { color, queries } from '../../components/theme';

export const StyledProfilePage = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 16px auto;

  @media ${queries.tablet} {
    width: auto;
    margin: 16px 24px;
  }

  @media ${queries.mobile} {
    margin: 8px 16px;
  }
`;

export const StyledProfileDetails = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 24px;
  border-bottom: 2px solid ${color.light.tertiary};
  align-items: center;

  @media ${queries.mobile} {
    padding-bottom: 12px;
  }
`;

export const StyledProfileStats = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 60px;

  @media ${queries.mobile} {
    margin-left: 16px;
  }
`;

export const StyledProfileUsername = styled.label`
  font-size: 24px;

  @media ${queries.tablet} {
    font-size: 20px;
  }

  @media ${queries.mobile} {
    font-size: 16px;
  }
`;

export const StyledProfileNumericalStats = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 24px;

  @media ${queries.mobile} {
    margin-top: 12px;
  }
`;

export const StyledProfileNumericalElement = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-right: 40px;

  @media ${queries.mobile} {
    margin-right: 12px;
  }
`;

export const StyledProfileNumericalStatsText = styled.label`
  font-size: 20px;

  @media ${queries.tablet} {
    font-size: 18px;
  }

  @media ${queries.mobile} {
    font-size: 16px;
  }
`;

export const StyledProfileContentPicker = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 20px 0;

  @media ${queries.tablet} {
    margin: 16px 0;
  }

  @media ${queries.mobile} {
    margin: 8px 0;
  }
`;

export const StyledProfilePickerElement = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;

  &.is-selected {
    border-bottom: 4px solid ${color.light.tertiary};

    @media ${queries.mobile} {
      border-bottom: 2px solid ${color.light.tertiary};
    }
  }
`;

export const StyledProfilePickerLabel = styled.label`
  font-size: 22px;
  cursor: pointer;
  margin-left: 4px;

  @media ${queries.tablet} {
    font-size: 18px;
  }

  @media ${queries.mobile} {
    display: none;
  }
`;

export const StyledProfileImage = styled.div<{
  imgSrc: string;
}>`
  background: url(${(props) => props.imgSrc}) no-repeat center center;
  background-size: cover;
  height: 120px;
  width: 120px;
  border-radius: 50%;

  @media ${queries.tablet} {
    height: 100px;
    width: 100px;
  }

  @media ${queries.mobile} {
    height: 60px;
    width: 60px;
  }
`;
