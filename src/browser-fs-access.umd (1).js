(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.browserFsAccess = {}));
})(this, (function (exports) {
  /**
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  // @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.

  /**
   * Returns whether the File System Access API is supported and usable in the
   * current context (for example cross-origin iframes).
   * @returns {boolean} Returns `true` if the File System Access API is supported and usable, else returns `false`.
   */
  var supported = function () {
    // When running in an SSR environment return `false`.
    if (typeof self === 'undefined') {
      return false;
    } // ToDo: Remove this check once Permissions Policy integration
    // has happened, tracked in
    // https://github.com/WICG/file-system-access/issues/245.


    if ('top' in self && self !== top) {
      try {
        // This will succeed on same-origin iframes,
        // but fail on cross-origin iframes.
        top.location + '';
      } catch (_unused) {
        return false;
      }
    }

    if ('showOpenFilePicker' in self) {
      return true;
    }

    return false;
  }();

  /**
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
   * For opening files, dynamically either loads the File System Access API module
   * or the legacy method.
   */
  var fileOpen$4 = function fileOpen() {
    try {
      var _arguments2 = arguments;
      return Promise.resolve(implementation$2).then(function (_implementation) {
        return _implementation["default"].apply(_implementation, [].slice.call(_arguments2));
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };
  var implementation$2 = supported ? Promise.resolve().then(function () { return fileOpen$3; }) : Promise.resolve().then(function () { return fileOpen$1; });

  /**
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
   * For opening directories, dynamically either loads the File System Access API
   * module or the legacy method.
   */
  var directoryOpen$4 = function directoryOpen() {
    try {
      var _arguments2 = arguments;
      return Promise.resolve(implementation$1).then(function (_implementation) {
        return _implementation["default"].apply(_implementation, [].slice.call(_arguments2));
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };
  var implementation$1 = supported ? Promise.resolve().then(function () { return directoryOpen$3; }) : Promise.resolve().then(function () { return directoryOpen$1; });

  /**
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  /**
   * For saving files, dynamically either loads the File System Access API module
   * or the legacy method.
   */
  var fileSave$4 = function fileSave() {
    try {
      var _arguments2 = arguments;
      return Promise.resolve(implementation).then(function (_implementation) {
        return _implementation["default"].apply(_implementation, [].slice.call(_arguments2));
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };
  var implementation = supported ? Promise.resolve().then(function () { return fileSave$3; }) : Promise.resolve().then(function () { return fileSave$1; });

  /**
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  // @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
  var getFileWithHandle = function getFileWithHandle(handle) {
    try {
      return Promise.resolve(handle.getFile()).then(function (file) {
        file.handle = handle;
        return file;
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };
  /**
   * Opens a file from disk using the File System Access API.
   * @type { typeof import("../../index").fileOpen }
   */


  var fileOpen$2 = (function (options) {
    if (options === void 0) {
      options = [{}];
    }

    try {
      if (!Array.isArray(options)) {
        options = [options];
      }

      var types = [];
      options.forEach(function (option, i) {
        types[i] = {
          description: option.description || 'Files',
          accept: {}
        };

        if (option.mimeTypes) {
          option.mimeTypes.map(function (mimeType) {
            types[i].accept[mimeType] = option.extensions || [];
          });
        } else {
          types[i].accept['*/*'] = option.extensions || [];
        }
      });
      return Promise.resolve(window.showOpenFilePicker({
        id: options[0].id,
        startIn: options[0].startIn,
        types: types,
        multiple: options[0].multiple || false,
        excludeAcceptAllOption: options[0].excludeAcceptAllOption || false
      })).then(function (handleOrHandles) {
        return Promise.resolve(Promise.all(handleOrHandles.map(getFileWithHandle))).then(function (files) {
          return options[0].multiple ? files : files[0];
        });
      });
    } catch (e) {
      return Promise.reject(e);
    }
  });

  var fileOpen$3 = {
    __proto__: null,
    'default': fileOpen$2
  };

  function _asyncIterator(iterable) {
    var method,
        async,
        sync,
        retry = 2;

    for ("undefined" != typeof Symbol && (async = Symbol.asyncIterator, sync = Symbol.iterator); retry--;) {
      if (async && null != (method = iterable[async])) return method.call(iterable);
      if (sync && null != (method = iterable[sync])) return new AsyncFromSyncIterator(method.call(iterable));
      async = "@@asyncIterator", sync = "@@iterator";
    }

    throw new TypeError("Object is not async iterable");
  }

  function AsyncFromSyncIterator(s) {
    function AsyncFromSyncIteratorContinuation(r) {
      if (Object(r) !== r) return Promise.reject(new TypeError(r + " is not an object."));
      var done = r.done;
      return Promise.resolve(r.value).then(function (value) {
        return {
          value: value,
          done: done
        };
      });
    }

    return AsyncFromSyncIterator = function (s) {
      this.s = s, this.n = s.next;
    }, AsyncFromSyncIterator.prototype = {
      s: null,
      n: null,
      next: function () {
        return AsyncFromSyncIteratorContinuation(this.n.apply(this.s, arguments));
      },
      return: function (value) {
        var ret = this.s.return;
        return void 0 === ret ? Promise.resolve({
          value: value,
          done: !0
        }) : AsyncFromSyncIteratorContinuation(ret.apply(this.s, arguments));
      },
      throw: function (value) {
        var thr = this.s.return;
        return void 0 === thr ? Promise.reject(value) : AsyncFromSyncIteratorContinuation(thr.apply(this.s, arguments));
      }
    }, new AsyncFromSyncIterator(s);
  }

  function _settle(pact, state, value) {
    if (!pact.s) {
      if (value instanceof _Pact) {
        if (value.s) {
          if (state & 1) {
            state = value.s;
          }

          value = value.v;
        } else {
          value.o = _settle.bind(null, pact, state);
          return;
        }
      }

      if (value && value.then) {
        value.then(_settle.bind(null, pact, state), _settle.bind(null, pact, 2));
        return;
      }

      pact.s = state;
      pact.v = value;
      var observer = pact.o;

      if (observer) {
        observer(pact);
      }
    }
  }

  /**
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  // @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.
  var getFiles = function getFiles(dirHandle, recursive, path, skipDirectory) {
    try {
      var _temp7 = function _temp7(_result) {
        return _exit2 ? _result : Promise.resolve(Promise.all(dirs)).then(function (_Promise$all) {
          var _Promise$all$flat = _Promise$all.flat();

          return Promise.resolve(Promise.all(files)).then(function (_Promise$all2) {
            return [].concat(_Promise$all$flat, _Promise$all2);
          });
        });
      };

      var _exit2;

      if (path === undefined) path = dirHandle.name;
      var dirs = [];
      var files = [];
      var _iteratorAbruptCompletion = false;
      var _didIteratorError = false;

      var _iteratorError;

      var _temp8 = _finallyRethrows(function () {
        return _catch$1(function () {
          var _iterator = _asyncIterator(dirHandle.values()),
              _step;

          var _temp = _for(function () {
            return Promise.resolve(_iterator.next()).then(function (_iterator$next) {
              return _iteratorAbruptCompletion = !(_step = _iterator$next).done;
            });
          }, function () {
            return !!(_iteratorAbruptCompletion = false);
          }, function () {
            var entry = _step.value;
            var nestedPath = path + "/" + entry.name;

            if (entry.kind === 'file') {
              files.push(entry.getFile().then(function (file) {
                file.directoryHandle = dirHandle;
                file.handle = entry;
                return Object.defineProperty(file, 'webkitRelativePath', {
                  configurable: true,
                  enumerable: true,
                  get: function get() {
                    return nestedPath;
                  }
                });
              }));
            } else if (entry.kind === 'directory' && recursive && (!skipDirectory || !skipDirectory(entry))) {
              dirs.push(getFiles(entry, recursive, nestedPath, skipDirectory));
            }
          });

          if (_temp && _temp.then) return _temp.then(function () {});
        }, function (err) {
          _didIteratorError = true;
          _iteratorError = err;
        });
      }, function (_wasThrown, _result) {
        function _temp4(_result2) {
          if (_exit2) return _result2;
          if (_wasThrown) throw _result;
          return _result;
        }

        var _temp3 = _finallyRethrows(function () {
          var _temp2 = function () {
            if (_iteratorAbruptCompletion && _iterator["return"] != null) {
              return Promise.resolve(_iterator["return"]()).then(function () {});
            }
          }();

          if (_temp2 && _temp2.then) return _temp2.then(function () {});
        }, function (_wasThrown2, _result2) {
          if (_didIteratorError) {
            throw _iteratorError;
          }

          if (_wasThrown2) throw _result2;
          return _result2;
        });

        return _temp3 && _temp3.then ? _temp3.then(_temp4) : _temp4(_temp3);
      });

      return Promise.resolve(_temp8 && _temp8.then ? _temp8.then(_temp7) : _temp7(_temp8));
    } catch (e) {
      return Promise.reject(e);
    }
  };
  /**
   * Opens a directory from disk using the File System Access API.
   * @type { typeof import("../index").directoryOpen }
   */


  const _Pact = /*#__PURE__*/function () {
    function _Pact() {}

    _Pact.prototype.then = function (onFulfilled, onRejected) {
      const result = new _Pact();
      const state = this.s;

      if (state) {
        const callback = state & 1 ? onFulfilled : onRejected;

        if (callback) {
          try {
            _settle(result, 1, callback(this.v));
          } catch (e) {
            _settle(result, 2, e);
          }

          return result;
        } else {
          return this;
        }
      }

      this.o = function (_this) {
        try {
          const value = _this.v;

          if (_this.s & 1) {
            _settle(result, 1, onFulfilled ? onFulfilled(value) : value);
          } else if (onRejected) {
            _settle(result, 1, onRejected(value));
          } else {
            _settle(result, 2, value);
          }
        } catch (e) {
          _settle(result, 2, e);
        }
      };

      return result;
    };

    return _Pact;
  }();

  function _isSettledPact(thenable) {
    return thenable instanceof _Pact && thenable.s & 1;
  }

  function _for(test, update, body) {
    var stage;

    for (;;) {
      var shouldContinue = test();

      if (_isSettledPact(shouldContinue)) {
        shouldContinue = shouldContinue.v;
      }

      if (!shouldContinue) {
        return result;
      }

      if (shouldContinue.then) {
        stage = 0;
        break;
      }

      var result = body();

      if (result && result.then) {
        if (_isSettledPact(result)) {
          result = result.s;
        } else {
          stage = 1;
          break;
        }
      }

      if (update) {
        var updateValue = update();

        if (updateValue && updateValue.then && !_isSettledPact(updateValue)) {
          stage = 2;
          break;
        }
      }
    }

    var pact = new _Pact();

    var reject = _settle.bind(null, pact, 2);

    (stage === 0 ? shouldContinue.then(_resumeAfterTest) : stage === 1 ? result.then(_resumeAfterBody) : updateValue.then(_resumeAfterUpdate)).then(void 0, reject);
    return pact;

    function _resumeAfterBody(value) {
      result = value;

      do {
        if (update) {
          updateValue = update();

          if (updateValue && updateValue.then && !_isSettledPact(updateValue)) {
            updateValue.then(_resumeAfterUpdate).then(void 0, reject);
            return;
          }
        }

        shouldContinue = test();

        if (!shouldContinue || _isSettledPact(shouldContinue) && !shouldContinue.v) {
          _settle(pact, 1, result);

          return;
        }

        if (shouldContinue.then) {
          shouldContinue.then(_resumeAfterTest).then(void 0, reject);
          return;
        }

        result = body();

        if (_isSettledPact(result)) {
          result = result.v;
        }
      } while (!result || !result.then);

      result.then(_resumeAfterBody).then(void 0, reject);
    }

    function _resumeAfterTest(shouldContinue) {
      if (shouldContinue) {
        result = body();

        if (result && result.then) {
          result.then(_resumeAfterBody).then(void 0, reject);
        } else {
          _resumeAfterBody(result);
        }
      } else {
        _settle(pact, 1, result);
      }
    }

    function _resumeAfterUpdate() {
      if (shouldContinue = test()) {
        if (shouldContinue.then) {
          shouldContinue.then(_resumeAfterTest).then(void 0, reject);
        } else {
          _resumeAfterTest(shouldContinue);
        }
      } else {
        _settle(pact, 1, result);
      }
    }
  }

  function _catch$1(body, recover) {
    try {
      var result = body();
    } catch (e) {
      return recover(e);
    }

    if (result && result.then) {
      return result.then(void 0, recover);
    }

    return result;
  }

  function _finallyRethrows(body, finalizer) {
    try {
      var result = body();
    } catch (e) {
      return finalizer(true, e);
    }

    if (result && result.then) {
      return result.then(finalizer.bind(null, false), finalizer.bind(null, true));
    }

    return finalizer(false, result);
  }

  var directoryOpen$2 = (function (options) {
    if (options === void 0) {
      options = {};
    }

    try {
      options.recursive = options.recursive || false;
      options.mode = options.mode || 'read';
      return Promise.resolve(window.showDirectoryPicker({
        id: options.id,
        startIn: options.startIn,
        mode: options.mode
      })).then(function (handle) {
        var _exit3;

        // If the directory is empty, return an array with the handle.
        return Promise.resolve(handle.values()).then(function (_handle$values) {
          return Promise.resolve(_handle$values.next()).then(function (_await$handle$values$) {
            if (_await$handle$values$.done) {
              var _temp10 = [handle];
              _exit3 = 1;
              return _temp10;
            }

            // Else, return an array of File objects.
            return getFiles(handle, options.recursive, undefined, options.skipDirectory);
          });
        });
      });
    } catch (e) {
      return Promise.reject(e);
    }
  });

  var directoryOpen$3 = {
    __proto__: null,
    'default': directoryOpen$2
  };

  /**
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  // @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.

  /**
   * Saves a file to disk using the File System Access API.
   * @type { typeof import("../../index").fileSave }
   */
  function _catch(body, recover) {
    try {
      var result = body();
    } catch (e) {
      return recover(e);
    }

    if (result && result.then) {
      return result.then(void 0, recover);
    }

    return result;
  }

  var fileSave$2 = (function (blobOrPromiseBlobOrResponse, options, existingHandle, throwIfExistingHandleNotGood, filePickerShown) {
    if (options === void 0) {
      options = [{}];
    }

    if (existingHandle === void 0) {
      existingHandle = null;
    }

    if (throwIfExistingHandleNotGood === void 0) {
      throwIfExistingHandleNotGood = false;
    }

    if (filePickerShown === void 0) {
      filePickerShown = null;
    }

    try {
      var _temp6 = function _temp6(_result2) {
        if (_exit3) return _result2;

        function _temp3(handle) {
          if (!existingHandle && filePickerShown) {
            filePickerShown(handle);
          }

          return Promise.resolve(handle.createWritable()).then(function (writable) {
            var _exit2;

            function _temp2(_result3) {
              if (_exit2) return _result3;
              var _write = writable.write;
              // Default case of `Blob` passed and `Blob.stream()` not supported.
              return Promise.resolve(blobOrPromiseBlobOrResponse).then(function (_blobOrPromiseBlobOrR) {
                return Promise.resolve(_write.call(writable, _blobOrPromiseBlobOrR)).then(function () {
                  return Promise.resolve(writable.close()).then(function () {
                    return handle;
                  });
                });
              });
            }

            var _temp = function () {
              if ('stream' in blobOrPromiseBlobOrResponse) {
                var stream = blobOrPromiseBlobOrResponse.stream();
                return Promise.resolve(stream.pipeTo(writable)).then(function () {
                  _exit2 = 1;
                  return handle; // Handle passed `ReadableStream`.
                });
              } else return function () {
                if ('body' in blobOrPromiseBlobOrResponse) {
                  return Promise.resolve(blobOrPromiseBlobOrResponse.body.pipeTo(writable)).then(function () {
                    _exit2 = 1;
                    return handle;
                  });
                }
              }();
            }();

            // Use streaming on the `Blob` if the browser supports it.
            return _temp && _temp.then ? _temp.then(_temp2) : _temp2(_temp);
          });
        }

        var _existingHandle = existingHandle;
        return _existingHandle ? _temp3(_existingHandle) : Promise.resolve(window.showSaveFilePicker({
          suggestedName: options[0].fileName,
          id: options[0].id,
          startIn: options[0].startIn,
          types: types,
          excludeAcceptAllOption: options[0].excludeAcceptAllOption || false
        })).then(_temp3);
      };

      var _exit3;

      if (!Array.isArray(options)) {
        options = [options];
      }

      options[0].fileName = options[0].fileName || 'Untitled';
      var types = [];
      var type = null;

      if (blobOrPromiseBlobOrResponse instanceof Blob && blobOrPromiseBlobOrResponse.type) {
        type = blobOrPromiseBlobOrResponse.type;
      } else if (blobOrPromiseBlobOrResponse.headers && blobOrPromiseBlobOrResponse.headers.get('content-type')) {
        type = blobOrPromiseBlobOrResponse.headers.get('content-type');
      }

      options.forEach(function (option, i) {
        types[i] = {
          description: option.description || 'Files',
          accept: {}
        };

        if (option.mimeTypes) {
          if (i === 0 && type) {
            option.mimeTypes.push(type);
          }

          option.mimeTypes.map(function (mimeType) {
            types[i].accept[mimeType] = option.extensions || [];
          });
        } else if (type) {
          types[i].accept[type] = option.extensions || [];
        } else {
          types[i].accept['*/*'] = option.extensions || [];
        }
      });

      var _temp7 = function () {
        if (existingHandle) {
          return _catch(function () {
            // Check if the file still exists.
            return Promise.resolve(existingHandle.getFile()).then(function () {});
          }, function (err) {
            existingHandle = null;

            if (throwIfExistingHandleNotGood) {
              throw err;
            }
          });
        }
      }();

      return Promise.resolve(_temp7 && _temp7.then ? _temp7.then(_temp6) : _temp6(_temp7));
    } catch (e) {
      return Promise.reject(e);
    }
  });

  var fileSave$3 = {
    __proto__: null,
    'default': fileSave$2
  };

  /**
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  // @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.

  /**
   * Opens a file from disk using the legacy `<input type="file">` method.
   * @type { typeof import("../index").fileOpen }
   */
  var fileOpen = (function (options) {
    if (options === void 0) {
      options = [{}];
    }

    try {
      if (!Array.isArray(options)) {
        options = [options];
      }

      return Promise.resolve(new Promise(function (resolve, reject) {
        var input = document.createElement('input');
        input.type = 'file';
        var accept = [].concat(options.map(function (option) {
          return option.mimeTypes || [];
        }), options.map(function (option) {
          return option.extensions || [];
        })).join();
        input.multiple = options[0].multiple || false; // Empty string allows everything.

        input.accept = accept || ''; // Append to the DOM, else Safari on iOS won't fire the `change` event
        // reliably.

        input.style.display = 'none';
        document.body.append(input);

        var _reject = function _reject() {
          return cleanupListenersAndMaybeReject(reject);
        };

        var _resolve = function _resolve(value) {
          if (typeof cleanupListenersAndMaybeReject === 'function') {
            cleanupListenersAndMaybeReject();
          }

          resolve(value);
        }; // ToDo: Remove this workaround once
        // https://github.com/whatwg/html/issues/6376 is specified and supported.


        var cleanupListenersAndMaybeReject = options[0].legacySetup && options[0].legacySetup(_resolve, _reject, input);

        var cancelDetector = function cancelDetector() {
          window.removeEventListener('focus', cancelDetector);
          input.remove();
        };

        input.addEventListener('click', function () {
          window.addEventListener('focus', cancelDetector);
        });
        input.addEventListener('change', function () {
          window.removeEventListener('focus', cancelDetector);
          input.remove();

          _resolve(input.multiple ? Array.from(input.files) : input.files[0]);
        });

        if ('showPicker' in HTMLInputElement.prototype) {
          input.showPicker();
        } else {
          input.click();
        }
      }));
    } catch (e) {
      return Promise.reject(e);
    }
  });

  var fileOpen$1 = {
    __proto__: null,
    'default': fileOpen
  };

  /**
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  // @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.

  /**
   * Opens a directory from disk using the legacy
   * `<input type="file" webkitdirectory>` method.
   * @type { typeof import("../index").directoryOpen }
   */
  var directoryOpen = (function (options) {
    if (options === void 0) {
      options = [{}];
    }

    try {
      if (!Array.isArray(options)) {
        options = [options];
      }

      options[0].recursive = options[0].recursive || false;
      return Promise.resolve(new Promise(function (resolve, reject) {
        var input = document.createElement('input');
        input.type = 'file';
        input.webkitdirectory = true;

        var _reject = function _reject() {
          return cleanupListenersAndMaybeReject(reject);
        };

        var _resolve = function _resolve(value) {
          if (typeof cleanupListenersAndMaybeReject === 'function') {
            cleanupListenersAndMaybeReject();
          }

          resolve(value);
        }; // ToDo: Remove this workaround once
        // https://github.com/whatwg/html/issues/6376 is specified and supported.


        var cleanupListenersAndMaybeReject = options[0].legacySetup && options[0].legacySetup(_resolve, _reject, input);
        input.addEventListener('change', function () {
          var files = Array.from(input.files);

          if (!options[0].recursive) {
            files = files.filter(function (file) {
              return file.webkitRelativePath.split('/').length === 2;
            });
          } else if (options[0].recursive && options[0].skipDirectory) {
            files = files.filter(function (file) {
              var directoriesName = file.webkitRelativePath.split('/');
              return directoriesName.every(function (directoryName) {
                return !options[0].skipDirectory({
                  name: directoryName,
                  kind: 'directory'
                });
              });
            });
          }

          _resolve(files);
        });

        if ('showPicker' in HTMLInputElement.prototype) {
          input.showPicker();
        } else {
          input.click();
        }
      }));
    } catch (e) {
      return Promise.reject(e);
    }
  });

  var directoryOpen$1 = {
    __proto__: null,
    'default': directoryOpen
  };

  /**
   * Converts a passed `ReadableStream` to a `Blob`.
   * @param {ReadableStream} stream
   * @param {string} type
   * @returns {Promise<Blob>}
   */
  var streamToBlob = function streamToBlob(stream, type) {
    try {
      var reader = stream.getReader();
      var pumpedStream = new ReadableStream({
        start: function start(controller) {
          /**
           * Recursively pumps data chunks out of the `ReadableStream`.
           * @type { () => Promise<void> }
           */
          var pump = function pump() {
            try {
              return Promise.resolve(reader.read().then(function (_ref) {
                var done = _ref.done,
                    value = _ref.value;

                if (done) {
                  controller.close();
                  return;
                }

                controller.enqueue(value);
                return pump();
              }));
            } catch (e) {
              return Promise.reject(e);
            }
          };

          return pump();
        }
      });
      var res = new Response(pumpedStream);
      return Promise.resolve(res.blob()).then(function (blob) {
        reader.releaseLock();
        return new Blob([blob], {
          type: type
        });
      });
    } catch (e) {
      return Promise.reject(e);
    }
  };

  /**
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */
  // @license © 2020 Google LLC. Licensed under the Apache License, Version 2.0.

  /**
   * Saves a file to disk using the legacy `<a download>` method.
   * @type { typeof import("../../index").fileSave }
   */
  var fileSave = (function (blobOrPromiseBlobOrResponse, options) {
    if (options === void 0) {
      options = {};
    }

    try {
      var _temp3 = function _temp3() {
        a.download = options.fileName || 'Untitled';
        return Promise.resolve(data).then(function (_data) {
          a.href = URL.createObjectURL(_data);

          var _reject = function _reject() {
            return cleanupListenersAndMaybeReject();
          };

          var _resolve = function _resolve() {
            if (typeof cleanupListenersAndMaybeReject === 'function') {
              cleanupListenersAndMaybeReject();
            }
          }; // ToDo: Remove this workaround once
          // https://github.com/whatwg/html/issues/6376 is specified and supported.


          var cleanupListenersAndMaybeReject = options.legacySetup && options.legacySetup(_resolve, _reject, a);
          a.addEventListener('click', function () {
            // `setTimeout()` due to
            // https://github.com/LLK/scratch-gui/issues/1783#issuecomment-426286393
            setTimeout(function () {
              return URL.revokeObjectURL(a.href);
            }, 30 * 1000);

            _resolve(null);
          });
          a.click();
          return null;
        });
      };

      if (Array.isArray(options)) {
        options = options[0];
      }

      var a = document.createElement('a');
      var data = blobOrPromiseBlobOrResponse; // Handle the case where input is a `ReadableStream`.

      var _temp4 = function () {
        if ('body' in blobOrPromiseBlobOrResponse) {
          return Promise.resolve(streamToBlob(blobOrPromiseBlobOrResponse.body, blobOrPromiseBlobOrResponse.headers.get('content-type'))).then(function (_streamToBlob) {
            data = _streamToBlob;
          });
        }
      }();

      return Promise.resolve(_temp4 && _temp4.then ? _temp4.then(_temp3) : _temp3(_temp4));
    } catch (e) {
      return Promise.reject(e);
    }
  });

  var fileSave$1 = {
    __proto__: null,
    'default': fileSave
  };

  /**
   * Copyright 2020 Google LLC
   *
   * Licensed under the Apache License, Version 2.0 (the "License");
   * you may not use this file except in compliance with the License.
   * You may obtain a copy of the License at
   *
   *     http://www.apache.org/licenses/LICENSE-2.0
   *
   * Unless required by applicable law or agreed to in writing, software
   * distributed under the License is distributed on an "AS IS" BASIS,
   * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   * See the License for the specific language governing permissions and
   * limitations under the License.
   */

  var index = {
    __proto__: null,
    fileOpen: fileOpen$4,
    directoryOpen: directoryOpen$4,
    fileSave: fileSave$4,
    fileOpenModern: fileOpen$2,
    directoryOpenModern: directoryOpen$2,
    fileSaveModern: fileSave$2,
    fileOpenLegacy: fileOpen,
    directoryOpenLegacy: directoryOpen,
    fileSaveLegacy: fileSave,
    supported: supported
  };

  exports.FS = index;

}));
