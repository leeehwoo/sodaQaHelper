let FICZITake = "foodie";
let FICZITakeMode = "film";
let FICZITakeCameraPosition = "0";
let FICZITakeModeResult = `${FICZITake}://go?tab=zoom&takemode=${FICZITakeMode}&cameraPosition=${FICZITakeCameraPosition}`;

// 최초
$("#FICZITakeValue")
    .text(FICZITakeModeResult)
    .attr("href", FICZITakeModeResult);
qrCode(".qr-FICZITake", FICZITakeModeResult);

// [Foodie.Edit.Merge] : Foodie
$("#FICZITake").change(function () {
    const val = $(this).val();
    FICZITake = val;
    FICZITakeModeResult = `${FICZITake}://go?tab=zoom&takemode=${FICZITakeMode}&cameraPosition=${FICZITakeCameraPosition}`;
    $("#FICZITakeValue")
        .text(FICZITakeModeResult)
        .attr("href", FICZITakeModeResult);
    qrCode(".qr-FICZITake", FICZITakeModeResult);
});

// [Foodie.Edit.Merge] : Tab
$("#FICZITakeMode").change(function () {
    const val = $(this).val();
    FICZITakeMode = val;
    FICZITakeModeResult = `${FICZITake}://go?tab=zoom&takemode=${FICZITakeMode}&cameraPosition=${FICZITakeCameraPosition}`;
    $("#FICZITakeValue")
        .text(FICZITakeModeResult)
        .attr("href", FICZITakeModeResult);
    qrCode(".qr-FICZITake", FICZITakeModeResult);
});

// [Foodie.Edit.Merge] : Tab
$("#FICZITakeCameraPosition").change(function () {
    const val = $(this).val();
    FICZITakeCameraPosition = val;
    FICZITakeModeResult = `${FICZITake}://go?tab=zoom&takemode=${FICZITakeMode}&cameraPosition=${FICZITakeCameraPosition}`;
    $("#FICZITakeValue")
        .text(FICZITakeModeResult)
        .attr("href", FICZITakeModeResult);
    qrCode(".qr-FICZITake", FICZITakeModeResult);
});

// qr 다운로드
$(".qr-FICZITake-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, FICZITakeModeResult);
});
