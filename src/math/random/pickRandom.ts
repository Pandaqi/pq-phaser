export const pickRandom = (arr:any[]) =>
{
    return arr[Math.floor(Math.random() * arr.length)];
}