import { render, screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { vi } from 'vitest';

import { AlertButton } from './alert-button';

describe('AlertButton', () => {
  beforeEach(() => {});

  afterEach(() => {});

  it('should render an alert button', async () => {});

  it('should trigger an alert', async () => {
    const handleSubmit = vi.fn();
    render(<AlertButton onSubmit={handleSubmit} message="Default Message" />);

    const input = screen.getByLabelText('Message');
    const button = screen.getByRole('button', { name: /trigger alert/i });
    const alertSpy = vi.spyOn(window, 'alert');
    const textToType = 'Hello';

    await act(async () => {
      await userEvent.clear(input);
      await userEvent.type(input, textToType);
      await userEvent.click(button);
    });

    expect(handleSubmit).toHaveBeenCalledOnce();
    expect(handleSubmit).toHaveBeenCalledWith(textToType);
  });
});
