import { IpcMessageEvent, OpenDialogOptions } from 'electron'
import { Dispatch } from 'redux'
import { IPCKey } from '../../common/Constants'
import { ActionType } from '../Types'

const ipcRenderer = window.require('electron').ipcRenderer

export const requestShowOpenDialog = () => ({
  type: ActionType.RequestShowOpenDialog as ActionType.RequestShowOpenDialog
})

export const finishShowOpenDialog = (paths: string[]) => ({
  type: ActionType.FinishShowOpenDialog as ActionType.FinishShowOpenDialog,
  payload: {
    paths
  }
})

export const showOpenDialog = () => (dispatch: Dispatch) => {
  dispatch(requestShowOpenDialog())
  ipcRenderer.on(
    IPCKey.FinishShowOpenDialog,
    (ev: IpcMessageEvent, paths: string[]) => {
      dispatch(finishShowOpenDialog(paths))
    }
  )

  const options: OpenDialogOptions = {
    title: 'Open',
    message: 'Open the file or folder',
    properties: ['openDirectory', 'multiSelections']
  }

  ipcRenderer.send(IPCKey.RequestShowOpenDialog, options)
}
