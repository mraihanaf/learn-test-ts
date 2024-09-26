import type { Config } from "jest"

const config: Config = {
    collectCoverage: true,
    coverageDirectory: "../coverage",
    coverageProvider: "v8",
    rootDir: "./src",
    testEnvironment: "node",
    transform: {
        "^.+.tsx?$": ["ts-jest", { tsconfig: "tsconfig.jest.json" }],
    },
}

export default config
