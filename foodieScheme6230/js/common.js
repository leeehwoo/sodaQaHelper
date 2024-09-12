// QR코드
function qrCode(el, text) {
    $(el).empty();
    $(el).qrcode({
        render: "image",
        text,
        size: 80,
    });
}

// 다운로드
function imgDownload(imageURL, fileName) {
    var img = new Image();
    img.crossOrigin = "Anonymous";
    img.id = "getshot";
    img.src = imageURL;
    document.body.appendChild(img);

    var a = document.createElement("a");
    a.href = getshot.src;
    a.download = fileName;
    a.click();
    document.body.removeChild(img);
}

// 최초
function linkQr(el, qrEl, result) {
    $(el).text(result).attr("href", result);

    qrCode(qrEl, result);
}

$(function () {
    $(".nav-item").on("click", function (e) {
        e.preventDefault();
        const el = $(this).attr("href");

        $(".nav-item").removeClass("active");
        $(this).addClass("active");
        $(".tab-content").hide();
        $(el).show();
    });
});
