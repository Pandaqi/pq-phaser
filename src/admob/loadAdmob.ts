import { getAdConsent } from "./getAdConsent";

export const loadAdmob = (callback:Function, askConsent = false) =>
{
    document.addEventListener('deviceready', async () => 
    {
        console.log("[Cordova] Device Ready");

        if(askConsent)
        {
            const success = await getAdConsent();
            if(!success) { console.log("[AdMob] No consent for ads, abort."); return; }        
        }

        // @ts-ignore
        await admob.start();

        callback();
    }, false)
}

