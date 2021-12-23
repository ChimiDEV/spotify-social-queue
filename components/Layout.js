import MenuBar from './MenuBar';
import { styled } from '@stitches/react';

const Content = styled('div', {
  marginTop: '1vh',
  marginBottom: '60px',
  marginLeft: '2vw',
  marginRight: '2vw',
  maxWidth: '96vw',
  overflowX: 'hidden',
});

export default function Layout({ children }) {
  return (
    <>
      <Content>{children}</Content>
      <MenuBar />
    </>
  );
}
