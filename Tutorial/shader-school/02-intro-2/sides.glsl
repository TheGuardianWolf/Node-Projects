void sideLengths(
  highp float hypotenuse,
  highp float angleInDegrees,
  out highp float opposite,
  out highp float adjacent) {

  adjacent = hypotenuse * cos(radians(angleInDegrees));
  opposite = hypotenuse * sin(radians(angleInDegrees));
}

//Do not change this line
#pragma glslify: export(sideLengths)
