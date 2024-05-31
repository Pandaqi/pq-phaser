export const drawRandomWeighted = (dict:Record<string,any>, prop = "prob") : string =>
{
    // get total prob
    let sum = 0;
    for(const [key,data] of Object.entries(dict))
    {
        sum += data[prop] ?? 1;
    }

    // safety checks
    const keys = Object.keys(dict);
    if(keys.length <= 0)
    {
        console.error("Can't draw random from dictionary with no entries.");
        return "";
    }

    // while we're below some threshold, keep adding an entry's prob and see if we exceed it
    const threshold = Math.random();
    const unit = 1.0 / sum;

    let total = 0;
    let counter = 0;
    let finalKey = keys[0];

    while(total <= threshold)
    {
        finalKey = keys[counter];
        total += (dict[finalKey][prop] ?? 1) * unit;
        counter++;
    }

    return finalKey;
}