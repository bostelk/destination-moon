/** HEDRON TIP **
  The config.js defines how the sketch file is used by Hedron.
**/

module.exports = {
  // Default title when sketch is loaded in (can be changed by user)
  defaultTitle: 'RGB Shift',
  // Params are values between 0 and 1 that can be manipulated by the user
  // these values are sent to the sketch every frame
  // e.g. Speed, scale, colour
  params: [
    {
      key: 'intensity', // needs to be unique
      defaultValue: 1, // should be human
      min: 0,
      max: 1
    },
    {
      key: 'phase', // needs to be unique
      defaultValue: 0.5, // should be human
      defaultMin:0,
      defaultMax:6.28,
      hidden:false
    },
    {
      key: 'amount', // needs to be unique
      defaultValue: 0.15, // should be human
      defaultMin:0.0,
      defaultMax:0.01,
      hidden:false
    },
  ],

  shots: [
  ]
}
