let mediatype = "foodie";
let mediatypeTab = "filter";
let mediatypeTabResult = `${mediatype}://mediatype?tab=${mediatypeTab}`;

// 최초
$("#mediatypeValue").text(mediatypeTabResult).attr("href", mediatypeTabResult);
qrCode(".qr-mediatype", mediatypeTabResult);

// [Foodie.Edit.Merge] : Foodie
$("#mediatype").change(function () {
    const val = $(this).val();
    mediatype = val;
    mediatypeTabResult = `${mediatype}://mediatype?tab=${mediatypeTab}`;
    $("#mediatypeValue")
        .text(mediatypeTabResult)
        .attr("href", mediatypeTabResult);
    qrCode(".qr-mediatype", mediatypeTabResult);
});

// [Foodie.Edit.Merge] : Tab
$("#mediatypeTab").change(function () {
    const val = $(this).val();
    mediatypeTab = val;
    mediatypeTabResult = `${mediatype}://mediatype?tab=${mediatypeTab}`;
    $("#mediatypeValue")
        .text(mediatypeTabResult)
        .attr("href", mediatypeTabResult);
    qrCode(".qr-mediatype", mediatypeTabResult);
});

// qr 다운로드
$(".qr-mediatype-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, mediatypeTabResult);
});
