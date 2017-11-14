'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var dots = { "interval": 80, "frames": ["⠋", "⠙", "⠹", "⠸", "⠼", "⠴", "⠦", "⠧", "⠇", "⠏"] };
var dots2 = { "interval": 80, "frames": ["⣾", "⣽", "⣻", "⢿", "⡿", "⣟", "⣯", "⣷"] };
var dots3 = { "interval": 80, "frames": ["⠋", "⠙", "⠚", "⠞", "⠖", "⠦", "⠴", "⠲", "⠳", "⠓"] };
var dots4 = { "interval": 80, "frames": ["⠄", "⠆", "⠇", "⠋", "⠙", "⠸", "⠰", "⠠", "⠰", "⠸", "⠙", "⠋", "⠇", "⠆"] };
var dots5 = { "interval": 80, "frames": ["⠋", "⠙", "⠚", "⠒", "⠂", "⠂", "⠒", "⠲", "⠴", "⠦", "⠖", "⠒", "⠐", "⠐", "⠒", "⠓", "⠋"] };
var dots6 = { "interval": 80, "frames": ["⠁", "⠉", "⠙", "⠚", "⠒", "⠂", "⠂", "⠒", "⠲", "⠴", "⠤", "⠄", "⠄", "⠤", "⠴", "⠲", "⠒", "⠂", "⠂", "⠒", "⠚", "⠙", "⠉", "⠁"] };
var dots7 = { "interval": 80, "frames": ["⠈", "⠉", "⠋", "⠓", "⠒", "⠐", "⠐", "⠒", "⠖", "⠦", "⠤", "⠠", "⠠", "⠤", "⠦", "⠖", "⠒", "⠐", "⠐", "⠒", "⠓", "⠋", "⠉", "⠈"] };
var dots8 = { "interval": 80, "frames": ["⠁", "⠁", "⠉", "⠙", "⠚", "⠒", "⠂", "⠂", "⠒", "⠲", "⠴", "⠤", "⠄", "⠄", "⠤", "⠠", "⠠", "⠤", "⠦", "⠖", "⠒", "⠐", "⠐", "⠒", "⠓", "⠋", "⠉", "⠈", "⠈"] };
var dots9 = { "interval": 80, "frames": ["⢹", "⢺", "⢼", "⣸", "⣇", "⡧", "⡗", "⡏"] };
var dots10 = { "interval": 80, "frames": ["⢄", "⢂", "⢁", "⡁", "⡈", "⡐", "⡠"] };
var dots11 = { "interval": 100, "frames": ["⠁", "⠂", "⠄", "⡀", "⢀", "⠠", "⠐", "⠈"] };
var dots12 = { "interval": 80, "frames": ["⢀⠀", "⡀⠀", "⠄⠀", "⢂⠀", "⡂⠀", "⠅⠀", "⢃⠀", "⡃⠀", "⠍⠀", "⢋⠀", "⡋⠀", "⠍⠁", "⢋⠁", "⡋⠁", "⠍⠉", "⠋⠉", "⠋⠉", "⠉⠙", "⠉⠙", "⠉⠩", "⠈⢙", "⠈⡙", "⢈⠩", "⡀⢙", "⠄⡙", "⢂⠩", "⡂⢘", "⠅⡘", "⢃⠨", "⡃⢐", "⠍⡐", "⢋⠠", "⡋⢀", "⠍⡁", "⢋⠁", "⡋⠁", "⠍⠉", "⠋⠉", "⠋⠉", "⠉⠙", "⠉⠙", "⠉⠩", "⠈⢙", "⠈⡙", "⠈⠩", "⠀⢙", "⠀⡙", "⠀⠩", "⠀⢘", "⠀⡘", "⠀⠨", "⠀⢐", "⠀⡐", "⠀⠠", "⠀⢀", "⠀⡀"] };
var line = { "interval": 130, "frames": ["-", "\\", "|", "/"] };
var line2 = { "interval": 100, "frames": ["⠂", "-", "–", "—", "–", "-"] };
var pipe = { "interval": 100, "frames": ["┤", "┘", "┴", "└", "├", "┌", "┬", "┐"] };
var simpleDots = { "interval": 400, "frames": [".  ", ".. ", "...", "   "] };
var simpleDotsScrolling = { "interval": 200, "frames": [".  ", ".. ", "...", " ..", "  .", "   "] };
var star = { "interval": 70, "frames": ["✶", "✸", "✹", "✺", "✹", "✷"] };
var star2 = { "interval": 80, "frames": ["+", "x", "*"] };
var flip = { "interval": 70, "frames": ["_", "_", "_", "-", "`", "`", "'", "´", "-", "_", "_", "_"] };
var hamburger = { "interval": 100, "frames": ["☱", "☲", "☴"] };
var growVertical = { "interval": 120, "frames": ["▁", "▃", "▄", "▅", "▆", "▇", "▆", "▅", "▄", "▃"] };
var growHorizontal = { "interval": 120, "frames": ["▏", "▎", "▍", "▌", "▋", "▊", "▉", "▊", "▋", "▌", "▍", "▎"] };
var balloon = { "interval": 140, "frames": [" ", ".", "o", "O", "@", "*", " "] };
var balloon2 = { "interval": 120, "frames": [".", "o", "O", "°", "O", "o", "."] };
var noise = { "interval": 100, "frames": ["▓", "▒", "░"] };
var bounce = { "interval": 120, "frames": ["⠁", "⠂", "⠄", "⠂"] };
var boxBounce = { "interval": 120, "frames": ["▖", "▘", "▝", "▗"] };
var boxBounce2 = { "interval": 100, "frames": ["▌", "▀", "▐", "▄"] };
var triangle = { "interval": 50, "frames": ["◢", "◣", "◤", "◥"] };
var arc = { "interval": 100, "frames": ["◜", "◠", "◝", "◞", "◡", "◟"] };
var circle = { "interval": 120, "frames": ["◡", "⊙", "◠"] };
var squareCorners = { "interval": 180, "frames": ["◰", "◳", "◲", "◱"] };
var circleQuarters = { "interval": 120, "frames": ["◴", "◷", "◶", "◵"] };
var circleHalves = { "interval": 50, "frames": ["◐", "◓", "◑", "◒"] };
var squish = { "interval": 100, "frames": ["╫", "╪"] };
var toggle = { "interval": 250, "frames": ["⊶", "⊷"] };
var toggle2 = { "interval": 80, "frames": ["▫", "▪"] };
var toggle3 = { "interval": 120, "frames": ["□", "■"] };
var toggle4 = { "interval": 100, "frames": ["■", "□", "▪", "▫"] };
var toggle5 = { "interval": 100, "frames": ["▮", "▯"] };
var toggle6 = { "interval": 300, "frames": ["ဝ", "၀"] };
var toggle7 = { "interval": 80, "frames": ["⦾", "⦿"] };
var toggle8 = { "interval": 100, "frames": ["◍", "◌"] };
var toggle9 = { "interval": 100, "frames": ["◉", "◎"] };
var toggle10 = { "interval": 100, "frames": ["㊂", "㊀", "㊁"] };
var toggle11 = { "interval": 50, "frames": ["⧇", "⧆"] };
var toggle12 = { "interval": 120, "frames": ["☗", "☖"] };
var toggle13 = { "interval": 80, "frames": ["=", "*", "-"] };
var arrow = { "interval": 100, "frames": ["←", "↖", "↑", "↗", "→", "↘", "↓", "↙"] };
var arrow2 = { "interval": 80, "frames": ["⬆️ ", "↗️ ", "➡️ ", "↘️ ", "⬇️ ", "↙️ ", "⬅️ ", "↖️ "] };
var arrow3 = { "interval": 120, "frames": ["▹▹▹▹▹", "▸▹▹▹▹", "▹▸▹▹▹", "▹▹▸▹▹", "▹▹▹▸▹", "▹▹▹▹▸"] };
var bouncingBar = { "interval": 80, "frames": ["[    ]", "[=   ]", "[==  ]", "[=== ]", "[ ===]", "[  ==]", "[   =]", "[    ]", "[   =]", "[  ==]", "[ ===]", "[====]", "[=== ]", "[==  ]", "[=   ]"] };
var bouncingBall = { "interval": 80, "frames": ["( ●    )", "(  ●   )", "(   ●  )", "(    ● )", "(     ●)", "(    ● )", "(   ●  )", "(  ●   )", "( ●    )", "(●     )"] };
var smiley = { "interval": 200, "frames": ["😄 ", "😝 "] };
var monkey = { "interval": 300, "frames": ["🙈 ", "🙈 ", "🙉 ", "🙊 "] };
var hearts = { "interval": 100, "frames": ["💛 ", "💙 ", "💜 ", "💚 ", "❤️ "] };
var clock = { "interval": 100, "frames": ["🕐 ", "🕑 ", "🕒 ", "🕓 ", "🕔 ", "🕕 ", "🕖 ", "🕗 ", "🕘 ", "🕙 ", "🕚 "] };
var earth = { "interval": 180, "frames": ["🌍 ", "🌎 ", "🌏 "] };
var moon = { "interval": 80, "frames": ["🌑 ", "🌒 ", "🌓 ", "🌔 ", "🌕 ", "🌖 ", "🌗 ", "🌘 "] };
var runner = { "interval": 140, "frames": ["🚶 ", "🏃 "] };
var pong = { "interval": 80, "frames": ["▐⠂       ▌", "▐⠈       ▌", "▐ ⠂      ▌", "▐ ⠠      ▌", "▐  ⡀     ▌", "▐  ⠠     ▌", "▐   ⠂    ▌", "▐   ⠈    ▌", "▐    ⠂   ▌", "▐    ⠠   ▌", "▐     ⡀  ▌", "▐     ⠠  ▌", "▐      ⠂ ▌", "▐      ⠈ ▌", "▐       ⠂▌", "▐       ⠠▌", "▐       ⡀▌", "▐      ⠠ ▌", "▐      ⠂ ▌", "▐     ⠈  ▌", "▐     ⠂  ▌", "▐    ⠠   ▌", "▐    ⡀   ▌", "▐   ⠠    ▌", "▐   ⠂    ▌", "▐  ⠈     ▌", "▐  ⠂     ▌", "▐ ⠠      ▌", "▐ ⡀      ▌", "▐⠠       ▌"] };
var shark = { "interval": 120, "frames": ["▐|\\____________▌", "▐_|\\___________▌", "▐__|\\__________▌", "▐___|\\_________▌", "▐____|\\________▌", "▐_____|\\_______▌", "▐______|\\______▌", "▐_______|\\_____▌", "▐________|\\____▌", "▐_________|\\___▌", "▐__________|\\__▌", "▐___________|\\_▌", "▐____________|\\▌", "▐____________/|▌", "▐___________/|_▌", "▐__________/|__▌", "▐_________/|___▌", "▐________/|____▌", "▐_______/|_____▌", "▐______/|______▌", "▐_____/|_______▌", "▐____/|________▌", "▐___/|_________▌", "▐__/|__________▌", "▐_/|___________▌", "▐/|____________▌"] };
var dqpb = { "interval": 100, "frames": ["d", "q", "p", "b"] };
var weather = { "interval": 100, "frames": ["☀️ ", "☀️ ", "☀️ ", "🌤 ", "⛅️ ", "🌥 ", "☁️ ", "🌧 ", "🌨 ", "🌧 ", "🌨 ", "🌧 ", "🌨 ", "⛈ ", "🌨 ", "🌧 ", "🌨 ", "☁️ ", "🌥 ", "⛅️ ", "🌤 ", "☀️ ", "☀️ "] };
var christmas = { "interval": 400, "frames": ["🌲", "🎄"] };
var spinners = {
	dots: dots,
	dots2: dots2,
	dots3: dots3,
	dots4: dots4,
	dots5: dots5,
	dots6: dots6,
	dots7: dots7,
	dots8: dots8,
	dots9: dots9,
	dots10: dots10,
	dots11: dots11,
	dots12: dots12,
	line: line,
	line2: line2,
	pipe: pipe,
	simpleDots: simpleDots,
	simpleDotsScrolling: simpleDotsScrolling,
	star: star,
	star2: star2,
	flip: flip,
	hamburger: hamburger,
	growVertical: growVertical,
	growHorizontal: growHorizontal,
	balloon: balloon,
	balloon2: balloon2,
	noise: noise,
	bounce: bounce,
	boxBounce: boxBounce,
	boxBounce2: boxBounce2,
	triangle: triangle,
	arc: arc,
	circle: circle,
	squareCorners: squareCorners,
	circleQuarters: circleQuarters,
	circleHalves: circleHalves,
	squish: squish,
	toggle: toggle,
	toggle2: toggle2,
	toggle3: toggle3,
	toggle4: toggle4,
	toggle5: toggle5,
	toggle6: toggle6,
	toggle7: toggle7,
	toggle8: toggle8,
	toggle9: toggle9,
	toggle10: toggle10,
	toggle11: toggle11,
	toggle12: toggle12,
	toggle13: toggle13,
	arrow: arrow,
	arrow2: arrow2,
	arrow3: arrow3,
	bouncingBar: bouncingBar,
	bouncingBall: bouncingBall,
	smiley: smiley,
	monkey: monkey,
	hearts: hearts,
	clock: clock,
	earth: earth,
	moon: moon,
	runner: runner,
	pong: pong,
	shark: shark,
	dqpb: dqpb,
	weather: weather,
	christmas: christmas
};

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();









