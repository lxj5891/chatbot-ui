interface HelpLimit {
    [key: string]: string | undefined;
}

export const getLimit = (helpLimit: HelpLimit) => {
    console.log('helpLimit: ', helpLimit)
    return 10
};