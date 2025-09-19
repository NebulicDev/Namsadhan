/**
 * A custom logger that silences all console output in production builds.
 * It uses the global __DEV__ variable, which is true during development
 * and false in production, to conditionally assign console functions.
 */

interface Logger {
  log: (...args: any[]) => void;
  error: (...args: any[]) => void;
  warn: (...args: any[]) => void;
}

// Create a logger object. If in development, it points to the real console methods.
// If in production, it points to empty functions, effectively doing nothing.
const logger: Logger = {
  log: __DEV__ ? console.log : () => {},
  error: __DEV__ ? console.error : () => {},
  warn: __DEV__ ? console.warn : () => {},
};

export default logger;