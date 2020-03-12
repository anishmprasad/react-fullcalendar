/* eslint-disable no-unused-expressions */
function Z(e, t) {
  return (t.valueOf() - e.valueOf()) / 864e5;
}

export function computefn(e, t) {
  for (var r = e.start, n = e.end, i = [], o = [], s = -1; r < n; ) {
    isHiddenDay(r) ? i.push(s + 0.5) : (s++, i.push(s), o.push(r)),
      (r = q(r, 1));
  }
  this.dates = o;
  this.indices = i;
  this.cnt = o.length;
}
computefn.prototype.sliceRange = function(e) {
  var t = this.getDateDayIndex(e.start),
    r = this.getDateDayIndex(q(e.end, -1)),
    n = Math.max(0, t),
    i = Math.min(this.cnt - 1, r);
  return (n = Math.ceil(n)) <= (i = Math.floor(i))
    ? {
        firstIndex: n,
        lastIndex: i,
        isStart: t === n,
        isEnd: r === i
      }
    : null;
};
computefn.prototype.getDateDayIndex = function(e) {
  var t = this.indices,
    r = Math.floor(Z(this.dates[0], e));
  return r < 0 ? t[0] - 1 : r >= t.length ? t[t.length - 1] + 1 : t[r];
};

function isHiddenDay(e) {
  return e instanceof Date && (e = e.getUTCDay()), false; //this.isHiddenDayHash[e];
}

function q(e, t) {
  var r = te(e);
  return (r[2] += t), re(r);
}

function te(e) {
  var e = new Date();
  return [
    e.getUTCFullYear(),
    e.getUTCMonth(),
    e.getUTCDate(),
    e.getUTCHours(),
    e.getUTCMinutes(),
    e.getUTCSeconds(),
    e.getUTCMilliseconds()
  ];
}

function re(e) {
  return (
    1 === e.length && (e = e.concat([0])), new Date(Date.UTC.apply(Date, e))
  );
}