var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var Spinner = function (_React$Component) {
  inherits(Spinner, _React$Component);

  function Spinner(props) {
    classCallCheck(this, Spinner);

    var _this = possibleConstructorReturn(this, (Spinner.__proto__ || Object.getPrototypeOf(Spinner)).call(this, props));

    _this.state = { spinner: _this.getSpinnerType(props), frame: 0 };
    _this.getSpinnerType = _this.getSpinnerType.bind(_this);
    return _this;
  }

  createClass(Spinner, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var _this2 = this;

      this.intervalId = setInterval(function () {
        return _this2.tick();
      }, this.state.spinner.interval);
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      clearInterval(this.intervalId);
    }
  }, {
    key: 'tick',
    value: function tick() {
      this.setState({
        frame: this.state.frame + 1 === this.state.spinner.frames.length ? 0 : this.state.frame + 1
      });
    }
  }, {
    key: 'getSpinnerType',
    value: function getSpinnerType(props) {
      var spinnerType = props.type ? props.type : 'dots';
      var spinner = spinners[spinnerType];
      return spinner;
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          spinner = _state.spinner,
          frame = _state.frame;

      return React.createElement(
        'span',
        this.props,
        spinner.frames[frame],
        '\xA0'
      );
    }
  }]);
  return Spinner;
}(React.Component);

module.exports = Spinner;
