export default function ContinueBtn({setIsSended}: {setIsSended: (arg: boolean) => void}) {

  return (
    <button
      onClick={() => setIsSended(false)}
      tabIndex={0}
      className="button button--small modal__button modal__button--review"
    >
      К покупкам!
    </button>
  );
}
