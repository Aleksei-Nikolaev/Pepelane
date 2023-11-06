export enum WheelDirection {
  UP = 'up',
  DOWN = 'down',
}

export const useHandleWheel = () => {
  const handleWheel = (event: WheelEvent) => {
    if (event.deltaY === 0) { return }
    return event.deltaY > 0 ? WheelDirection.DOWN : WheelDirection.UP
  }

  return {
    handleWheel
  }
}
