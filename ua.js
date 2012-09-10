/**
 * A UserAgent detection library.
 *
 * This library relies on the navigator.userAgent property and hence does not
 * work for custom UserAgent settings.
 *
 * Apart from supporting detection of major browser vendors, the library also
 * supports detection of various devices.
 *
 * Copyright (c) 2012, Gopalarathnam Venkatesan
 * All rights reserved.
 * Extended code base by Modus Operandi, Berlin
 *
 */
var UA = (function () {
  "use strict";

  var ua = (window.navigator && navigator.userAgent) || "";

  return {
    /**
     * Return true if the browser is Chrome or compatible.
     *
     * @method isChrome
     */
    isChrome: function () {
        return (/webkit\W.*(chrome|chromium)\W/i).test(ua);
    },

    /**
     * Return true if the browser is Firefox.
     *
     * @method isFirefox
     */
    isFirefox: function () {
        return (/mozilla.*\Wfirefox\W/i).test(ua);
    },

    /**
     * Return true if the browser is using the Gecko engine.
     *
     * This is probably a better way to identify Firefox and other browsers
     * that use XulRunner.
     *
     * @method isGecko
     */
    isGecko: function () {
        return (/mozilla(?!.*webkit).*\Wgecko\W/i).test(ua);
    },

    /**
     * Return true if the browser is Internet Explorer.
     *
     * @method isIE
     */
    isIE: function () {
        return navigator.appName === "Microsoft Internet Explorer";
    },
    
    /**
     * Return version of Internet Explorer.
     *
     * @method getIEVersion
     */
    getIEVersion: function() {
      var rv = -1; // Return value assumes failure.
      
      if (UA.isIE()) {
        var re  = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
        if (re.exec(ua) != null) {
          rv = parseFloat( RegExp.$1 );
        }
      }
      
      return rv;
    },
    
    /**
     * Return true if the browser is Internet Explorer 8.
     *
     * @method isIE8
     */
    isIE8: function() {
      return UA.isIE() && UA.getIEVersion() == 8.0
    },
    
    /**
     * Return true if the browser is Internet Explorer 8 or older.
     *
     * @method isIE8OrBelow
     */
    isIE8OrBelow: function() {
      return UA.isIE() && UA.getIEVersion() <= 8.0
    },

    /**
     * Return true if the browser is running on Kindle.
     *
     * @method isKindle
     */
    isKindle: function () {
        return (/\W(kindle|silk)\W/i).test(ua);
    },
    
    /**
     * Return true if the browser is running on a BlackBerry.
     *
     * @method isBlackBerry
     */
    isBlackBerry: function () {
        return (/\W(BlackBerry)\W/i).test(ua);
    },

    /**
     * Return true if the browser is running on a mobile device.
     *
     * @method isMobile
     */
    isMobile: function () {
        return (/(iphone|ipod|(android.*?mobile)|blackberry|nokia|opera mobi)/i).test(ua);
    },
    
    
    /**
     * Return true if the browser is running on a Windows Phone.
     *
     * @method isIEMobile
     */
    isIEMobile: function () {
        return (/(IEMobile)/i).test(ua);
    },

    /**
     * Return true if we are running on Opera.
     *
     * @method isOpera
     */
    isOpera: function () {
        return (/opera.*\Wpresto\W/i).test(ua);
    },

    /**
     * Return true if the browser is Safari.
     *
     * @method isSafari
     */
    isSafari: function () {
        return (/webkit\W(?!.*chrome).*safari\W/i).test(ua);
    },

    /**
     * Return true if the browser is running on a tablet.
     *
     * @method isTablet
     */
    isTablet: function () {
      /*
       * One way to distinguish Android mobiles from tablets is that the
       * mobiles contain the string "mobile" in their UserAgent string.
       * If the word "Android" isn't followed by "mobile" then its a
       * tablet.
       */
      return (/(ipad|android(?!.*mobile))/i).test(ua);
    },
    
    /**
     * Return true if the browser is running on an iPad.
     *
     * @method isIPad
     */
    isIPad: function () {
        return (/(ipad)/i).test(ua);
    },
    
    /**
     * Return true if the browser is running on an iPhone.
     *
     * @method isIPhone
     */
    isIPhone: function () {
        return (/(iphone)/i).test(ua);
    },

    /**
     * Return true if the browser is running on a TV!
     *
     * @method isTV
     */
    isTV: function () {
        return (/googletv|sonydtv/i).test(ua);
    },

    /**
     * Return true if the browser is running on a WebKit browser.
     *
     * @method isWebKit
     */
    isWebKit: function () {
        return (/webkit\W/i).test(ua);
    },

    /**
     * Return the complete UserAgent string verbatim.
     *
     * @method whoami
     */
    whoami: function () {
        return ua;
    }
  };
}());
