import { CurrentMenu, DraggableContainer, DraggableIcon, DraggableText } from './interfaces'
import { AppThunk } from '..'
import {
  addDraggableContainer,
  addDraggableIcon,
  addDraggableText,
  toggleCurrentMenu,
  updateDraggableContainer,
  updateDraggableIcon,
  updateDraggableText,
  updateNewDraggableContainer,
  updateSelectedText,
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

export const updateSelectedTextThunkAction =
  (text: DraggableText): AppThunk =>
  async (dispatch) => {
    dispatch(updateSelectedText(text))
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

export const updateNewDraggableContainerThunkAction =
  (container: DraggableContainer): AppThunk =>
  async (dispatch) => {
    dispatch(updateNewDraggableContainer(container))
  }

export const toggleMenuTypeThunkAction =
  (menu: CurrentMenu): AppThunk =>
  async (dispatch) => {
    dispatch(toggleCurrentMenu(menu))
  }
