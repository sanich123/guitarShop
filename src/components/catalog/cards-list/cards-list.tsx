import { Guitar } from '../../../types/types';
import Card from '../card/card';

interface CardsListProps {
  guitars: Guitar[],
  setActionModal: (arg: boolean) => void,
  setGuitarId: (arg: string) => void
}

export default function CardsList({guitars, setActionModal, setGuitarId}: CardsListProps) {

  return (
    <>
      {guitars.map(({ id, ...rest }) => (
        <Card
          key={id}
          id={id}
          {...rest}
          setGuitarId={setGuitarId}
          setActionModal={setActionModal}
        />
      ))}
    </>
  );
}
