import styled from 'styled-components';
import { color, queries } from '../../components/theme';

export const StyledOthersProfilePage = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  margin: 16px auto;
`;

export const StyledOthersProfileDetails = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 24px;
  border-bottom: 2px solid ${color.light.tertiary};
  align-items: center;
`;

export const StyledOthersProfileStats = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 60px;
`;

export const StyledOthersProfileUsername = styled.label`
  font-size: 24px;

  @media ${queries.tablet} {
    font-size: 20px;
  }

  @media ${queries.mobile} {
    font-size: 16px;
  }
`;

export const StyledOthersProfileNumericalStats = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 24px;
`;

export const StyledOthersProfileNumericalElement = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-right: 40px;
`;

export const StyledOthersProfileNumericalStatsText = styled.label`
  font-size: 24px;

  @media ${queries.tablet} {
    font-size: 20px;
  }

  @media ${queries.mobile} {
    font-size: 16px;
  }
`;

export const StyledOthersProfileContentPicker = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 24px 0;
`;

export const StyledOthersProfilePickerElement = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 40px;
  cursor: pointer;

  &.is-selected {
    border-bottom: 4px solid ${color.light.tertiary};
  }
`;

export const StyledOthersProfilePickerLabel = styled.label`
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

export const StyledOthersProfileImage = styled.div<{
  imgSrc: string;
}>`
  background: url(${(props) => props.imgSrc}) no-repeat center center;
  background-size: cover;
  height: 120px;
  width: 120px;
  border-radius: 50%;
`;
