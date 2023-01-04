import { babel } from "@rollup/plugin-babel";
import external from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
//import typescript from "@rollup/plugin-typescript";
import typescript from 'rollup-plugin-typescript2';
import { terser } from "rollup-plugin-terser";
import packageJson from "./package.json";

export default [
    {
        input: "./src/index.ts",
        output: [
            {
                file: packageJson.main,
                format: "cjs",
            },
            {
                file: packageJson.module,
                format: "es",
                exports: "named",
            },
        ],
        plugins: [
            babel({
                exclude: "node_modules/**",
                presets: ["@babel/preset-react"],
            }),
            external(),
            resolve(),
            typescript(),
            terser(),
        ],
    },
];