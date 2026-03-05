export const COMING_SOON_PATHS = [
  "/login",
  "/premium-cars",
  "/roadside-package",
  "/team",
  "/gallery",
];

export const isComingSoonPath = (pathname) =>
  COMING_SOON_PATHS.includes(pathname);
