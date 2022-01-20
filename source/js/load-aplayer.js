document.addEventListener("DOMContentLoaded", function() {
    let apContainer = document.createElement("div");
    apContainer.id = "aplayer";
    document.body.append(apContainer);
    const ap = new APlayer({
        container: document.getElementById("aplayer"),
        fixed: true,
        audio: [{
            name: "春物",
            artist: "雪之下雪乃",
            url: "https://raw.githubusercontent.com/zizhaolaisuimuqu/zizhaolaisuimuqu.github.io/hexo/themes/yun/source/%E3%82%84%E3%81%AA%E3%81%8E%E3%81%AA%E3%81%8E%20-%20%E6%98%A5%E6%93%AC%E3%81%8D.mp3",
            cover: "https://raw.githubusercontent.com/zizhaolaisuimuqu/zizhaolaisuimuqu.github.io/hexo/themes/yun/source/Yukino.png",
        }, ],
    });
});