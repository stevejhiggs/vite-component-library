import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';
import { render, screen } from '../../test/test-utils';
import Hello from './index';

describe('Input', async () => {
  it('should render the components', () => {
    render(<Hello />);
    expect(screen.getByRole('heading')).toHaveTextContent('hello');
  });
});
