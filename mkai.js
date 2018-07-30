// --------------------------------------------------
// mkai.js v0.0.1
// Math 改
// https://github.com/youhe/mkai.js
// This code may be freely distributed under the MIT license
// minify by https://javascript-minifier.com/
// --------------------------------------------------
(function (name, definition) {
  /*global define module*/
  if (typeof define == 'function') define(definition);
  else if (typeof module != 'undefined') module.exports = definition;
  else this[name] = definition;
}('Mkai', {

  /*********************************
    ラジアン -> 角度
  *********************************/
  degree: function(val) {
    return val / Math.PI * 180;
  },

  /*********************************
    角度 -> ラジアン
  *********************************/
  radian: function(val) {
    return val * Math.PI / 180;
  },

  /*********************************
    val を min と max の間に制限する
  *********************************/
  constrain: function(val, min, max) {
    return Math.min(Math.max(val, min), max);
  },

  /*********************************
    乱数
  *********************************/
  random: function(min, max) {
    return Math.random() * (max - min) + min;
  },

  /*********************************
    乱数（int）
  *********************************/
  randomF: function(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  },

  /*********************************
    写像
  *********************************/
  map: function(val, s1, e1, s2, e2) {
    return s2 + (e2 - s2) * ((val - s1) / (e1 - s1));
  },

  /*********************************
    原点からの距離
  *********************************/
  mag: function(x, y) {
    return Math.sqrt((x * x) + (y * y));
  },

  /*********************************
    2点間の距離
  *********************************/
  dist: function(x1, y1, x2, y2) {
    return Math.sqrt(((x1 - x2) * (x1 - x2)) + ((y1 - y2) * (y1 - y2)));
  },

  /*********************************
    線形補間
  *********************************/
  mix: function(a, b, m) {
    return (a * (1 - m)) + (b * m);
  },

  /*******************************
    HSVをRGBに変換
  *******************************/
  hsvToRgb: function(h, s, v) {
    h /= 360; s /= 100; v /= 100;
    var r, g, b, i, f, p, q, t;
    i = Math.floor(h * 6);
    f = h * 6 - i;
    p = v * (1 - s);
    q = v * (1 - f * s);
    t = v * (1 - (1 - f) * s);

    switch (i % 6) {
      case 0: r = v, g = t, b = p; break;
      case 1: r = q, g = v, b = p; break;
      case 2: r = p, g = v, b = t; break;
      case 3: r = p, g = q, b = v; break;
      case 4: r = t, g = p, b = v; break;
      case 5: r = v, g = p, b = q; break;
    }

    return [r, g, b];
  },

}));
