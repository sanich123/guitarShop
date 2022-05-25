import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from '../../../../tests/test-utils';

import AddComment from './add-comment';

const setComment = jest.fn();

describe('AddComment', () => {
  it('AddComment should render correctly', () => {
    renderWithProviders(<AddComment setComment={setComment} isError={false} comment={''} />);
    expect(screen.getByLabelText(/комментарий/i)).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    userEvent.type(screen.getByRole('textbox'), 'p');
    expect(setComment).toHaveBeenCalled();
  });
});
