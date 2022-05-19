import { DraggableContainer, DraggableIcon, DraggableText } from './interfaces'
import { AppThunk } from '..'
import {
  addDraggableContainer,
  addDraggableIcon,
  addDraggableText,
  setSelectedText,
  toggleCurrentMenu,
  updateDraggableContainer,
  updateDraggableIcon,
  updateDraggableText,
  updateNewDraggableContainer,
} from './editor.reducer'
import { MenuType } from '../../utils/enums'

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

export const setSelectedTextThunkAction =
  (text: string): AppThunk =>
  async (dispatch) => {
    dispatch(setSelectedText(text))
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
  (type: MenuType): AppThunk =>
  async (dispatch) => {
    dispatch(toggleCurrentMenu(type))
  }
