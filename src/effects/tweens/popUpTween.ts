export const popUpTween = (obj:Phaser.GameObjects.Image|Phaser.GameObjects.Sprite|Phaser.GameObjects.Text, scaleFactor = 1.2, duration = 250, delay = 0.0) =>
{
    const oldScale = obj.scaleX;
    const newScale = oldScale * scaleFactor;
    obj.scene.tweens.add({
        targets: obj,
        scale: { from: newScale, to: oldScale },
        duration: duration,
        delay: delay,
        repeat: 0
    });
}