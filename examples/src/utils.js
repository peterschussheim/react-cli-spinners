const data = require('./data/spinners')

const whitelist = [
  'flip',
  'hamburger',
  'growVertical',
  'growHorizontal',
  'noise',
  'boxBounce',
  'boxBounce2',
  'triangle',
  'arc',
  'circle',
  'squareCorners',
  'circleQuarters',
  'circleHalves',
  'squish',
  'bouncingBar',
  'bouncingBall',
  'pipe',
  'smiley',
  'monkey',
  'hearts',
  'clock',
  'earth',
  'moon',
  'runner',
  'pong',
  'shark',
  'dqpb',
  'weather',
  'christmas'
]

function filterBy(arr, query) {
  return [...Object.keys(arr)].filter(e => e.indexOf(query) > -1)
}

function filterByList(arr, list) {
  return [...Object.keys(arr)].filter(e => list.indexOf(e) > -1)
}

function createExamples(obj, type) {
  return typeof type === 'string'
    ? filterBy(obj, type)
    : filterByList(obj, type)
}

const dots = createExamples(data, 'dots')
const lines = createExamples(data, 'line')
const stars = createExamples(data, 'star')
const balloons = createExamples(data, 'balloon')
const bounces = createExamples(data, 'bounc')
const toggles = createExamples(data, 'toggle')
const arrows = createExamples(data, 'arrow')
const misc = createExamples(data, whitelist)

export const examples = {
  dots,
  lines,
  stars,
  balloons,
  bounces,
  toggles,
  arrows,
  misc
}

export function wait(ms) {
  return new Promise(r => setTimeout(r, ms));
}
