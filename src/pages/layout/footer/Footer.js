import React from 'react';
// import './footer.scss';
import Theme from '../../../styles/Theme';
import S from './styles';


const Footer = () => {
  return (
    <S.Footer className='footer' style={{fontSize:Theme.fontSize.body,color:Theme.colors.black}}>
      <p><a href='https://github.com/munmimi'>https://github.com/munmimi</a></p>
      <p>m_mimi@naver.com</p>
      <p>010 9078 1885</p>
    </S.Footer>
  );
};

export default Footer;