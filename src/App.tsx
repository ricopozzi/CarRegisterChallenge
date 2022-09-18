import { CarsList } from './components/CarsList'
import { EditDialog } from './components/EditDialog'
import { Header } from './components/Header'
import { editModalStateAtom } from "./utils/editModalStateAtom"
import { useAtom } from "jotai"
import { EnsureDelete } from './components/EnsureDelete'
import { ensureDeleteStateAtom } from './utils/EnsureDeleteStateAtom'
import { CreateCarRecordModal } from './components/CreateCarRecord'
import { createRecordStateAtom } from './utils/createRecordStateAtom'
import { CreateCarButton } from './components/CreateCarButton'


function App() {
  const [isOpen, setIsOpen] = useAtom(editModalStateAtom)
  const [isDeleteOpen, setIsDelteOpen] = useAtom(ensureDeleteStateAtom)
  const [isCreateOpen, setIsCreateOpen] = useAtom(createRecordStateAtom)

  return (
    <>
      <Header />
      <div className='mx-auto flex justify-center mt-14' >
        <CreateCarButton handleOpen={() => setIsCreateOpen(!isCreateOpen)} />
      </div>
      <CarsList />
      <EditDialog isOpen={isOpen} handleOpen={() => setIsOpen(!isOpen)} />
      <EnsureDelete isOpen={isDeleteOpen} handleOpen={() => setIsDelteOpen(!isDeleteOpen)} />
      <CreateCarRecordModal isOpen={isCreateOpen} handleOpen={() => setIsCreateOpen(!isCreateOpen)} />
    </>
  )
}

export default App
