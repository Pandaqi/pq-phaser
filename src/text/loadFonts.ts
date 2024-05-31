interface FontData
{
    path: string
}

const loadFont = async (name:string, url:string) => 
{
    const newFont = new FontFace(name, `url(${url})`);
    await newFont.load();
    // @ts-ignore
    document.fonts.add(newFont);
}

export const loadFonts = async (fontData:Record<string,FontData>) =>
{
    const promises = [];
    for(const [key,data] of Object.entries(fontData))
    {
        promises.push( loadFont(key, data.path) );
    }
    return await Promise.all(promises);
}