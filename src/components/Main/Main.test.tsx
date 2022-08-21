import { render, screen } from '@testing-library/react';

import { Main } from './Main';

describe('Testing the main component', () => {
  it('should render the logo', () => {
    const { container } = render(<Main />);

    expect(screen.getByTestId('logo')).toBeInTheDocument();
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Should render the colors correctly', () => {
    const { container } = render(<Main />);

    expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' });
  });
});
