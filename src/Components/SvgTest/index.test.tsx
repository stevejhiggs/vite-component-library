import { describe, expect, it } from 'vitest';
import { render } from '../../test/test-utils';
import { screen } from '@testing-library/react';
import SvgTest from './index';

describe('SvgTest', async () => {
  it('should render the components', () => {
    render(<SvgTest />);
    expect(screen.getByText('svg test')).toBeInTheDocument();
  });
});
