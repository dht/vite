import { Wrapper } from './DigitalCard.style';
export type DigitalCardProps = {
  name: string;
  age: number;
};

export function DigitalCard(props: DigitalCardProps) {
  const { name, age } = props;

  return (
    <Wrapper>
      <div>{name}</div>
      <div>Job: {age}</div>
    </Wrapper>
  );
}
