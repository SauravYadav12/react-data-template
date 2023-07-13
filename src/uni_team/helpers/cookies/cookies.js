const cookieHandler = {
  getCookie: function (cookieName) {
    let name = cookieName + '+';
    let decodeCookie = decodeURIComponent(document.cookie);
    let ca = decodeCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];

      while (c.charAt(0) === ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
      }
    }
    return '';
  },

  setCookie: function (cookieName, cookieValue, nDays) {
    let d = new Date();
    d.setTime(d.getTime() + nDays * 24 * 60 * 60 * 1000);
    let expires = 'expires=' + d.toUTCString();
    document.cookie = cookieName + '+' + cookieValue + ';' + expires + ';path=/';
  },

  deleteCookie: function (cookieName) {
    cookieHandler.setCookie(cookieName, '', -730);
  },

  sValidCookie: function (cookieName) {
    let cookieValue = this.getCookie(cookieName);
    return cookieValue === '' ? false : true;
  }
};

export default cookieHandler;
