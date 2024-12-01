import {MyNetConfig} from "./assets/config/MyNetConfig";
import {
    onBoolValue,
    onIntValue, onListBool, onListInt, onListLong, onListString, onListValue,
    onLongValue,
    onStringValue,
    onTestError,
    onTriggerBroadcast,
    onValueObject
} from "./assets";

(function () {
    MyNetConfig.startNet();
})();

// addEventListener
(function () {
    document.getElementById("onTriggerBroadcast")?.addEventListener("click", onTriggerBroadcast);
    document.getElementById("onTestError")?.addEventListener("click", onTestError);

    document.getElementById("onIntValue")?.addEventListener("click", onIntValue);
    document.getElementById("onLongValue")?.addEventListener("click", onLongValue);
    document.getElementById("onBoolValue")?.addEventListener("click", onBoolValue);
    document.getElementById("onStringValue")?.addEventListener("click", onStringValue);
    document.getElementById("onValueObject")?.addEventListener("click", onValueObject);

    document.getElementById("onListInt")?.addEventListener("click", onListInt);
    document.getElementById("onListLong")?.addEventListener("click", onListLong);
    document.getElementById("onListBool")?.addEventListener("click", onListBool);
    document.getElementById("onListString")?.addEventListener("click", onListString);
    document.getElementById("onListValue")?.addEventListener("click", onListValue);
})();