const programmiWindows = {
    "tab" : ["Facebook", "GitHub", "Gmail", "youtube"],
    "activeTab": 0
}

const social = ['favebook', 'youtube']


programmiWindows.tab = programmiWindows.tab.filter((element) => {
    if (!social.includes (element.toLowerCase())){
        return true
    }
});
console.log(programmiWindows)