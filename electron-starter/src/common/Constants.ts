/**
 * The key name that is the channel of the IPC message..
 */
export enum IPCKey {
  RequestShowOpenDialog = 'RequestShowOpenDialog',
  FinishShowOpenDialog = 'FinishShowOpenDialog',

  RequestShowSaveDialog = 'RequestShowSaveDialog',
  FinishShowSaveDialog = 'FinishShowSaveDialog',

  RequestShowMessageBox = 'RequestShowMessageBox',
  FinishShowMessageBox = 'FinishShowMessageBox',

  RequestShowURL = 'RequestShowURL',
  FinishShowURL = 'FinishShowURL'
}
