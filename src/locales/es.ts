import strings from '../config/strings';

const getWakeLockMessage = (enabled: boolean) =>
  `La pantalla ${!enabled ? ` no ` : ''}permanecerá activa mientras se utiliza la aplicación.`;

const es: typeof strings = {
  INSTRUCTIONS_MODAL_CLOSE_BUTTON: 'Entendido!',
  INSTRUCTIONS_MODAL_TEXT: 'Presiona en <0>cualquier sector</0> de la pantalla para cambiar la dirección de la ronda.',
  INSTRUCTIONS_MODAL_TITLE: 'Instrucciones',
  WAKE_LOCK_MESSAGE_ACTION_BUTTON: 'Más información',
  WAKE_LOCK_MESSAGE_ENABLED: getWakeLockMessage(true),
  WAKE_LOCK_MESSAGE_DISABLED: getWakeLockMessage(false),
  WAKE_LOCK_MODAL_CLARIFICATION: 'Si su teléfono no admite la funcionalidad Wake Lock, pronto podrá informar el problema.',
  WAKE_LOCK_MODAL_CLOSE_BUTTON: 'Cerrar',
  WAKE_LOCK_MODAL_FEATURE: 'La funcionalidad Wake Lock impide que el dispositivo se <0>oscurezca</0> y <0>bloquee</0> la pantalla mientras se utiliza la aplicación.',
  WAKE_LOCK_MODAL_PHONE: 'Puedes determinar si tu teléfono admite esta funcionalidad o no mirando la parte inferior de la pantalla.',
  WAKE_LOCK_MODAL_TITLE: 'Wake Lock',
};

export default es;
