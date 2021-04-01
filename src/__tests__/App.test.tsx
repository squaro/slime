import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from '../App';

jest.mock('../utils/logger');
jest.mock('../utils/wakeLock');

test('renders the app, prompts the instructions modal and closes it afterward', async () => {
  render(<App />);

  const instructionsModal = screen.queryByRole('dialog', { name: 'instructionsModal.title' });
  await waitFor(() => {
    expect(instructionsModal).toBeInTheDocument();
  });

  const instructionsModalCloseButton = screen.getByRole('button', { name: 'instructionsModal.close' });
  act(() => { fireEvent.click(instructionsModalCloseButton); });
  await waitFor(() => {
    expect(instructionsModal).not.toBeInTheDocument();
  });

  // TODO: Use dynamic language from i18n config
  // TODO: Use dynamic label based on enabled/disabled
  expect(screen.queryByRole('navigation')).toBeInTheDocument();
  expect(screen.queryByRole('button', { name: `${'language'} ${'lang.en'}` })).toBeInTheDocument();
  expect(screen.queryByRole('button', { name: `${'wakeLock'} ${'disabled'}` })).toBeInTheDocument();
  expect(screen.queryByRole('main')).toBeInTheDocument();
  expect(screen.queryByRole('region')).toBeInTheDocument();
});

test('renders the app, opens the language modal and closes it afterward', async () => {
  render(<App />);

  const instructionsModal = screen.queryByRole('dialog', { name: 'instructionsModal.title' });
  await waitFor(() => {
    expect(instructionsModal).toBeInTheDocument();
  });

  const instructionsModalCloseButton = screen.getByRole('button', { name: 'instructionsModal.close' });
  act(() => { fireEvent.click(instructionsModalCloseButton); });
  await waitFor(() => {
    expect(instructionsModal).not.toBeInTheDocument();
  });

  // TODO: Use dynamic language from i18n config
  const languageHeaderButton = screen.getByRole('button', { name: `${'language'} ${'lang.en'}` });
  act(() => { fireEvent.click(languageHeaderButton); });
  const languageModal = screen.queryByRole('dialog', { name: 'languageModal.title' });
  await waitFor(() => {
    expect(languageModal).toBeInTheDocument();
  });

  const languageModalCloseButton = screen.getByRole('button', { name: 'languageModal.close' });
  act(() => { fireEvent.click(languageModalCloseButton); });
  await waitFor(() => {
    expect(languageModal).not.toBeInTheDocument();
  });
});

test('renders the app, opens the wake lock modal and closes it afterward', async () => {
  render(<App />);

  const instructionsModal = screen.queryByRole('dialog', { name: 'instructionsModal.title' });
  await waitFor(() => {
    expect(instructionsModal).toBeInTheDocument();
  });

  const instructionsModalCloseButton = screen.getByRole('button', { name: 'instructionsModal.close' });
  act(() => { fireEvent.click(instructionsModalCloseButton); });
  await waitFor(() => {
    expect(instructionsModal).not.toBeInTheDocument();
  });

  // TODO: Use dynamic label based on enabled/disabled
  const wakeLockHeaderButton = screen.getByRole('button', { name: `${'wakeLock'} ${'disabled'}` });
  act(() => { fireEvent.click(wakeLockHeaderButton); });
  const wakeLockModal = screen.queryByRole('dialog', { name: 'wakeLockModal.title' });
  await waitFor(() => {
    expect(wakeLockModal).toBeInTheDocument();
  });

  const wakeLockModalCloseButton = screen.getByRole('button', { name: 'wakeLockModal.close' });
  act(() => { fireEvent.click(wakeLockModalCloseButton); });
  await waitFor(() => {
    expect(wakeLockModal).not.toBeInTheDocument();
  });
});
