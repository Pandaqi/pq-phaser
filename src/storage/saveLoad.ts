enum StorageUpdateType
{
    ALWAYS,
    HIGHER,
    LOWER,
    NEVER, // mostly easy on/off debugging purposes
}

type StorageData = Record<string,any>
class SaveLoad
{
    data:StorageData
    storageKey:string

    constructor(key:string)
    {
        this.storageKey = key;
        this.load();
    }

    load()
    {
        this.data = JSON.parse(localStorage.getItem(this.storageKey) ?? "{}");
    }

    save()
    {
        localStorage.setItem(this.storageKey, JSON.stringify(this.data));
    }

    get() : StorageData
    {
        return this.data;
    }

    getKey(key:string)
    {
        return this.data[key as keyof StorageData] ?? 0;
    }

    set(key:string, newVal:any, ut:StorageUpdateType = StorageUpdateType.HIGHER)
    {
        if(ut == StorageUpdateType.NEVER) { return; }

        const curVal = this.getKey(key);
        if(ut == StorageUpdateType.HIGHER) {
            newVal = Math.max(curVal, newVal);
        } else if(ut == StorageUpdateType.LOWER) {
            newVal = Math.min(curVal, newVal);
        }

        this.data[key as keyof StorageData] = newVal;
    }

    clear()
    {
        localStorage.removeItem(this.storageKey);
    }
}

export { StorageUpdateType, SaveLoad }