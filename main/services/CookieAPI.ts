import { CookieService } from '../domain/CookieService';

export class CookieAPI implements CookieService {
  setCookie(name: string, value: string, options?: any): void {
    options = {
      ...options,
      path: '/',
    };

    let updatedCookie =
      name === '__utp'
        ? encodeURIComponent(name) + '=' + encodeURIComponent(value)
        : encodeURIComponent(name) + '=' + encodeURIComponent(btoa(value));

    Object.keys(options).forEach((optionKey) => {
      updatedCookie += `; ${optionKey}=${options[optionKey]}`;
    });

    document.cookie = updatedCookie;
  }

  removeCookie(name: string, options?: any): void {
    this.setCookie(name, '', {
      ...options,
      expires: 'Thu, 01 Jan 1970 00:00:00 GMT',
    });
  }

  getCookie(cname: string): string {
    const cookie = document.cookie
      .split('; ')
      .find((c) => c.startsWith(`${cname}=`));

    const value = (cookie && cookie.split('=')[1]) || '';
    const decodedValue = decodeURIComponent(value);

    return cname === '__utp' ? decodedValue : atob(decodedValue);
  }

  getCookieForSSR(cookies: string, cname: string): string {
    const cookie = cookies.split('; ').find((c) => c.startsWith(`${cname}=`));

    const value = (cookie && cookie.split('=')[1]) || '';
    const decodedValue = decodeURIComponent(value);

    if (cname === '__utp') {
      return decodedValue;
    }

    const createdBuffer = Buffer.from(decodedValue, 'base64');
    return createdBuffer.toString('ascii');
  }
}
