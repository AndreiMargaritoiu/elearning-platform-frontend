import styled from 'styled-components';
import { color, queries } from '../../components/theme';

export const StyledProfilePage = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 16px auto;
`;

export const StyledProfileDetails = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 24px;
  border-bottom: 2px solid ${color.light.tertiary};
  align-items: center;
`;

export const StyledProfileStats = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 60px;
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
`;

export const StyledProfileNumericalElement = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-right: 40px;
`;

export const StyledProfileNumericalStatsText = styled.label`
  font-size: 24px;

  @media ${queries.tablet} {
    font-size: 20px;
  }

  @media ${queries.mobile} {
    font-size: 16px;
  }
`;

export const StyledProfileContentPicker = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 24px 0;
`;

export const StyledProfilePickerElement = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 40px;
  cursor: pointer;

  &.is-selected {
    border-bottom: 4px solid ${color.light.tertiary};
  }
`;

export const StyledProfilePickerLabel = styled.label`
  font-size: 24px;
  cursor: pointer;
  margin-left: 4px;

  @media ${queries.tablet} {
    font-size: 20px;
  }

  @media ${queries.mobile} {
    font-size: 16px;
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
`;
