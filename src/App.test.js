import { render, screen } from '@testing-library/react';
import App from './App';
// import renderer from 'react-test-renderer'


// test('renders a snapshot', () => {
//   const tree = renderer.create(<App/>).toJSON()
//   expect(tree).toMatchSnapshot()
// })

test('renders text testing this h1', () => {
  render(<App />)
  const nameElement = screen.getByText(/Testing this h1/i)
  expect(nameElement).toBeInTheDocument()
});

