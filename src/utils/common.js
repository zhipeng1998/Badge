export const getCursorPosition = (ctrl) => {
  let CaretPos = {
    start: ctrl?.input.value.length,
    end: ctrl?.input.value.length,
  };
  if (ctrl?.input.selectionStart) {
    CaretPos.start = ctrl?.input.selectionStart;
  }
  if (ctrl?.input.selectionEnd) {
    CaretPos.end = ctrl?.input.selectionEnd;
  }
  return CaretPos;
};
