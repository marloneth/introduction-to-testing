import { act, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Counter } from './counter';
import '@testing-library/jest-dom/vitest';

describe('Counter ', () => {
  beforeEach(() => {
    render(<Counter />);
  });

  it('renders with an initial count of 0', () => {
    const counter = screen.getByTestId('counter-count');
    expect(counter).toHaveTextContent('0');
  });

  it('disables the "Decrement" and "Reset" buttons when the count is 0', () => {
    const decrementButton = screen.getByRole('button', { name: /decrement/i });
    const resetButton = screen.getByRole('button', { name: /reset/i });

    expect(decrementButton).toBeDisabled();
    expect(resetButton).toBeDisabled();
  });

  it('displays "days" when the count is 0', () => {
    const unit = screen.getByTestId('counter-unit');
    expect(unit).toHaveTextContent('days');
  });

  it('increments the count when the "Increment" button is clicked', async () => {
    const count = screen.getByTestId('counter-count');
    const incrementButton = screen.getByRole('button', { name: /increment/i });

    expect(count).toHaveTextContent('0');
    await act(async () => {
      await userEvent.click(incrementButton);
    });

    expect(count).toHaveTextContent('1');
  });

  it('displays "day" when the count is 1', async () => {
    const unit = screen.getByTestId('counter-unit');
    const incrementButton = screen.getByRole('button', { name: /increment/i });

    expect(unit).toHaveTextContent('days');
    await act(async () => {
      await userEvent.click(incrementButton);
    });

    expect(unit).toHaveTextContent('day');
  });

  it('decrements the count when the "Decrement" button is clicked', async () => {
    const count = screen.getByTestId('counter-count');
    const incrementButton = screen.getByRole('button', { name: /increment/i });
    const decrementButton = screen.getByRole('button', { name: /decrement/i });

    expect(count).toHaveTextContent('0');
    await act(async () => {
      await userEvent.click(incrementButton);
    });

    expect(decrementButton).not.toBeDisabled();
    expect(count).toHaveTextContent('1');
    await act(async () => {
      await userEvent.click(decrementButton);
    });

    expect(decrementButton).toBeDisabled();
    expect(count).toHaveTextContent('0');
  });

  it('does not allow decrementing below 0', async () => {
    const count = screen.getByTestId('counter-count');
    const decrementButton = screen.getByRole('button', { name: /decrement/i });

    expect(count).toHaveTextContent('0');
    await act(async () => {
      await userEvent.click(decrementButton);
    });

    expect(count).toHaveTextContent('0');
  });

  it('resets the count when the "Reset" button is clicked', async () => {
    const count = screen.getByTestId('counter-count');
    const incrementButton = screen.getByRole('button', { name: /increment/i });
    const resetButton = screen.getByRole('button', { name: /reset/i });

    expect(count).toHaveTextContent('0');
    await act(async () => {
      await userEvent.click(incrementButton);
      await userEvent.click(incrementButton);
    });

    expect(count).toHaveTextContent('2');
    await act(async () => {
      await userEvent.click(resetButton);
    });

    expect(count).toHaveTextContent('0');
  });

  // DUPLICATED
  it.skip('disables the "Decrement" and "Reset" buttons when the count is 0', () => {});

  it('updates the document title based on the count', async () => {
    const title = document.title;
    const incrementButton = screen.getByRole('button', { name: /increment/i });

    expect(title).toContain('0 days');
    await act(async () => {
      await userEvent.click(incrementButton);
    });

    const newTitle = document.title;
    expect(newTitle).toContain('1 day');
  });
});
