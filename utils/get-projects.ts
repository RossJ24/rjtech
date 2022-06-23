import cheerio from "cheerio";
const GH = "https://github.com";
const PERSONAL_GH = "https://github.com/RossJ24?tab=repositories";
const YES_GH = "https://github.com/yesatyaleTech?tab=repositories";

// A type representing the team 
export type Project = {
    title: string,
    github: string,
    languages: string[],
    languagePercentages: number[],
    description: string | undefined | null,
}

/**
 * Scrapes projects from github and filters them if there are any errors.
 * 
 * @returns An array of successfully fetched projects
 */
export const getProjects = async () => {
    try {
        const projectURLs = await getProjectURLs();
        return await Promise.all(projectURLs
            .map(async (url) => { return await scrapeRepo(url) })
            .filter((ele) => ele != null));

    } catch (err) {
        console.log(err);
        return [];
    }
}

/**
 * Gets the repository links from a github account page.
 * 
 * @param ghLink a string representing the url to a github account
 * @returns 
 */
const getRepos = async (ghLink: string): Promise<string[]> => {
    const response = await fetch(ghLink)
    const htmlString = await response.text();
    const $ = cheerio.load(htmlString);
    const searchQuery = '[itemprop="name codeRepository"]';
    const repolist = $(searchQuery)
    const links: [string?] = [];
    repolist.each((_, ele) => links.push($(ele).attr('href')))
    return links;
}

/**
 * Fetches repository urls from all github accounts I manage, 
 * combines them, and then shuffles them
 * 
 * @returns a shuffled array of project repositories from all github accounts I manage
 */
const getProjectURLs = async (): Promise<string[]> => {
    let personalRepos = await getRepos(PERSONAL_GH);
    shuffle(personalRepos);
    return personalRepos;
}

/**
 * Performs an in-place shuffle of the passed in array 
 * 
 * @param arr an array of github repository urls
 */
const shuffle = (arr: string[]) => {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
    }
}

/**
 * Gets the title of the repository
 * 
 * @param $ a cheerio root for performing html document queries
 * @returns 
 */
const getRepoTitle = ($: cheerio.Root): string => {
    const searchQuery = '#readme > div.Box-body.px-5.pb-5 > article > h1';
    return $(searchQuery).text();
}

/**
 * Gets languages used in the repository 
 * 
 * @param $ a cheerio root for performing html document queries
 * @returns languages an array of the languages used
 */
const getRepoLanguages = ($: cheerio.Root): string[] => {
    const searchQuery = '.color-fg-default.text-bold.mr-1'
    const languages: string[] = [];
    $(searchQuery).each((_, ele) => languages.push($(ele).text()));
    return languages;
}

/**
 * Gets the percentage of each language used in the repository
 * 
 * @param $ a cheerio root for performing html document queries
 * @returns amounts an array representing the amount the language was used/
 */
const getRepoLanguageAmounts = ($: cheerio.Root): number[] => {
    const searchQuery = '.d-inline > a > span:nth-child(3)';
    const amounts: string[] = [];
    $(searchQuery).each((_, ele) => amounts.push($(ele).text()));
    return amounts
        .map((ele) => { return ele.replace("%", "") })
        .map((ele) => { return parseFloat(ele) })

}

/**
 * Gets a short description from the README.md file in the repository
 * 
 * @param $ a cheerio root for performing html document queries
 * @returns a description of the repository
 */
const getRepoDescription = ($: cheerio.Root): string => {
    const searchQuery = '#readme > div.Box-body.px-5.pb-5 > article > p:nth-child(2)';
    return $(searchQuery).text();
}

/**
 * Scrapes the repository and gets all required details
 * 
 * @param repoPath a string representing the url to the github repository
 * @returns an object representing a project
 */
const scrapeRepo = async (repoPath: string): Promise<Project> => {
    try {
        const repoURL = GH + repoPath;
        const response = await fetch(repoURL);
        const htmlString = await response.text();
        const $ = cheerio.load(htmlString);
        const repoTitle = getRepoTitle($);
        const repoLanguages = getRepoLanguages($);
        const repoLanguageAmounts = getRepoLanguageAmounts($);
        const repoDescription = getRepoDescription($);
        return {
            title: repoTitle,
            github: repoURL,
            languages: repoLanguages,
            languagePercentages: repoLanguageAmounts,
            description: repoDescription
        }
    } catch (err) {
        console.log(err);
        return null;
    }
}
