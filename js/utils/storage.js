const STORAGE_PREFIX = "hardware3d:";

export function readPreference(key) {
  try {
    return window.localStorage.getItem(`${STORAGE_PREFIX}${key}`);
  } catch (error) {
    console.warn("No se pudo leer la preferencia local.", error);
    return null;
  }
}

export function writePreference(key, value) {
  try {
    window.localStorage.setItem(`${STORAGE_PREFIX}${key}`, value);
  } catch (error) {
    console.warn("No se pudo guardar la preferencia local.", error);
  }
}