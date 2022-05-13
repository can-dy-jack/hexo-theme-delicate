delicate.boot = {}

delicate.boot.init_markdown = function init_markdown(){
    delicate.markdown.collapse();
    delicate.markdown.init_codeCopy();
}

delicate.boot.registerEvents  = function registerEvents() {
    const start_time = document.getElementById("start-time");
    delicate.events.calculateTime(start_time.textContent || "2022-05-01T00:00:00");
    delicate.events.registerType();
    delicate.events.registerPhoneToc();
    delicate.events.registerFriendsMore();
}

document.addEventListener('DOMContentLoaded', function() {
    window.onscroll = tocTransfrom;
    tocTransfrom();
    delicate.boot.init_markdown();
    delicate.boot.registerEvents();
});
