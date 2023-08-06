function docReady(fn) {
  if (document.readyState === "complete" || document.readyState === "interactive") {
    setTimeout(fn, 1);
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

function updateVersion(version, persist = true, addIfNotExist = false) {
  const currentVersion = document.body.getAttribute("data-version");
  if (currentVersion === version.order) {
    return;
  }

  if (persist) {
    localStorage.setItem("version", version.order);
  }
  document.body.setAttribute("data-version", version.order);
  Array.from(document.getElementsByClassName("version-switch")).forEach((element) => {
    element.value = version.order;

    const notSupportedList = element.querySelector(`.version-not-supported`);
    if (notSupportedList != null) {
      const item = notSupportedList.querySelector(`option[value="${version.order}"]`);
      if (addIfNotExist && item === null) {
        const newOpt = document.createElement("option");
        newOpt.value = version.order;
        newOpt.innerText = version.name;
        notSupportedList.appendChild(newOpt);
        element.value = version.order;
      }
    }
  });
}

function updateVersionEv(event) {
  const version = all_versions.find(f => f.order === parseInt(event.target.value));
  if (version) {
    updateVersion(version);
  }
}

function updateVersionSelectors() {
  Array.from(document.getElementsByClassName("version-switch")).forEach((element) => {
    element.removeEventListener("change", updateVersionEv);
    element.addEventListener("change", updateVersionEv);
  });
}

docReady(function() {
  updateVersionSelectors();
  let fixedVersionFound = undefined;
  let preferredVersionFound = undefined;

  const params = new URLSearchParams(window.location.search);
  if (params.has("version")) {
    fixedVersionFound = all_versions.find(f => f.name === params.get("version"));
  }
  const preferredVersion = parseInt(localStorage.getItem("version"));
  if (preferredVersion) {
    preferredVersionFound = all_versions.find(f => f.order === preferredVersion);
  }

  if (fixedVersionFound) {
    updateVersion(fixedVersionFound, false, true);
  } else if (preferredVersionFound) {
    updateVersion(preferredVersionFound, false, !preferredVersionFound.supported);
  } else {
    updateVersion(latest_version, false, false);
  }
});
