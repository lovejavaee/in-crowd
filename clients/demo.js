// Generated by CoffeeScript 1.3.1

window.onload = function() {
  var a, item, _fn, _i, _len, _ref;
  window.socket = io.connect('127.0.0.1:8000/chat');
  a = 'ready logout register login err topics topic-add topic-inc';
  a += ' topic-enter post-open post-close post-end post-sync';
  _ref = a.split(' ');
  _fn = function() {
    return socket.on(item, function(j) {
      return console.log(j);
    });
  };
  for (_i = 0, _len = _ref.length; _i < _len; _i++) {
    item = _ref[_i];
    _fn();
  }
  return socket.emit('login', {
    username: 'nodejs',
    passwd: 'nodepass'
  });
};