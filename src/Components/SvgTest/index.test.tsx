import { describe, expect, it } from 'vitest';
import '@testing-library/jest-dom';
import { render, screen } from '../../test/test-utils';
import SvgTest from './index';

describe('SvgTest', async () => {
  it('should render the components', () => {
    render(<SvgTest />);
    expect(screen.getByText('svg test')).toBeInTheDocument();
  });
});
