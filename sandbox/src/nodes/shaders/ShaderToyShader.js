// Created by inigo quilez - iq/2013
// License Creative Commons Attribution-NonCommercial-ShareAlike 3.0 Unported License.						    

THREE.AddBlendShader = {

	uniforms: {

		"iResolution": { type: "v3", value: null }, // viewport resolution (in pixels)
		"iGlobalTime": { type: "f", value: null }, // shader playback time (in seconds)
		"iChannelTime":  { type: "fv1", value: 10 }, // channel playback time (in seconds)
		"iChannelResolution":  { type: "fv", value: 10 }, // channel resolution (in pixels)
		"iMouse":  { type: "v4", value: 10 }, // mouse pixel coords. xy: current (if MLB down), zw: click
		"iChannel0":  { type: "t", value: 10 }, // input channel0 = 2D/Cube
		"iChannel1":  { type: "t", value: 10 }, // input channel1 = 2D/Cube
		"iChannel2":  { type: "t", value: 10 }, // input channel2 = 2D/Cube
		"iChannel4":  { type: "t", value: 10 }, // input channel3 = 2D/Cube
		"iDate":  { type: "v4", value: 10 } // (year, month, day, time in seconnds

	},

	vertexShader: [

		"void main() {",

			"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

		"}"

	].join("\n"),

	fragmentShader: [

		// "vec2 iterate( in vec2 p, in vec4 t )",
		// "{",
		// "    return p - 0.05*cos(t.xz + p.x*p.y + cos(t.yw+1.5*3.1415927*p.yx)+p.yx*p.yx );",
		// "}",

		"void main( void )",
		// "{",
		// "	vec2 q = gl_FragCoord.xy / iResolution.xy;",
		// "	vec2 p = -1.0 + 2.0*q;",
		// "	p.x *= iResolution.x/iResolution.y;",
		// "    p *= 1.5;	",

		// "    vec4 t = 0.15*iGlobalTime*vec4( 1.0, -1.5, 1.2, -1.6 ) + vec4(0.0,2.0,3.0,1.0);",
		// "	",
		// "    vec2 z = p;",
		// "	vec3 s = vec3(0.0);",
		// "	for( int i=0; i<100; i++ ) ",
		// "	{",
		// "		z = iterate( z, t );",

		// "		float d = dot( z-p, z-p ); ",
		// "		s.x += 1.0/(0.1+d);",
		// "		s.y += sin(atan( p.x-z.x, p.y-z.y ));",
		// "		s.z += exp(-0.2*d );",
		// "	}",
		// "    s /= 100.0;",
		// "	",
		// "	vec3 col = 0.5 + 0.5*cos( vec3(0.0,0.4,0.8) + 2.5 + s.z*6.2831 );",
		// "	",
		// "	col *= 0.5 + 0.5*s.y;",
		// "    col *= s.x;",
		// "    col *= 0.94+0.06*sin(10.0*length(z));",
		// "	",
		// "	vec3 nor = normalize( vec3( dFdx(s.x), 0.02, dFdy(s.x) ) );",
		// "	float dif = dot( nor, vec3(0.7,0.1,0.7) );",
		// "	col -= 0.05*vec3(dif);",

		// "	col *= 0.3 + 0.7*pow( 16.0*q.x*q.y*(1.0-q.x)*(1.0-q.y), 0.2 );",
		// "	",
		// "	gl_FragColor = vec4( col, 1.0 );",
		"	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );",
		"}",

	].join("\n")

};
