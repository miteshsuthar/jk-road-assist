export const COMING_SOON_PATHS = [
  "/login",
  "/services",
  "/premium-cars",
  "/rsa-services",
  "/roadside-package",
  "/about",
  "/team",
  "/gallery",
];

export const isComingSoonPath = (pathname) =>
  COMING_SOON_PATHS.includes(pathname);
