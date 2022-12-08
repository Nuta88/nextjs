import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Register from '../pages/register';

jest.mock('next/config', () => () => ({ publicRuntimeConfig: { apiUrl: 'https://swapi.dev/api' } }));

describe("Register tests", () => {
  it("renders a register page", () => {
    render(<Register />);

    expect(screen.getByTestId("register-page")).toBeInTheDocument();
    expect(screen.getByText("Back to login")).toBeInTheDocument();
  });
});
