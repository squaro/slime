import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from '../App';
import strings from '../config/strings';

jest.mock('../utils/wakeLock');

test('renders the app, prompts the instructions modal and closes it afterward', async () => {
  render(<App />);

  const instructionsModal = screen.queryByRole('dialog', { name: strings.INSTRUCTIONS_MODAL_TITLE });
  await waitFor(() => {
    expect(instructionsModal).toBeInTheDocument();
  });

  const instructionsModalCloseButton = screen.getByRole('button', { name: strings.INSTRUCTIONS_MODAL_CLOSE_BUTTON });
  act(() => { fireEvent.click(instructionsModalCloseButton); });
  await waitFor(() => {
    expect(instructionsModal).not.toBeInTheDocument();
  });

  expect(screen.queryByRole('navigation')).toBeInTheDocument();
  expect(screen.queryByRole('button', { name: 'Language EN' })).toBeInTheDocument();
  expect(screen.queryByRole('button', { name: `Wake Lock ${strings.WAKE_LOCK_STATUS_DISABLED}` })).toBeInTheDocument();
  expect(screen.queryByRole('main')).toBeInTheDocument();
  expect(screen.queryByRole('region')).toBeInTheDocument();
});

test('renders the app, opens the language modal and closes it afterward', async () => {
  render(<App />);

  const instructionsModal = screen.queryByRole('dialog', { name: strings.INSTRUCTIONS_MODAL_TITLE });
  await waitFor(() => {
    expect(instructionsModal).toBeInTheDocument();
  });

  const instructionsModalCloseButton = screen.getByRole('button', { name: strings.INSTRUCTIONS_MODAL_CLOSE_BUTTON });
  act(() => { fireEvent.click(instructionsModalCloseButton); });
  await waitFor(() => {
    expect(instructionsModal).not.toBeInTheDocument();
  });

  // TODO: Use dynamic language from i18n config
  const languageHeaderButton = screen.getByRole('button', { name: 'Language EN' });
  act(() => { fireEvent.click(languageHeaderButton); });
  const languageModal = screen.queryByRole('dialog', { name: strings.LANGUAGE_MODAL_TITLE });
  await waitFor(() => {
    expect(languageModal).toBeInTheDocument();
  });

  const languageModalCloseButton = screen.getByRole('button', { name: strings.LANGUAGE_MODAL_CLOSE_BUTTON });
  act(() => { fireEvent.click(languageModalCloseButton); });
  await waitFor(() => {
    expect(languageModal).not.toBeInTheDocument();
  });
});

test('renders the app, opens the wake lock modal and closes it afterward', async () => {
  render(<App />);

  const instructionsModal = screen.queryByRole('dialog', { name: strings.INSTRUCTIONS_MODAL_TITLE });
  await waitFor(() => {
    expect(instructionsModal).toBeInTheDocument();
  });

  const instructionsModalCloseButton = screen.getByRole('button', { name: strings.INSTRUCTIONS_MODAL_CLOSE_BUTTON });
  act(() => { fireEvent.click(instructionsModalCloseButton); });
  await waitFor(() => {
    expect(instructionsModal).not.toBeInTheDocument();
  });

  // TODO: Use dynamic label based on enabled/disabled
  const wakeLockHeaderButton = screen.getByRole('button', { name: `Wake Lock ${strings.WAKE_LOCK_STATUS_DISABLED}` });
  act(() => { fireEvent.click(wakeLockHeaderButton); });
  const wakeLockModal = screen.queryByRole('dialog', { name: strings.WAKE_LOCK_MODAL_TITLE });
  await waitFor(() => {
    expect(wakeLockModal).toBeInTheDocument();
  });

  const wakeLockModalCloseButton = screen.getByRole('button', { name: strings.WAKE_LOCK_MODAL_CLOSE_BUTTON });
  act(() => { fireEvent.click(wakeLockModalCloseButton); });
  await waitFor(() => {
    expect(wakeLockModal).not.toBeInTheDocument();
  });
});
