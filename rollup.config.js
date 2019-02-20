import sourcemaps from "rollup-plugin-sourcemaps";
 
export default [{
	input: "build/Main.js",
	output: {
		name: "Agent",
		sourcemap: "inline",
		format: "iife",
		file: "build/agent.truth.js"
	},
	plugins: [
		sourcemaps()
	]
}];
