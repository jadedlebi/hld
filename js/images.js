function getImages(map) {
    document.getElementById('logo').innerHTML = 
        "<img src='https://raw.githubusercontent.com/jadedlebi/hld/main/images/ncrc-logo.png' style='width:200px; height:auto;'>";

    const hatches = [
        "https://raw.githubusercontent.com/jadedlebi/hld/main/images/grade-a.png",
        "https://raw.githubusercontent.com/jadedlebi/hld/main/images/grade-b.png",
        "https://raw.githubusercontent.com/jadedlebi/hld/main/images/grade-c.png",
        "https://raw.githubusercontent.com/jadedlebi/hld/main/images/grade-d.png"
    ];

    function loadAndAddImage(imageUrl, imageName, map) {
        map.loadImage(imageUrl, (error, image) => {
            if (error) {
                console.error('Error loading image:', error);
                return;
            }
            map.addImage(imageName, image);
        });
    }

    hatches.forEach((url, index) => {
        const imageName = `hatch-${index}`;
        loadAndAddImage(url, imageName, map);
    });
}
