// THIS FILE IS FOR DEMO PURPOSES ONLY
// AND CAN BE REMOVED AFTER PICKING A STYLE
// JUST BEFORE THE </head> CLOSING TAG

// Set cookie
function setCookie(name, value, days) {
  let expires = "";
  if (days) {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

// Get cookie
function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

// Get query parameter
function getQueryParameter(name) {
  let queryParameter = undefined;
  location.search
    .substr(1)
    .split("&")
    .some(function(item) {
      // returns first occurence and stops
      return (
        item.split("=")[0] == name && (queryParameter = item.split("=")[1])
      );
    });
  return queryParameter;
}

// Get current theme
function getCurrentTheme() {
  const cookie = getCookie("theme");
  const queryParameter = getQueryParameter("theme");

  if (queryParameter) {
    setCookie("theme", queryParameter, 7);
    return queryParameter;
  }

  return cookie ? cookie : "modern";
}

document.addEventListener("DOMContentLoaded", () => {
  // Append theme style-tag to <head>
  const link = document.createElement("link");
  link.href = "css/" + getCurrentTheme() + ".css";
  link.type = "text/css";
  link.rel = "stylesheet";
  document.getElementsByTagName("head")[0].appendChild(link);
});