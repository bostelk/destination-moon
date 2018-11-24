/** HEDRON TIP **
  The config.js defines how the sketch file is used by Hedron.
**/

module.exports = {
  // Default title when sketch is loaded in (can be changed by user)
  defaultTitle: 'Reflective Ball',
  // Params are values between 0 and 1 that can be manipulated by the user
  // these values are sent to the sketch every frame
  // e.g. , scale, colour
  params: [
    {
      key: 'rotX', // needs to be unique
      title: 'Rotation X', // should be human
      defaultValue: 0,
            defaultMin:0,
            defaultMax:6.2831853
    },
    {
      key: 'rotY',
      title: 'Rotation  Y',
      defaultValue: 0,
            defaultMin:0,
            defaultMax:6.2831853
    },
    {
      key: 'rotZ',
      title: 'Rotation  Z',
      defaultValue: 0,
            defaultMin:0,
            defaultMax:6.2831853
    },
    {
      key: 'scale',
      title: 'Scale',
      defaultValue: 0.5,
            defaultMin: .00001,
            defaultMax: 1000
    },
    {
      key: 'posX',
      defaultValue: 0,
            defaultMin: 1,
            defaultMax: 64
    },
    {
      key: 'posY',
      defaultValue: 0,
            defaultMin: 1,
            defaultMax: 64
    },
    {
      key: 'posZ',
      defaultValue: 0,
            defaultMin: 1,
            defaultMax: 64
    }
  ],
  // Shots are single functions that can fire, as opposed to values that change
  // e.g. Explosions, Pre-defined animations
  shots: [
  ]
}
