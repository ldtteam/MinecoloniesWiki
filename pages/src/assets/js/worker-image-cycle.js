let currentStyle = "default";

const customRun = function (Glide, Components, Events) {
    const Run = {
        mount: function () {
            this._o = false;
        },
        make: function (move) {
            const _this = this;

            if (!Glide.disabled) {
                !Glide.settings.waitForTransition || Glide.disable();
                this.move = move;
                Events.emit("run.before", this.move);
                this.calculate();
                Events.emit("run", this.move);
                Components.Transition.after(function () {
                    if (_this.isStart()) {
                        Events.emit("run.start", _this.move);
                    }

                    if (_this.isEnd()) {
                        Events.emit("run.end", _this.move);
                    }

                    if (_this.isOffset()) {
                        _this._o = false;
                        Events.emit("run.offset", _this.move);
                    }

                    Events.emit("run.after", _this.move);
                    Glide.enable();
                });
            }
        },
        calculate: function calculate() {
            const move = this.move,
                length = this.length;
            const steps = move.steps,
                direction = move.direction;

            let viewSize = 1;

            if (direction === "=") {
                if (Glide.settings.bound && parseInt(steps) > length) {
                    setGlideIndex(length);
                    return;
                }

                setGlideIndex(steps);
                return;
            }

            if (direction === ">" && steps === ">") {
                setGlideIndex(length);
                return;
            }

            if (direction === "<" && steps === "<") {
                setGlideIndex(0);
                return;
            }

            if (direction === "|") {
                viewSize = Glide.settings.perView || 1;
            }

            if (direction === ">" || (direction === "|" && steps === ">")) {
                const index = calculateForwardIndex(viewSize);

                if (index > length) {
                    this._o = true;
                }

                setGlideIndex(normalizeForwardIndex(index, viewSize));
                return;
            }

            if (direction === "<" || (direction === "|" && steps === "<")) {
                const _index = calculateBackwardIndex(viewSize);

                if (_index < 0) {
                    this._o = true;
                }

                setGlideIndex(normalizeBackwardIndex(_index, viewSize));
                return;
            }

            console.warn("Invalid direction pattern [".concat(direction).concat(steps, "] has been used"));
        },
        isStart: function () {
            return this.currentIndex <= 0;
        },
        isEnd: function () {
            return this.currentIndex >= this.length;
        },
        isOffset: function () {
            const direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;

            if (!direction) {
                return this._o;
            }

            if (!this._o) {
                return false;
            }

            if (direction === "|>") {
                return this.move.direction === "|" && this.move.steps === ">";
            }

            if (direction === "|<") {
                return this.move.direction === "|" && this.move.steps === "<";
            }

            return this.move.direction === direction;
        },
        isBound: function () {
            return false;
        }
    };

    function getSlides() {
        return Components
            .Html
            .slides
            .map((slide, index) => {
                const image = slide.querySelector(".worker-image");
                return {
                    index,
                    style: image.getAttribute("data-style")
                };
            })
            .filter((f) => f.style === currentStyle);
    }

    function getFirstIndex() {
        return Math.min(...getSlides().map((m) => m.index));
    }

    function getCurrentIndex() {
        return Glide.index - getFirstIndex();
    }

    function setGlideIndex(index) {
        const firstIndex = getFirstIndex();
        Glide.index = firstIndex + parseInt(index);
    }

    function calculateForwardIndex(viewSize) {
        const index = getCurrentIndex();

        if (Glide.isType("carousel")) {
            return index + viewSize;
        }

        return index + (viewSize - (index % viewSize));
    }

    function normalizeForwardIndex(index, viewSize) {
        const length = Run.length;

        if (index <= length) {
            return index;
        }

        if (Glide.isType("carousel")) {
            return index - (length + 1);
        }

        if (Glide.settings.rewind) {
            if (Run.isBound() && !Run.isEnd()) {
                return length;
            }

            return 0;
        }

        if (Run.isBound()) {
            return length;
        }

        return Math.floor(length / viewSize) * viewSize;
    }

    function calculateBackwardIndex(viewSize) {
        const index = getCurrentIndex();

        if (Glide.isType("carousel")) {
            return index - viewSize;
        }

        const view = Math.ceil(index / viewSize);
        return (view - 1) * viewSize;
    }

    function normalizeBackwardIndex(index, viewSize) {
        const length = Run.length;

        if (index >= 0) {
            return index;
        }

        if (Glide.isType("carousel")) {
            return index + (length + 1);
        }

        if (Glide.settings.rewind) {
            if (Run.isBound() && Run.isStart()) {
                return length;
            }

            return Math.floor(length / viewSize) * viewSize;
        }

        return 0;
    }

    Object.defineProperty(Run, "currentIndex", {
        get: function () {
            return getCurrentIndex();
        }
    });
    Object.defineProperty(Run, "move", {
        get: function () {
            return this._m;
        },
        set: function set(value) {
            const step = value.substr(1);
            this._m = {
                direction: value.substr(0, 1),
                steps: step ? (parseInt(step) ? parseInt(step) : step) : 0
            };
        }
    });
    Object.defineProperty(Run, "length", {
        get: function () {
            return getSlides().length - 1;
        }
    });
    Object.defineProperty(Run, "offset", {
        get: function () {
            return this._o;
        }
    });
    return Run;
};

const glide = new Glide(`.glide-worker`, {
    type: "slider",
    rewind: true,
    startAt: 0,
    autoplay: 3000,
    keyboard: false,
    swipeThreshold: false,
    dragThreshold: false
});
glide.mount({
    Run: customRun
});

document.getElementById(`glide-dropdown-worker`).onchange = function (event) {
    currentStyle = event.target.value;
    glide.go("=0");
};