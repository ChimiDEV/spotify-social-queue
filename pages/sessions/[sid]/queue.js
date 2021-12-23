import MenuBar from '../../../components/MenuBar';
import { styled } from '@stitches/react';

const WhiteFont = styled('div', {
  color: 'White',
});

export default function Queue() {
  return (
    <>
      <WhiteFont>Queue</WhiteFont>
      <MenuBar />
    </>
  );
}
