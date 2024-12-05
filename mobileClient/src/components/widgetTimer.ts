const InitWidgetTimer = (time_ms: number, handler: () => void) => {
    return setTimeout(handler, time_ms);
}

export default InitWidgetTimer