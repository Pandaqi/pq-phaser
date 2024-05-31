export class Bounds
{
    min: number;
    max: number;

    constructor(min:number, max:number)
    {
        this.min = min;
        this.max = max;
    }

    lerp(f:number)
    {
        return this.min + f * (this.max - this.min);
    }

    random()
    {
        return this.lerp(Math.random());
    }

    randomInteger()
    {
        return Math.floor(this.min + Math.random() * (this.max + 1 - this.min));
    }

    average()
    {
        return 0.5*(this.min + this.max);
    }
}