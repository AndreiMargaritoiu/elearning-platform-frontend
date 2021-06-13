export interface CookieService {
  setCookie(name: string, value: string, options?: any): void;
  removeCookie(name: string, options?: any): void;
  getCookie(name: string): string;
  getCookieForSSR(cookies: string, name: string): string;
}
