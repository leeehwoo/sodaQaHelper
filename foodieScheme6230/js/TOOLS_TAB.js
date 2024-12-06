let toolTab = "foodie";
let toolTabSelect = "filter";
let toolTabSelectKey = "선택";
let toolTabSelectResult = `${toolTab}://pick?tab=${toolTabSelect}`;

// 최초
$("#toolTabValue")
    .text(toolTabSelectResult)
    .attr("href", toolTabSelectResult);
qrCode(".qr-toolTab", toolTabSelectResult);

// [Foodie.Edit.Merge] : Foodie
$("#toolTab").change(function () {
    const val = $(this).val();
    toolTab = val;

    if (toolTabSelect === "tool") {
        toolTabSelectResult = `${toolTab}://pick?tab=${toolTabSelect}&adjustKeyName=${toolTabSelectKey}`;
    } else {
        toolTabSelectResult = `${toolTab}://pick?tab=${toolTabSelect}`;
    }

    $("#toolTabValue")
        .text(toolTabSelectResult)
        .attr("href", toolTabSelectResult);
    qrCode(".qr-toolTab", toolTabSelectResult);
});

// [Foodie.Edit.Merge] : Tab
$("#toolTabSelect").change(function () {
    const val = $(this).val();
    if (val === "adjustment") {
        $(".hidden2").show();
        toolTabSelect = val;
        toolTabSelectResult = `${toolTab}://pick?tab=${toolTabSelect}`;
    } else {
        $(".hidden2").hide();
        toolTabSelect = val;
        toolTabSelectResult = `${toolTab}://pick?tab=${toolTabSelect}`;
    }

    $("#toolTabValue")
        .text(toolTabSelectResult)
        .attr("href", toolTabSelectResult);
    qrCode(".qr-toolTab", toolTabSelectResult);
});

// [Foodie.Edit.Merge] : Tab
$("#toolTabSelectKey").change(function () {
    const val = $(this).val();
    toolTabSelectKey = val;

    if (toolTabSelectKey === "선택") {
        toolTabSelectResult = `${toolTab}://pick?tab=${toolTabSelect}`;
    } else {
        toolTabSelectResult = `${toolTab}://pick?tab=${toolTabSelect}&adjustKeyName=${toolTabSelectKey}`;
    }

    $("#toolTabValue")
        .text(toolTabSelectResult)
        .attr("href", toolTabSelectResult);
    qrCode(".qr-toolTab", toolTabSelectResult);
});

// qr 다운로드
$(".qr-toolTab-link").click(function (e) {
    e.preventDefault();
    const imgURL = $(this).prev("div").find("img").attr("src");
    imgDownload(imgURL, toolTabSelectResult);
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
