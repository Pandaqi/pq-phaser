// @ts-nocheck
export const getAdConsent = async () =>
{
    console.log("[AdMob] Requesting Consent (if needed)");
    const consentStatus = await consent.getConsentStatus()
    if (consentStatus === consent.ConsentStatus.Required) 
    {
        console.log("[AdMob] Consent Is Required");
        await consent.requestInfoUpdate()
    }

    console.log("[AdMob] Loading/Showing Consent Modal (if needed)");
    await consent.loadAndShowIfRequired()

    console.log("[AdMob] Checking if it can start requesting ads");
    if (await consent.canRequestAds()) 
    {
        console.log("[AdMob] Consent Received; Start Showing");
        return true;
    }
    return false;
}