import { ACCESS_CONFIG } from '../config/access';

interface SessionData {
  authenticated: boolean;
  timestamp: number;
}

/**
 * Checks if the user has a valid, non-expired session in localStorage.
 * Returns false if no session exists, session is malformed, or session has expired.
 */
export function isAuthenticated(): boolean {
  if (typeof window === 'undefined') {
    return false;
  }

  try {
    const raw = localStorage.getItem(ACCESS_CONFIG.sessionKey);
    if (!raw) {
      return false;
    }

    const session: SessionData = JSON.parse(raw);

    if (!session.authenticated || !session.timestamp) {
      return false;
    }

    const now = Date.now();
    const elapsed = now - session.timestamp;

    if (elapsed > ACCESS_CONFIG.sessionDuration) {
      // Session expired — clean up
      localStorage.removeItem(ACCESS_CONFIG.sessionKey);
      return false;
    }

    return true;
  } catch {
    // Malformed JSON or other error — remove corrupt data
    localStorage.removeItem(ACCESS_CONFIG.sessionKey);
    return false;
  }
}

/**
 * Validates the provided access code against the configured code (case-insensitive).
 * If valid, stores a session with the current timestamp in localStorage.
 * Returns true if authentication succeeded, false otherwise.
 */
export function authenticate(code: string): boolean {
  if (typeof window === 'undefined') {
    return false;
  }

  const isValid =
    code.trim().toUpperCase() === ACCESS_CONFIG.code.toUpperCase();

  if (isValid) {
    const session: SessionData = {
      authenticated: true,
      timestamp: Date.now(),
    };

    localStorage.setItem(ACCESS_CONFIG.sessionKey, JSON.stringify(session));
  }

  return isValid;
}

/**
 * Removes the session from localStorage, effectively logging the user out.
 */
export function logout(): void {
  if (typeof window === 'undefined') {
    return;
  }

  localStorage.removeItem(ACCESS_CONFIG.sessionKey);
}
