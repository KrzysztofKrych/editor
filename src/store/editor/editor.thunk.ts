import { CurrentMenu, DraggableContainer, DraggableIcon, DraggableText } from './interfaces'
import { AppThunk } from '..'
import {
  addDraggableContainer,
  addDraggableIcon,
  addDraggableText,
  deleteDraggableContainer,
  deleteDraggableIcon,
  deleteDraggableText,
  toggleCurrentMenu,
  updateDraggableContainer,
  updateDraggableIcon,
  updateDraggableText,
} from './editor.reducer'

export const addDraggableTextThunkAction =
  (text: DraggableText): AppThunk =>
  async (dispatch) => {
    dispatch(addDraggableText(text))
  }

export const updateDraggableTextThunkAction =
  (text: DraggableText): AppThunk =>
  async (dispatch) => {
    dispatch(updateDraggableText(text))
  }
export const deleteDraggableTextThunkAction =
  (id: string): AppThunk =>
  async (dispatch) => {
    dispatch(deleteDraggableText(id))
  }

export const addDraggableIconThunkAction =
  (icon: DraggableIcon): AppThunk =>
  async (dispatch) => {
    dispatch(addDraggableIcon(icon))
  }

export const updateDraggableIconThunkAction =
  (icon: DraggableIcon): AppThunk =>
  async (dispatch) => {
    dispatch(updateDraggableIcon(icon))
  }

export const deleteDraggableIconThunkAction =
  (id: string): AppThunk =>
  async (dispatch) => {
    dispatch(deleteDraggableIcon(id))
  }

export const addDraggableContainerThunkAction =
  (container: DraggableContainer): AppThunk =>
  async (dispatch) => {
    dispatch(addDraggableContainer(container))
  }

export const updateDraggableContainerThunkAction =
  (container: DraggableContainer): AppThunk =>
  async (dispatch) => {
    dispatch(updateDraggableContainer(container))
  }
export const deleteDraggableContainerThunkAction =
  (id: string): AppThunk =>
  async (dispatch) => {
    dispatch(deleteDraggableContainer(id))
  }

export const toggleMenuTypeThunkAction =
  (menu: CurrentMenu): AppThunk =>
  async (dispatch) => {
    dispatch(toggleCurrentMenu(menu))
  }
