import '@testing-library/dom/types/queries';
import { render as baseRender } from '@testing-library/react';
export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';

const AllTheProviders = ({ children }: { children?: React.ReactNode }) => {
  return <>{children}</>;
};

// override render export
export const render = (ui: React.ReactElement, options = {}) =>
  baseRender(ui, { wrapper: AllTheProviders, ...options });
