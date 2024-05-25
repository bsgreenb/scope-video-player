import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoCard, { VideoCardProps } from '../../app/ui/VideoCard';

// Mock next/link
jest.mock('next/link', () => {
    const Link = ({ children, href }: { children: React.ReactNode; href: string }) => (
      <a href={href}>{children}</a>
    );
    Link.displayName = 'Link';
    return Link;
  });
  
  // Mock next/image
  jest.mock('next/image', () => {
    const Image = ({ src, alt }: { src: string; alt: string }) => (
      <div>Fake Image: {src} ({alt})</div>
    );
    Image.displayName = 'Image';
    return Image;
  });


describe('VideoCard Component', () => {
  const baseProps: VideoCardProps = {
    video: {
      id: '1',
      title: 'Test Video',
      videoUrl: 'http://example.com/video.mp4',
      author: 'test_author',
      createdAt: new Date().toISOString(),
      numComments: 0
    }
  };

  test('renders without comments when numComments is 0', () => {
    render(<VideoCard {...baseProps} video={{ ...baseProps.video, numComments: 0 }} />);
    expect(screen.queryByText('💬')).toBeNull();
    expect(screen.queryByText('0 comments')).toBeNull();
  });

  test('renders with singular comment when numComments is 1', () => {
    render(<VideoCard {...baseProps} video={{ ...baseProps.video, numComments: 1 }} />);
    expect(screen.getByText('1 comment')).toBeTruthy();
    expect(screen.getByText('💬')).toBeTruthy();
  });

  test('renders with plural comments when numComments is greater than 1', () => {
    render(<VideoCard {...baseProps} video={{ ...baseProps.video, numComments: 5 }} />);
    expect(screen.getByText('5 comments')).toBeTruthy();
    expect(screen.getByText('💬')).toBeTruthy();
  });
});