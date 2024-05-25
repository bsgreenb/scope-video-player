// __tests__/ui/CommentForm.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import CommentForm from '../../app/ui/CommentForm';  // Adjust the import path as necessary

// Mock dependencies
jest.mock('react-dom', () => ({
  ...jest.requireActual('react-dom'),
  useFormState: jest.fn(),
}));

jest.mock('../../app/lib/actions', () => ({
  submitComment: jest.fn(),
}));

jest.mock('../../app/ui/Button', () => {
    const Button = (props: any) => <button {...props} />;
    Button.displayName = 'Button';
    return Button;
  });

describe('CommentForm Component', () => {
  const videoId = 'test-video-id';

  const mockUseFormState = (error: string | null) => {
    const useFormState = require('react-dom').useFormState;
    useFormState.mockImplementation(() => [{ error }, jest.fn()]);
  };

  test('does not show error initially', () => {
    mockUseFormState(null);

    render(<CommentForm videoId={videoId} />);

    // Assert that error message is not present initially
    expect(screen.queryByText('Failed to submit comment')).toBeNull();
  });

  test('shows error message when error is present', () => {
    const errorMessage = 'Failed to submit comment';
    mockUseFormState(errorMessage);

    render(<CommentForm videoId={videoId} />);

    // Assert that error message is displayed when error is present
    expect(screen.queryByText(errorMessage)).not.toBeNull();
  });
});