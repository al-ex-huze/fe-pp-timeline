export const parseStamptoWeekNumber: any = (timestamp) => {
    const formattedWeekNumber = new Intl.DateTimeFormat("en-US", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    }).format(timestamp);
    const splitArr = formattedWeekNumber.split("/")
    const parsedWeekNumber : string[] = []
    let toRemoveTimeStrSplitArr : string[] =[]
    toRemoveTimeStrSplitArr = splitArr[2].split(",")
    parsedWeekNumber.push(splitArr[1])
    parsedWeekNumber.push("-")
    parsedWeekNumber.push(toRemoveTimeStrSplitArr[0])
    let weekNumberStr = parsedWeekNumber.join("");
    return weekNumberStr
};
