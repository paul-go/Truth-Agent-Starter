/**
 * This file should contain calls to `program.on(...)` 
 * to attach to the various causes provided by the
 * core compiler, and the editor. 
 * 
 * This file can use ES6 imports to reference other
 * files. Everything should be bundled to a single
 * JavaScript file through rollup after the build step.
 * 
 * See the documentation for more details.
 */


program.on(Editor.CauseAgentSetup, () =>
{
	return [
		// Put references to any CSS files to load in here.
	];
});
