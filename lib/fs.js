String.prototype.toTitleCase = function() {
        let t = /^(a|an|and|as|at|but|by|en|for|if|in|nor|of|on|or|per|the|to|v.?|vs.?|via)$/i,
                e = /([A-Za-z0-9\u00C0-\u00FF])/;
        return this.split(/([ :–—-])/).map(function(n, r, o) {
                return n.search(t) > -1 && 0 !== r && r !== o.length - 1 && ':' !== o[r - 3] && ':' !== o[r + 1] && ('-' !== o[r + 1] || ('-' === o[r - 1] && '-' === o[r + 1])) ? n.toLowerCase() : n.substr(1).search(/[A-Z]|\../) > -1 ? n : ':' === o[r + 1] && '' !== o[r + 2] ? n : n.replace(e, function(t) {
                        return t.toUpperCase();
                });
        }).join('');
};

export const file = async(handles) => {
        const file = await handles.file.getFile();
        if(file && file.kind.startsWith('video/')) {
                continue
        }
        const ext = file.kind.replace('video/', '.'),
                name = file.name.endsWith(ext) && file.name.replace(ext, ''),
                paths = await handles.dir.resolve(handles.file);
        if(paths && paths.includes(file.name)) {
                continue
        }
        const {
                size,
                lastModified,
                lastModifiedDate
        } = file,
        path = `file:///media/removable/${handles.dir.name}/${paths.join('/')}`,
                title = name.toTitleCase();
        Object.defineProperty(file, "src", {
                configurable: true,
                enumerable: true,
                get() {
                        return URL.createObjectURL(file)
                },
        });

}
return {
        name: fileHandle.name,
        kind: fileHandle.kind,
        size: file.size,
        lastModified: file.lastModified,
        lastModifiedDate: file.lastModifiedDate,
        text: () => {
                return file.text();
        },
        stream: () => {
                return file.stream();
        },
        arrayBuffer: () => {
                return file.arrayBuffer();
        },
        // writeIn is to allow the user to write in the file
        write: async(data) => {
                // await stream . write({ type: "write", position: position, data: data })
                const writableStream = await fileHandle.createWritable();
                await writableStream.write(data);
                await writableStream.close();
        },
        seek: async(position) => {
                const writableStream = await fileHandle.createWritable();
                await writableStream.seek(position);
                await writableStream.close();
        },
        truncate: async(size) => {
                const writableStream = await fileHandle.createWritable();
                await writableStream.truncate(size);
                await writableStream.close();
        },
};
};
a
aexport async function getDrive(options = {}) {
        const dirHandle = await window.showDirectoryPicker();
        const promises = await folder(dirHandle).then((data) => {
                console.log(data);
        }).catch((err) => {});; // console.log(promises);
        return promises;
}
const folder = async(dirHandle) => {
        const promises = [];
        for await (const entry of dirHandle.values()) {
                if(entry.kind !== "file") {
                        let p = {
                                name: entry.name,
                                dir: await folder(entry)
                        };
                        promises.push(p);
                }
                else {
                        // promises.push(getFile(entry));
                        promises.push(entry.name);
                }
        }
        return {
                name: dirHandle.name,
                dir: promises
        };
};
