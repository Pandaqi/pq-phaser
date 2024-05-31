export const getScreenSize = (scene:Phaser.Scene) =>
{
    return new Phaser.Math.Vector2(scene.sys.game.canvas.width, scene.sys.game.canvas.height);
}