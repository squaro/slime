import strings from '../config/strings';

const getWakeLockMessage = (enabled: boolean) =>
`The screen will ${!enabled ? ` not ` : ''}remain active while using the application.`;

const en: typeof strings = {
  WAKE_LOCK_MESSAGE_ACTION_BUTTON: 'Learn more',
  WAKE_LOCK_MESSAGE_ENABLED: getWakeLockMessage(true),
  WAKE_LOCK_MESSAGE_DISABLED: getWakeLockMessage(false),
};

export default en;
