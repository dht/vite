import { Button } from '@mantine/core';
import { IconHeart } from '@tabler/icons-react';
import { CarCard } from '../components/CarCard/CarCard';
import { Wrapper } from './App.style';

export const App = () => {
  const gradient = {
    from: 'pink',
    to: 'cyan',
    deg: 90,
  };

  const variant = 'gradient';

  function onClick() {
    alert('yes!');
  }

  return (
    <Wrapper>
      <CarCard name='Tesla Model S' benefits='Free charge at any station' />
      <Button variant={variant} gradient={gradient} onClick={onClick}>
        Very Nice!
      </Button>
      <IconHeart size={120} stroke={1.5} />
    </Wrapper>
  );
};
