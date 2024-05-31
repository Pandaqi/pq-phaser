export const showBanner = async (id:string) =>
{
    console.log("[AdMob] Should load banner with id ", id);

    // @ts-ignore
    const banner = new admob.BannerAd({
        adUnitId: id,
        npa: '1', // non-personalized-ads only
    })

    console.log("[AdMob] Banner Created", banner);
    banner.on("load", async (ev:any) => {
        console.log("[AdMob] Banner Loaded", ev);
    })

    banner.on("loadfail", async (ev:any) => {
        console.log("[AdMob] Banner failed to load", ev);
    })
    
    /*banner.on('impression', async (ev) => {
        await banner.hide()
    })*/
    
    await banner.show();

    return banner;
};