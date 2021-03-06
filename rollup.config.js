import sourcemaps from "rollup-plugin-sourcemaps";
import resolve from "rollup-plugin-node-resolve";
import commonjs from "rollup-plugin-commonjs";
 
export default [{
	input: "build/Main.js",
	output: {
		name: "Agent",
		sourcemap: "inline",
		format: "iife",
		file: "build/agent.truth.js"
	},
	plugins: [
		sourcemaps(),
		resolve(),
		commonjs()
	]
}];
