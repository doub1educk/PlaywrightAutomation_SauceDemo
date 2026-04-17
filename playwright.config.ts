
import { defineConfig, devices } from "@playwright/test";


const BASE_URL = "";

export default defineConfig({
    testDir: "./tests",
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 1 : undefined,
    reporter: "html",

    use: {
        baseURL: BASE_URL,
        trace: "on-first-retry",
        launchOptions: {
            slowMo: 1000,
        },
        headless: true,
        viewport: { width: 1920, height: 1080 },
    },

    projects: [
        {
            name: "chromium",
            use: { ...devices["Desktop Chrome"], baseURL: BASE_URL },
        },
    ],
});
