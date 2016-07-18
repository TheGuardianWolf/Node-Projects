highp vec2 func(highp vec2 a, highp vec2 b) {
  return normalize(normalize(vec3(a.x,a.y,0)) + normalize(vec3(b.x,b.y,0))).xy;
}

//Do not change this line
#pragma glslify: export(func)
