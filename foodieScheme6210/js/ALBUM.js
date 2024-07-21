let album = "foodie";
let albumTab = "batch";
let albumTabResult = `${album}://album?tab=${albumTab}`;

// 최초
$("#albumValue").text(albumTabResult).attr("href", albumTabResult);
qrCode(".qr-album", albumTabResult);

// [Foodie.Edit.Merge] : Foodie
$("#album").change(function () {
    const val = $(this).val();
    album = val;
    albumTabResult = `${album}://album?tab=${albumTab}`;
    $("#albumValue").text(albumTabResult).attr("href", albumTabResult);
    qrCode(".qr-album", albumTabResult);
});

// [Foodie.Edit.Merge] : Tab
$("#albumTab").change(function () {
    const val = $(this).val();
    albumTab = val;
    albumTabResult = `${album}://album?tab=${albumTab}`;
    $("#albumValue").text(albumTabResult).attr("href", albumTabResult);
    qrCode(".qr-album", albumTabResult);
});

// qr 다운로드
$(".qr-album-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, albumTabResult);
});
