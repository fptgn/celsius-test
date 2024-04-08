export default class CookiesUtils {
  static setCookie(cName: string, cValue: string, expDays: number) {
    if (typeof document !== 'undefined') {
      let date = new Date();
      date.setTime(date.getTime() + expDays * 24 * 60 * 60 * 1000);
      const expires = "expires=" + date.toUTCString();
      document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
    }
  }

  static getCook(cookiename:string) {
    if (typeof document !== 'undefined') {
      var cookiestring=RegExp(cookiename+"=[^;]+").exec(document.cookie);
      return decodeURIComponent(!!cookiestring ? cookiestring.toString().replace(/^[^=]+./,"") : "");
    }
    return "";
  }
}