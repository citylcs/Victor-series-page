document.onreadystatechange = completeLoading;
function completeLoading() {
    if (document.readyState === "complete") {
        let loadingMask = $('#loadingDiv');
        loadingMask.fadeOut('fast');
    }
}