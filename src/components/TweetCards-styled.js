import styled from 'styled-components';

export const Li = styled.li`
  position: relative;
  padding-left: 36px;
  padding-top: 28px;
  padding-bottom: 36px;
  padding-right: 36px;

  list-style: none;
  width: 308px;
  height: 396px;
  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);
  border-radius: 20px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
`;

export const P = styled.p`
  text-align: center;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
  margin: 0;
  &:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const ImgLogo = styled.img`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const ImgBoy = styled.img`
  position: absolute;
  top: 178px;
  bottom: 202px;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 999;
`;
export const ImgRectangle = styled.img`
  position: absolute;
  top: 210px;
  bottom: 238px;
  left: 0;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
  background: #ebd8ff;
`;

export const Btn = styled.button`
  display: block;
  margin: 0 auto;
  min-width: 196px;
  height: 50px;
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 56px;
  padding-right: 56px;
  background: ${props => (props.follow ? '#5CD3A8' : '#EBD8FF')};
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  border-radius: 10.3108px;
  border: 0;
  font-family: 'Montserrat';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;

  text-transform: uppercase;
  cursor: pointer;

  color: #373737;
`;

export const Img = styled.img`
  margin: 0 auto;
  display: block;
`;

export const Div = styled.div`
  margin-top: 88px;
  margin-bottom: 26px;
`;

export const Ul = styled.ul`
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 0;
`;
