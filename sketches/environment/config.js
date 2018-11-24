/** HEDRON TIP **
  The config.js defines how the sketch file is used by Hedron.
**/

module.exports = {
  // Default title when sketch is loaded in (can be changed by user)
  defaultTitle: 'Environment',
  // Params are values between 0 and 1 that can be manipulated by the user
  // these values are sent to the sketch every frame
  // e.g. , scale, colour
  params: [
  ],
  // Shots are single functions that can fire, as opposed to values that change
  // e.g. Explosions, Pre-defined animations
  shots: [
    {
      method: 'capture', // needs to be unique
      title: 'Capture' // should be human
    },
    {
      method: 'exportMap', // needs to be unique
      title: 'Export' // should be human
    },
    {
      method: 'pisaMap', // needs to be unique
      title: 'Pisa' // should be human
    },
    {
      method: 'skyMap', // needs to be unique
      title: 'Sky' // should be human
    },
  ]
}
