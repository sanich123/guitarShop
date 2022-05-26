import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import DeleteBtn from './delete-btn';

const setActionModal = jest.fn();
const setDeleteId = jest.fn();

describe('DeleteBtn', () => {
  it('DeleteBtn should render correctly', () => {
    render(
      <DeleteBtn
        setActionModal={setActionModal}
        setDeleteId={setDeleteId}
        id={2}
      />);
    expect(screen.getByLabelText(/удалить/i)).toBeInTheDocument();
    const btn = screen.getByRole('button');
    expect(btn).toBeInTheDocument();
    userEvent.click(btn);
    expect(setActionModal).toHaveBeenCalled();
    expect(setDeleteId).toHaveBeenCalled();
  });
});
