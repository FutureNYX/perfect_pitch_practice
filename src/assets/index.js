function importAll(files) {
    let noteDict = {};
    files.keys().map(item => {
      return noteDict[item.replace('./','').replace('.mp3','')] = files(item);
    });
    return noteDict;
}

const noteDict = importAll(require.context('./piano-mp3', false, /\.mp3$/));

// <img src={notes['0.png']} />

module.exports = noteDict