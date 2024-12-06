let tools = "foodie";
let toolsSelect = "filter";
let toolsSelectKey = "enhance";
let toolsSelectResult = `${tools}://pick?tab=${toolsSelect}`;

// 최초
$("#toolsValue").text(toolsSelectResult).attr("href", toolsSelectResult);
qrCode(".qr-tools", toolsSelectResult);

// [Foodie.Edit.Merge] : Foodie
$("#tools").change(function () {
    const val = $(this).val();
    tools = val;

    if (toolsSelect === "tools") {
        toolsSelectResult = `${tools}://pick?tab=${toolsSelect}&toolsKeyname=${toolsSelectKey}`;
    } else {
        toolsSelectResult = `${tools}://pick?tab=${toolsSelect}`;
    }

    $("#toolsValue").text(toolsSelectResult).attr("href", toolsSelectResult);
    qrCode(".qr-tools", toolsSelectResult);
});

// [Foodie.Edit.Merge] : Tab
$("#toolsSelect").change(function () {
    const val = $(this).val();
    if (val === "tools") {
        $(".hidden").show();
        toolsSelect = val;
        toolsSelectResult = `${tools}://pick?tab=${toolsSelect}&toolsKeyname=${toolsSelectKey}`;
    } else {
        $(".hidden").hide();
        toolsSelect = val;
        toolsSelectResult = `${tools}://pick?tab=${toolsSelect}`;
    }

    $("#toolsValue").text(toolsSelectResult).attr("href", toolsSelectResult);
    qrCode(".qr-tools", toolsSelectResult);
});

// [Foodie.Edit.Merge] : Tab
$("#toolsSelectKey").change(function () {
    const val = $(this).val();
    toolsSelectKey = val;
    toolsSelectResult = `${tools}://pick?tab=${toolsSelect}&toolsKeyname=${toolsSelectKey}`;
    $("#toolsValue").text(toolsSelectResult).attr("href", toolsSelectResult);
    qrCode(".qr-tools", toolsSelectResult);
});

// qr 다운로드
$(".qr-tools-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, toolsSelectResult);
});

// 캡쳐된 파일을 저장하는 함수
function saveImg(uri, filename) {
    var link = document.createElement("a");
    if (typeof link.download === "string") {
        link.href = uri;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        window.open(uri);
    }
}

$(".handleImgDown").click(function () {
    const element = $(this).data("id");
    const dataName = $(this).data("name");
    // 캡쳐할 영역을 html2canvas로 캡쳐하여 canvas로 변환
    html2canvas(document.querySelector(`#${element}`)).then((canvas) => {
        saveImg(canvas.toDataURL("image/jpg"), `${dataName}.png`);
    });
});
