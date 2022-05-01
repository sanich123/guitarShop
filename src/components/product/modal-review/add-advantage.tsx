import { memo } from 'react';

interface AddAdvantageProps {
  advantage: string;
  setAdvantage: (arg: string) => void;
}

function AddAdvantage({setAdvantage, advantage}: AddAdvantageProps) {

  return (
    <>
      <label className="form-review__label" htmlFor="user-name">
                Достоинства
      </label>
      <input
        className="form-review__input"
        id="pros"
        type="text"
        autoComplete="off"
        onChange={({ target }) => setAdvantage(target.value)}
        value={advantage}
      />
    </>
  );
}

export default memo(AddAdvantage, (prev, next) => prev.advantage === next.advantage);
