import "jest";
import { getProjects, Project } from "../utils/get-projects";
import fetch from "node-fetch";

describe("Projects are loaded from github correctly", () => {
    let projects: Project[];
    beforeAll(() => getProjects().then(projs => projects = projs))

    it("gets a title for every repo", () => {
        projects.forEach((proj) => {
            expect(proj.title).toBeDefined();
        })        
    });

    it("has languages for each project", () => {
        projects.forEach((proj) => {
            expect(proj.languages).not.toHaveLength(0);
        });
    });

    it("has correct language statistics for each project", () => {
        projects.forEach((proj) => {
            // Checks that sum is greater than 99% at least (very generous precision boundary)
            expect(proj.languagePercentages.reduce((a,b) => a +b)).toBeGreaterThan(99)
        });
    });

    it("has languages and statistics have same length", () => {
        projects.forEach((proj) => {
            expect(proj.languages).toHaveLength(proj.languagePercentages.length);
        });
    });

})