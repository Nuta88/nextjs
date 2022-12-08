import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from '../pages/login';

jest.mock('next/config', () => () => ({ publicRuntimeConfig: { apiUrl: 'https://swapi.dev/api' } }));

describe("Login tests", () => {
  it("renders a login page", () => {
    render(<Login />);

    expect(screen.getByTestId("login-page")).toBeInTheDocument();
    expect(screen.getByText("Welcome")).toBeInTheDocument();
    expect(screen.getByText("Register now")).toBeInTheDocument();
  });
  it("should render login form", () => {
    render(<Login />);

    expect(screen.getByTestId("login-form")).toBeInTheDocument();
    expect(screen.getByTestId("login-input-email")).toBeInTheDocument();
    expect(screen.getByTestId("login-input-password")).toBeInTheDocument();
    expect(screen.getByTestId("login-save-btn")).toBeInTheDocument();

    fireEvent.change(screen.getByTestId("login-input-email"), {target: {value: "test@gmail.com"}});
    fireEvent.change(screen.getByTestId("login-input-password"), {target: {value: "12345667"}});

    expect(screen.getByTestId("login-input-email")).toHaveValue("test@gmail.com");
    expect(screen.getByTestId("login-input-password")).toHaveValue("12345667");
  });
});
