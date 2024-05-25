import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoForm from '../../app/ui/VideoForm';  // Adjust the import path as necessary

// Mock dependencies
jest.mock('react-dom', () => ({
  ...jest.requireActual('react-dom'),
  useFormState: jest.fn(),
}));

jest.mock('../../app/lib/actions', () => ({
  submitVideo: jest.fn(),
}));

jest.mock('../../app/ui/Button', () => {
  const Button = (props: any) => <button {...props} />;
  Button.displayName = 'Button';
  return Button;
});

describe('VideoForm Component', () => {
  const mockUseFormState = (error: string | null, success: boolean, title: string | null) => {
    const useFormState = require('react-dom').useFormState;
    useFormState.mockImplementation(() => [{ error, success, title }, jest.fn()]);
  };

  test('does not show error or success initially', () => {
    mockUseFormState(null, false, null);

    render(<VideoForm />);

    // Assert that error and success messages are not present initially
    expect(screen.queryByText(/text-red-600/)).toBeNull();
    expect(screen.queryByText(/text-green-600/)).toBeNull();
  });

  test('shows error message when error is present', () => {
    const errorMessage = 'Failed to submit video';
    mockUseFormState(errorMessage, false, null);

    render(<VideoForm />);

    // Assert that error message is displayed when error is present
    expect(screen.queryByText(errorMessage)).not.toBeNull();
  });

  test('shows success message when success is true', () => {
    const title = 'Test Video';
    mockUseFormState(null, true, title);

    render(<VideoForm />);

    // Assert that success message is displayed when success is true
    expect(screen.queryByText(/was submitted successfully/)).not.toBeNull();
  });
});