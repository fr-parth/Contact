export interface ContactData {
  id: number,
  email: string,
  first_name: string,
  last_name: string,
  avatar: string
}

export interface ModalProps { showModal: boolean,contactData: ContactData, handleClose: (value: boolean | ((prevVar: boolean) => boolean)) => void; }