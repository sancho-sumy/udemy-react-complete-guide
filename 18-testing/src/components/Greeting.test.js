import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';
import userEvent from '@testing-library/user-event';

describe('Greeting component', () => {
  test('renders: Hello world, as a text', () => {
    // Arrange

    render(<Greeting />);

    // Act
    // ... nothing

    // Assert

    const helloWorldElement = screen.getByText('Hello world', { exact: false });
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders: It's good to see you!, if the button was NOT clicked", () => {
    render(<Greeting />);
    const outputElement = screen.getByText("It's good to see you", { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test('renders: Changed!, if the button was clicked', () => {
    render(<Greeting />);
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);
    const outputElement = screen.getByText('Changed!', { exact: false });
    expect(outputElement).toBeInTheDocument();
  });

  test("does NOT render: It's good to see you!, if the button was clicked", () => {
    render(<Greeting />);
    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);
    const outputElement2 = screen.queryByText("It's good to see you", { exact: false });
    expect(outputElement2).toBeNull();
  });
});
