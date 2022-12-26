import { useDispatch, useSelector } from "react-redux"
import { onCloseDateModal, onOpenDateModal } from "../store/modal"




export const useModal = () => {
    const { isDateModalOpen } = useSelector( state => state.modal)

    const dispatch = useDispatch()

    const openDateModal = () =>{
        dispatch(onOpenDateModal())
    }

    const closeDateModal = () =>{
        dispatch(onCloseDateModal())
    }

  return {
    isDateModalOpen,

    openDateModal,
    closeDateModal,

  }
}
