import { popUpTween } from "./popUpTween"

export const popUpTweenSequence = (objects:any[], scaleFactor = 1.2, duration = 250, delay = 80) =>
{
    let delayTotal = 0;
    for(const obj of objects)
    {
        popUpTween(obj, scaleFactor, duration, delayTotal);
        delayTotal += delay;
    }
}