/* eslint-disable no-undef */
import Geolocation from '../Geolocation';

test.each([
  ['test 1 valid', '50.45678, -3.34567', [50.45678, -3.34567]],
  ['test 2 valid', '50.45678,-3.34567', [50.45678, -3.34567]],
  ['test 3 valid', '[50.45678, -3.34567]', [50.45678, -3.34567]],
  ['test 4 invalid', ' 99999', false],
  ['test 5 invalid', 'test', false],
])(('check geo'), (_, input, expected) => {
  const geo = new Geolocation();
  const received = geo.geoValidity(input);
  expect(received).toStrictEqual(expected);
});
