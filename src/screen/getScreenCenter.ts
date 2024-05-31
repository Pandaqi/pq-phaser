export const getScreenCenter = (scene:Phaser.Scene) =>
{
    const cam = scene.cameras.main;
    const anchor = new Phaser.Math.Vector2(cam.worldView.x, cam.worldView.y);
    const size = new Phaser.Math.Vector2(cam.width, cam.height);
    return anchor.add(size.scale(0.5));
}